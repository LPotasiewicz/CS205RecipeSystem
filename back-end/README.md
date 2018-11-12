## GET Requests
To view users and recipes collections go to:

- /api/users 
- /api/recipes

## POST Requests
To add to the users or recipes collections follow the JSON guideline
below to keep everything the same

Users:
- [
- &nbsp;&nbsp;&nbsp;{
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name" : "user's first and last name"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email" : "user's email address"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"password" : "user's password"
- &nbsp;&nbsp;&nbsp;} 
- ]

Recipes:
- [
- &nbsp;&nbsp;&nbsp;{
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title" : "recipe title"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"author" : "author's first and last name (same as in the user table's "name")"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"prep_time" : "prep time for this recipe"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cook_time" : "cook time for this recipe"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"img_url" : "img path for recipe"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ingredients" : {
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ingredient1" : "ingredent 1"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ingredeint2" : "ingredent 2"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;keep repeating until all ingredents are done
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"steps": {
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"step1": "step 1"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"step2" : "step 2"
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;keep repeating until all steps are done
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
- &nbsp;&nbsp;&nbsp;} 
- ]
