const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let ytPlayer
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player(
    'iframe-livestream',
    {
      width: 640,
      height: 390,
      videoId: '5qap5aO4i9A',
      playerVars: { 'autoplay': 1, 'controls': 0 },
      events: {
        'onReady': onPlayerReady,
        'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
        'onStateChange': onPlayerStateChange,
        'onError': onPlayerError
      }
    }
  );
}

function onPlayerReady(event) {
  event.target.playVideo()
}

function onPlayerPlaybackQualityChange(event) { }
function onPlayerStateChange(event) { }
function onPlayerError(event) { }

// const liveIds = [
//   "5qap5aO4i9A",
//   "DWcJFNfaw9c"
// ]
// let index = 0

// function changeSource() {
//   index = (index + 1) % liveIds.length
//   const url = `https://www.youtube.com/embed/${liveIds[index]}?modestbranding=1&autoplay=1&mute=1&playsinline=1&controls=1`
//   console.log(url)
//   document.getElementById('iframe-livestream').contentWindow.location.replace(url)
// }