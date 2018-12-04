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
          result += `<div class="col s12">
                               <div class="col s12">
                               <div class="card horizontal">
                                 <div class="card-image">
                                   <img src="${
                                     data[prop].user.originalProfileImageURL
                                   }">
                                 </div>
                                 <div class="card-stacked">
                                   <div class="card-content">
                                     <h5>@${data[prop].user.screenName}</h5> 
                                     <p>${date} ${hour}</p> 
                                     <p>${data[prop].text}</p>
                                     <input type="text" id="myTextResponse" value="" placeholder="Responde">
                                      <a class='btn-delete' data-message="${data[prop].id}">Responder</a>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>`;
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
  
  