$("#contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 70
      },
      from: {
        typeof:String,
        minlength: 2,
        maxlength: 70
      },
      age: {
        required: true,
        digits: true,
        minlength: 2,
        maxlength: 3
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        digits: true,
        minlength: 9,
        maxlength: 10
      }
    }
  });
  function validateForm() {
    let x = document.forms["myForm"]["name"&"age"&"email"&"phone"].value;
    if (x == "") {
      alert("Name, Age, Email And Phone Number must be filled out");
      return false;
    }
  };