function findPublicIPBySTUN() {

}

function findPrivateIP() {

}

function genSingleInstance(fn) {
  let inst = null

  return function () {
    return inst || (inst = new fn())
  }
}

function Peer() {
  this.connection = null

  this.__init()
  this.__setupEvents()
}

Peer.prototype.__init = function () {

  this.connection = new RTCPeerConnection({
    iceServers: [{
      urls: [
        'stun:stun.stunprotocol.org:3478',
        'stun:stun.l.google.com:19302',
        'stun:stunserver.org'
      ]
    }, {
      urls: 'turn:numb.viagenie.ca',
      credential: 'muazkh',
      username: 'webrtc@live.com'
    }]
  })

}

Peer.prototype.__setupEvents = function () {
  this.connection.onicecandidate = function (event) {
    console.log(event)
  }
}

const app = new(genSingleInstance(Peer))
console.log(app)