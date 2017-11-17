var observableModule = require("data/observable");

var user = new observableModule.fromObject({
    email: "user@domain.com",
    password: "password"
});

var frameModule = require("ui/frame");

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
};

exports.signIn = function() {
    alert("Signing in");
    var topmost = frameModule.topmost();
    topmost.navigate("views/Search/Search");
};

exports.register = function() {
    alert("Signing Up")
    var topmost = frameModule.topmost();
    topmost.navigate("views/Search/Search");
};