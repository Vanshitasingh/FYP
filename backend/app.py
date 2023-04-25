from flask import Flask, redirect, url_for, request,render_template
from flask import jsonify 
from flask_cors import CORS
import os
import subprocess
app = Flask(__name__)
CORS(app)

@app.route('/data', methods=['GET','POST'])
def home():
    try:
        data=None
        data = subprocess.check_output(
            "sudo chkrootkit -q",
        stderr=subprocess.STDOUT,
        shell=True,
        text=True)
        # subprocess.check_output("dir /f",shell=True,stderr=subprocess.STDOUT)
        return {
            'resultStatus': 'SUCCESS',
            'message': data
            }
    except subprocess.CalledProcessError as e:
        raise RuntimeError("command '{}' return with error (code {}): {}".format(e.cmd, e.returncode, e.output))   

if(__name__=='__main__'):  #This is so that we can run it directly in debug mode
	app.run(debug=True)