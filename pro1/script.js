
document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  username = document.querySelector('#username').value.trim()
  password = document.querySelector('#password').value.trim()
  err = document.querySelector('#err');
  btn = document.querySelector('button');
  btn.innerHTML = '<div class="spinner-border spinner-border-sm"></div> <i>Processing </i>'

  is_found = false;
  current_user = null;
  for (i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      current_user = users[i]
      is_found = true;
      break;
    }
  }
  if (is_found) {
    localStorage.setItem('current_user', JSON.stringify(current_user));
    err.innerHTML = 'Successfull'
    location = 'myaccount.html'
  } else {
    err.innerHTML = 'Invalid User!'
  }
  btn.innerHTML = 'Login'
})

document.querySelector('.signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  fullname = document.querySelector('#fullname').value.trim()
  email = document.querySelector('#email').value.trim()
  password = document.querySelector('#password').value.trim()
  role = document.querySelector('#role').value.trim()
  err = document.querySelector('#err');
  btn = document.querySelector('button');
  btn.innerHTML = '<div class="spinner-border spinner-border-sm"></div> <i>Processing </i>'
  current_user ={ 
                  "id": 10, 
                  "name": fullname, 
                  "username": "benjamina", 
                  "email": email,
                  "password": password,
                  "role": role
                },

    localStorage.setItem('current_user', JSON.stringify(current_user));
  err.innerHTML = 'Successfull! Account Created.'
  location = 'myaccount.html'

})
