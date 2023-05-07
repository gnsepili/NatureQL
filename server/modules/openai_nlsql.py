import openai
from dotenv import load_dotenv
load_dotenv()
import os
import re

def nlsql_function(schema, prompt):
    openai.api_key = os.environ.get("OPENAI_API_KEY")

    # Parse the database schema
    tables = []
    for table in schema:
        match = re.match(r"(\w+)\((.+)\)", table)
        if match:
            table_name = match.group(1)
            columns = match.group(2).split(",")
            tables.append((table_name, [c.strip() for c in columns]))

    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt="write sql query for the prompt "+prompt+"\n the schema for the db is "+ str(schema),
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.7
    )
    
    # sql_query = response.choices[0].text.strip().replace('?', '\n') 
    # sql_query = re.sub(r'\n', ' ', sql_query)
    return response.choices[0].text.strip()