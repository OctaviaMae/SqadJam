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

