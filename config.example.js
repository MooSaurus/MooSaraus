/*

88b           d88                             ad88888ba                                                                
888b         d888                            d8"     "8b                                                               
88`8b       d8'88                            Y8,                                                                       
88 `8b     d8' 88   ,adPPYba,    ,adPPYba,   `Y8aaaaa,    ,adPPYYba,  88       88  8b,dPPYba,  88       88  ,adPPYba,  
88  `8b   d8'  88  a8"     "8a  a8"     "8a    `"""""8b,  ""     `Y8  88       88  88P'   "Y8  88       88  I8[    ""  
88   `8b d8'   88  8b       d8  8b       d8          `8b  ,adPPPPP88  88       88  88          88       88   `"Y8ba,   
88    `888'    88  "8a,   ,a8"  "8a,   ,a8"  Y8a     a8P  88,    ,88  "8a,   ,a88  88          "8a,   ,a88  aa    ]8I  
88     `8'     88   `"YbbdP"'    `"YbbdP"'    "Y88888P"   `"8bbdP"Y8   `"YbbdP'Y8  88           `"YbbdP'Y8  `"YbbdP"'                                                                                                         

©2024-2025 Moo9xi & DJ Stomp
MIT License
See the LICENSE file for details
*/

module.exports = {    
    token: "", // token
    clientId: "", // bot id
    prefix: "!", // prefix
    language: "en", // ar for arabic | en for english
    verbose: true,
    musicCardPath: "./musicard.png",
    enableLogging: true,
    djRoleName: "MooSaurus",
    aliases: {
      play: ["p", "start", "playmusic"],
      pause: ["hold", "stopmusic"],
      resume: ["r", "continue"],
      skip: ["s", "next", "jump"],
      stop: ["end", "terminate"],
      volumeUp: ["vup", "increasevolume"],
      volumeDown: ["vdown", "decreasevolume"],
      repeat: ["loop"],
      queue: ["q"],
      nowplaying: ["np"],
      clear: ["c"],
      remove: ["rm", "delete"]
  }

};
