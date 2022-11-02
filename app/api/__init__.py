
from flask import Flask, send_from_directory, request, Blueprint
from flask_cors import CORS

from .models.database import db
from private import admin
from public import core
from .routes import blueprint as api

app = Flask(__name__, static_url_path='/static/build/static', static_folder='../static/build')
app.config.from_object('api.config.BaseConfig')
db.init_app(app)



# Setup database
@app.before_first_request
def initialize_database():
    db.create_all()



app.register_blueprint(core, url_prefix='/')
app.register_blueprint(admin, url_prefix='/admin')
app.register_blueprint(api, url_prefix='/api')
CORS(app)



