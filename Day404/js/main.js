let galleryImages = document.querySelectorAll(".galleryImages");

let gallery = document.querySelector("#gallery");
let fullScreen = document.querySelector("#fullScreen");

let titleName = document.querySelector("#titleName");
let close = document.querySelector("#close");
let fullScreenImage = document.querySelector("#fullScreenImage");

galleryImages.forEach((images , index)=>{
    images.addEventListener("click" , ()=>{
        titleName.innerText = `Image No #${index + 1}`;
        fullScreenImage.src = images.src;
        gallery.style.display = "none";
        fullScreen.style.display = "block";
    });
});

close.addEventListener("click" , ()=>{
    gallery.style.display = "grid";
        fullScreen.style.display = "none";
});