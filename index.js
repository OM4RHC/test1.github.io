const yesbtn = document.querySelector("#yesbtn");

yesbtn.addEventListener("click",function() {

    alert("Ya sabía que querías jiji");

})


const notbtn = document.querySelector("#notbtn");

notbtn.addEventListener("mouseover",function() {

   const randomX = parseInt (Math.random()*100);

   const randomY = parseInt (Math.random()*100);

   notbtn.style.setProperty("top",randomY +"%");

   notbtn.style.setProperty("left",randomX +"%");

   notbtn.style.setProperty("transform","translate(-${randomX}%,-${randomY}%)");
   
})
