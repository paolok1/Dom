function creaArticolo() {
let titolo = document.querySelector('#titolo').value;
let paragraph = document.querySelector('#paragraph').value;
if (titolo === '' || paragraph === ''){
    alert('Inserisci un titolo ed un paragrafo!');
        return;
}
let date = new Date();
let formatDate = date.toLocaleDateString();

let articolo = document.createElement('div');
articolo.innerHTML = `<h2>${titolo}</h2><p>${paragraph}</p><p>Data di pubblicazione: ${formatDate}</p>`;
document.querySelector('#articoli').appendChild(articolo);

document.querySelector('#titolo').value = '';
document.querySelector('#paragraph').value = '';
}




