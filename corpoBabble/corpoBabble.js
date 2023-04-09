async function handleGetCorporateBabbleClick() {
  const babbleParagraph = document.getElementById('corporateBabble');
  const corporateBabbleUrl =
    'https://corporatebs-generator.sameerkumar.website/';

  const response = await fetch(corporateBabbleUrl, {
    method: 'GET',
    headers: {},
  });
  const jsonData = await response.json();

  babbleParagraph.innerHTML = jsonData.phrase;
}
