const titel = document.getElementById("title");
const foto = document.getElementById("foto");
const myInput = document.getElementById("myInput")
let locaties = [
    {
        "title":"Locatie 0",
        "image":"img/0.jpg"
    },
    {
        "title":"Locatie 1",
        "image":"img/1.jpg"
    },
    {
        "title":"Locatie 2",
        "image":"img/2.jpg"
    },
    {
        "title":"Locatie 3",
        "image":"img/3.jpg"
    },
    {
        "title":"Locatie 4",
        "image":"img/4.jpg"
    },
    {
        "title":"Locatie 5",
        "image":"img/5.jpg"
    },
    {
        "title":"Locatie 6",
        "image":"img/6.jpg"
    },
    {
        "title":"Locatie 7",
        "image":"img/7.jpg"
    },
    {
        "title":"Locatie 8",
        "image":"img/8.jpg"
    },
    {
        "title":"Locatie 9",
        "image":"img/9.jpg"
    },
    {
        "title":"Locatie 10",
        "image":"img/10.jpg"
    },
    {
        "title":"Locatie 11",
        "image":"img/11.jpg"
    }
]

function show(index){
    titel.innerHTML = locaties[index].title;
    foto.src = locaties[index].image;
}

function getInput(){
    show(myInput.value);
    myInput.value="";
    myInput.focus();
}