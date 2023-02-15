//Videi

const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
var source = document.getElementById('video-source')
var playlist = document.getElementById('video')

arrowRight.addEventListener('click', loadNextVideo)
arrowLeft.addEventListener('click', loadPreviousVideo)



function loadNextVideo() {
  var filename = '';
  if (source.getAttribute("src") == "video/wedding_intro.mp4") {
    filename = "baby_intro";
  } else {
    filename = "wedding_intro";
  }

  source.src = "video/" + filename + ".mp4";
  playlist.load();
  playlist.play();

}

function loadPreviousVideo() {
  var filename = '';
  if (source.getAttribute("src") == "video/baby_intro.mp4") {
    filename = "wedding_intro";
  } else {
    filename = "baby_intro";
  }

  source.src = "video/" + filename + ".mp4";
  playlist.load();
  playlist.play();

}

//fotografije

const photos = document.querySelectorAll('.photo')
const body = document.body
const btnLeft = document.querySelector('.arrow-left')
const btnRight = document.querySelector('.arrow-right')

let activePhoto = 0;

btnRight.addEventListener('click', () => {
  activePhoto++

  if (activePhoto > photos.length - 1) {
    activePhoto = 0
  }
  setBgToBody()
  setActivePhoto()
})

btnLeft.addEventListener('click', () => {
  activePhoto--

  if (activePhoto < 0) {
    activePhoto = photos.length - 1
  }
  setBgToBody()


  setActivePhoto()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = photos[activePhoto].style.backgroundImage
}


function setActivePhoto() {
  photos.forEach(photo =>
    photo.classList.remove('active')
  )

  photos[activePhoto].classList.add('active')
}
