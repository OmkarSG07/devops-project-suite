from flask import Flask, request, render_template, redirect, url_for
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Use UPLOAD_FOLDER from .env if available, else default to 'static/uploads'
UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER", "static/uploads")
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        image = request.files.get("image")
        if image:
            path = os.path.join(app.config["UPLOAD_FOLDER"], image.filename)
            image.save(path)
            return redirect(url_for("home"))
    images = os.listdir(app.config["UPLOAD_FOLDER"])
    return render_template("index.html", images=images)

if __name__ == "__main__":
    os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
    app.run(host="0.0.0.0", port=80)
# Ensure the upload folder exists
    if not os.path.exists(app.config["UPLOAD_FOLDER"]):
        os.makedirs(app.config["UPLOAD_FOLDER"])