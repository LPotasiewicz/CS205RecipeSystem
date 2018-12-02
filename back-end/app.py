from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://devon:1234@test-shard-00-00-i0x5r.mongodb.net:27017,test-shard-00-01-i0x5r.mongodb.net:27017,test-shard-00-02-i0x5r.mongodb.net:27017/test?ssl=true&replicaSet=Test-shard-0&authSource=admin&retryWrites=true"
#app.config["MONGO_URI"] = "mongodb://localhost:27017/test2"
mongo = PyMongo(app)
CORS(app)

userId = 0
recipeId = 0

@app.route("/")
def index():
    return "Hello World!"

#GET all users
@app.route("/users", methods=["GET"])
def get_users():
    users = mongo.db.users
    output = []
    for user in users.find():
        output.append({"id" : user["id"], "name" : user["name"],
                       "email" : user["email"], "password" : user["password"]})
    return jsonify(output)

#GET one user by their email
@app.route("/users/<email>", methods=["GET"])
def get_user(email):
    users = mongo.db.users
    user = users.find_one({"email" : email})
    if user:
        output = {"id" : user["id"], "name" : user["name"], "email" : user["email"],
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
        output.append({"id" : recipe["id"], "title" : recipe["title"],
                       "userId" : recipe["userId"], "author" : recipe["author"],
                       "cook_time" : recipe["cook_time"],
                       "img_url" : recipe["img_url"],
                       "ingredients" : recipe["ingredients"],
                       "steps" : recipe["steps"]})
    return jsonify(output)

#GET one recipe by its id
@app.route("/recipes/<recipe_id>", methods=["GET"])
def get_recipe(recipe_id):
    recipes = mongo.db.recipes
    recipe = recipes.find_one({"id" : recipe_id})
    if recipe:
        output = {"id" : recipe["id"], "title" : recipe["title"],
                  "userId" : recipe["userId"], "author" : recipe["author"],
                  "cook_time" : recipe["cook_time"],
                  "img_url" : recipe["img_url"],
                  "ingredients" : recipe["ingredients"],
                  "steps" : recipe["steps"]}
    else:
        output = "Recipe not found"
    return jsonify(output)

#GET all recipes by a certain user
@app.route("/recipes/users/<user_id>", methods=["GET"])
def get_userrecipes(user_id):
    output = []
    recipes = mongo.db.recipes
    for recipe in recipes.find({"userId" : user_id}):
        output.append({"id" : recipe["id"], "title" : recipe["title"],
                  "userId" : recipe["userId"], "author" : recipe["author"],
                  "cook_time" : recipe["cook_time"],
                  "img_url" : recipe["img_url"],
                  "ingredients" : recipe["ingredients"],
                  "steps" : recipe["steps"]})
    return jsonify(output)
        

#POST user
@app.route("/users", methods=["POST"])
def create_user():
    global userId
    user = mongo.db.users
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    new_user = user.insert({"id" : str(userId), "name" : name, "email" : email,
                            "password" : password})
    userId += 1
    return "Success"

#POST recipe
@app.route("/recipes", methods=["POST"])
def create_recipe():
    global recipeId
    recipe = mongo.db.recipes
    user = mongo.db.users
    title = request.json["title"]
    userId = request.json["userId"]
    cook_time = request.json["cook_time"]
    img_url = request.json["img_url"]
    ingredients = request.json["ingredients"]
    steps = request.json["steps"]
    query = user.find({"id" : userId})
    for a in query:
        author = a["name"]
    new_recipe = recipe.insert({"id" : str(recipeId), "title" : title,
                            "userId" : userId, "author" : author,
                            "cook_time" : cook_time,
                            "img_url": img_url, "ingredients" : ingredients,
                            "steps": steps})
    recipeId += 1
    return "Success"

#Delete user by id
@app.route("/users/delete/<user_id>", methods=["DELETE"])
def delete_user(user_id):
    users = mongo.db.users
    user = users.find_one({"id" : user_id})
    if user:
        users.delete_one({"id" : user_id})
        return "User (ID: " + user_id + ") deleted"
    else:
        return "User not found"

#Delete recipe by id
@app.route("/recipes/delete/<recipe_id>", methods=["DELETE"])
def delete_recipe(recipe_id):
    recipes = mongo.db.recipes
    recipe = recipes.find_one({"id" : recipe_id})
    if recipe:
        recipes.delete_one({"id" : recipe_id})
        return "Recipe (ID: " + recipe_id + ") deleted"
    else:
        return "Recipe not found"
    
if __name__ == '__main__':
    app.run()
    #app.run(host="0.0.0.0", port=80)
