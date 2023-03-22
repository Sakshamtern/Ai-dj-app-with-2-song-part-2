Un_Poco_Loco = "";
Whopper = "";

function preload()
{
    Un_Poco_Loco = loadSound("Un Poco Loco Coco.mp3");
    Whopper = loadSound("Whopper.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500); 
}