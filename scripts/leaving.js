const params = new URLSearchParams(window.location.search);
const param_url = params.get('url');

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
    if(localStorage.getItem('skip_leaving') == 'skip') {
        window.location = checked_url;
    }
} catch {
    document.getElementById('redirect_url').textContent = "No URL was provided!";
    document.getElementById('continue_button').style.display = 'none';
} 