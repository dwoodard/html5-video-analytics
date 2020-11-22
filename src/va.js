/*
 USAGE: point va() to html5 players
 //javascript
 va('#video','video','.video')
 */
; (function (window) {
  "use strict";
  
  console.log("HTML5 Video Analytics");
  
  window.va = function (selector) {
    return new va.fn.init(arguments)
  };
  va.version = "0.0.0";
  va.players = [];
  va.sessions = [];
  va.fn = {
    init: selector => {
      let i;
      
      switch (Object.prototype.toString.call(selector[0])) {
        case "[object String]":
          let el = document.querySelectorAll(selector[0]);
          for (i = 0; i < el.length; i++) {
            va.fn.addPlayer(el[i])
          }
          break;
        case "[object Array]":
          // check for object in array
          for (i = 0; i < selector[0].length; i++) {
            switch(typeof selector[0][i]){
              case "object":
                va.fn.addPlayer(selector[0][i])
                break;
              case "string":
                //get playerObj
                let elms = document.querySelectorAll(selector[0][i].toString());
                for (let j = 0; j < elms.length; j++) {
                  va.fn.addPlayer(elms[j]);
                }
                break;
              
              default:
                console.log(selector)
                break;
            }
            
          }
          break;
        case "[object HTMLVideoElement]":
          va.fn.addPlayer(selector[0])
          break;
        default:
          console.log(selector)
          break;
      }
      
      //addEventListener
      va.fn.addEventListeners(va.players);
      
      return va.players;
    },
    emptyPlayers: () => {
      va.players = [];
    },
    addPlayer: playerObj => {
      //add player
      
      if (va.players.indexOf(playerObj)) {
        va.players.push(playerObj);
      }
    },
    addEventListeners: players => {
      
      for (let i = 0; i < va.players.length; i++) {
        
        //Loop through all players and add events
        let el = players[i];

        if (!el) {
          continue
        }
        
        var events = [
          "emptied",
          "loadstart",
          "loadedmetadata",
          "loadeddata",
          "canplay",
          "canplaythrough",
          "playing",
          "ended",
          "waiting",
          "ended",
          "durationchange",
          "timeupdate",
          "play",
          "pause",
          "ratechange",
          "volumechange",
          "click"
        ];
        
        for (const event of events) {
          
          el.addEventListener(event, e => {
            switch (e.type) {
              case 'loadstart':
                va.sessions.push({
                  'uid': window.location.hostname
                });
                 break;
              case 'loadedmetadata':
                break;
              case 'play':
                console.log('you played?');
                break;
              case 'timeupdate':
                break;
              case 'click':
                console.log('you Clicked?');
                break;
              default:
                console.log(e.type, e);
                break;
            }
  
          });
          
        }
  
      }
    },
  };
})(window);