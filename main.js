import string from './css'


const player = {
  n: 1,
  time: 100,
  interval: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },

  init: () => {

    player.play()
    player.bindEvents()
  },
  events: {
    '#pause': 'stop',
    '#start': 'play',
    '#slow': 'slow',
    '#fast': 'fast',
    '#normal': 'normal'
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  fn: () => {
    player.n+=1
    if (player.n > string.length) {
      window.clearInterval(player.interval)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    player.interval = setInterval(player.fn, player.time)
  },
  stop: () => {
    window.clearInterval(player.interval)
  },
  slow: () => {
    player.stop()
    player.time = 300
    player.play()
  },
  normal: () => {
    player.stop()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.stop()
    player.time = 0
    player.play()
  }
}
player.init()





