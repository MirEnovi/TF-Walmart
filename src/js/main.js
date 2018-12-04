const container = document.getElementById('cardAsociado');

renderInfo = (data) => {

    document.getElementById('btn').addEventListener('click', (event) => {
        let result = '';
        for (const prop in data) {

            let message = `${data[prop].text}`;
            const re = /.{3}-.{7}-.{7}/g;
            const search = message.match(re)
            console.log(search);
            console.log(message);

            if (search != null) {
                result += `<div class="card">
                             <div class="info">
                             <p>Id: ${data[prop].id}</p> 
                             <img src="${data[prop].user.biggerProfileImageURL}" alt="Smiley face" height="42" width="42">
                                <p>Name: ${data[prop].user.name}</p> 
                                <p>Twitte: ${data[prop].text}</p>
                                <p>Fecha: ${data[prop].createdAd}</p>
                                <input type="text" id="myTextResponse" value="Some text...">
                                <a class='btn-delete' data-message="${data[prop].id}">Try it</a>
                             </div>
                         </div>`
            }
            container.innerHTML = result;
            if (container != '') {
                let elementsDelete = document.getElementsByClassName('btn-delete');
                for (let i = 0; i < elementsDelete.length; i++) {
                    //console.log(elementsDelete[i]);
                    elementsDelete[i].addEventListener('click', e => {
                        let key = e.target;
                        let keyDataDelete = key.getAttribute("data-message");
                        console.log(keyDataDelete)
                    });
                };

            }
        }
    });
}

tweetResponse = () => {
    console.log("funcion tweetResponse")

}



/*
document.getElementsByClass('btn-delete').addEventListener('click', (event) => {


    //container.innerHTML = '';
    console.log("prueba");

})*/