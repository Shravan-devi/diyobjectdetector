status1= ""
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    Object_Detector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status: detecting objects";
}

function modelLoaded(){
    console.log(" Model Loaded");
    status1= true;
    Object_Detector.detect(img, gotResults);

}

function gotResults(error,results){
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
    }
}
function preload(){
    img= loadImage("dog_cat.jpg");

}

function draw(){
    image(img,0,0,640,420);
    stroke("#FF0000");
    noFill();
    rect(30,60,450,350);
    fill("#FF0000");
    text("Dog",45,75);

    stroke("#FF0000");
    noFill();
    rect(300,90,270,320);
    fill("#FF0000");
    text("Cat",320,120);
}