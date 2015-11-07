

App.RegisterController = Ember.Controller.extend({
  checkValidation: false,
  first_name:'',
  last_name:'',
  phone_number:'',
  address:'',
  email:'',
  password:'',
  re_password:'',
  actions: {
    register: function () {
      this.checking();
      if (this.get("checkValidation"))
      {
        var newUser = this.store.createRecord('user', {
          first_name: this.get("first_name"),
          last_name: this.get("last_name"),
          phone_number: this.get("phone_number"),
          address: this.get("address"),
          email: this.get("email"),
          password: this.spaceChecking(this.get("password")),
          re_password: this.spaceChecking(this.get("re_password"))
        });
        newUser.save();
        this.clearValue();
      }
    }

  },
  
  clearValue:function(){
    this.set('first_name','');
    this.set('last_name','');
    this.set('phone_number','');
    this.set('address','');
    this.set('email','');
    this.set('password','');
    this.set('re_password','');
    this.transitionToRoute('users');
  },
  checking: function () {
    if (this.get("first_name") !== "" && this.get("first_name") !== null && this.get("first_name") !== undefined &&
      this.get("last_name") !== "" && this.get("last_name") !== null && this.get("last_name") !== undefined &&
      this.get("phone_number") !== "" && this.get("phone_number") !== null && this.get("phone_number") !== undefined &&
      this.get("address") !== "" && this.get("address") !== null && this.get("address") !== undefined &&
      this.get("email") !== "" && this.get("email") !== null && this.get("email") !== undefined &&
      this.get("password") !== "" && this.get("password") !== null && this.get("password") !== undefined &&
      this.get("re_password") !== "" && this.get("re_password") !== null && this.get("re_password") !== undefined &&
      this.numberChecking(".valid-phone-number", this.get("phone_number")) &&
      this.validateEmail(this.get("email")) && this.matchPassword(this.get("password"), this.get("re_password"), ".match-password"))

    {
      this.set("checkValidation", true);
      $(".text-first_name").css("display", "none");
      $(".text-last_name").css("display", "none");
      $(".text-phone-number").css("display", "none");
      $(".valid-phone-number").css("display", "none");
      $(".text-address").css("display", "none");
      $(".text-email").css("display", "none");
      $(".valid-email").css("display", "none");
      $(".text-password").css("display", "none");
      $(".text-re-password").css("display", "none");
      $(".match-password").css("display", "none");

    }
    else
    {
      this.set("checkValidation", false);

    }


    if ($('#first_name').val() === "") {

      $('.text-first-name').css('display', 'block');
      $('#first_name').addClass("error-field");

    } else {
      $('.text-first-name').css('display', 'none');
      $('#first_name').removeClass("error-field");
    }
    if ($('#last_name').val() === "") {
      $('.text-last-name').css('display', 'block');
      $('#last_name').addClass("error-field");
    } else {
      $('.text-last-name').css('display', 'none');
      $('#last_name').removeClass("error-field");
    }
    if ($('#address').val() === "") {
      $('.text-address').css('display', 'block');
      $('#address').addClass("error-field");
    } else {
      $('.text-address').css('display', 'none');
      $('#address').removeClass("error-field");
    }
    if ($('#email').val() === "") {
      $('.text-email').css('display', 'block');
      $('#email').addClass("error-field");
    }
    else if (!this.validateEmail(this.get("email"))) {
      $('.valid-email').css('display', 'block');
      $('#email').addClass("error-field");
      $('.text-email').css('display', 'none');
    } else {
      $('.text-email').css('display', 'none');
      $('.valid-email').css('display', 'none');
      $('#email').removeClass("error-field");
    }
    if ($('#phone_number').val() === "") {
      $('.text-phone-number').css('display', 'block');
      $('#phone_number').addClass("error-field");
      
    }else if (!this.numberChecking(".valid-phone-number",this.get("phone_number")))
    {
     $('.text-phone-number').css('display', 'none');
     $('#phone_number').addClass("error-field");

   }
   else {
    $('.text-phone-number').css('display', 'none');
    $('#phone_number').removeClass("error-field");

    
  }
  if ($('#password').val() === "") {
    $('.text-password').css('display', 'block');
    $('#password').addClass("error-field");
  } else {
    $('.text-password').css('display', 'none');
    $('#password').removeClass("error-field");
  }
  if ($('#re_password').val() === "") {
    $('.text-re-password').css('display', 'block');
    $('#re_password').addClass("error-field");
  } else {
    $('.text-re-password').css('display', 'none');
    $('#re_password').removeClass("error-field");
  }
  if(!this.matchPassword(this.get("password"), this.get("re_password"), ".match-password")){
   $('#re_password').addClass("error-field");
   $('#password').addClass("error-field");
 }else{
   $('#re_password').removeClass("error-field");
   $('#password').removeClass("error-field");
 }
},
validateEmail: function (email)
{
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
},
numberChecking: function (divInfo, number) {
  var matches = number.match('^[0-9]+$');
  if (matches !== null) {
    $(divInfo).css('display', 'none');
    return true;
  }
  $(divInfo).css('display', 'block');
  return false;
},
spaceChecking: function (str) {

  if (str.indexOf(" ") !== -1) {
    str = str.split(' ').join('');
  }
  return str;
},
matchPassword: function (password1, password2, div) {
  if (password1 === password2) {
    $(div).css('display', 'none');
    return true;
  } else {
    $(div).css('display', 'block');      
    return false;
  }
}

});