fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    const logURL = 'https://script.google.com/macros/s/AKfycbyne6SNXaUvhU9gVSREVZseXf-jr8H5lsu9U9FBsFB0UEb19fgdG9THuYJxw8Tm-EPQ6Q/exec';

    fetch(logURL, {
      method: 'POST',
      body: JSON.stringify({ ip: ip }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
