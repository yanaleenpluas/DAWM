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
          let data = obj[0]
          let phonetic = Object.values(data.phonetics) 
          let newPhonetic = Object.values(phonetic[1])
          let source = Object.values(newPhonetic)[2]
          let audio = Object.values(newPhonetic)[1]
          let text = Object.values(newPhonetic)[0]

          let meaning = Object.values(data.meanings) 
          let newMeaning = Object.values(meaning[0])
          let synonyms = Object.values(newMeaning)[2]
          let antonyms = Object.values(newMeaning)[3]

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