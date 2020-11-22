/*
 USAGE: point va() to html5 players
 //javascript
 va('#video','video','.video')
 */
(function (window) {
  'use strict'

  console.log('HTML5 Video Analytics')

  window.va = function (selector) {
    return new va.fn.init(arguments)
  }
  va.version = '0.0.1'
  va.players = []
  va.sessions = []

  va.fn = {
    init: selector => {
      switch (Object.prototype.toString.call(selector[0])) {
        case '[object String]':
          const el = document.querySelectorAll(selector[0])
          for (var i = 0; i < el.length; i++) {
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
        ? va.sessions.filter(v => v.player === event.target)[0] : null
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
          'timeupdate',
          'play',
          'pause',
          'ratechange',
          'resize',
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
                va.fn.getPlayerByEvent(e).data.push((new SessionEvent(e)))
                break
              case 'played':
                break
              case 'pause':
                va.fn.getPlayerByEvent(e).data.push((new SessionEvent(e)))
                break
              case 'timeupdate':
                break
              case 'click':
                va.fn.getPlayerByEvent(e).data.push((new SessionEvent(e)))
                break
              case 'waiting':
                break
              case 'durationchange':
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
                break
              case 'seeked':
                break
              case 'playing':
                break
              case 'resize':
                break
              case 'volumechange':
                break
              case 'progress':
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

class SessionEvent {
  constructor (event) {
    this.type = event.type
    this.actionTime = event.target.currentTime
  }
}
