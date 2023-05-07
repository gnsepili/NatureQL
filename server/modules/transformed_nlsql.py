import json
import torch
import pickle
from transformers import BertTokenizer, BartForConditionalGeneration

# Load the WikiSQL dataset
with open('../text2sql-interaction-states-reproducibility-challange/WikiSQL/data/test.jsonl', 'r') as f:
    train_data = json.load(f)

# Initialize the tokenizer and model
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BartForConditionalGeneration.from_pretrained('bert-base-uncased')

# Preprocess the data
inputs = []
outputs = []

for example in train_data:
    # Tokenize the input sequence
    input_tokens = tokenizer.encode(example['question'], example['table'])
    
    # Tokenize the output sequence
    output_tokens = tokenizer.encode(example['sql'])
    
    inputs.append(input_tokens)
    outputs.append(output_tokens)

# Convert inputs and outputs to PyTorch tensors
inputs = torch.tensor(inputs)
outputs = torch.tensor(outputs)

# Train the model
model.train()

optimizer = torch.optim.Adam(model.parameters(), lr=1e-5)

for i in range(100):
    loss = model(inputs, decoder_input_ids=outputs, labels=outputs)[0]
    
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    
    print('Epoch', i, 'Loss', loss.item())

# Save the trained model as a pickle file
with open('wikisql_model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Load the trained model from the pickle file
with open('wikisql_model.pkl', 'rb') as f:
    model = pickle.load(f)


def nlsql_transform(schema, prompt):
    # Load the trained model from the pickle file
    with open('wikisql_model.pkl', 'rb') as f:
        model = pickle.load(f)

    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

    # input prompt and schema
    input_prompt = prompt
    input_schema = [['column_name', 'data_type'], *schema]
    input_tokens = tokenizer.encode(input_prompt, input_schema)

    # Generate the SQL query
    model.eval()
    with torch.no_grad():
        generated_tokens = model.generate(input_tokens)

    generated_query = tokenizer.decode(generated_tokens[0], skip_special_tokens=True)
    
    return generated_query