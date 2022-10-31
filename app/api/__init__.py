# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

import json
import os
from flask import Flask, make_response, send_from_directory
from flask_cors import CORS
from .models import db
from .routes import blueprint as api

app = Flask(__name__, static_url_path='/static/build/static', static_folder='../static/build')

app.config.from_object('api.config.BaseConfig')

db.init_app(app)


# rest_api.init_app(app)
app.register_blueprint(api, url_prefix='/api')
CORS(app)

# react
# @app.route('/')
# def Home():
#     return 'REACT BRR'
# @app.route("/", defaults={'path':''})
# def serve(path):
#     return send_from_directory(app.static_folder, 'index.html')
@app.route("/")
def serve():
    """serves React App"""
    return send_from_directory(app.static_folder, "index.html")


@app.route("/<path:path>")
def static_proxy(path):
    """static folder serve"""
    file_name = path.split("/")[-1]
    dir_name = os.path.join(app.static_folder, "/".join(path.split("/")[:-1]))
    return send_from_directory(dir_name, file_name)


@app.errorhandler(404)
def handle_404(e):
    if request.path.startswith("/api/"):
        return jsonify(message="Resource not found"), 404
    return send_from_directory(app.static_folder, "index.html")


# 404
@app.errorhandler(404)
def page_not_found(error):
    return '404'

# Setup database
@app.before_first_request
def initialize_database():
    db.create_all()

"""
   Custom responses
"""

@app.after_request
def after_request(response):
    """
       Sends back a custom error with {"success", "msg"} format
    """

    if int(response.status_code) >= 400:
        print(response.get_data())
        response_data = json.loads(response.get_data())
        if "errors" in response_data:
            response_data = {"success": False,
                             "msg": list(response_data["errors"].items())[0][1]}
            response.set_data(json.dumps(response_data))
        response.headers.add('Content-Type', 'application/json')
    return response