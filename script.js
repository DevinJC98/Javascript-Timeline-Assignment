const y1 = document.getElementById("y1");
const y2 = document.getElementById("y2");
const y3 = document.getElementById("y3");
const y4 = document.getElementById("y4");
const pic = document.getElementById("poutinePic");
const title = document.getElementById("sectionTitle");
const text = document.getElementById("sectionDescription");

let stringcheck = "1";


const light = document.getElementById("lightMode");
const dark = document.getElementById("darkMode");

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
        title.innerHTML = "None Year Old Poutine";
        text.innerHTML = "This is a paragraph about a cat. La dee doo, cat words. Filling in space. Big word, Much wow, Fries Gravy, Cheese, and cat hair. She jumped into a toilet this year and stabbed me in the butt a billion times.";
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
        title.innerHTML = "Two Year Old Poutine";
        text.innerHTML = "Second Paragraph. wow so cat. claws in my legs and  hairballs in my carpet. 3am yells and a fully destroyed couch. Update; the hairballs are just a bunch of the insides from my couch";

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
        title.innerHTML = "Three Year Old Poutine";
        text.innerHTML = "Second Paragraph. wow so cat. claws in my legs and  hairballs in my carpet. 3am yells and a fully destroyed couch. Update; the hairballs are just a bunch of the insides from my couch";
    
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
        title.innerHTML = "Three Year Old Poutine";
        text.innerHTML = "Second Paragraph. wow so cat. claws in my legs and  hairballs in my carpet. 3am yells and a fully destroyed couch. Update; the hairballs are just a bunch of the insides from my couch";
    
    } 
    
    if(y4.classList.contains("lightOffButton"))
        {
         y4.classList.replace("lightOffButton", "lightOn");
         y1.classList.replace("lightOn", "lightOffButton");
         y3.classList.replace("lightOn", "lightOffButton");
         y2.classList.replace("lightOn", "lightOffButton");
        }

});