/*Sezione barra di ricerca*/
function Ricerca()
{
  const text = document.querySelector('#InputBar');
  text.value = '';
}

function NoRicerca()
{
  const text = document.querySelector('#InputBar');
  if(text.value.length == 0)
  {
    text.value = 'Inserire ricetta';
  }
}

const text = document.querySelector("#InputBar");
text.addEventListener("click", Ricerca);
text.addEventListener("blur", NoRicerca);

/*sezione menu Gestione*/
const FrecciaDs = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/forward-arrow.png';
const FrecciaGiu = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/down-arrow.png';

function toggle(event) {
  const det = document.querySelector('.Dettagli');
  const img = event.currentTarget.querySelector('#GestioneImg');
  const text = event.currentTarget.querySelector('#GestioneText');
  
  isVisible = !isVisible;
  if (isVisible) {
    det.classList.remove('Nascosti');
    img.src = FrecciaGiu;
    text.textContent = 'Nascondi Gestione Account / Impostazioni';

  } else {
    det.classList.add('Nascosti');
    img.src = FrecciaDs;
    text.textContent = 'Mostra Gestione Account / Impostazioni';

  }
}
let isVisible = false;

const DetToggle = document.querySelector('.Gestione');
DetToggle.addEventListener('click', toggle);


/*sezione menu mobile*/
function ApriChiudiMenu(){
  const op = document.querySelector("#ListaOpzioni");
  isVisible1 = !isVisible1;

  if(isVisible1){
    modalView.classList.remove('hidden');
  }else{
    modalView.classList.add('hidden');
  }
}

let isVisible1 = false;
const opzioni = document.querySelector("#SpazioMenu");
const modalView = document.querySelector('#modal-view');
opzioni.addEventListener("click", ApriChiudiMenu);

