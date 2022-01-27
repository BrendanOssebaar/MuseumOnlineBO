
//INTERACTIVE ROUTE CODE
const myTitle = document.getElementById("myTitle")
const myImage = document.getElementById("myImage")
const myInput = document.getElementById("myInput")

const knopNoord = document.getElementById('knopNoord')
const knopOost = document.getElementById('knopoost')
const knopZuid = document.getElementById('knopZuid')
const knopWest = document.getElementById('knopWest')

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest'),
}
let current_index = 0;

let lokaties =
    [
        { //binnenplaapt
            "titel": "Binnenplaats",
            "image": "img/InteractiveRoute/binnenplaats.PNG",
            "directions": {
                "noord": 1,
                "oost": 2,
                "zuid": 3,
                "west": 4,
            }
        },
        { //boven
            "titel": "Ingang",
            "image": "img/InteractiveRoute/ingang.PNG",
            "directions": {
                "zuid": 0,
            }
        },
        { //rechts
            "titel": "Navigatie en oude kaarten",
            "image": "img/InteractiveRoute/rechts.PNG",
            "directions": {
                "west": 0,
            }
        },
        {//beneden
            "titel": "onderwater tentoonstelling",
            "image": "img/InteractiveRoute/beneden.PNG",
            "directions": {
                "noord": 0,

            }
        },
        { //links
            "titel": "de goude eeuw tentoonstelling",
            "image": "img/InteractiveRoute/Links.PNG",
            "directions": {
                "oost": 0,
            }
        }
    ]
//myTitle.innerHTML = "dit is door het script toegevoegd"//
//myImage.src = "img/1.jpg"//

function show(index) {
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;

    //Knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections() {
    // haal de mogelijke directions op voor de current_index
    let possible = lokaties[current_index].directions;

    // Zet de directions keys in een aparte variabele
    let possible_keys = Object.keys(possible);

    console.log(possible)
    console.log(possible_keys)

    // Zet de keys van de buttons in een aparte variable
    let button_keys = Object.keys(directionButtons);
    console.log(button_keys)

    // Zet eerst alle knoppen uit
    for (const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    // Zet nu de mogelijke knoppen (directions) aan
    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }

    

}

function getInput() {
    show(myInput.value);
    //console.log(myInput.value)
    myInput.value = "";
    myInput.focus();

}

function goDirection(richting) {
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);

}

show(0);