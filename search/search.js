document.addEventListener('DOMContentLoaded', function(){
    main();
});

function main(){
    var r_list = new RecipeList();
    carousellEffects(r_list);
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
function carousellEffects(r_list){

    let info_tiles = [];
    let img_tiles = [];
    let recipes = [];
    r_list.map.forEach(recipe =>{
        recipes.push(recipe);
    });
    console.log(recipes);


    let transitions = ["translateX(-100%)", "translateX(0%)", "translateX(100%)"];
    for(let i = 0; i < 3; i++){
        info_tiles.push(document.getElementById(`info_tile_${i + 1}`));
        img_tiles.push(document.getElementById(`img_tile_${i + 1}`));
    }

    transitions.forEach((transition, i) => {
        info_tiles[i].style.transform = transition;
        // console.log(recipes[i].img_file_path);
        let curr_recipe = recipes[i];
        img_tiles[i].style.backgroundImage = `url(${recipes[i].img_file_path})`;

        img_tiles[i].style.transform = transition;

        info_tiles[i].innerHTML = '';
        info_tiles[i].appendChild(generate_information(curr_recipe.tags, curr_recipe.name, curr_recipe.description, curr_recipe.url));
    });
    setTimeout(function(){
        for(let i = 0; i < info_tiles.length; i++){
        info_tiles[i].style.transition = '0.5s';
        img_tiles[i].style.transition = '0.5s';
    }
    }, 100);
    
    let prev = document.getElementById('prev');
    prev.disabled = true;
    let next = document.getElementById('next');
    let tracker = 0; //we use 1 instead of zero because we had an initial transition
    let stack = [];

    prev.addEventListener('click', function(){
        handleTransitionPrev();
        if(tracker == 0) prev.disabled = true;
    });
    
    next.addEventListener('click', function(){
        // console.log(tracker);
        if(tracker >= 0){
            prev.disabled = false;
        } else {
            prev.disabled = true;
        }
        handleTransitionNext();
        // console.log(tracker);
    });
    // triggerAnimation('next'); //trigger once cuz doesnt work first action;
    // handleTransitionNext();
    function generate_information(tags, info_n, info_desc, url){
        let info = document.createElement('div');
        info.classList.add('info_container');


        let info_tags = document.createElement('p');
        info_tags.innerHTML = 'Tags: ';
        info_tags.classList.add('tags');
        tags.forEach(tag => {
            info_tags.innerHTML += tag + ', ';
        });

        let info_name = document.createElement('h1');
        info_name.classList.add('info_name');
        info_name.innerHTML = info_n;

        let description = document.createElement('p');
        description.classList.add('info_desc');
        description.innerHTML = info_desc;

        info.appendChild(info_tags);
        info.appendChild(info_name);
        info.appendChild(description);

        info.addEventListener('click', function(){
            window.location.href = url;
        });

        return info;
    }
    function handleTransitionNext(){
        
        let curr_iter = [];
        img_tiles.forEach((tile, i) => {
            // console.log(tracker + i);
            let info = info_tiles[i].cloneNode(true);
            curr_iter.push([tile.style.transform, info, tile.style.backgroundImage]);
        });

        stack.push(curr_iter);
        console.log(curr_iter);

        tracker++;
        // console.log(tracker);
        for(let i = 0; i < img_tiles.length; i++){
            let transition = transitions[((tracker * 2) + i) % img_tiles.length];
            
            // console.log(tracker);
            switch(transition){
                case 'translateX(-100%)':
                    img_tiles[i].style.zIndex = '3';
                    info_tiles[i].style.zIndex = '3';
                    break;
                case 'translateX(100%)':
                    let curr_recipe = recipes[(tracker + 2) % recipes.length];
                    img_tiles[i].style.zIndex = '1';
                    img_tiles[i].style.backgroundImage = `url(${recipes[(tracker + 2) % recipes.length].img_file_path})`;
                    info_tiles[i].innerHTML = '';
                    info_tiles[i].appendChild(generate_information(curr_recipe.tags, curr_recipe.name, curr_recipe.description, curr_recipe.url));
                    console.log(info_tiles[i].innerHTML);
                    info_tiles[i].style.zIndex = '1';
                    break;
                case 'translateX(0%)':
                    img_tiles[i].style.zIndex = '2';
                    info_tiles[i].style.zIndex = '2';
                    break;
            }
            // console.log(tracker);
            setTimeout(function(){
                // console.log('Index: ' + (tracker + i));
                
                
                    
                img_tiles[i].style.transform = transition;
                info_tiles[i].style.transform = transition;  
            }, 500);
            
        }
    }
    function handleTransitionPrev(){
        tracker--;
        if(stack.length <= 0) console.error('stack empty');

        let curr_iter = stack.pop();
        console.log(curr_iter);
        curr_iter.forEach((state, i) => {
            switch(state[0]){
                case 'translateX(-100%)':
                    info_tiles[i].style.zIndex = '1';
                    img_tiles[i].style.zIndex = '1';
                    break;
                default:
                    info_tiles[i].style.zIndex = '3';
                    info_tiles[i].style.zIndex = '3';
                    break;
            }
            setTimeout(function(){
                // img_tiles[i].style.backgroundImage = `url(${state[1].img_file_path})`;
                
                info_tiles[i].style.transform = state[0];
                img_tiles[i].style.transform = `${state[0]}`;
                img_tiles[i].style.backgroundImage = state[2];
            }, 500);
            
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
                "../images/tinola.jpg",
                [],
                "../recipe/Adobo.html"
            ),
            new Recipe(
                "Placeholder 2",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/mlynar.png",
                [],
                "../recipe/Adobo.html"
            ),
            new Recipe(
                "Placeholder 3",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/pasta.png",
                [],
                "../recipe/Adobo.html"
            ),
            new Recipe(
                "Placeholder 4",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/eggs.png",
                [],
                "../recipe/Adobo.html"
            ),
            new Recipe(
                "Placeholder 5",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/vegs.jpg",
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
            ),
            new Recipe(
                "Placeholder 7",
                "placeholder",
                ["placeholder"],
                ["placeholder"],
                "../images/pasta.png",
                [],
                "../recipe/Adobo.html"
            ),
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