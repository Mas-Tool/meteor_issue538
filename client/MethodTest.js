/**
 * Created with JetBrains WebStorm.
 * User: miky
 * Date: 12/10/12
 * Time: 11:31 PM
 * To change this template use File | Settings | File Templates.
 */
Template.hello.events({
    'click #btnSendMessage' : function () {
        // template data, if any, is available in 'this'
        Meteor.call('SendMessage','You clicked the button',function(error,result){
            if(result)
                alert(result);
        });
    }
});
