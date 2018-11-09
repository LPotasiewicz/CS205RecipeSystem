from flask import Flask, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "ENTER URI INFO HERE"
mongo = PyMongo(app)

@app.route("/")
def home():
    return render_template("../front-end/public/index.html")

if __name__ == "__main__":
    app.run(debug=True)
