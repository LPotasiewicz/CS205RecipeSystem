from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://devon:1234@test-shard-00-00-i0x5r.mongodb.net:27017,test-shard-00-01-i0x5r.mongodb.net:27017,test-shard-00-02-i0x5r.mongodb.net:27017/test?ssl=true&replicaSet=Test-shard-0&authSource=admin&retryWrites=true"
#app.config["MONGO_URI"] = "mongodb://localhost:27017/test"
mongo = PyMongo(app)
CORS(app)

@app.route("/")
def index():
    return "Hello World!"

#GET all users
@app.route("/users", methods=["GET"])
def get_users():
    users = mongo.db.users
    output = []
    for user in users.find():
        output.append({"name" : user["name"],
                       "email" : user["email"], "password" : user["password"]})
    return jsonify(output)

#GET one user by their name
@app.route("/users/", methods=["GET"])
def get_user(name):
    users = mongo.db.users
    user = users.find_one({"name" : name})
    if user:
        output = {"name" : user["name"], "email" : user["email"],
                  "password" : user["password"]}
    else:
        output = "User not found"
    return jsonify(output)

#GET all recipes
@app.route("/recipes", methods=["GET"])
def get_recipes():
    recipes = mongo.db.recipes
    output = []
    for recipe in recipes.find():
        output.append({"title" : recipe["title"],
                       "author" : recipe["author"],
                       "cook_time" : recipe["cook_time"],
                       "img_url" : recipe["img_url"],
                       "ingredients" : recipe["ingredients"],
                       "steps" : recipe["steps"]})
    return jsonify(output)

#GET one recipe by its title
@app.route("/recipes/", methods=["GET"])
def get_recipe(title):
    recipes = mongo.db.recipes
    recipe = recipes.find_one({"title" : title})
    if recipe:
        output = {"title" : recipe["title"],
                  "author" : recipe["author"],
                  "cook_time" : recipe["cook_time"],
                  "img_url" : recipe["img_url"],
                  "ingredients" : recipe["ingredients"],
                  "steps" : recipe["steps"]}
    else:
        output = "Recipe not found"
    return jsonify(output)

#POST user
@app.route("/users", methods=["POST"])
def create_user():
    user = mongo.db.users
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    new_user = user.insert({"name" : name, "email" : email,
                            "password" : password})
    return "Success"

#POST recipe
@app.route("/recipes", methods=["POST"])
def create_recipe():
    recipe = mongo.db.recipes
    title = request.json["title"]
    author = request.json["author"]
    cook_time = request.json["cook_time"]
    img_url = request.json["img_url"]
    ingredients = request.json["ingredients"]
    steps = request.json["steps"]
    new_user = recipe.insert({"title" : title, "author" : author, "cook_time" : cook_time,
                            "img_url": img_url, "ingredients" : ingredients,
                            "steps": steps})
    return "Success"

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80)
