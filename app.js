    /**
    * @description Represents a dinosaur constructor
    * @constructor
    * @param {Object} dinoData - The data of Dino
    */
    // Create Dino Constructor
 function DinoConstructor(dinoData) {
 
}
    /**
    * @description Creates the dinosaur object array by calling constructor
    * @returns {Array} Array of dinosaur objects from constructor
    */
    // Create Dino Objects
    let dinos = []
    fetch("dino.json")
    .then(response => response.json())
    .then(json => 
        dinos = json.Dinos.map(dino => 
            new DinoConstructor(dino)));

    /**
    * @description Creates the human object
    * @returns {Object} Human objects
    */
    // Create Human Constructor
    function Human(name, weight, height, diet) {        
       
    }
    // Use IIFE to get human data from form
    function getInputValue(elementId) {
        return document.getElementById(elementId).value;
    }

    function createHuman() {
    
    }

    // Create Dino Compare Method 1
    DinoConstructor.prototype.compareHeight = function(height) {
   
    }
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    DinoConstructor.prototype.compareWeight = function(height) {
  
    }
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    DinoConstructor.prototype.compareDiet = function(diet) {
       
    }
    // NOTE: Weight in JSON file is in lbs, height in inches.

    // Create Dino Compare Method 3
    DinoConstructor.prototype.getRandomFact = function () {
        let index = Math.floor(Math.random() * 10) % this.facts.length;
        return this.facts[index];
    };
    // NOTE: Weight in JSON file is in lbs, height in inches.

    function getGridItem(species, imageUrl,fact) {
        let itemDiv = document.createElement("div");
        itemDiv.className = "grid-item";
    
        // add species
        let speciesDiv = document.createElement("h4");
        speciesDiv.innerText = species;
        itemDiv.appendChild(speciesDiv);
    
        // add image
        let imageDiv = document.createElement("img");
        imageDiv.src = imageUrl;
        itemDiv.appendChild(imageDiv);
    
        // add fact
        if (fact) {
            // for humans, facts are not necessary
            let factDiv = document.createElement("p");
            factDiv.innerText = fact;
            itemDiv.appendChild(factDiv);
        }
    
        return itemDiv;
    }

// On button click, prepare and display infographic
document.getElementById("btn")
    .addEventListener("click", function () {
        const human = createHuman();
        dinos.forEach(dino => {
            let index = Math.floor(Math.random()*3,10);
            switch(index){
                case 0: 
                dino.compareHeight(human.height);
                break;
                case 1:
                dino.compareWeight(human.weight);
                break;
                case 2:
                dino.compareDiet(human.diet);
                break;
            }
        });
        // Hide Form from UI
        document.getElementById("dino-compare").style.display = "none";
        // Generate Grids and add back to DOM
        for (let index in dinos) {
            let dino = dinos[index];
            let fact = dino.fact
            if(dino.species === "Pigeon"){
                fact = "All birds are dinosaurs."
            }
            let itemDiv = getGridItem(dino.species, "images/" + dino.species.toLowerCase() + ".png",fact);

            
            document.getElementById("grid")
                .appendChild(itemDiv);

            if (index == 3) {
                // insert human tile at center
                fact = ""
                let humanTileDiv = getGridItem(human.name, "images/human.png",fact);

                document.getElementById("grid")
                    .appendChild(humanTileDiv);
            }
        }
    });

    
