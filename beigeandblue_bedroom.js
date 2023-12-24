function preload()
{
    img = loadImage("beigeandblue_bedroom.webp");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center;
}

function draw()
{
    image(img, 0, 0, 300, 300)
}