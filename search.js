/*The functionality of this file is display the search StackView object that is created
in search.xml. This file is also responsible for the UI features suck as button typing,
swiping and populating our lists from the http request.
@Author Octavia Smith, Raphael Wieland, Eric Hartig with help from Preston Wang-Stausser-Basset
@Date November 12, 2017
*/

var gestures = require('ui/gestures');
var frameModule = require('ui/frame');
var listViewModule = require('ui/list-view');
const request = require('request');



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

     ///page.bindingContext = listViewModel
   var searchString = "Hello";
   request.get('http://songapp.ddns.net:8000/api/search:'+searchString, (error, response, body) => {
     let json = JSON.parse(body.entries);
      page.bindingContext = json;
   });
     
    
   }

   exports.goBack = function() {
     frameModule.topmost().navigate(navigateLogin);
   };


   // Add onNavigatingTo to module.exports so it can be accessed in the XML page
   exports.onNavigatingTo = onNavigatingTo;​
