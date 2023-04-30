from fastapi import APIRouter, Query
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import pymysql
from pymysql.cursors import DictCursor
from modules.nlsql import nlsql_function

router = APIRouter()

class ConnectionParams(BaseModel):
    host: str
    port: int
    user: str
    password: str
    database: str

@router.post("/dbConnection")
async def get_columns(params: ConnectionParams):
    connection = pymysql.connect(
        host=params.host,
        port=params.port,
        user=params.user,
        password=params.password,
        db=params.database,
        cursorclass=DictCursor
    )
    with connection.cursor() as cursor:
        query = f"SELECT TABLE_NAME, GROUP_CONCAT(COLUMN_NAME SEPARATOR ', ') as columns FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = '{params.database}' GROUP BY TABLE_NAME"
        cursor.execute(query)
        result = cursor.fetchall()
        tables = [f"{row['TABLE_NAME']}({row['columns']})" for row in result]
    connection.close()
    return JSONResponse(content={"tables": tables})

class NLSQLParams(BaseModel):
    prompt: str
    dbSchema: str

@router.post("/nlsql")
async def nlsql(params: NLSQLParams):
    result = nlsql_function(params.dbSchema, params.prompt)
    return JSONResponse(content={"result": result})

