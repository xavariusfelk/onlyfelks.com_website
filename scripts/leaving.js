// last updated on day 4

const params = new URLSearchParams(window.location.search);
const param_url = params.get('url');
const param_nsfw = params.get('nsfw');
const param_git = params.get('git');

history.replaceState(null, '', 'leaving.html');

document.getElementById('back_button').addEventListener('click', function (e) {
    e.preventDefault();
    window.history.back();
})

document.getElementById('skip').addEventListener('click', function (e) {
    if(document.getElementById('skip').checked) {
        localStorage.setItem('skip_leaving', 'skip');
    } else {
        localStorage.setItem('skip_leaving', 'noskip');
    }
})

document.getElementById('copy_button').addEventListener('click', function (e) {
    e.preventDefault();
    navigator.clipboard.writeText(param_url).then(() => {
        document.getElementById('copy_button').textContent = "Copied!";
    })
})

try {
    const checked_url = new URL(param_url);
    document.getElementById('redirect_url').innerHTML = checked_url.href.replace('https://', '');
    document.getElementById('continue_button').href = checked_url;
    if(localStorage.getItem('skip_leaving') == 'skip' && param_nsfw != 'true' && param_git != 'true') {
        window.location = checked_url;
    }
    if(param_nsfw == 'true') {
        document.getElementById('checkbox_thingy').style.display = 'none';
        document.getElementById('nsfw_information').classList.remove('hidden');
    }
} catch {
    document.getElementById('redirect_url').textContent = "No URL was provided!";
    document.getElementById('continue_button').style.display = 'none';
    document.getElementById('mainpage_button').classList.remove('hidden');
} 

if(param_git == 'true') {
    document.getElementById('source_code').classList.remove('hidden');
}