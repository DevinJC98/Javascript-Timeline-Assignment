const y1 = document.getElementById("y1");
const y2 = document.getElementById("y2");
const y3 = document.getElementById("y3");
const y4 = document.getElementById("y4");
const pic = document.getElementById("poutinePic");
const title = document.getElementById("sectionTitle");
const text = document.getElementById("sectionDescription");

let stringcheck = "1";


const light = document.getElementById("lightMode");


light.addEventListener("click", function()
{

    light.classList.toggle("lightOn");
    document.body.classList.toggle("bodycolor");
    if(light.classList.contains("lightOn"))
    {
        light.innerHTML = "Dark Mode";
    }
    else
    {
        light.innerHTML = "Light Mode";
    }

    if(y1.classList.contains("off"))
    {
        y1.classList.toggle("lightOffButton");
        y2.classList.toggle("lightOn");
        y3.classList.toggle("lightOn");
        y4.classList.toggle("lightOn");
    }

    if(y2.classList.contains("off"))
    {
        y2.classList.toggle("lightOffButton");
        y1.classList.toggle("lightOn");
        y3.classList.toggle("lightOn");
        y4.classList.toggle("lightOn");
    }

    if(y3.classList.contains("off"))
    {
        y3.classList.toggle("lightOffButton");
        y2.classList.toggle("lightOn");
        y1.classList.toggle("lightOn");
        y4.classList.toggle("lightOn");
    }

    if(y4.classList.contains("off"))
    {
        y4.classList.toggle("lightOffButton");
        y2.classList.toggle("lightOn");
        y3.classList.toggle("lightOn");
        y1.classList.toggle("lightOn");
    }
    
})

y1.addEventListener("click", function()
{
    
    if(y1.classList.contains("off"))
    {
        y1.classList.replace("off", "on");
        y2.classList.replace("on", "off");
        y3.classList.replace("on", "off");
        y4.classList.replace("on", "off");

        pic.src = "Images/littlegoober.jpg";
        title.innerHTML = "Poutine's First Year";
        text.innerHTML = "Poutine \"Middle Name Redacted\" Campbell was born on July 1st, 2020. Because she was born on Canada Day and I am a chef, the only logical name I could give her was Poutine. In her first year, Poutine was a little fluffy ball of chaos. This was first evident when she jumped directly into the toilet bowl as a kitten within a month of me having her.";
       } 

       if(y1.classList.contains("lightOffButton"))
       {
        y1.classList.replace("lightOffButton", "lightOn");
        y2.classList.replace("lightOn", "lightOffButton");
        y3.classList.replace("lightOn", "lightOffButton");
        y4.classList.replace("lightOn", "lightOffButton");
       }
       

});
y2.addEventListener("click", function()
{
    
    if(y2.classList.contains("off"))
    {
        y2.classList.replace("off", "on");
        y1.classList.replace("on", "off");
        y3.classList.replace("on", "off");
        y4.classList.replace("on", "off");

        pic.src = "Images/2yrold.jpg";
        title.innerHTML = "Poutine's Second Year";
        text.innerHTML = "Poutine quickly grew from a cute, vicious baby, to a cute, vicious two year old. As she grew in age, so did she grow hunger. Specifically, hunger for pieces of my couch. While incredibly annoying, Poutine was also growing more comfortable living in my apartment and she quickly began to wrestle control of my home away from me."
    }
    
    if(y2.classList.contains("lightOffButton"))
        {
         y2.classList.replace("lightOffButton", "lightOn");
         y1.classList.replace("lightOn", "lightOffButton");
         y3.classList.replace("lightOn", "lightOffButton");
         y4.classList.replace("lightOn", "lightOffButton");
        }
    
});

y3.addEventListener("click", function()
{
    
    if(y3.classList.contains("off"))
    {
        y3.classList.replace("off", "on");
        y2.classList.replace("on", "off");
        y1.classList.replace("on", "off");
        y4.classList.replace("on", "off");

        pic.src = "Images/blep.jpg";
        title.innerHTML = "Poutine's Third year";
        text.innerHTML = "At the tender age of two and a bit, Poutine had began calming down slightly. That being said, she still ruled her territory with an iron fist. Her middle of the night yells, and sharp clawed stabbings were only rivalled by her desire to fall asleep and wake herself up by stretching. This always caused her to stick out her tongue, which is the cutest thing she does."
    } 

    if(y3.classList.contains("lightOffButton"))
        {
         y3.classList.replace("lightOffButton", "lightOn");
         y1.classList.replace("lightOn", "lightOffButton");
         y4.classList.replace("lightOn", "lightOffButton");
         y2.classList.replace("lightOn", "lightOffButton");
        }
   

});
y4.addEventListener("click", function()
{
    console.log("4th");
    
    if(y4.classList.contains("off"))
    {
        y4.classList.replace("off", "on");
        y2.classList.replace("on", "off");
        y3.classList.replace("on", "off");
        y1.classList.replace("on", "off");

        pic.src = "Images/sleepypout.jpg";
        title.innerHTML = "Present Day Poutine";
        text.innerHTML = "This brings us to 2024. Poutine still yells at three in the morning, yet she spends most of her time asleep in the closet. When she does decide to sleep at night, her perch is right next to my head, the perfect place to smack my face with her tail until she dozes off. Poutine is now 4 years old, and I look forward to many more years of hanging out with my fuzzy little pal."
    } 
    
    if(y4.classList.contains("lightOffButton"))
        {
         y4.classList.replace("lightOffButton", "lightOn");
         y1.classList.replace("lightOn", "lightOffButton");
         y3.classList.replace("lightOn", "lightOffButton");
         y2.classList.replace("lightOn", "lightOffButton");
        }

});