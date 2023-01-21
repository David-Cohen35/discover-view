from flask import Flask, request
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
cors = CORS()
cors.init_app(app, resources={r"*": {"origins": "*"}})

elastic_url = os.getenv("ELASTICSEARCH_HOSTS")

@app.route('/api/proxy', methods=['GET'])
def proxy():
    r = requests.get(f"{elastic_url}/kibana_sample_data_logs/_search")
    return r.json()

if __name__ == '__main__':
    app.run()