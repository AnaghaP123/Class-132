function preload()
{
    img = loadImage("blue_desk.webp");
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