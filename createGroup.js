var frameModule = require("ui/frame");


exports.loaded = function(){
console.log("hello");
};

exports.createNew= function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/Playlist/Playlist");
};