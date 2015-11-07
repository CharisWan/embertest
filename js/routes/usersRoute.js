App.UsersRoute = Ember.Route.extend({
 controllerName: 'users',
 renderTemplate:function(){
  this.render('users');
},
model:function(){
 return this.store.find("user");
}
});
