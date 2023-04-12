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

async function handleGetGovernmentProjectClick(){
  const projectParagraph = document.getElementById('bullShitP');
  const projectURL = 'https://corporatebs-generator.sameerkumar.website/'

  const response = await fetch(projectURL, {
    method: 'GET',
    headers:{},
  });
  const bsJsonData = await response.json();

  projectParagraph.innerHTML =
  bsJsonData.phrase

}
