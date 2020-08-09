import os
DB_NAME = 'AuthServer'
MSSQL_LOCAL = 'CHTSW10006'
DB_TABLE_LOG = 'Logs'


class Helper:
    DB_NAME = DB_NAME
    MSSQL_LOCAL = MSSQL_LOCAL
    DB_TABLE_LOG = DB_TABLE_LOG


class BaseConfig:
    """Base configuration."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'kongadmin')
    DEBUG = False
    SQL_SERVER = MSSQL_LOCAL
    DB_NAME = DB_NAME
    DB_TABLE = DB_TABLE_LOG
    SQL_USER = 'sa'
    SQL_PWD = 'sa@123'
    SQL_DRIVER = '{SQL Server}'


class DevelopmentConfig(BaseConfig):
    """Development configuration."""
    DEBUG = True


class TestingConfig(BaseConfig):
    """Testing configuration."""
    DEBUG = True
    TESTING = True
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    SQL_SERVER = '13.229.142.70,30283'
    SQL_PWD = 'Kube@123'
    SQL_DRIVER = '{ODBC Driver 17 for SQL Server}'


class ProductionConfig(BaseConfig):
    """Production configuration."""
    SECRET_KEY = 'kongadmin'
    DEBUG = False
    SQL_SERVER = '13.229.142.70,30283'
    SQL_PWD = 'Kube@123'
    SQL_DRIVER = '{ODBC Driver 17 for SQL Server}'
