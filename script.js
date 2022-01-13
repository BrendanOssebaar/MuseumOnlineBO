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

var position = 0;
var img1 = "img/fotoslider0.jpg";
var img2 = "img/fotoslider1.jpg";
var img3 = "img/fotoslider2.jpg";
var img4 = "img/fotoslider3.jpg";
var img5 = "img/fotoslider4.jpg";
var img6 = "img/fotoslider5.jpg";
var img7 = "img/fotoslider6.jpg";
var img8 = "img/fotoslider7.jpg";
var imgelement =document.getElementById("img")

function onClickNext(){          
   position = position + 1;
   console.log("position is "+ position);
   setImage();

   if (position == 7){
       position = 0;
   }        
}
function onClickPrevious(){ 
   position = position - 1;

   if (position == - 1){
       position = 6;
   }    
   setImage();
 

}

function setImage(){
   if (position == 0){
       imgelemen.src = img1;  
   }
   else if(position == 1){
       imgelement.src = img2
   }
   else if (position == 2){
       imgelement.src = img3;  
   }
   else if(position == 3){
       imgelement.src = img4
   }
   else if (position == 4){
       imgelement.src = img5;  
   }
   else if(position == 5){
       imgelement.src = img6
   }
   else if (position == 6){
       imgelement.src = img7;  
   }
   

}