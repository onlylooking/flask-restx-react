import os
import json
from flask import Blueprint, send_from_directory, request

admin = Blueprint('admin', __name__, static_url_path='/private/static/build/static', static_folder='static/build')


# Index
@admin.route("/")
def index():
    """serves React App"""
    return send_from_directory(admin.static_folder, "index.html")

# Static Files
@admin.route("/<path:path>")
def static_proxy(path):
    """static folder serve"""
    file_name = path.split("/")[-1]
    dir_name = os.path.join(admin.static_folder, "/".join(path.split("/")[:-1]))
    return send_from_directory(dir_name, file_name)

# 404
@admin.errorhandler(404)
def handle_404(e):
    if request.path.startswith("/api/"):
        return json.dumps("Endpoint not found"), 404
    return send_from_directory(admin.static_folder, "index.html")