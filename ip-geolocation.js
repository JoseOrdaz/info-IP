const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd675cd5844msh21ff27202372710p1f5ddfjsn80263bfbea32',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};


const getLocation = ip => {
    return fetch( `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
        .then(response => response.json())
        .catch(error => console.log(error));
}

const $ = selector => document.querySelector(selector);

const $form = $('#form');
const $input = $('#input');
const $submit = $('#submit');
const $result = $('#results');

$form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {value} = $input
    if (!value) return

    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', 'true');

    const ipInfo = await getLocation(value);

    if(ipInfo) {
        $result.innerHTML =  JSON.stringify(ipInfo, null, 2);

    }

    $submit.removeAttribute('disabled');
    $submit.removeAttribute('aria-busy');
});