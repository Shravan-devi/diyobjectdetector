function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    
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
}