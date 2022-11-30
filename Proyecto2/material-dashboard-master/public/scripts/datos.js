window.addEventListener('DOMContentLoaded', (event) => {
      cargarDatos()
      mostrarFrases()
});
let cargarDatos2 = () => {
  console.log('DOM cargado y analizado');

  let url = 'https://dog.ceo/api/breeds/list/all'
}

let cargarDatos = () => {
      console.log('DOM cargado y analizado');

      let url = 'https://dog.ceo/api/breeds/list/all'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const parser = new DOMParser();
          const json = parser.parseFromString(data, "application/xml");
          // Procesamiento de la constante xml

          let select = document.getElementsByClassName('custom-select')[0]
          let city = json.getElementsByTagName('message')


          Array.from(city).forEach(function (element) {
            let option = document.createElement("option")

            option.innerHTML = element.getElementsByTagName("message")[0].innerHTML
            option.setAttribute("message", element.getElementsByTagName("id")[0].innerHTML )

            select.appendChild(option)

          });

        })
        .catch(console.error);
}

let mostrarFrases = () => {
  let select = document.getElementsByClassName('custom-select')[0]

  select.addEventListener("change", (event) => {
    let valor = event.target.value;

    fetch("https://dataserverdawm.herokuapp.com/escritores/frases")
      .then(response => response.json())
      .then( data => {
        let frases = data["frases"]

        let frasesfiltradas = frases.filter(frase => frase["id_autor"] == valor);


        document.getElementById("frases").innerHTML = ''

        for( let frase of frasesfiltradas) {
          let plantilla = `
            <div class="col-lg-3">
                <div class="test-inner ">
                    <span>${frase.texto}</span>
                    <i class="fa fa-quote-right"></i>
                </div>
            </div>
          `
          document.getElementById("frases").innerHTML += plantilla

        }

      })

  })
}