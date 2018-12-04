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
        if (searchT == null) {
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
        <input type="text" id="myTextResponse" value= "@${data[prop].user.screenName} " placeholder="Escribe tu respuesta" class="inp"><a class='btn-delete send right-align' data-message="${data[prop].id}"><i class="fab fa-telegram-plane"></i></a>
  </ul>`;
        };
        container.innerHTML = result;

        if (container != "") {
          let elementsDelete = document.getElementsByClassName("btn-delete");
          for (let i = 0; i < elementsDelete.length; i++) {
            //console.log(elementsDelete[i]);
            elementsDelete[i].addEventListener("click", e => {
              let key = e.target;
              let keyDataDelete = key.getAttribute("data-message");
              console.log(keyDataDelete);
            });
          }
        }
      }
  };

  tweetResponse = () => {
    console.log("funcion tweetResponse");
  };

  renderInfo()
