const email = document.getElementById('mail');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
// Login con email y password
btnLogin.addEventListener('click', el => {
  // Se toman los valores de los inputs
  const mail = email.value;
  const pass = password.value;
  console.log('mail: ', mail, 'pass: ', pass)

  // Se vacia localStorage y se le asigna el mail en el key mail
  localStorage.clear();
  localStorage.setItem('mail', mail);
  const promise = firebase.auth().signInWithEmailAndPassword(mail, pass)
    .then(function () {
      promise.catch(el => console.log(e.message));
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // Si los datos son incorrectos se lanza mensaje de verificación
      alert('Verifica tus datos');
      // ...
    });
});


// Se realiza la autenticación de usuario
const authentication = (provider) => {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    let token = result.credential.accessToken;
    // Se obtiene la información del usuario (facebook o google)
    let user = result.user;
    localStorage.setItem('user', user);
    // Se guarda el nombre de usuario en localStorage
    let displayName = user.displayName;
    localStorage.setItem('display', displayName);
    // Se guarda la url de la foto del usuario en localStorage
    let photo = user.photoURL;
    localStorage.setItem('photo', photo);
  }).catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
  });
};

/* Se utiliza el observador como condicional. Si se inicia sesión nos
redirige al home, si no se ha iniciado, permanece en el login*/

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    let userUid = user.uid;
    localStorage.setItem('userUid', userUid);
    location.href = ('./src/views/dashboard.html');
  } else {
    console.log('no se ha accesado');
  }
});


