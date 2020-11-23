/*
 USAGE: point va() to html5 players
 //javascript
 va('#video','video','.video')
 */
(function (window) {
  'use strict'

  console.log('HTML5 Video Analytics')

  window.va = function (selector, options) {
    return new va.fn.init(arguments, options)
  }
  va.version = '0.0.1'
  va.players = []
  va.sessions = []
  va.options = {
    heatMap: true
  }
  va.fn = {
    init: (selector, options) => {
      va.options = Object.assign(va.options, options)

      switch (Object.prototype.toString.call(selector[0])) {
        case '[object String]':
          const el = document.querySelectorAll(selector[0])
          for (let i = 0; i < el.length; i++) {
            va.fn.addPlayer(el[i])
          }
          break
        case '[object Array]':
          // check for object in array
          for (i = 0; i < selector[0].length; i++) {
            switch (typeof selector[0][i]) {
              case 'object':
                va.fn.addPlayer(selector[0][i])
                break
              case 'string':
                // get playerObj
                const elms = document.querySelectorAll(selector[0][i].toString())
                for (let j = 0; j < elms.length; j++) {
                  va.fn.addPlayer(elms[j])
                }
                break

              default:
                console.log(selector)
                break
            }
          }
          break
        case '[object HTMLVideoElement]':
          va.fn.addPlayer(selector[0])
          break
        default:
          console.log(selector)
          break
      }

      // addEventListener
      va.fn.addEventListeners(va.players)

      return va.players
    },
    emptyPlayers: () => {
      va.players = []
    },
    addPlayer: playerObj => {
      // add player
      if (va.players.indexOf(playerObj)) {
        va.players.push(playerObj)
      }
    },
    getPlayerByEvent: event => {
      return va.sessions.filter(v => v.player === event.target).length
        ? va.sessions.filter(v => v.player === event.target)[0]
        : null
    },
    addEventListeners: players => {
      for (let i = 0; i < va.players.length; i++) {
        // Loop through all players and add events
        const el = players[i]

        if (!el) {
          continue
        }

        const events = [
          'loadstart',
          'progress',
          'suspend',
          'abort',
          'error',
          'emptied',
          'stalled',
          'loadedmetadata',
          'loadeddata',
          'canplay',
          'canplaythrough',
          'playing',
          'played',
          'waiting',
          'seeking',
          'seeked',
          'ended',
          'durationchange',
          // 'timeupdate',
          'play',
          'pause',
          'ratechange',
          'playbackrate',
          // 'resize',
          'volumechange'
        ]

        for (const event of events) {
          el.addEventListener(event, e => {
            // console.log(e.type)

            switch (e.type) {
              case 'loadstart':
                va.sessions.push((new SessionVideo(el)))
                break
              case 'loadedmetadata':
                break
              case 'play':
                va.fn.getPlayerByEvent(e).data.push((new SessionVideoEvent(e)))
                break
              case 'played':
                break
              case 'pause':
                va.fn.getPlayerByEvent(e).data.push((new SessionVideoEvent(e)))
                break
              case 'timeupdate':
                break
              case 'click':
                va.fn.getPlayerByEvent(e).data.push((new SessionVideoEvent(e)))
                break
              case 'waiting':
                break
              case 'durationchange':
                va.fn.getPlayerByEvent(e).data.push((new SessionVideoEvent(e)))
                break
              case 'suspend':
                break
              case 'loadeddata':
                break
              case 'canplay':
                break
              case 'canplaythrough':
                break
              case 'seeking':
                // va.fn.getPlayerByEvent(e).data.push((new SessionEvent(e)))
                break
              case 'seeked':
                va.fn.getPlayerByEvent(e).data.push((new SessionVideoEvent(e)))
                break
              case 'playing':
                break
              case 'resize':
                va.fn.getPlayerByEvent(e).data.push((new SessionVideoEvent(e)))
                break
              case 'ratechange':
                va.fn.getPlayerByEvent(e).data.push((new SessionVideoEvent(e)))
                break
              case 'volumechange':
                console.log(e.target.volume)
                va.fn.getPlayerByEvent(e).data.push((new SessionVideoEvent(e)))
                break
              case 'progress':
                // va.fn.getPlayerByEvent(e).data.push((new SessionEvent(e)))
                break
              case 'error':
                break
              default:
                // console.log(e);
                console.log('   -------- default', e.type)
                break
            }
          })
        }
      }
    }

  }
})(window)

class SessionVideo {
  constructor (el) {
    this.player = el
    this.currentSrc = el.currentSrc
    this.data = []
  }
}

class SessionVideoEvent {
  constructor (event) {
    this.event = event
    this.type = event.type
    this.currentTime = event.target.currentTime
    // this.duration = event.target.duration
    this.volume = event.target.volume
    this.playbackRate = event.target.playbackRate
    // this.timeleft = event.target.duration ? event.target.duration - event.target.currentTime : null
    // console.log(this)
  }
}
