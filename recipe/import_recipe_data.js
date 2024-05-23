document.addEventListener('DOMContentLoaded', function(){
    main();
});

function main(){
    let title = document.title;
    let recipe_name = document.getElementById('recipe-name');
    let ingredients = document.getElementById('ingredients');
    let directions = document.getElementById('directions');
    let description = document.getElementById('description'); 
    let img = document.getElementById('img');

    let list = new RecipeList();
    let recipe = list.get(title);

    recipe_name.innerHTML = recipe.name;
    description.innerHTML = recipe.description;

    ingredients.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        let listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredients.appendChild(listItem);
    });

    directions.innerHTML = '';
    recipe.directions.forEach(direction => {
        let listItem = document.createElement('li');
        listItem.textContent = direction;
        directions.appendChild(listItem);
    });
    img.style.backgroundImage = `url(${recipe.img_file_path})`;
}

class Recipe{
    constructor(name, description, ingredients, directions, img_file_path){
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.directions = directions;
        this.img_file_path = img_file_path;
    }
}

class RecipeList{
    constructor(){
        this.map = new Map();
        this.addItemsByRed();
        this.addRecipesByMark();
        this.addRecipesByNoah();
    }

    add(item){
        this.map.set(item.name, item);
    }

    mass_add(item_list){
        item_list.forEach(item => {
            this.add(item);
        });
    }
    get(key){
        if(this.map.has(key)){
            console.log("Successfull Retrieved");
            return this.map.get(key);
        }
        else{
            console.error("Key does not exist");
            return "-1";
        }
    }

    addItemsByRed(){
        let recipes = [
            new Recipe(
                "Adobo", //recipe name
                "Philippine adobo is a popular Filipino dish and cooking process in Philippine cuisine. In its base form, meat, seafood, or vegetables are first browned in oil, and then marinated and simmered in vinegar, salt and/or soy sauce, and garlic.", //recipe description
                ["Chicken", "Sugar", "Soy Sauce", "Vinegar", "Bay Leaves", "Onions", "Garlic", "Oil", "Green Onions", "Chillies", "Pepper"], //ingredients
                [
                    "Prep the marinade: In a large bowl, combine the soy sauce, apple cider vinegar, brown sugar, half of the garlic and the bay leaves. Add the chicken thighs and toss well. Marinate for 20 minutes to overnight.", // <---- add this comma at the end of each step

                    "Sear the chicken: In a large skillet, with a lid, heat 2 tbsp of the vegetable oil. Remove the chicken from the marinade, reserving the marinade, and cook about 4 minutes per side on high heat or until golden brown. Transfer the cooked chicken to a plate.",

                    "Caramelize the onions: Add the remaining 1 tbsp of oil to the skillet over medium-high heat. Add the onion and cook until the onion has softened and has begun to caramelize, about 5 minutes. If wanting to spice this up, now is the time to add some red chilies. Stir in the remaining garlic and cook for another minute until aromatic.",

                    "Braise the chicken:Add the chicken pieces back to the skillet right over the onion, pour the reserved marinade over the chicken and about ¼ cup of water. Bring to a boil, then reduce the heat to low, cover the skillet and simmer for 20 to 30 minutes. Remove the lid from the skillet and increase the heat to medium-high. Cook for another 5 to 10 minutes, or until the sauce has started to reduce, thicken slightly and become glossy.",

                    "Garnish and serve: Serve garnished with green onion and red chilies."
                ], //this element is also an array, just expanded for easier visibility
                "../images/adobo.jpg"
            ),
            new Recipe(
                ""
            )
        ];
        
        this.mass_add(recipes);
    }

    addRecipesByNoah(){
        let recipes = [
            //fill recipes here
        ];
        this.mass_add(recipes);
    }

    addRecipesByMark(){
        let recipes = [
            //fill recipes here
            new Recipe(
                "name",
                "description",
                ["ingredients"],
                ["shake it"],
                "../images/adobo.jpg"
            )
        ]
        this.mass_add(recipes);
    }
}

