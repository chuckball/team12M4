function login()
{
  
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  
  if (username == "admin" && password == "admin")
  {
        window.location.replace("https://2x01t12.glitch.me/DesignInt.html");
  } 
  else
  {     
        alert("Wrong Username Or Password!");
  }
  
 return false;
}