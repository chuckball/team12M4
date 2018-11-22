function init() {
    //load_restricted_zones();
    initialise_transport();
    addCollisionEvents();

}

function load_restricted_zones() {
    var camera = document.querySelector('[camera]');
    camera.addEventListener('triggerbox_entered', function () {
        console.log('just entered the trigger box (event)');


    });
    camera.addEventListener('triggerbox_exited', function () {
        console.log('just left the trigger box (event)');

    });


    // testing other element
    var movingsphere = document.querySelector('#movingsphere');
    movingsphere.addEventListener('spheretest_entered', function () {
        console.log('jddd');
    });
    movingsphere.addEventListener('spheretest_exited', function () {
        console.log('jddd');
    });
}

function initialise_transport() {
    // Setting mode of transport model
    var transport = localStorage.getItem("transport");
    var transport_model = document.querySelector('#transport_model');

    //console.log(transport_model);

    if (transport == "bicycle") {
        transport_model.setAttribute("gltf-model", "https://cdn.rawgit.com/xXWingadiumXx/AFrame-Models/master/bicycle/scene.gltf");
    }
    else {
        transport_model.setAttribute("scale", "0.2 0.2 0.2");
        transport_model.setAttribute("position", "0 -4 -2");
        transport_model.setAttribute("rotation", "0 180 0");
        transport_model.setAttribute("gltf-model", "https://cdn.rawgit.com/xXWingadiumXx/AFrame-Models/master/razor_scooter/scene.gltf");
    }
}


function addCollisionEvents() {
    var cameraEl = document.querySelector('[camera]');
    var score = document.getElementById("score");
    var highScore = parseInt(score.attributes.value.textContent)
    var model_to_begin_animation = document.querySelector('#challenge');


    cameraEl.addEventListener('collide', function (e) {
//   console.log('Player has collided with body #' + e.detail.body.id);

//   console.log(e.detail.body.el.id);
        if (e.detail.body.el.id == "plus_zone_1") {
            highScore = highScore + 10;
        } else if (e.detail.body.el.id == "plus_zone_3") {
            highScore = highScore + 10;
        } else if (e.detail.body.el.id == "plus_zone_4") {
            highScore = highScore + 10;
        } else {
            highScore = highScore - 10;
        }
        score.attributes.value.textContent = highScore.toString();
        localStorage.setItem('finalScore', highScore.toString());

        if (e.detail.body.el.id == "goal") {
            window.location.replace("https://2x01t12.glitch.me/end.html");
        }
//   else if (e.detail.body.el.id == "quick_time_event")
//   {
//     highScore--;
//   }
//   else 
//   {

//     model_to_begin_animation.innerHTML = '<a-animation attribute="position" dur="2" fill="forwards" to="10 0 0" repeat="indefinite"></a-animation>'

//     highScore--;
//     score.attributes.value.textContent = highScore.toString();
//     localStorage.setItem('finalScore', highScore.toString());
//   }


        // e.detail.target.el;  // Original entity (playerEl).
        // e.detail.body.el;    // Other entity, which playerEl touched.
        // e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
        // e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
    });


}

