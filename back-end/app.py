from flask import Flask, jsonify, request
from flask.ext.pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = ''
app.config['MONGO_URI'] = ''

mongo = PyMongo(app)

@app.route('/users/<user>', methods=['GET'])
def get_user():
    user = mongo.db.user

    query = user.find_one({'name' : name})
    output = {'name' : query['name'],} #add all other user attributes

    return jsonify({output})

@app.route('/users/<user>', methods=['POST'])
def add_user():
    user = mongo.db.user

    name = request.json['name'] #add other user's attributes

    user_id = user.insert({'name' : name})
    new_user = user.find_one({'id' : user_id})

    output = {'name' : new_user['name']} # add user's attributes

    return jsonify({output})

if __name__ == '__main__':
    app.run(debug=True)
