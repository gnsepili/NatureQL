## NatureQL: Convert Natural Language to SQL Query

NatureQL is a project that aims to convert natural language to SQL query. It is a web application with a frontend built using React and a backend built using FastAPI. With NatureQL, you can easily generate SQL queries by simply typing in natural language.

### Getting Started

To get started with NatureQL, you'll need to have the following installed on your computer:

    * Node.js
    * Python 3

Once you have these installed, you can follow these steps:

    1. Clone this repository to your local machine.
    2. Open a terminal and navigate to the project directory.
    3. Setup the backend
        3.1 Create a new virtual enviroment
        3.2 install the required libraries by requirements.txt
        3.3 start the FastAPI backend server  by running uvicorn main:app --reload.
    4. Setup frontend
        4.1 Navigate to Client
        4.2 install frontend dependencies by running npm install.
        4.3 Start the frontend by running npm start

Once both the frontend and backend are running, you can access the application by going to http://localhost:3000 in your web browser.
Usage

Using NatureQL is simple. On the homepage, you'll see a text input where you can type in your natural language query. Once you've typed in your query, press the "Generate SQL" button to generate the SQL query.

The generated SQL query will be displayed on the page, and you can copy it to your clipboard by clicking the "Copy to Clipboard" button.
Contributing

If you'd like to contribute to NatureQL, please fork this repository and submit a pull request. We welcome contributions of all kinds, including bug fixes, new features, and improvements to documentation.
License

NatureQL is licensed under the MIT License. See the LICENSE file for more information.