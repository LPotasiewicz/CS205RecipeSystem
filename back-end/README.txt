============
GET Request:
============
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
  "email": "user's email address"
  "password" : "user's password"
}

Recipes:
--------
{
  "title": "recipe's title"
  "author": "recipe's author (full name from user's collection)"
  "cook_time": "time it takes to cook"
  "img_url": "url path to image of recipe"
  "ingredients": {
                   "ingredient1" :"enter ingredient 1 here"
		   "ingredient2" :"enter ingredient 2 here"
		   *enter as many ingredients neccessary
	           *just remember to follow proper name assignment
                 }
  "steps": {
                   "step1" :"enter ingredient 1 here"
		   "step2" :"enter ingredient 2 here"
		   *enter as many steps neccessary
	           *just remember to follow proper name assignment
                 }
}