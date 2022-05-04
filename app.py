from flask import Flask, render_template
import requests
import json

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    req = requests.get('https://lmstest.acue.org/ACUE-microcourselist.json')
    data = json.loads(req.content)
    return render_template('index.html', data=data, title='ACUE Technical Assessment')