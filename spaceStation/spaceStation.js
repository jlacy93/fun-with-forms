async function handleGetIssLocationClick() {
  const locationParagraph = document.getElementById('issLocation');
  const issLocationUrl = 'http://api.open-notify.org/iss-now.json';

  const response = await fetch(issLocationUrl, {
    method: 'GET',
    headers: {},
  });
  const jsonData = await response.json();

  locationParagraph.innerHTML =
    jsonData.iss_position.latitude + ', ' + jsonData.iss_position.longitude;
}
