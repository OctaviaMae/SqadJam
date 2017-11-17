/*The functionality of this file is display the playlist StackView object that is created
in Playlist.xml. This file is also responsible for the UI features suck as button typing,
swiping and populating our lists from the http request.

@Author Octavia Smith, Raphael Wies, Azra Arab and Eric Hartig with help from Preston Wang-Stausser-Basset
@Date November 3, 2017



*/

var gestures = require('ui/gestures');
var frameModule = require('ui/frame');
var listViewModule = require('ui/list-view');
var labelModules = require('ui/label');
var http = require("http");
var UserViewModel = require("../../shared/view-models/user-view-model");
var observableModule = require("data/observable").Observable;
var fetchModule = require("fetch");



/*
The puropse of this function is to gather information 
*/
exports.loaded = function(args){

var page = args.object;

var url = "http://46cdb31b.ngrok.io/api/search/" + "beyonce"; //beyonce is a test value

console.log(url);

fetchModule.fetch(url).then(response => {return response.json();}).then(function(r){
      console.log(JSON.stringify(r.entries));
       page.bindingContext = r;
       console.log("DONE");
     }
     );
}
function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 0;
    viewModel.message = countLikes(viewModel.counter);

    viewModel.onTap = function() {
        this.counter++;
        this.set("Like", countLikes(this.counter));
    }

    return viewModel;
}
/*var navigateLogin = {
  moduleName: 'views/login/login',
  animated: true,
  backstackVisible: false,
  clearHistory: true,
  transition: {
    name: 'slideRight'

 }
 };

 function onNavigatingTo(args) {
   var page = args.object;

 
     }
   });*/

     ///page.bindingContext = listViewModel;
     page.bindingContext = {
        myItems: [{ artist: 'name1' , name: 'name2' }]
     };
   }

   exports.goBack = function() {
     frameModule.topmost().navigate(navigateLogin);
   };


   // Add onNavigatingTo to module.exports so it can be accessed in the XML page
   exports.onNavigatingTo = onNavigatingTo;​

