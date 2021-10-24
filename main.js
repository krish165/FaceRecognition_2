Webcam.set(
{
    width:400,
    height:250,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("cam");
Webcam.attach("#cam");

function capture()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("output").innerHTML="<img src='"+data_uri+"id='Captured_image'>";

    });
}

console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l9chLrj26/",modelLoaded);

function modelLoaded()
{
    console.log("Model is Loading.....");}