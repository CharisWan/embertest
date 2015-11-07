App.UserController = Ember.ObjectController.extend({
  isEditing:false,
  needs:['register'],
  actions:{
   edit:function(){
     this.set('isEditing', true);  
   },
   save:function(){
     this.set('isEditing', false);  
    // this.get("controllers.register").numberChecking(".valid-phone-number", this.get('model').get("phone_number"));
     this.get("model").save();
   },
   delete:function(){
    this.get('model').destroyRecord();
    this.transitionToRoute('users');     
  },
  back:function(){
   this.transitionToRoute('users'); 
 }
}
});