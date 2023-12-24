function preload()
{
    img = loadImage("blue_waterbottles.png");
}

function setup()
{
    canvas = createCanvas(300, 320);
    canvas.center;
}

function draw()
{
    image(img, 0, 0, 300, 300)
}