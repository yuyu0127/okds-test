const tag = document.createElement('script')
tag.src = 'https://www.youtube.com/iframe_api'
const firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

let ytPlayer
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player(
    'iframe-livestream',
    {
      width: 640,
      height: 390,
      videoId: '5qap5aO4i9A',
      playerVars: {
        disablekb: 0,
        modestbranding: 1,
        playsinline: 1,
      },
      events: {
        'onReady': onPlayerReady,
        'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
        'onStateChange': onPlayerStateChange,
        'onError': onPlayerError,
      }
    }
  )
}

function onPlayerReady(event) {
  changeSource()
  event.target.mute()
  event.target.playVideo()
}
function onPlayerPlaybackQualityChange(event) { }
function onPlayerStateChange(event) { }
function onPlayerError(event) { }

const liveIds = [
  '5qap5aO4i9A',
  'DWcJFNfaw9c'
]
let index = 0

function changeSource() {
  index = (index + 1) % liveIds.length
  const id = liveIds[index]
  const chatUrl = `https://www.youtube.com/live_chat?&v=${id}&embed_domain=${window.location.host.split(':')[0]}`
  ytPlayer.loadVideoById(id)
  document.getElementById('iframe-chat').src = chatUrl
}