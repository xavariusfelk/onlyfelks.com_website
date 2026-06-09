const cookie_popup_close = localStorage.getItem('cookie_popup');
if(cookie_popup_close == 'closed') {
    document.getElementById('cookies').style.display = 'none';
}

document.getElementById('cookies_button').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('cookies').style.display = 'none';
    localStorage.setItem('cookie_popup', 'closed');
})