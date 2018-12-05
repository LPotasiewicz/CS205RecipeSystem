import {store} from "./store";

export function getRecipes() {
    const Http = new XMLHttpRequest();
    const url = "http://3.17.29.161/recipes";
    Http.open("GET", url);
    Http.send();
    store.yell("recipes");
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4 && Http.status === 200) {
            try {
                store.add("recipes", Http.responseText ? JSON.parse(Http.responseText) : []);
            } catch (e) {
                console.log(e);
            }

        }
    };
}

export function getRecipeUser(id) {
    const Http = new XMLHttpRequest();
    const url = "http://3.17.29.161/recipes/users/" + id;
    Http.open("GET", url);
    Http.send();
    store.yell("recipeUser" + id);
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4 && Http.status === 200) {
            try {
                store.add("recipeUser" + id, Http.responseText ? JSON.parse(Http.responseText) : []);
            } catch (e) {
                console.log(e);
            }
        }
    };
}

export function getUserByEmail(id) {
    const Http = new XMLHttpRequest();
    const url = "http://3.17.29.161/users/" + id;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4 && Http.status === 200) {
            try {
                store.add("user" + id, Http.responseText ? JSON.parse(Http.responseText) : []);
            } catch (e) {
                console.log(e);
            }
        }
    };
}

export function postRecipe(data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://3.17.29.161/recipes", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

export function postUser(data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://3.17.29.161/users", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

export function deleteRecipe(id) {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://3.17.29.161/recipes/delete/" + id, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
}