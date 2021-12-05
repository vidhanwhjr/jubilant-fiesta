noseX ="";
noseY ="";
function preload(){
  mustache_img = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.position( 650, 200);
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw(){
   image(video, 0, 0, 300, 300);
   image(mustache_img, noseX, noseY, 30, 50);
}

function download(){
    save('mustachefilter.png');
}

function modelLoaded(){
    console.log("MODEL LOADED");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.leftEye.x;
        noseY = results[0].pose.leftEye.y;
    }
}

