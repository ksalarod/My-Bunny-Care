//Karla
//Script.js
//3.26.24


//Global  variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");
//Hamburger menu functionfunction menu() {  
 var navlinks = document.getElementById("nav-links");  
  var menuicon = document.getElementById("icon");  
   if (navlinks.style.display === "block") {     
    navlinks.style.display = "none";   
       menuicon.style.color = "#2a1f14";  
        } else {     
         navlinks.style.display = "block";     
          menuicon.style.color = "#f6eee4";   
//Function to display the first answer
    function   ans1() {  
     heading.style.display = "block";
     answer.textContent = "Step back and observe the situation for a few minutes. Wait to see if a parent arrives. If the animal is in immediate danger from a predator or is in the road, remove the baby and bring to a rescue center.";
    }
    //Function to display the second answer
    function ans2() { 
     heading.style.display = "block";
     answer.textContent = "You cannot tell if an animal has rabies simply by seeing it. A test must be performed to determine if an animal has rabies. Do not approach wildlife that you suspect might be rabid. Contact us to have the animal removed.";
    }
    //Function to display the third answerfunction ans3() {   
    heading.style.display = "block";
    
    answer.textContent = "No. This is a myth. The parents will retrieve the baby bird and place it back in its nest. If the parents do not return, contact us.";
   }
//Function to display the fourth answerfunction ans4() {  
heading.style.display = "block";
answer.textContent = "We need volunteers to help feed animals, care for animals, and clean animal pens. We also accept donations.";}
