const bx1 = document.querySelector(".bx1");
const bx2 = document.querySelector(".bx2");
const bx3 = document.querySelector(".bx3");

bx1.addEventListener("click", function () {
  popImg("https://www.mlive.com/resizer/U6L17LXPndnCG_OeeQaWh3sIrFI=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/grand-haven/photo/ghaps-book-donations-photo2jpg-b642d64a2a09b1a4.jpg");
});

bx2.addEventListener("click", function () {
  popImg("https://th.bing.com/th/id/R.0d2b4c55fe0693593c5e3a48946fab10?rik=ieIU0pr6AJ8k5A&pid=ImgRaw&r=0");
});

bx3.addEventListener("click", function () {
  popImg("https://thumbs.dreamstime.com/b/relaxed-students-signing-their-friend-playing-guitar-going-out-singing-together-group-best-university-friends-sitting-121651238.jpg");
});


function popImg(link) {
  const enlargedImg = document.createElement("div");
  enlargedImg.className = "enlarged-img";

  const img = document.createElement("img");
  img.src = link;
  img.style.width = "800px";
  img.style.height = "600px";
  img.style.borderRadius ="10px";
  enlargedImg.appendChild(img);

  enlargedImg.style.position = "fixed";
  enlargedImg.style.top = "50%";
  enlargedImg.style.left = "50%";
  enlargedImg.style.transform = "translate(-50%, -50%)";
  enlargedImg.style.padding = "100%";
  enlargedImg.style.backgroundColor ="transparent";
  enlargedImg.style.zIndex = "9999";
  enlargedImg.style.backdropFilter = "blur(10px)";

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "&times;";
  closeBtn.className = "close-btn";
  closeBtn.style.position = "relative";
  closeBtn.style.top = "-630px";
  closeBtn.style.right = "-800px";
  closeBtn.style.fontSize = "20px";
  closeBtn.style.fontWeight = "bold";
  closeBtn.style.color = "#000";
  closeBtn.style.backgroundColor = "#fff";
  closeBtn.style.border = "none";
  closeBtn.style.borderRadius = "50%";
  closeBtn.style.padding = "10px";
  closeBtn.style.cursor = "pointer";
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(enlargedImg);
  });
  enlargedImg.appendChild(closeBtn);


  document.body.appendChild(enlargedImg);
}

