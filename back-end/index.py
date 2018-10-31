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
    return "This is the index (homepage)!"

if __name__ == "__main__":
    app.run()
