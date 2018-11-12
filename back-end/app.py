from flask import Flask, jsonify, request
from pymongo import PyMongo

app = Flask(__name__)
# MongoDB connection
app.config['MONGO_DBNAME'] = 'Test'
app.config['MONGO_URI'] = ''

@app.route("/")
def index():
    return "Hello World!"

#GET
@app.route("/api/users", methods=["GET"])
def get_users():
    users = mongo.db.users
    output = []
    for user in users.find():
        output.append({"name" : user["name"],
                       "email" : user["email"], "password" : user["password"]})
    return jsonify({output})

@app.route("/api/recipes", methods=["GET"])
def get_recipes():
    recipes = mongo.db.recipes
    output = []
    for recipe in users.find():
        output.append({"title" : recipe["title"],
                       "author" : recipe["author"],
                       "prep_time" : recipe["prep_time"],
                       "cook_time" : recipe["cook_time"],
                       "img_url" : recipe["img_url"],
                       "ingredients" : recipe["ingredients"]})
    return jsonify({output})

#POST
@app.route("/api/users", methods=["POST"])
def create_user():
    user = mongo.db.users
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    new_user = user.insert({"name" : name, "email" : email,
                            "password" : password})
    output = {"name" : new_user["name"], "email" : new_user["email"],
              "password" : new_user["password"]]}
    return jsonify({output})

@app.route("/api/recipes", methods=["POST"])
def create_recipe():
    recipe = mongo.db.users
    title = request.json["title"]
    author = request.json["author"]
    prep_time = request.json["prep_time"]
    cook_time = request.json["cook_time"]
    img_url = request.json["img_url"]
    ingredients = request.json["ingredients"]
    new_user = user.insert({"title" : title, "author" : author,
                            "prep_time" : prep_time, "cook_time" : cook_time,
                            "img_url", img_url, "ingredients" : ingredients})

if __name__ == '__main__':
    app.run(debug=True)
