## What Recipe!?

Demo deployed version: https://xiongkb.github.io/Recipe-finder/

Ever open your fridge and see so much "food" inside just to think "Nothing to eat"? It's usually because those are just ingredients. Maybe you only have a few ingredients and not sure what to cook with them. This app will help you solve that. Enter the ingredients you want to cook with and it will find you recipes based on those.

*Note*
This was originally a project made by my team in a bootcamp. I decided to further flesh it out and moved it from jquery
to react. This is an ongoing project and will be updated with more features.

#### How it works
Currently powered by edamam api to provide database of recipes to users. Since this is in react now, I created a backend where edamam api will sit. On the frontend, user's text input will be taken into an array where it is sent to the backend. From there, using query string, the api will request from the edamam database server and display the recipes back to the user.

###### Current progress
Currently, I am working on setting up a log in authenthication where users can save their favorite recipes. It will be 
saved to a nosql database (using mongoDB).