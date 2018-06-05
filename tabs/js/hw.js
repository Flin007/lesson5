const tabs = document.querySelectorAll('.tabs > nav a');
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');
const request = new XMLHttpRequest();

request.addEventListener('loadstart', function () {
    preloader.classList.remove('hidden');
});

request.addEventListener('load', function () {
    preloader.classList.add('hidden');
    content.innerHTML = request.responseText;
});

for(let tab of tabs){
    tab.addEventListener('click', function (event) {
        event.preventDefault();
        for(let counter of tabs){
            counter.classList.remove('active');
        }
        tab.classList.add('active');
        showTab(event.currentTarget.href);
    })
}

function showTab(url) {
    request.open('GET', url, true);
    request.send();
}

showTab(tabs[0].href);