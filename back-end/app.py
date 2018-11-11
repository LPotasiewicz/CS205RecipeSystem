from flask import Flask, jsonify
from pymongo import PyMongo

app = Flask(__name__)
client = MongoClient("") #PUT URI HERE

@app.route("/")
def index():
    return "Hello World!"

# GET and POST API
class Response(Resource):
    def get(self, user_id):
        return USERS[user_id]
    def post(self, user):
        args = parser.parse_args()
        USERS[user_id] = {'user_id': args['user_id']}
        return USER[user_id], 201

if __name__ == '__main__':
    app.run(debug=True)
