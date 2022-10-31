# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

import os
from datetime import timedelta

mysql = {'host': 'localhost',
         'user': 'root',
         'passwd': 'root',
         'db': 'flask_ecomm'}

mysqlConfig = "mysql+pymysql://{}:{}@{}/{}".format(mysql['user'], mysql['passwd'], mysql['host'], mysql['db'])


class BaseConfig():

    SQLALCHEMY_DATABASE_URI = mysqlConfig
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = "flask-app-secret-key-change-it"
    JWT_SECRET_KEY = "jwt-app-secret-key-change-it"
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
