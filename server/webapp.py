import argparse
import io
from PIL import Image
import datetime

import torch
import cv2
import numpy as np
import tensorflow as tf
from re import DEBUG, sub
from flask import Flask, render_template, request, redirect, send_file, url_for, Response,jsonify
from werkzeug.utils import secure_filename, send_from_directory
import os
import subprocess
from subprocess import Popen,PIPE
import re
import requests
import shutil
import time
import base64
from flask_cors import CORS

app = Flask(__name__)
cors=CORS(app,origins="*")

@app.route("/", methods=["GET"])
def hello():
    return {"message": "Hello, world!"}
    
@app.route("/predict_img", methods=["POST"])
def predict_img():
    if request.method == "POST":
        print("processing--------")
        if 'file' in request.files:
            print("ppppp-------------")
            f = request.files['file']
            basepath = os.path.dirname(__file__)
            filepath = os.path.join(basepath,'uploads',f.filename)
            print("upload folder is ", filepath)
            f.save(filepath)
            
            predict_img.imgpath = f.filename
            print("printing predict_img :::::: ", predict_img)

            file_extension = f.filename.rsplit('.', 1)[1].lower()    
            if file_extension == 'jpg':
               #process = Popen(["python", "detect_and_count.py", '--source', filepath, "--weights","best.pt","--save-conf"], shell=True)
                process=Popen(["python", "detect.py", '--source', filepath, "--weights", "best.pt", "--save-conf"],shell=True,stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                # print("output------------>",process.stdout.read())
                # process.wait()
                output, _ = process.communicate()
                output_text = output.decode('utf-8')
                print("out_put----Text--->",output_text)
                print("output----->over")
            
            folder_path = 'runs/detect'
            subfolders = [f for f in os.listdir(folder_path) if os.path.isdir(os.path.join(folder_path, f))]    
            latest_subfolder = max(subfolders, key=lambda x: os.path.getctime(os.path.join(folder_path, x)))    
            image_path = folder_path+'/'+latest_subfolder+'/'+f.filename 
            return send_file(image_path, mimetype='image/jpeg')



if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Flask app exposing yolov5 models")
    parser.add_argument("--port", default=5000, type=int, help="port number")
    args = parser.parse_args()
    app.run(port=args.port)  
    # # debug=True causes Restarting with stat
    # app.run(debug=True)
