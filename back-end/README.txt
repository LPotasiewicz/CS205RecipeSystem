===========
GET Request
===========
Go to the links below 
and use a GET request to access 
users and recipes collections in JSON format

Users: /api/users
Recipes: /api/recipes

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
  "author": "recipe's author (full name from user's collection)"
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

Below are all api endpoints required 

/users/<username>
{
  "name": "user's name"
  "user_id": "user's id"
  "email": "user's email address"
  "password" : "user's password"
}

/recipes
[
Recipe…,
Recipe…,
Recipe…,
]

/recipes/<recipe_id>
{
  "recipe_id": "recipe's id"
  "title": "recipe's title"
  "author": "recipe's author (full name from user's collection)"
  "cook_time": "time it takes to cook"
  "img_url": "url path to image of recipe"
  "ingredients": [
    "enter ingredient 1 here",
    "enter ingredient 2 here"
  ]
  "steps": [
    "enter ingredient 1 here",
    "enter ingredient 2 here",
  ]
}

/recipes/<search_terms>
[
Recipe…,
Recipe…,
Recipe…,
]

/recipes/<user_id>
[
Recipe…,
Recipe…,
Recipe…,
]
