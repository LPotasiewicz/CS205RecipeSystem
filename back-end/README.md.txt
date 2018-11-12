Recipe System API
-----------------

=============
GET Requests:
=============
To view users and recipes collections go to:

- <url>/api/users
	or 
- <url>/api/recipes

==============
POST Requests:
==============
To add to the users or recipes collections follow the JSON guideline
below to keep everything the same

Users:
[
   {
     "name" : "user's first and last name"
     "email" : "user's email address"
     "password" : "user's password"
   } 
]

Recipes:
[
   {
     "title" : "recipe title"
     "author" : "author's first and last name (same as in the user table's "name")"
     "prep_time" : "prep time for this recipe"
     "cook_time" : "cook time for this recipe"
     "img_url" : "img path for recipe"
     "ingredients" : {
                       "ingredient1" : "ingredent 1"
		       "ingredeint2" : "ingredent 2"
                       keep repeating until all ingredents are done
                     }
     "steps": {
                       "step1": "step 1"
		       "step2" : "step 2"
                       keep repeating until all steps are done
                     }
   }
]