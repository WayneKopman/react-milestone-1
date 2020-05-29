export default function validateForm(values) {
  let errors = {};
  if (!values.email) {
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 10) {
    errors.password = "Password needs to be more than 8 characters";
  }

  return errors;
}
