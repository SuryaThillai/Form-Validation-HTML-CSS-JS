




document.querySelector('button').addEventListener('click', function(event){
  var username = document.getElementsByClassName('name')[0].value;
  var email = document.getElementsByClassName('mail')[0].value;
  var password = document.getElementsByClassName('word')[0].value;
  var Cpassword = document.getElementsByClassName('Cword')[0].value;


  if (!validateInputs(username,email,password,Cpassword)){
    event.preventDefault();
  }



});

function validateInputs(user,mail,pass,Cpass){
  var success = true;
  if (user === ''){
    success = false;
    setError('.name', 'Username is required');
  } else{
    setSuccess('.name');
  }
  if (pass.length < 8){
    success = false;
    setError('.word', 'password must be 8 characters long');
  } else if (pass === ''){
    success = false;
    setError('.word', 'password is required');
  } else{
    setSuccess('.word');
  }
  if (Cpass === ''){
    success = false;
    setError('.Cword', 'confirm-password is requried');
  }else if (Cpass != pass){
    success = false;
    setError('.Cword', 'password does not match');
  } else{
    setSuccess('.Cword');
  }
  if (!validateEmail(mail)){
    success = false;
    setError('.mail', 'Email is not Valid');
  } else{
    setSuccess('.mail');
  }
  return success;
};


function setError(element, message){
  const parentDiv = document.querySelector(element).parentElement;
  const errorDiv = parentDiv.querySelector('.only-if');
  errorDiv.innerText = message;
  errorDiv.classList.add('error');
}

function setSuccess(element){
  const parentDiv = document.querySelector(element).parentElement;
  const errorDiv = parentDiv.querySelector('.only-if');
  errorDiv.innerText = '';
  errorDiv.classList.remove('error');
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


























// document.querySelector('button').addEventListener('click', function(){
//   // e.preventDefault();
//   // validateinputs();
//   validateinputs();
// });


// function validateinputs(){
//   var user_name = document.querySelector('.name').value.trim();
//   var Email = document.querySelector('.mail').value.trim();
//   var password = document.querySelector('.word').value.trim();
//   var C_password = document.querySelector('.Cword').value.trim();

//   alert(user_name);

//   // if (user_name === ''){
//   //   setError(user_name, 'Username is required');
//   // } 

//   // if (validateEmail(Email) !== true){
//   //   setError(Email, 'Email is Invalid');
//   // }
//   // if (password === ''){
//   //   setError(password,'Password is required');
//   // } else if (password < 8){
//   //   setError(password,'Password must be atleast 8 characters');
//   // }

//   // if (C_password != password){
//   //   setError(C_password,'Password does not match');
//   // }
// }



// function setError(element, message){
//   // var repective_div = element.parentElement;
//   // var getting_inside = repective_div.querySelector('.only-if');
//   // getting_inside.innerText = message;
//   // getting_inside.classList.add('.error')
//   alert('working');
// }  





