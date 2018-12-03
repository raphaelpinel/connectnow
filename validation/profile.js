const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};
  data.handle = !empty(data.handle) ? data.handle : '';
  data.status = !empty(data.status) ? data.status : '';
  data.skills = !empty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to be betwwen 2 and 40 characters';
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a valid URL';
    }
  }
  if (!empty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }
  if (!empty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }
  if (!empty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }
  if (!empty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }
  if (!empty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
