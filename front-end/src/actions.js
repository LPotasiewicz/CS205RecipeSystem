// **************************
// Owned by: Luke Potasiewicz
// **************************
import {store} from "./store";

export function getRecipes() {
    const Http = new XMLHttpRequest();
    const url = "http://3.17.29.161/recipes";
    Http.open("GET", url);
    Http.send();
    // store yell updates components listening to the store with their relevant data
    // this is a simple implementation of caching
    store.yell("recipes");
    // this function is called every time the Http request is updated
    Http.onreadystatechange = () => {
        // only add to the store if the request done and successful
        if (Http.readyState === 4 && Http.status === 200) {
            try {
                // add the data to the store, with the identifier
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
    // store yell updates components listening to the store with their relevant data
    // this is a simple implementation of caching
    store.yell("recipeUser" + id);
    // this function is called every time the Http request is updated
    Http.onreadystatechange = (e) => {
        // only add to the store if the request done and successful
        if (Http.readyState === 4 && Http.status === 200) {
            try {
                // add the data to the store, with the identifier
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
    // this function is called every time the Http request is updated
    Http.onreadystatechange = (e) => {
        // only add to the store if the request done and successful
        if (Http.readyState === 4 && Http.status === 200) {
            try {
                // add the data to the store, with the identifier
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