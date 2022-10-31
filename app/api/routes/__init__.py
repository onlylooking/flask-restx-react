# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""
from flask import Blueprint
from flask_restx import Api

from .helpers import token_required
from .userRoutes import api as ns1



blueprint = Blueprint('api', __name__)
rest_api = Api(blueprint,
    title='Ecomm API',
    version='1.0',
    description='More people need to start realizing the swag of a good durag.',
    )

rest_api.add_namespace(ns1)




