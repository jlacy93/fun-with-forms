async function handleGetIssLocationClick() {
  const locationParagraph = document.getElementById('issLocation');
  const response = await fetch('http://api.open-notify.org/iss-now.json');
  const jsonData = await response.json();

  locationParagraph.innerHTML =
    jsonData.iss_position.latitude + ', ' + jsonData.iss_position.longitude;
}
