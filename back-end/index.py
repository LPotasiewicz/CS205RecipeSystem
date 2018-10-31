import flask from Flask
import mysql.connector

app = Flask(__name__)
database = mysql.connector.connect(
    host="host",
    user="username",
    password="password"
)

@app.route("/")
def index:
    return "Hello World!"
