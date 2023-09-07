// URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");

let posts = [];


function nutriApp(){
  
  fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
  .then((r) => r.json())
  .then((json) => {
    posts = json;

    posts.map((item)=>{
      let liElemento = document.createElement("li");
      let tituloElemento = document.createElement("strong");
      let imgElemento = document.createElement("img");
      let descricaoElemento = document.createElement("a");

      let tituloTexto = document.createTextNode(item.titulo);
      tituloElemento.appendChild(tituloTexto);
      liElemento.appendChild(tituloElemento);

      imgElemento.src = item.capa;
      liElemento.appendChild(imgElemento);

      let descricaoTexto = document.createTextNode(item.subtitulo);
      descricaoElemento.appendChild(descricaoTexto);
      liElemento.appendChild(descricaoElemento);

      listElement.appendChild(liElemento);


    })

  })
  .catch(()=>{
    console.log("DEU ALGUM ERRO")
  })


}

nutriApp();