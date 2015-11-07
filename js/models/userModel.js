App.UserModel = DS.Model.extend({  

  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  phone_number: DS.attr('number'),
  email: DS.attr('string'),
  password:DS.attr('string'),
  re_password:DS.attr('string'),
  address: DS.attr('string'),
});
