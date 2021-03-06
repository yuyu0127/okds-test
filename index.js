function setUserAgent(window, userAgent) {
  if (window.navigator.userAgent != userAgent) {
    var userAgentProp = { get: () => userAgent }
    try {
      Object.defineProperty(window.navigator, 'userAgent', userAgentProp)
    } catch (e) {
      window.navigator = Object.create(navigator, {
        userAgent: userAgentProp
      })
    }
  }
  console.log(window.navigator)
}
const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.99 Safari/537.36'
setUserAgent(document.querySelector('#iframe-chat').contentWindow, ua)

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
      videoId: '',
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

function changeSource(index) {
  const id = liveIds[index]
  const chatUrl = `https://www.youtube.com/live_chat?&v=${id}&embed_domain=${window.location.host.split(':')[0]}`
  ytPlayer.loadVideoById(id)
  document.getElementById('iframe-chat').src = chatUrl
}