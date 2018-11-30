===========
GET Request
===========
Go to the links below 
and use a GET request to access 
users and recipes collections in JSON format

Users: 
-----
/users (all users)
/users/<email> (user by email)

Recipes: 
/recipes (all recipes)
/recipes/<recipeId> (recipe by id)
/recipes/users/<userId> (recipes by specific userId)

============
POST Request
============
Go to same URLs from above 
and POST JSON objects in these formats:

Users:
-----
{
  "name": "user's name"
  "user_id": "user's id"
  "email": "user's email address"
  "password" : "user's password"
}

Recipes:
--------
{
  "recipe_id": "recipe's id"
  "title": "recipe's title"
  "userId": "author of recipe (userId)"
  "cook_time": "time it takes to cook"
  "img_url": "url path to image of recipe"
  "ingredients": [
                   "enter ingredient 1 here",
		   "enter ingredient 2 here",
		   *enter as many ingredients neccessary
	           *just remember to follow proper name assignment
                 ]
  "steps": [
                   "enter ingredient 1 here",
		   "enter ingredient 2 here",
		   *enter as many steps neccessary
	           *just remember to follow proper name assignment
           ]
}
