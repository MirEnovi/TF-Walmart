renderInfo = data => {
  const container = document.getElementById("cardAsociado");

    let result = "";
    for (const prop in data) {
      let message = `${data[prop].text}`;
      const re = /.{3}-.{7}-.{7}/g;
      const searchT = message.match(re);
      //console.log(searchT);
      // console.log(message);
      const getDate = `${data[prop].createdAt}`;
      const date = getDate.slice(0, 10);
      const hour = getDate.slice(11, 16);
      console.log('date ', date)
      if (searchT != null) {
        result += `
        <ul class="collection">
    <li class="collection-item avatar">
      <img src="${
        data[prop].user.originalProfileImageURL
      }" alt="" class="circle">
      <span class="title">@${data[prop].user.screenName}</span>
      <p>  ${data[prop].text} <br>
         ${hour}  ${date}
      </p></b></br>
      <input type="text" id="" value= '@${data[prop].user.screenName} ' placeholder="Escribe tu respuesta" class="inp"><a class='btn-send send' data-message="${data[prop].user.screenName}"><i class="fab fa-telegram-plane"></i></a>
      </ul>`;
      };
      container.innerHTML = result;

      if (container != '') {
        let elementsTweets = document.getElementsByClassName("btn-send");

        for (let i = 0; i < elementsTweets.length; i++) {
          let message = document.getElementsByClassName("inp")[0].value;
          //console.log(elementsDelete[i]);
          elementsTweets[i].addEventListener("click", e => {
            let key = e.target;
            let keyData = key.getAttribute("data-message");
            console.log(keyData,data[prop].user.screenName, )
            tweetResponse(keyData,message);
          });
        }
      }
    }
};

tweetResponse = (keyData, message) => {
  console.log("funcion tweetResponse")
  console.log(keyData)

  var url = 'https://wmt-laboratoria.herokuapp.com/tweets';
  var data = `${message} Tu pedido está siendo atendido`;


  fetch(url, {
          method: 'POST',
          body: data, // data can be `string` or {object}!
          headers: {
              'Content-Type': 'text/plain'
          }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
};

renderInfo();