import os
from flask import Flask
from api.routes import api


def create_app():
    app = Flask(__name__)
    app.register_blueprint(api, url_prefix="/api")
    return app


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app = create_app()
    app.run(host="0.0.0.0", port=port)
