const navsolar=document.querySelector("#navsolar");
const nav=document.querySelector("nav");
const navstar=document.querySelector("#navstars");
const navasteroids=document.querySelector("#navasteroids");
const navmeteors=document.querySelector("#navmeteors");
const navcomets=document.querySelector("#navcomets");
const stars=document.querySelector("#Stars");
const solar=document.querySelector("#SolarSystem");
const asteroids=document.querySelector("#asteroids");
const meteors=document.querySelector("#meteors");
const comets=document.querySelector("#comets");
const universe=document.querySelector("#Universe");
const allItems=[stars,solar,universe,asteroids,meteors,comets];
navsolar.addEventListener("click",function() {
const exeptsolar=allItems.filter(function(el){
return el!==solar;
})
exeptsolar.forEach(function(item) {
    item.style.display = "none";
  });
  solar.style.display="block";
  nav.style.background="#0D1282"
  });
navstar.addEventListener("click",function() {
   const exeptstar=allItems.filter(function(el){
   return el!==stars;
   })
exeptstar.forEach(function(item) {
    item.style.display = "none";
  });
  stars.style.display="block";
  nav.style.background=" #7A0BC0"
   });
navasteroids.addEventListener("click",function() {
   const exeptasteroid=allItems.filter(function(el){
   return el!==asteroids;
   })
exeptasteroid.forEach(function(item) {
    item.style.display = "none";
  });
 asteroids.style.display="block";
  nav.style.background="#3498db"
   });
   navmeteors.addEventListener("click",function() {
   const exeptmeteor=allItems.filter(function(el){
   return el!==meteors;
   })
exeptmeteor.forEach(function(item) {
    item.style.display = "none";
  });
meteors.style.display="block";
  nav.style.background="#9b59b6"
   });
     navcomets.addEventListener("click",function() {
   const exeptcomet=allItems.filter(function(el){
   return el!==comets;
   })
exeptcomet.forEach(function(item) {
    item.style.display = "none";
  });
comets.style.display="block";
  nav.style.background="#C400C6"
   });

	
