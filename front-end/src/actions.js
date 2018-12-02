import {store} from "./store";

export function getRecipes() {
    const Http = new XMLHttpRequest();
    const url = "http://3.17.29.161/recipes";
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        try {
            store.add("recipes", Http.responseText ? JSON.parse(Http.responseText) : []);
        } catch (e) {
            console.log(e);
        }
    };
}

export function getRecipeUser(id) {
    const Http = new XMLHttpRequest();
    const url = "http://3.17.29.161/recipes/users/" + id;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        try {
            store.add("recipeUser", Http.responseText ? JSON.parse(Http.responseText) : []);
        } catch (e) {
            console.log(e);
        }
    };
}

export function postRecipe(data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://3.17.29.161/recipes", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

