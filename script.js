const googleMapsButton = document.getElementById('googleMapsButton');
const wazeButton = document.getElementById('wazeButton');

googleMapsButton.addEventListener('click', () => {
  // Replace 'YourLocation' with the actual location
  window.location.href = `https://www.google.com/maps/dir/?api=1&destination=YourLocation`;
});

wazeButton.addEventListener('click', () => {
  // Replace 'YourLocation' with the actual location
  window.location.href = `waze://?ll=YourLatitude,YourLongitude&navigate=true`;
});
