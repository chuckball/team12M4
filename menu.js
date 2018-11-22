function main_menu_links(option) {

    if (option == "start") {
        window.location.replace('https://team12-ict2201.glitch.me/map_page.html');
    }
    else if (option == "tut") {
        window.location.replace('https://team12-ict2201.glitch.me/tutorial_page.html');
    }
    else if (option == "setting") {
        window.location.replace('https://team12-ict2201.glitch.me/setting_page.html');
    }
    else {
        // Quits Game
        alert("Goodbye!");
        window.location.replace('https://www.google.com');
    }

}

function tutorial_links(option) {

    if (option == "start") {
        window.location.replace('https://team12-ict2201.glitch.me/map_page.html');
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


    window.location.replace('https://team12-ict2201.glitch.me/vehicle_page.html');


}

function start_gameplay() {
    var check = document.querySelector('#image-360').components.material.attrValue.src;
    //console.log(check);


    if (check == "#bicycle") {
        // Store
        localStorage.setItem("transport", "bicycle");
    }
    else {
        localStorage.setItem("transport", "pmd");
    }


    window.location.replace('https://team12-ict2201.glitch.me/index.html');


}