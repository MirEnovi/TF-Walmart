fetch('http://wmt-laboratoria.herokuapp.com/tweets/search?q=pruebatimfs')
    .then(res => res.json())
    .then(data => {
        for (const prop in data) {
            console.log(`data.${prop} = ${data[prop].text}`);
        }
    })