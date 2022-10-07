objects = [];
status="";
img="";
function preload(){
img=loadImage("IMG-1544.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function draw(){
image(img,0,0,640,420);
if(status != ""){
    for(i = 0; i<objects.length; i++){
        document.getElementById("status").innerHTML="Status:Object detected";
        fill("red");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+ " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
        noFill();
        stroke("red");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}
function modelloaded(){
    console.log("Model is loaded");
    status = "true";
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);
}
else{
console.log(results);
objects=results
}
}