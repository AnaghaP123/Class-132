function preload()
{
    img = loadImage("beige_pencilcase.png");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 300, 300)
}