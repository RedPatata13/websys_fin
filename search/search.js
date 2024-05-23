document.addEventListener('DOMContentLoaded', function(){
    main();
    
});

function main(){
    var r_list = new RecipeList();
    carousellEffects();
    generateRecipes("", [], r_list);
    search_and_filter_setup(r_list);
}

function search_and_filter_setup(r_list){
    let filter_buts = document.querySelectorAll('.filter_buttons');
    let search_bar = document.getElementById('searchbar');
    let search_but = document.getElementById('search_button');
    let status = [];
    filter_buts.forEach(but => {
        status.push([but, false]); //button, state: isPressed
    })

    status.forEach(state => {
        state[0].addEventListener('click', function() {
            press_filter(state);
        });
    });

    search_but.addEventListener('click', function(){
        let filters = [];
        status.forEach(state => {
            if(state[1]){
                filters.push(state[0].innerHTML);
            }
        });
        let query = search_bar.value;
        console.log(query);
        generateRecipes(query, filters, r_list);
    })

    function press_filter(state){
        switch(state[1]){
            case false:
                console.log("happened");
                state[0].style.backgroundColor = 'black';
                state[0].style.color = 'white';
                state[1] = true;
                break;
            case true:
                state[0].style.backgroundColor = 'white';
                state[0].style.color = 'black';
                state[1] = false;
                break;
        }
    }
}
function generateRecipes(search, filters, recipe_list){

    let flexMatrix = [];
    for(let i = 1; i <= 5; i++){
        flexMatrix.push(document.getElementById(`recipe_col_${i}`));
    }

    flexMatrix.forEach(col => {
        col.innerHTML = '';
    })
    let i = 0;
    recipe_list.map.forEach((recipe, key) => {
        if(key.toLowerCase().includes(search.toLowerCase())){
            if(isSubSet(filters, recipe.tags)){
                console.log(key);
                let recipe_tile = generate_recipe_tile(recipe.img_file_path, recipe.name, recipe.tags, recipe.description, recipe.url);
                flexMatrix[i % flexMatrix.length].appendChild(recipe_tile);
                i++;
            }
        } else {
            flexMatrix[i % flexMatrix.length].innerHTML = '';
        }
    });
    function isSubSet(sub_arr, main_arr){
        return sub_arr.every(element => main_arr.includes(element));
    }
    function generate_recipe_tile(img_url, recipe_name, tags, description, url){
        let tile = document.createElement('div');
        tile.classList.add('recipe_tile');

        let img_container = document.createElement('div');
        img_container.classList.add('img_container');
        
        let img = document.createElement('img');
        img.src = img_url;
        img.classList.add('recipe_img');
        img_container.appendChild(img);

        let recipe_n = document.createElement('h3');
        recipe_n.innerHTML = recipe_name;
        recipe_n.classList.add('rt_element');

        let recipe_tags = document.createElement('p');
        recipe_tags.innerHTML = 'Tags: ';
        tags.forEach(tag => {
            recipe_tags.innerHTML += tag + ', ';
        });
        recipe_tags.classList.add('tags', 'rt_element');

        let recipe_desc = document.createElement('div');
        recipe_desc.innerHTML = description;
        recipe_desc.classList.add('rt_element', 'recipe_description');
        
        tile.appendChild(img_container);
        tile.appendChild(recipe_n);
        tile.appendChild(recipe_tags);
        tile.appendChild(recipe_desc);

        tile.addEventListener('click', function(){
            redirectWindow(url);
        })
        return tile;

        function redirectWindow(url){
            window.location.href = url;
        }
    }
}
function carousellEffects(){

    let info_tiles = [];
    let img_tiles = [];
    let transitions = ["translateX(-100%)", "translateX(0%)", "translateX(100%)"];
    for(let i = 0; i < 3; i++){
        info_tiles.push(document.getElementById(`info_tile_${i + 1}`));
        img_tiles.push(document.getElementById(`img_tile_${i + 1}`));
    }

    transitions.forEach((transition, i) => {
        info_tiles[i].style.transform = transition;
        img_tiles[i].style.transform = `${transition} translateY(-100%)`;
    });

    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let tracker = 1; //we use 1 instead of zero because we had an initial transition

    prev.addEventListener('click', function(){
        triggerAnimation('prev');
    });
    triggerAnimation('next'); //trigger once cuz doesnt work first action;
    next.addEventListener('click', function(){
        triggerAnimation('next');
    });
    function triggerAnimation(movement) {
        // Update tracker based on movement direction
        tracker = (movement === 'prev') ? tracker + 1 : tracker - 1;
    
        info_tiles.forEach((tile, i) => {
            switch (movement) {
                case 'next':
                    tile.style.transform = transitions[reverseModulo(i - tracker, transitions.length)];
                    break;
                case 'prev':
                    tile.style.transform = transitions[reverseModulo(i + tracker, transitions.length)];
                    break;
            }
        });
    
        img_tiles.forEach((tile, i) => {
            switch (movement) {
                case 'next':
                    tile.style.transform = `${transitions[reverseModulo(i - tracker, transitions.length)]} translateY(-100%)`;
                    break;
                case 'prev':
                    tile.style.transform = `${transitions[reverseModulo(i + tracker, transitions.length)]} translateY(-100%)`;
                    break;
            }
        });
    }
    
    function reverseModulo(num, max) {
        return (num % max + max) % max;
    }
}

class Recipe{
    constructor(name, description, ingredients, directions, img_file_path, tags, url){
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.directions = directions;
        this.img_file_path = img_file_path;
        this.tags = tags;
        this.url = url;
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
                "Adobo", 
                "Philippine adobo is a popular Filipino dish and cooking process in Philippine cuisine. In its base form, meat, seafood, or vegetables are first browned in oil, and then marinated and simmered in vinegar, salt and/or soy sauce, and garlic.",
                ["Chicken", "Sugar", "Soy Sauce", "Vinegar", "Bay Leaves", "Onions", "Garlic", "Oil", "Green Onions", "Chillies", "Pepper"],
                [
                    "Prep the marinade: In a large bowl, combine the soy sauce, apple cider vinegar, brown sugar, half of the garlic and the bay leaves. Add the chicken thighs and toss well. Marinate for 20 minutes to overnight.", // <---- add this comma at the end of each step

                    "Sear the chicken: In a large skillet, with a lid, heat 2 tbsp of the vegetable oil. Remove the chicken from the marinade, reserving the marinade, and cook about 4 minutes per side on high heat or until golden brown. Transfer the cooked chicken to a plate.",

                    "Caramelize the onions: Add the remaining 1 tbsp of oil to the skillet over medium-high heat. Add the onion and cook until the onion has softened and has begun to caramelize, about 5 minutes. If wanting to spice this up, now is the time to add some red chilies. Stir in the remaining garlic and cook for another minute until aromatic.",

                    "Braise the chicken:Add the chicken pieces back to the skillet right over the onion, pour the reserved marinade over the chicken and about ¼ cup of water. Bring to a boil, then reduce the heat to low, cover the skillet and simmer for 20 to 30 minutes. Remove the lid from the skillet and increase the heat to medium-high. Cook for another 5 to 10 minutes, or until the sauce has started to reduce, thicken slightly and become glossy.",

                    "Garnish and serve: Serve garnished with green onion and red chilies."
                ], //this element is also an array, just expanded for easier visibility
                "../images/adobo.jpg",
                ['Meat', 'Sautee'],
                "../recipe/Adobo.html"
            ),
            new Recipe(
                "Placeholder 1",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/adobo.jpg",
                [],
                "../recipe/Adobo.html"
            ),
            new Recipe(
                "Placeholder 2",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/adobo.jpg",
                [],
                "../recipe/Adobo.html"
            ),
            new Recipe(
                "Placeholder 3",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/adobo.jpg",
                [],
                "../recipe/Adobo.html"
            ),
            new Recipe(
                "Placeholder 4",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/adobo.jpg",
                [],
                "../recipe/Adobo.html"
            ),
            new Recipe(
                "Placeholder 5",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/adobo.jpg",
                [],
                "../recipe/Adobo.html"
            ),
            new Recipe(
                "Placeholder 6",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/adobo.jpg",
                [],
                "../recipe/Adobo.html"
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
        
        ]
        this.mass_add(recipes);
    }
}