/*fetch('http://wmt-laboratoria.herokuapp.com/tweets/search?q=pruebatimfs')
    .then(res => res.json())
    .then(data => {
        for (const prop in data) {
            console.log(`data.${prop} = ${data[prop].text}`);
        }
    })*/


const url = 'https://wmt-laboratoria.herokuapp.com/tweets/search?q=WalmartSigueMiPedido';

window.onload = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderInfo(data);
        })
        .catch(error => {
            console.log('error');
        })
}