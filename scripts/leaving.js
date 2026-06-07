const params = new URLSearchParams(window.location.search);
const param_url = params.get('url');

document.getElementById('back_button').addEventListener('click', function (e) {
    e.preventDefault();
    window.history.back();
})

try {
    const checked_url = new URL(param_url);
    document.getElementById('redirect_url').textContent = checked_url.href.replace('https://', '');
    document.getElementById('continue_button').href = checked_url;
} catch {
    document.getElementById('redirect_url').textContent = "No URL was provided!";
    document.getElementById('continue_button').style.display = 'none';
}