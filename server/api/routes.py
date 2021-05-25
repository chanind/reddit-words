from flask import Blueprint

api = Blueprint('api', __name__)


@api.route('/')
def index():
    return "OK", 200