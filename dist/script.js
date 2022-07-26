const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const comments = document.getElementById('comment');
const checkbox = document.getElementById('input-checkbox');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (mail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
};

const isValidPhone = (phoneNum) => {
  const num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return num.test(String(phoneNum));
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const commentsValue = comments.value.trim();
  const phoneValue = phone.value.trim();

  if (usernameValue === '') {
    setError(username, 'Full name is required');
  } else {
    setSuccess(username);
  }
    if (!phoneValue) {
    setError(phone, 'phone number is required');
  }else if (!isValidPhone(phoneValue)) {
    setError(phone, 'Provide a valid phone number');
  } 
  else {
    setSuccess(phone);
  }

  if (emailValue === '') {
    setError(email, 'Provide Email to Continue');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  const required = 3;
  const left = required - commentsValue.length;
  if (left === 30) {
    setError(comments, 'Comments is required');
  } else if (left > 0) {
    setError(comments, `${left} more characters required`);
  } else {
    setSuccess(comments);
  }

  if (!checkbox.checked) {
    setError(checkbox, "Please Check the Box to Proceed");
  } else {
    setSuccess(checkbox);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});