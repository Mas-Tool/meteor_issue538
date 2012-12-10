

if (Meteor.isServer) {
  Meteor.startup(function () {
      // code to run on server at startup
      Meteor.methods({SendMessage:function(text){
          return "Received: "+text + " from "+Meteor.userId();;
      }})
  });
}
