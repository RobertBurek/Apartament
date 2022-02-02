let morePhotos = document.getElementById("morePhotos");
let fewerPhotos = document.getElementById("fewerPhotos");
let photoHide = document.querySelectorAll("div .photo.hide");
photoHide = [...photoHide];
photoHide.push(morePhotos);
photoHide.push(fewerPhotos);
console.log(photoHide);

morePhotos.addEventListener('click', function(){
    photoHide.forEach((photo)=> photo.classList.toggle("hide"));
})

fewerPhotos.addEventListener('click', function(){
    photoHide.forEach((photo)=> photo.classList.toggle("hide"));
})
