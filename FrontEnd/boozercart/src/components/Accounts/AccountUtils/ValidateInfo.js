export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username is required";
  }
  // if (!values.lastname.trim()) {
  //   errors.lastname = "Last Name required";
  // }
  // if (!values.country.trim()) {
  //   errors.country = "Country required";
  // }
  if (!values.phonenumber.trim()) {
    errors.phonenumber = "Mobile Number required";
  }

  if (typeof values.phonenumber !== "undefined") {
    var pattern = new RegExp(/^[0-9\b]+$/);

    if (!pattern.test(values.phonenumber)) {
      errors.phonenumber = "Please enter only number.";
    } else if (values.phonenumber.length != 10) {
      errors.phonenumber = "Please enter valid phone number.";
    }
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2.length < 6) {
    errors.password2 = "Password needs to be 6 characters or more";
  } else if (values.password != values.password2) {
    errors.password2 = "Passwords don't match.";
  }

  // if (
  //   typeof values.password !== "undefined" &&
  //   typeof values.password2 !== "undefined"
  // ) {
  //   if (values.password != values.password2) {
  //     values.password2 = "Passwords don't match.";
  //   }
  // }

  return errors;
}
