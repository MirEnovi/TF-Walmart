
// Elementos HTML
const btnLogout = document.getElementById('btnLogout');



// Función para salir
btnLogout.addEventListener('click', el => {
  // firebase.auth().signOut();
  location.href = ('../views/dashboard.html');
});
