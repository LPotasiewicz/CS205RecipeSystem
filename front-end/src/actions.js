import {store} from "./store";

export function getRecipes() {
    const Http = new XMLHttpRequest();
    const url = "http://3.17.29.161/recipes";
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        store.add("recipes", Http.responseText ? JSON.parse(Http.responseText) : []);
    };
}

export function getRecipeUser(id) {
    const Http = new XMLHttpRequest();
    const url = "http://3.17.29.161/recipes/" + id;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        store.add("recipe", Http.responseText ? JSON.parse(Http.responseText) : []);
    };
}