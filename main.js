function tocaSomPom (idElementoAudio) {
document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classLis[1];
  const idAudio = `#som_${instrumentos}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

}
