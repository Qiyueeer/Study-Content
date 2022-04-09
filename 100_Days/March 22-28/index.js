
function login(){

  var username= document.getElementById("Username");
  var pass = document.getElementById("password");

  if(username.value ==""){
    alert("Please type the username");
  } else if(pass.value == ""){
    alert("Please type the password");
  } else if(username.value =="admin" && pass.value =="qiyue"){
    window.location.herf="welcome.html";
  }else{
    alert("Please check your username and password")
  }

  }
