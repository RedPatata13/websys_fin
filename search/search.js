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
                "../images/adobo.jpg"
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

            // MEAT SECTION
            new Recipe(
                "Sloppy Joe",
                "A popular American sandwich made with ground beef cooked in a tomato-based sauce and served on a hot hamburger bun.",
                ["1 lb ground beef", "1 small onion, finely chopped", "1 small green bell pepper, finely chopped", "2 cloves garlic, minced", "1 cup tomato sauce", "3/4 cup ketchup", "1/4 cup water", "1 tbsp brown sugar", "1 tbsp Worcestershire sauce", "1 tsp yellow mustard", "1/2 tsp salt", "1/4 tsp black pepper", "4 hamburger buns"],
                [
                    "In a large skillet, cook the ground beef over medium-high heat until it is no longer pink, breaking it up with a spoon as it cooks. Drain off any excess fat as well.",

                    "Add the chopped onion and bell pepper to the skillet with the beef. Then cook for 5-7 minutes until the vegetables have softened. Add the minced garlic and then cook for another 1-2 minute(s).",

                    "Stir in the tomato sauce, ketchup, water, brown sugar, Worcestershire sauce, mustard, salt, and black pepper, and bring the mixture into a simmer.",

                    "Reduce the heat to low and simmer the mixture for 15-20 minutes, occasionally stirring until the sauce has thickened to your preference.",

                    "Spoon the Sloppy Joe mixture onto the hamburger buns and serve hot."
                ],
                "../images/sloppyJoe.jpg"
            ),

            new Recipe(
                "Beef and Vegetable Stir-Fry",
                "A popular Asian-inspired dish featuring thinly sliced beef with a variety of fresh vegetables cooked quickly over high heat.",
                ["For the Marinade:", "1 lb beef sirloin or flank steak, thinly sliced against the grain", "2 tbsp soy sauce", "1 tbsp oyster sauce", "1 tbsp cornstarch", "1 tbsp vegetable oil", " (Optional) 1 tsp sesame oil", "For the Stir-Fry:", "2 tbsp vegetable oil (for cooking)", "1 small onion, thinly sliced", "1 bell pepper (red, yellow or green), thinly sliced", "1 cup broccoli florets", "1 cup snap peas", "2 carrots, thinly sliced", "2 cloves garlic, minced", "1-inch piece of ginger, minced", "2-3 green onions, cut into 1-inch pieces", "For the Sauce:", "3 tbsp soy sauce", "2 tbsp oyster sauce", "1 tbsp hoisin sauce", "1 tbsp rice vinegar", "1 tbsp constarch mixed with 2 tbsp water (for thickening)", "(Optional) 1 tbsp sesame oil", "1/4 tsp red pepper flakes (optional, for heat)"],
                [
                    "In a bowl, combine the soy sauce, oyster sauce, cornstarch, vegetable oil, and sesame oil (if using), then add the thinly sliced beef to the marinade and mix well. Let it marinate for at least 15-20 minutes.",

                    "In a small bowl, whisk together the soy sauce, oyster sauce, hoisin sauce, rice vinegar, and constarch mixture. And set aside.",

                    "Heat 1 tablespoon of vegetable oil in a large skillet or wok over high heat. Then add the marinated beef and stir-fry until it is browned and just cooked through, about 2-3 minutes. Remove the beef from the skillet and set aside.", 

                    "In the same skillet, add the remaining 1 table spoon of vegetable oil. Then add the sliced onion, bell pepper, broccoli, snap peas, and carrots. Then stir-fry for about 3-4 minutes, until the vegetables are tender crisp. After this, add minced garlic and ginger and stir-fry for another 1-2 minutes until fragrant.",

                    "Return the cooked beef to the skillet with the vegetables, then pour the prepared stir-fry sauce over the beef and vegetables. Stir well to combine and let the sauce thicken, cooking for an additional 2-3 minutes. Then add the green onions and toss everything together.",

                    "Serve the beef and vegetable stir-fry over steamed rice or noodles."
                ],
                "../images/beefAndVegetableStirFry.jpg"
            ),

            new Recipe(
                "Barbecue Pulled Pork Sandwiches",
                "A classic American dish made with slow-cooked, shredded pork that is typically seasoned with a smoky barbecue sauce and served on a bun.",
                ["For the Pork:", "3-4 lbs pork shoulder (also known as pork butt)", "2 tbsp brown sugar", "1 tbsp paprika", "1 tsp garlic powder", "1 tsp onion powder", "1 tsp salt", "1/2 tsp black pepper", "1/2 tsp cayenne pepper (optional, for heat)", "1 cup apple cider vinegar", "1 cup chicken broth", "For the Barbecue Sauce:", "1 1/2 cups barbecue sauce (store-bought or homemade)", "1/4 cup apple cider vinegar", "1/4 cup brown sugar", "1 tbsp Worcestershire sauce", "1 tbsp yellow mustard", "1 tsp garlic powder", "1/2 tsp black pepper", "For the Sandwiches:", "8 hamburger buns", "Coleslaw (optional, for serving)", "Pickles (optional, for serving)"],
                [
                    "In a small bowl, combine the brown sugar, paprika, garlic powder, onion powder, salt, black pepper, and cayenne pepper. And rub the spice mixture all over the pork shoulder to coat evenly.",

                    "Place the seasoned pork shoulder in a slow cooker and pour the apple cider vinegar and chicken broth around the pork. Then cover and cook on low for 8-10 hours, or on high for 4-5 hours, until the pork is very tender and can easily be shredded with a fork.",

                    "In a medium saucepan, combine the barbecue sauce, apple cider vinegar, brown sugar, Worcestershire sauce, mustard, garlic powder, and black pepper. And then heat over medium heat, occasionally stirring until the sauce is well combined and heated through. Adjust seasoning to preference.",
                    
                    "Remove the cooked pork from the slow cooker and transfer it to a large bowl, use two forks to shred the pork, discarding any large pieces of fat. Then add about 1 cup of cooking liquid from the slow cooker to the shredded pork to keep it moist.",
                
                    "Pour the prepared barbecue sauce over the shredded pork and mix well to coat all the meat.",
                    
                    "Toast the hamburger buns if desired, then pile the barbecue pulled pork onto the bottom halves of the buns. Then optionally top it with coleslaw and pickles. Cover the top halves of the buns afterwards and serve hot with preferred side dish."
                ],
                "../images/barbecuePulledPorkSandwiches.jpg"
            ),

            new Recipe(
                "Chicken Quesadillas",
                "A popular Mexican dish made with tortillas filled with seasoned chicken, cheese, and other ingredients such as onions, peppers, or beans. The tortillas are folded in half and cooked until crispy and the cheese is melted, resulting in a warm and flavorful meal or snack.",
                ["2 cups cooked chicken, shredded or diced", "1 cup shredded cheese", "4 large flour tortillas", "1 small onion, finely chopped (optional)", "1 small bell pepper, finely chopped (optional)", "1 teaspon chili powder (optional, for extra flavor)", "Salt", "Pepper", "Olive Oil"],
                [
                    "If the chicken is not yet cooked, poach or grill the chicken breats until fully cooked. Then shred or dice the chicken into small pieces.",
                    
                    "In a skillet, heat a tablespoon of olive oil over medium heat. Add the chopped onion and bell pepper (if using) to the skillet and saute until softened, about 3-4 minutes. Then add the cooked chicken to the skillet and season with chili powder, salt, and pepper. Cook for another 2-3 minutes to combine all the flavors. Afterwards remove from heat and set aside.",

                    "Place one tortilla on a flat surface, spread a quarter of the chicken mixture evenly over one half of the tortilla, then sprinkle a quarter of the shredded cheese over the chicken, and fold the tortilla over to cover the filling, creating a half-moon shape.",

                    "Heat a large skillet or griddle over medium heat. If needed, lightly grease the skillet with olive oil. Then carefully place the assembled quesadilla in the skillet and cook for 2-3 minutes on each side, or until the tortilla is golden brown and crispy, and the cheese is melted.",

                    "Remove the quesadillas from the skillet and let them cool for a minute or two. Then use a sharp knife to cut each quesadilla into wedges. And serve warm with your favorite toppings and dips."
                ],
                "../images/chickenQuesadillas.jpg"
            ),

            new Recipe(
                "Baked Chicken Drumsticks",
                "A flavorful and easy-to-make dish that features chicken drumsticks that are seasoned and cooked in the oven until tender and juicy.",
                ["8 chicken drumsticks", "2 tbsp olive oil", "2 cloves garlic, minced", "1 tsp paprika", "1 tsp dried thyme", "1 tsp dried oregano", "1 tsp onion powder", "1/2 tsp salt", "1/4 tsp black pepper", "Lemon Wedges (Optional, for serving)", "Fresh Herbs such as Parsley or Thyme (Optional, for garnish)"],
                [
                    "Preheat the oven to 425 degrees Fahrenheit and line a baking shet with parchment paper or aluminum foil for easy cleanup.",

                    "Pat the chicken drumsticks dry with paper towels to remove any excess moisture, and in a small bowl, combine the olive oil, minced garlic, paprika, thyme, oregano, onion powder, salt, and black pepper. Mix well to create a flavorful seasoning blend.",

                    "Place the chicken drumsticks in a large bowl or resealable plastic bag. And pour the seasoning the mixture over the drumsticks, ensuring they are evenly coated. Use your hands to massage the seasoning into the chicken.",

                    "Place the seasoned chicken drumsticks on the prepared baking sheet, arranging them in a single layer with some space between each piece. Allowing for even cooking and crisping.",

                    "Transfer the baking sheet to the preheated oven and bake the chicken drumsticks for 35-40 minutes, or until the internal temperature reaches 165 degrees Fahrenheit (or simply 75 degrees Celsius) and the skin is golden and crispy.",

                    "Once baked, remove the chicken drumsticks from the oven and let it rest for a few minutes before serving. Optionally garnishing it with fresh herbs and served with lemon wedges (if using) for extra flavor."
                ],
                "../images/bakedChickenDrumsticks.jpg"
            ),


            // VEGETABLE RECIPES

            new Recipe(
                "Potato Salad",
                "A classic side dish made with boiled potatoes that are mixed with a creamy dressing and various seasonings.",
                ["2 lb potatoes", "3-4 large eggs,", "1/2 cup mayonnaise", "2 tbsp Dijon mustard", "1 tbsp white vinegar or apple cider vinegar", "1/2 cup chopped celery", "1/4 cup chopped red onion", "2 tbsp chopped fresh parsley (optional)", "Salt", "Black pepper", "Paprika (optional, for garnish)"],
                [
                    "Place the potatoes in a large pot and cover them with cold water. Bring to a boil over medium-high heat, then reduce the heat to low and simmer for 15-20 minutes, or until the potatoes are tender when pierced with a fork.",
                    
                    "In a separate pot, place the eggs and cover them with cold water. Bring to a boil over high heat, then remove from heat, cover, and let the eggs sit in the hot water for 10-12 minutes. Transfer the eggs to a bowl of ice water to cool.",

                    "In a small bowl, whisk together the mayonnaise, Dijon mustard, and vinegar until smooth. Season with salt and black pepper to taste.",

                    "Once the potatoes are cooked and cooled slightly, peel them (if desired) and cut them into bite-sized cubes. Place the cubed potatoes in a large mixing bowl.", 

                    "Peel the cooled hard-boiled eggs and chop them into small pieces. Add the chopped eggs, celery, red onion, and parsley (if using) to the bowl with the potatoes.",
                    
                    "Pour the prepared dressing over the potato mixture and gently toss until everything is evenly coated.",

                    "Cover the potato salad and refrigerate for at least 1-2 hours before serving to allow the flavors to meld together. And nefore serving, garnish with a sprinkle of paprika for color (if using).",
                ],
                "../images/potatoSalad.jpg"
            ),

            new Recipe(
                "Vegetarian Chili",
                "A hearty and flavorful dish made with a variety of vegetables, beans, and spices.",
                ["2 tbsp olive oil", "1 large onion, chopped", "3 gloves garlic, minced", "1 bell pepper (any color), chopped", "1 medium zucchini, diced", "1 medium carrot, diced", "1 cup corn kernels (fresh, frozen or canned)", "1 can (15 oz) black beans, drained and rinsed", "1 can (15 oz) kidney beans, drained and rinsed", "1 can (15 oz) diced tomatoes, undrained", "1 can (6 oz) tomato paste", "2 cups vegetable broth", "2 tsp chili powder", "1 tsp ground cumin", "1/2 tsp smoked paprika", "1/2 tsp dried oregano", "salt", "pepper", "(Optional) chopped fresh cilantro, sliced green onions, shredded cheese, sour cream, avocado"],
                [
                    "Heat olive oil in a large pot over medium heat and add the chopped onion, garlic, bell pepper, zucchini, and carrot to the pot. Cook, stirring occasionally, for 5-7 minutes, or until the vegetables are softened.",

                    "Add the corn, black beans, and kidney beans to the pot. Stir well to combine with the vegetables. Then add the chili powder, cumin, smoked paprika, dried oregano, salt, and black pepper to the pot. Stir to evenly distribute the spices throughout the chili.",

                    "Bring the chili to a simmer, then reduce the heat to low. Cover and let the chili simmer for 20-30 minutes, stirring occasionally, to allow the flavors to meld together and the chili to thicken to your desired consistency.",

                    "Taste the chili and adjust the seasoning if needed, adding more salt, pepper, or spices to taste. Then serve the vegetarian chili hot, garnished with your favorite toppings such as chopped cilantro, sliced green onions, shredded cheese, sour cream, or avocado."
                ],
                "../images/vegetarianChili.jpg"
            ),
            
            new Recipe(
                "Stuffed Bell Peppers",
                "A delicious dish where bell peppers are filled with a savory mixture typically consisting of meat, rice, vegetables, herbs, and seasonings. Baked until tender, creating a flavorful and satisfying meal.",
                ["4 large bell peppers (any color)", "1 tbsp olive oil", "1 onion, finely chopped", "2 cloves garlic, minced", "1 lb ground beef or turkey", "1 cup cooked rice (white or brown)", "1 can (14.5 oz) diced tomatoes, drained", "1 cup shredded cheese (cheddar or mozzarella), divided", "1 tsp dried oregano", "1 tsp dried basil", "salt", "black pepper", "(Optional) Chopped fresh parsley or basil for garnish"],
                [
                    "Preheat your oven to 375 degrees Fahrenheit (or 190 degrees Celcius). Grease a baking dish large enough to hold the bell peppers.",
            
                    "Cut the tops off the bell peppers and remove the seeds and membranes from the insides. You can also slice a small amount off the bottom of each pepper so they stand upright in the baking dish.",
                    
                    "In a large skillet, heat the olive oil over medium heat. Add the chopped onion and minced garlic, and cooked until softened, about 3-4 minutes. Next, add the ground beef or turkey to the skillet and cook until browned, breaking it up with a spoon as it cooks. Then stir in the cooked rice, diced tomatoes, half of the shredded cheese, dried oregano, dried basil, salt, and black pepper. Cook for another 2-3 minutes to heat through and combine the flavors.",

                    "Divide the filling evenly among the hollowed-out bell peppers, pressing down gently to pack the filling inside each pepper. Then place the stuffed peppers upright in the prepared baking dish.",

                    "Cover the baking dish with foil and bake in the preheated oven for 25-30 minutes, or until the peppers are tender. Then remove the foil from the baking dish and sprinkle the remaining shredded cheese over the tops of the stuffed peppers. Return the baking dish to the oven and bake for another 5-10 minutes or until the cheese is melted and bubbly.",

                    "Remove the stuffed bell peppers from the oven and let them cool for a few minutes before serving. Garnish with chopped fresh parsley or basil, if desired, before serving"
                ],
                "../images/stuffedBellPeppers.jpg"
            ),

            new Recipe(
                "Vegetable and Lentil Soup",
                "A hearty and nutritious dish made with lentils, vegetables, and flavorful seasonings.",
                ["1 cup dried green or brown", "1 tbsp olive oil", "1 onion, chopped", "2 carrots, diced", "2 celery stalks, diced", "3 gloves garlic, minced", "1 tsp ground cumin", "1 tsp ground coriander", "1/2 tsp smoked paprika", "6 cups vegetable broth", "1 can (14.5 oz) diced tomatoes, undrained", "2 cups chopped vegetables (zucchini, bell peppers, or spinach", "salt", "black pepper", "fresh lemon juice (optional, for serving)", "Chopped fresh parsley or cilantro (optional, for garnish)"],
                [
                    "Rinse the lentils under cold water in a fine-mesh sieve. Drain well and set aside",
                    
                    "In a large pot, heat the olive oil medium heat. Add the chopped onion, diced carrots, and diced celery. Cook, stirring occasionally, for 5-7 minutes, or until the vegetables are softened.",

                    "Add the minced garlic, ground cumin, ground coriander, and smoked paprika to the pot. Cook, stirring constantly, for 1 minute, or until fragrant.",

                    "Add the rinsed lentils, vegetable broth, and diced tomatoes (with their juices) to the pot. Bring the soup to a boil, then reduce the heat to low. Cover and simmer for 20-25 minutes, or until the lentils are tender.",

                    "Stir in the chopped vegetables (such as zucchini, bell peppers, or spinach) and cook for an additional 5-7 minutes, or until the vegetables are tender.",

                    "Season the soup with salt and black pepper to taste. If desired, squeeze fresh lemon juice over the soup for a bright, citrusy flavor. Ladle the vegetable lentil soup into bowls and garnish with chopped fresh parsley or cilantro, if desired."
                ],
                "../images/vegetableAndLentilSoup.jpg"
            ),

            new Recipe(
                "Chickpea Curry",
                "A flavorful and comforting dish made with chickpeas cooked in a rich and aromatic sauce.",
                ["2 tbsp vegetable oil", "1 onion, finely chopped", "3 cloves garlic, minced", "1 tbsp grated ginger", "2 tsp ground cumin", "2 tsp ground coriander", "1 tsp ground turmeric", "1/2 tsp ground cinammon", "1/2 tsp ground paprika", "1/4 tsp cayenne pepper (optional, for heat)", "1 can (14 oz) diced tomatoes, undrained", "2 cand (14 oz each) chickpeas, drained and rinsed", "1 can (13.5 oz) coconut milk", "1 cup vegetable broth", "salt", "black pepper", "1/2 cup of lemon juice", "fresh cilantro, chopped (for garnish)", "cooked rice or naan bread, for serving"],
                [
                    "Heat the vegetable oil in a large skillet or pot over medium heat. Add the chopped onion and cook until softened, about 5 minutes. Add the minced garlic and grated ginger to the skillet and cook for an additional 1-2 minutes, until fragrant.",

                    "Stir in the ground cumin, ground coriander, ground turmeric, ground cinnamon, ground paprika, and cayenne pepper (if using). Cook for 1 minute, stirring constantly, to toast the spices and release their flavors.",

                    "Add the diced tomatoes (with their juices), drained chickpeas, coconut milk, and vegetable broth to the skillet. Stir well to combine. Bring the mixture to a simmer, then reduce the heat to low. Cover and let the curry simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld together and the sauce to thicken slightly.",

                    "Season the chickpea curry with salt and black pepper to taste. Stir in the lemon juice for brightness. Taste and adjust the seasoning as needed.",

                    "Serve the chickpea curry hot, garnished with chopped fresh cilantro. Serve over cooked rice or with naan bread on the side for soaking up the flavorful sauce."
                ],
                "../images/chickpeaCurry.jpg"
            ),

            // EGG RECIPES
            new Recipe(
                "Omelette",
                "A versatile and delicious dish made from beaten eggs cooked with various fillings, folded, and served either flat or folded in half.",
                ["2 large eggs", "1 tbsp milk or water (optional)", "salt", "black pepper", "1 tsp butter or oil", "Fillings of your choice (cheese, vegetables, herbs, cooked meat, or seafood"],
                [
                    "If using any fillings like vegetables or cheese, prepare them by chopping or grating as needed. Cook any fillings that require cooking, such as mushrooms or spinach.",

                    "Crack the eggs into a bowl. Add the milk or water (if using), salt, and black pepper. Beat the eggs with a fork or whisk until well combined and slightly frothy.", 

                    "Heat a non-stick skillet over medium heat. Add the butter or oil and swirl to coat the bottom of the pan evenly.",

                    "Pour the beaten eggs into the skillet, tilting the pan to spread them evenly across the surface. Let the eggs cook undisturbed for about 1-2 minutes, until the edges start to set and the bottom is lightly golden.",

                    "Sprinkle your chosen fillings evenly over one half of the omelette. And using a spatula, gently lift the unfilled half of the omelette and fold it over the filled half to cover the fillings.",

                    "Let the omelette cook for another 1-2 minutes, until the fillings are heated through and any cheese is melted. The omelette should be golden on the outside and slightly soft and creamy on the inside.",

                    "Slide the omelette onto a plate, either flat or folded in half. Garnish with fresh herbs, if desired, and serve immediately."
                ],
                "../images/omelette.jpg"
            ),

            new Recipe(
                "Egg Drop Soup",
                "A simple and comforting Chinese dish made with whisked eggs gently cooked in a flavorful broth.",
                ["4 cups chicken or vegetable broth", "2 tbsp cornstarch", "2 tbsp water", "2 eggs", "1 tsp soy sauce", "1/2 tsp sesame oil", "salt", "white pepper", "2 green onions, thinly sliced (optional)", "Toasted sesame seeds (optional, for garnish)"],
                [
                    "In a medium pot, bring the chicken or vegetable broth to a simmer over medium heat. In a small bowl, mix the cornstarch and water together to create a slurry. Then slowly pour the cornstarch slurry into the simmering broth, stirring constantly. Cook for 1-2 minutes, or until the broth thickens slightly.",

                    "Stir in the soy sauce and sesame oil. Taste the broth and adjust the seasoning with salt and white pepper as needed. Then in a separate bowl, whisk the eggs until well beaten.",

                    "While stirring the broth in a circular motion with a spoon or chopsticks, slowly pour the beaten eggs into the pot in a thin stream. This will create the characteristic \"egg drop\" effect.",

                    "Let the eggs cook for about 1 minute without stirring, allowing them to set into thin ribbons in the hot broth.",

                    "Ladle the egg drop soup into bowls. Garnish with sliced green onions and toasted sesame seeds, if desired."
                ],
                "../images/eggDropSoup.jpg"
            ),

            new Recipe(
                "Egg Muffin",
                "A convenient and versatile breakfast option made by baking a mixture of eggs and various fillings in muffin tins. Easy to make ahead of time and can be customized to your preference.",
                ["8 large eggs", "1/4 cup milk (optional, can use dairy or non-dairy milk", "salt", "black pepper", "Fillings of your choice (diced vegetables, cooked meat, cheese, herbs, or spices)", "Oil for greasing the muffin tin"],
                [
                    "Preheat your oven to 350 degrees Fahrenheit (175 degrees Celsius). Grease a 12-cup muffin tin with cooking spray or oil.",

                    "Prepare your chosen fillings by chopping or dicing them into small pieces. You can use a variety of ingredients such as bell peppers, onions, spinach, mushrooms, tomatoes, cooked bacon or sausage, ham, cheese, or herbs.",

                    "In a large bowl, whisk together the eggs, milk (if using), salt, and black pepper until well combined.",

                    "Stir your chosen fillings into the egg mixture until evenly distributed. Then pour the egg mixture into the greased muffin tin, dividing it evenly among the cups. Fill each cup about 3/4 full, leaving some room for the egg muffins to rise as they bake.",

                    "Place the muffin tin in the preheated oven and bake for 18-20 minutes, or until the egg muffins are set and slightly golden on top. You can insert a toothpick into the center of a muffin to check for doneness - if it comes out clean, they're ready.",

                    "Remove the muffin tin from the oven and let the egg muffins cool for a few minutes in the pan before carefully removing them. And serve the egg muffins warm as a quick and convenient breakfast or snack. They can also be stored in an airtight container in the refrigerator for up to 3-4 days or frozen for longer storage. Reheat them gently in the microwave before serving."
                ],
                "../images/eggMuffin.jpg"
            ),

            new Recipe(
                "Shakshuka",
                "A delicious nad flavorful North African and Middle Eastern dish consisting of poached eggs in a spicy tomato and pepper sauce. Typically served for breakfast or brunch but can also be enjoyed as a satisfying meal any time of day.",
                ["2 tbsp olive oil", "1 onion, finely chopped", "1 red bell pepper, diced", "3 cloves garlic, minced", "1 tsp ground cumin", "1 tsp smoked paprika", "1/2 tsp ground coriander", "1/4 tsp cayenne pepper (optional, for heat)", "1 can (14 oz) diced tomatoes, undrained", "1 tbsp tomato paste", "salt", "black pepper", "4-6 large eggs", "Chopped fresh parsley or cilantro, for garnish", "Crumbled feta cheese or goat cheese, for serving (optional)", "Crusty bread or pita, for serving."],
                [
                    "Heat the olive oil in a large skillet or cast-iron pan over medium heat. Add the chopped onion and diced bell pepper. Cook, stirring occasionally, for 5-7 minutes, or until the vegetables are softened.",
                    
                    "Add the minced garlic, ground cumin, smoked paprika, ground coriander, and cayenne pepper (if using) to the skillet. Cook, stirring constantly, for 1-2 minutes, or until fragrant.",

                    "Stir in the diced tomatoes (with their juices) and tomato paste. Season with salt and black pepper to taste. Let the sauce simmer for 10-15 minutes, stirring occasionally, until it thickens slightly. Then, using a spoon, make small wells in the tomato sauce for each egg.",

                    "Crack one egg into each well. Cover the skillet with a lid and let the eggs cook in the simmering sauce for 5-7 minutes, or until the egg whites are set but the yolks are still runny. Cook longer if you prefer firmer yolks.",

                    "Once the eggs are cooked to your liking, remove the skillet from the heat. Garnish the shakshuka with chopped fresh parsley or cilantro. Serve hot with crumbled feta cheese or goat cheese on top, if desired. Then serve the shakshuka with crusty bread or pita for dipping and scooping up the delicious sauce and eggs."
                ],
                "../images/shakshuka.jpg"
            ),

            new Recipe(
                "Egg Fried Rice",
                "A classic Chinese dish made by stir-frying cooked rice with eggs, vegetables, and seasonings. It is a delicious and versatile dish that can be enjoyed as a main course or as a side dish.",
                ["3 cups cooked rice (preferably day-old and chilled", "2 tbsp vegetable oil", "2 eggs, lightly beaten", "1 small onion, finely chopped", "2 cloves garlic, minced", "1 cup mixed vegetables (such as diced carrots, peas, corn, and bell peppers)", "2 green onions, thinly sliced", "2 tbsp soy sauce", "1 tbsp oyster sauce (optional)", "salt", "black pepper", "sesame oil, for drizzling (optional)", "Toasted sesame seeds, for garnish (optional)", "Chopped fresh cilantro or parsley, for garnish (optional)"],
                [
                    "Heat the vegetable oil in a large skillet or wok over medium-high heat. Then pour the beaten eggs into the hot skillet. Let them cook undisturbed for a few seconds until they start to set on the bottom. Use a spatula to gently scramble the eggs until they are cooked through but still slightly moist. Transfer the scrambled eggs to a plate and set aside.",

                    "In the same skillet, add the chopped onion and minced garlic. Stir-fry for 1-2 minutes until fragrant. Then add the mixed vegetables to the skillet and stir-fry for 3-4 minutes until they are tender-crisp.",

                    "Add the cooked rice to the skillet, breaking up any clumps with a spatula or wooden spoon. Stir-fry for 2-3 minutes to heat through and lightly toast the rice.",

                    "Return the scrambled eggs to the skillet with the rice and vegetables. Stir well to combine. Then drizzle the soy sauce and oyster sauce (if using) over the rice mixture. Season with salt and black pepper to taste. Stir-fry for another 1-2 minutes to evenly distribute the sauces and seasonings.",

                    "Remove the skillet from the heat. Drizzle a little sesame oil over the fried rice for extra flavor (if desired). And garnish the egg fried rice with sliced green onions, toasted sesame seeds, and chopped fresh cilantro or parsley, if using."
                ],
                "../images/eggFriedRice.jpg"
            )
        ]
        this.mass_add(recipes);
    }
}