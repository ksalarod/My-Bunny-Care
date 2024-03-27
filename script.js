//Karla
//Script.js
//3.26.24



//Hamburger menu functionfunction menu() {  
 var navlinks = document.getElementById("nav-links");  
  var menuicon = document.getElementById("icon");  
   if (navlinks.style.display === "block") {     
    navlinks.style.display = "none";   
       menuicon.style.color = "#2a1f14";  
        } else {     
         navlinks.style.display = "block";     
          menuicon.style.color = "#f6eee4";   