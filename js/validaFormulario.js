

// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"

  $("#formaRegistro").validate({ 
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      emailText: "required", 
      passwordText: "required"

    }, 
    // Specify validation error messages

    messages: { 
      emailText: "Introduce E-mail",
      passwordText: "Introduce un Password"

    }, 

    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });




 
  
  $("#formaRegistro").validate({ 
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      emailText: "required", 
      passwordText: "required"

    }, 
    // Specify validation error messages

    messages: { 
      emailText: "Introduce E-mail",
      passwordText: "Introduce un Password"

    }, 

    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });



});