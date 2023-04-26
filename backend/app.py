from flask import Flask, redirect, url_for, request,render_template,jsonify ,Response
from flask_cors import CORS
import os
import subprocess
from subprocess import Popen, PIPE, STDOUT
app = Flask(__name__)
CORS(app)

@app.route('/data', methods=['GET','POST'])
def home():
    # try:
        data=None
        data = Popen('sudo chkrootkit', 
        bufsize=1,
        stdout = PIPE, 
        stderr = STDOUT, 
        shell = True)
        # data = subprocess.check_output(

        #     "sudo chkrootkit",
        # stderr=subprocess.STDOUT,
        # shell=True,
        # text=True)
        # subprocess.check_output("dir /f",shell=True,stderr=subprocess.STDOUT)
        while True:
            out = data.stdout.readline().decode()
            # line = data.stdout.next().replace('\n', '')
            print(out)
            yield out + '<br/>\n'
            if not out:
                break
        # return data.stdout.readline()
            
        return Response(home(), mimetype='text/html')
        
    # except subprocess.CalledProcessError as e:
    #     raise RuntimeError("command '{}' return with error (code {}): {}".format(e.cmd, e.returncode, e.output))   

# @app.route('/')
# def index():
#     """
#     Render a template at the index. The content will be embedded in this template
#     """
#     return render_template('index.html')

if(__name__=='__main__'):  #This is so that we can run it directly in debug mode
	app.run(debug=True)