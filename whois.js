window.addEventListener('DOMContentLoaded', () => {

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
    console.log(ipInfo);

    $submit.removeAttribute('disabled');
    $submit.removeAttribute('aria-busy');



    });
});

window.addEventListener('DOMContentLoaded', () => {
    const OPTIONS = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd675cd5844msh21ff27202372710p1f5ddfjsn80263bfbea32',
            'X-RapidAPI-Host': 'zozor54-whois-lookup-v1.p.rapidapi.com'
        }
    };
    
    
    const domainWhois = domain => {
        return fetch( `https://zozor54-whois-lookup-v1.p.rapidapi.com/?domain=${domain}`, OPTIONS)
            .then(response => response.json())
            .catch(error => console.log(error));
    }
    
    const $ = selector => document.querySelector(selector);
    
    const $form = $('#form-domain');
    const $input = $('#input-domain');
    const $submit = $('#submit-domain');
    const $result = $('#results');
    
    $form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const {value} = $input
        if (!value) return
    
        $submit.setAttribute('disabled', '');
        $submit.setAttribute('aria-busy', 'true');
    
        const domainInfo = await domainWhois(value);
    
        if(domainInfo) {
            $result.innerHTML =  JSON.stringify(domainInfo, null, 2);
    
        }
        console.log(domainInfo);
    
        $submit.removeAttribute('disabled');
        $submit.removeAttribute('aria-busy');
    
    
    
        });
    });
    