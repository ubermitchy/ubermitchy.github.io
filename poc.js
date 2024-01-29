console.log("where am i?")
fetch('https://www.google.com')
  .then(response => response.text())
  .then(html => {
    console.log('here I am?')
  })
  .catch(error => console.error('Error:', error));
