import os
import json
from flask import Blueprint, send_from_directory, request

core = Blueprint('core', __name__, static_url_path='/public/static/build/static', static_folder='static/build')


# Index
@core.route("/")
def index():
    """serves React App"""
    return send_from_directory(core.static_folder, "index.html")


# Static Files
@core.route("/<path:path>")
def static_proxy(path):
    """static folder serve"""
    file_name = path.split("/")[-1]
    dir_name = os.path.join(core.static_folder, "/".join(path.split("/")[:-1]))
    return send_from_directory(dir_name, file_name)


# 404
@core.errorhandler(404)
def handle_404(e):
    if request.path.startswith("/api/"):
        return json.dumps("Endpoint not found"), 404
    return send_from_directory(core.static_folder, "index.html")


@core.after_request
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
