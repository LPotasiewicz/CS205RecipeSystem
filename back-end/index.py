import flask from Flask, render_template
import mysql.connector

app = Flask(__name__)
database = mysql.connector.connect(
    host="host",
    user="username",
    password="password"
)

@app.route("/")
def index:
    return render_template("../front-end/public/index.html")

if __name__ == "__main__":
    app.run()
