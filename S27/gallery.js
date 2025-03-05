let mainPhoto = document.getElementById("main-photo");
let photoItems = document.getElementsByClassName("photo-item");

function selectPhoto(photo) {
  for (let i = 0; i < photoItems.length; i++) {
    photoItems[i].classList.remove("selected-photo");
  }

  photo.classList.add("selected-photo");

  mainPhoto.src = photo.src;
}

for (let i = 0; i < photoItems.length; i++) {
  photoItems[i].onclick = function () {
    selectPhoto(photoItems[i]);
  };
}

// let mainPhoto = document.getElementById("main-photo");
// let photo1 = document.getElementsByClassName("photo-item")[0];
// let photo2 = document.getElementsByClassName("photo-item")[1];
// let photo3 = document.getElementsByClassName("photo-item")[2];
// let photo4 = document.getElementsByClassName("photo-item")[3];

// function selectPhoto(photo) {
//   photo1.classList.remove("selected-photo");
//   photo2.classList.remove("selected-photo");
//   photo3.classList.remove("selected-photo");
//   photo4.classList.remove("selected-photo");
//   photo.classList.add("selected-photo");

//   mainPhoto.src = photo.src;
// }

// photo1.onclick = function () {
//   selectPhoto(photo1);
// };

// photo2.onclick = function () {
//   selectPhoto(photo2);
// };

// photo3.onclick = function () {
//   selectPhoto(photo3);
// };

// photo4.onclick = function () {
//   selectPhoto(photo4);
// };
