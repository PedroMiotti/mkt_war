 const SocketEvents = {
  CLIENT_CONNECT: 'connect',
  CLIENT_DISCONNECT: 'disconnect',
  CLIENT_JOIN_MATCH: 'join:match',
  CLIENT_UPDATE_STATUS: 'online:player',
  CLIENT_LEAVE_MATCH: 'leave:match',
  CLIENT_SET_READY: 'ready:match',
  CLIENT_INVITE_PLAYER: 'invite:match',
  CLIENT_DENY_INVITE: 'deny:invite',
  CLIENT_ANSWER_QUESTION: 'answer:question',
  CLIENT_USER_READY: 'user-ready:match',
  

  SERVER_SEND_INVITE: 'send:invite',
  SERVER_PLAYER_DENIED_INVITE: 'denied-invite:match',

  SERVER_PLAYER_JOINED: 'player-joined:match',
  SERVER_PLAYER_READY: 'player-ready:match',
  SERVER_PLAYER_LEFT: 'player-left:match',

  SERVER_MATCH_START: 'start:match',
  SERVER_MATCH_START_ROUND: 'start-round:match',
  SERVER_MATCH_START_QUESTION: 'start-question:match',
  SERVER_MATCH_COUNTDOWN: 'countdown:match',
  SERVER_MATCH_END_ROUND: 'end-round:match',
  SERVER_MATCH_END: 'end:match',
  
}


export default SocketEvents;
