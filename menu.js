function main_menu_links(option) {

    if (option == "start") {
        window.location.replace('https://2x01t12.glitch.me/vehicle_page.html');
    }
    else if (option == "tut") {
        window.location.replace('https://2x01t12.glitch.me/tutorial_page.html');
    }
    else if (option == "setting") {
        window.location.replace('https://2x01t12.glitch.me/setting_page.html');
    }
    else {
        // Quits Game
        alert("Goodbye!");
        window.location.replace('https://www.google.com');
    }

}

function levels_links(option) {

    if (option == "easy") {
        window.location.replace('https://2x01t12.glitch.me/index.html');
    }
    else if (option == "medium") {
        window.location.replace('https://2x01t12.glitch.me/city.html');
    }
    else if (option == "hard") {
        window.location.replace('https://2x01t12.glitch.me/nightpark.html');
    }
    else {
        // random. need to change
        var rand = Math.random()
        // 50% chance of getting either settings
        if (rand > 0.66) {
          window.location.replace('https://2x01t12.glitch.me/index.html');
        } else if (rand > 0.33) {
          window.location.replace('https://2x01t12.glitch.me/city.html');
        } else {
          window.location.replace('https://2x01t12.glitch.me/nightpark.html');
        }
    }

}

function tutorial_links(option) {

    if (option == "start") {
        window.location.replace('https://2x01t12.glitch.me/main_menu_page.html');
    }
}

function review_links(option) {

    if (option == "review") {
        window.location.replace('https://2x01t12.glitch.me/end_review_1.html');
    }
}

function settings_links(option) {

    if (option == "back") {
        window.location.replace('https://2x01t12.glitch.me/main_menu_page.html');
    }
}

function goto_vehicle_page() {
    var check = document.querySelector('#image-360').components.material.attrValue.src;
    //console.log(check);


    if (check == "#city") {
        // Store
        localStorage.setItem("map", "city");
    }
    else {
        localStorage.setItem("map", "park");
    }


    window.location.replace('https://2x01t12.glitch.me/vehicle_page.html');


}

function goto_level_page() {
    var check = document.querySelector('#image-360').components.material.attrValue.src;
    //console.log(check);


    if (check == "#bicycle") {
        // Store
        localStorage.setItem("transport", "bicycle");
    }
    else {
        localStorage.setItem("transport", "pmd");
    }


   window.location.replace('https://2x01t12.glitch.me/levels.html');


}


function play_sound() 
{
    var sound = document.querySelector('#sound');
      
    sound.components.sound.playSound();
  
  
}

// function change_veh_text(option) {

//     if (option == "bicycle") {
//         var tx = document.getElementById("veh").attributes.value.textContent;
//         var txt = tx.attributes.value.textContent;
//         txt = "Bicycle";
//         alert("da")
//     }
// }

function change_veh_text()
{
  play_sound();
  
  var check = document.querySelector('#image-360').components.material.attrValue.src;
  var tx = document.getElementById("veh");
  //var txt = tx.attributes.value.textContent;
  console.log(tx);
  

    if (check == "#bicycle") 
    {
        tx.attributes.value.textContent = "Scooter";
    }
    else 
    {
         tx.attributes.value.textContent = "Bicycle";
    }

}

