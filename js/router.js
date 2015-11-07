App.Router.map(function(){
  this.resource('register');
  this.resource('users');
  this.resource('user',{path:'users/:user_id'});

});