const URL = "https://api.github.com/users/MahekUnnisa/repos"
function listrepos() {
    fetch(URL)
    .then(result => result.json())
    .then(data => {
        data.forEach(repo => {
            const markup = `<div id="repo-item">
    <a class ="repo-link "href = "https://github.com/MahekUnnisa/${repo.name}"<h2 id="repo-name">${repo.name}</h2></a>
    <h3 id="repo-desc">${repo.description}</h3>
    <span>${repo.topics}</span>
</div>`;
            let obj = document.getElementById('repo');
            obj.insertAdjacentHTML('beforeEnd', markup);
        })
    })
}
listrepos()