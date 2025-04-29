const videos = ["videos/video1.webm", "videos/video2.webm", "videos/video3.webm"]; // Correct video paths
let currentVideoIndex = 0;
const videoPlayer = document.getElementById("videoPlayer");

function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
}

videoPlayer.src = videos[currentVideoIndex];
videoPlayer.addEventListener("ended", playNextVideo);

// Extra content text animation
const extraTexts = document.querySelectorAll(".extra-text");
let currentTextIndex = 0;

function changeText() {
    extraTexts.forEach(text => text.classList.remove("active"));
    extraTexts[currentTextIndex].classList.add("active");
    currentTextIndex = (currentTextIndex + 1) % extraTexts.length;
}

changeText();
setInterval(changeText, 4000);





{/* <script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script> */}
