const form = document.getElementById('form');
const campos = document.querySelectorAll('.inputs');
const spans = document.querySelectorAll('.span-requerid');
const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  nameValidate();
  emailValidate();
  senhaValidate();
  compareSenha();
})

function setError(index){
  campos[index].style.border = '3px solid #e21';
  spans[index].style.display = 'block';
}

function removeError(index){
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate(){
  if(campos[0].value.length < 3)
  {
    setError(0);
  }
  else
  {
    removeError(0);
  }
}

function emailValidate(){
  if(!emailRegex.test(campos[1].value))
  {
    setError(1);
  }
  else
  {
    removeError(1);
  }
}

function senhaValidate(){
  if(campos[2].value.length < 8)
  {
    setError(2);
  }
  else
  {
    removeError(2);
    compareSenha();
  }
}

function compareSenha(){
  if(campos[2].value === campos[3].value && campos[3].value.length >=8)
  {
    removeError(3);
  }
  else
  {
   setError(3);
  }
}