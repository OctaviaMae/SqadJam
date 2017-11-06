/*The functionality of this file is display the playlist StackView object that is created
in Playlist.xml. This file is also responsible for the UI features suck as button typing,
swiping and populating our lists from the http request.

@Author Octavia Smith, Raphael Wies, Eric Hartig with help from Preston Wang-Stausser-Basset
@Date November 3, 2017



*/

var gestures = require('ui/gestures');
var frameModule = require('ui/frame');
var listViewModule = require('ui/list-view');



var navigateLogin = {
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

   // Define swipable gestures and their actions
   /*var myStack = page.getViewById('swipable');
   myStack.on(gestures.GestureTypes.swipe, function(args) {
     if(args.direction == gestures.SwipeDirection.right) {
       // When swiping right, navigate home using the behavior defined in the global navigateHome object
       frameModule.topmost().navigate(navigateLogin);
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

