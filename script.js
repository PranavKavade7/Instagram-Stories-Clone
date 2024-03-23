var arr = [
  
  { dp: "https://ideogram.ai/api/images/direct/Jrp7xixLRPqFprjgS2gVYA.jpg",
  story:"https://ideogram.ai/api/images/direct/Jrp7xixLRPqFprjgS2gVYA.jpg" },
  { dp: "https://i.pinimg.com/236x/6d/28/d4/6d28d457c6ba3c58f7fe97c08d64d041.jpg",
  story:"https://i.pinimg.com/564x/a4/c6/4e/a4c64e3a809813a812ea34b5171f7161.jpg" },
  { dp: "https://images.pexels.com/photos/11619096/pexels-photo-11619096.jpeg?auto=compress&cs=tinysrgb&w=600",
  story:"https://images.pexels.com/photos/11619096/pexels-photo-11619096.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { dp: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600",
  story:"https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600s" },
  { dp: "https://images.pexels.com/photos/17377646/pexels-photo-17377646/free-photo-of-manhattan-skyscrapers-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600",
  story:"https://images.pexels.com/photos/17377646/pexels-photo-17377646/free-photo-of-manhattan-skyscrapers-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { dp: "https://images.pexels.com/photos/4711781/pexels-photo-4711781.jpeg?auto=compress&cs=tinysrgb&w=600",
  story:"https://images.pexels.com/photos/4711781/pexels-photo-4711781.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { dp: "https://images.pexels.com/photos/10012492/pexels-photo-10012492.jpeg?auto=compress&cs=tinysrgb&w=600",
  story:"https://images.pexels.com/photos/10012492/pexels-photo-10012492.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { dp: "https://images.pexels.com/photos/7774931/pexels-photo-7774931.jpeg?auto=compress&cs=tinysrgb&w=600",
  story:"https://images.pexels.com/photos/7774931/pexels-photo-7774931.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { dp: "https://images.pexels.com/photos/19383905/pexels-photo-19383905/free-photo-of-climate-cold-glacier-snow.jpeg?auto=compress&cs=tinysrgb&w=600",
  story:"https://images.pexels.com/photos/19383905/pexels-photo-19383905/free-photo-of-climate-cold-glacier-snow.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function (elem,idx) {
    clutter += `<div class = "story">
    <img id="${idx}" src="${elem.dp}" alt= "">
    </div>`
});
storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display ="block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display ="none"
    },3000)
});

let liked = false;
    let likeCount = 0;

    function like() {
      const heart = document.querySelector('.heart');
      if (!liked) {
        heart.classList.add('red');
        likeCount++;
        document.getElementById('like-count').innerText = likeCount;
        liked = true;
      } else {
        heart.classList.remove('red');
        likeCount--;
        document.getElementById('like-count').innerText = likeCount;
        liked = false;
      }
    }

    function comment() {
       alert('Comment uploaded!');
    }

    function forward() {
      alert('Forwarded!');
    }