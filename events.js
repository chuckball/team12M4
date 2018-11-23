var count = 0;
var functionIsRunning = false;
var wronglist = ""
var goodlist = ""

function init()
{
  //load_restricted_zones();
  initialise_transport();
  addCollisionEvents();
  
  /* Reset Treasure */
  localStorage.setItem("bonus_received", 0);
  
  /* Adding bell ring */
  document.addEventListener("keydown", function(e)
  {
     console.log(count);
     if(e.keyCode == 32) 
     { // e.g. spacebar key
      
      if(!functionIsRunning)
      {
        functionIsRunning = true;     
        setTimeout(function()
      { 
         console.log("running");
         if (count >= 3)
         {
           
            var score = document.getElementById("score");
            var wrongthings = document.getElementById("wrongthings");

            var highScore = parseInt(score.attributes.value.textContent)
            updateScore(-30)
            wronglist = wronglist + "Being a nuisance by spamming bell. - 30 points\n"
            wrongthings.attributes.value.textContent = wronglist

            setTimeout(function() {
            wrongthings.attributes.value.textContent = ""
            }, 3000);

           count = 0;
           functionIsRunning = false;
         }
          else
          {
           count = 0; 
          }
          functionIsRunning = false;            
        }, 3000);
      }
      
      
       
       bell_ring_event();
     }
    
    
  });    
  
}



function ringBellGood() {
    var score = document.getElementById("score");
    var wrongthings = document.getElementById("wrongthings");
    var goodthings = document.getElementById("goodthings");
    updateScore(5);
    goodlist = goodlist + "Used bell wisely to alert pedestrians. + 5 points\n"
    
    goodthings.attributes.value.textContent = goodlist
    setTimeout(function() {
      goodthings.attributes.value.textContent = ""
    }, 3000);
  
  }

function bell_ring_event()
{
  /* Bell Ring */
  functionIsRunning = true;
    count ++;   
      
    var entity = document.querySelector('#bell');
      
    entity.components.sound.playSound();
      
    var cameraEl = document.querySelector('[camera]');
    var user_pos = cameraEl.getAttribute("position");
    
      
    var man1 = document.querySelector('#man1');  
    var man1_pos = man1.getAttribute("position");
    
    var man2 = document.querySelector('#man2');  
    var man2_pos = man2.getAttribute("position");
  
    var man3 = document.querySelector('#man3');  
    var man3_pos = man3.getAttribute("position");
  
    /* Setting Boundaries for user */
    var man1_bounds_x_up = man1_pos.x + 15;
    var man1_bounds_x_down = man1_pos.x - 15;
    var man1_bounds_z_up = man1_pos.z + 15;
    var man1_bounds_z_down = man1_pos.z - 15;
      
    var man2_bounds_x_up = man2_pos.x + 15;
    var man2_bounds_x_down = man2_pos.x - 15;
    var man2_bounds_z_up = man2_pos.z + 15;
    var man2_bounds_z_down = man2_pos.z - 15;
  
    var man3_bounds_x_up = man3_pos.x + 15;
    var man3_bounds_x_down = man3_pos.x - 15;
    var man3_bounds_z_up = man3_pos.z + 15;
    var man3_bounds_z_down = man3_pos.z - 15;
    //console.log("user pos "+user_pos.x + " " + user_pos.z);
    //console.log("model pos "+man1_pos.x + " " + man1_pos.z);
    
  
    
    /* User with range of model - Reward player for alerting pedestrians when nearby them */
    if ( (user_pos.x < man1_bounds_x_up && user_pos.x > man1_bounds_x_down)  && (user_pos.z < man1_bounds_z_up && user_pos.z > man1_bounds_z_down) )
    {
      // to be replaced with score adding
      ringBellGood()

    } 
   else if ((user_pos.x < man2_bounds_x_up && user_pos.x > man2_bounds_x_down)  && (user_pos.z < man2_bounds_z_up && user_pos.z > man2_bounds_z_down))
   {
      //alert("near man2");
       ringBellGood()
   }
   else if ((user_pos.x < man3_bounds_x_up && user_pos.x > man3_bounds_x_down)  && (user_pos.z < man3_bounds_z_up && user_pos.z > man3_bounds_z_down))
   {
      //alert("near man3");
     ringBellGood()
   }  
   
      
}




function load_restricted_zones()
{
   var camera = document.querySelector('[camera]');
        camera.addEventListener('triggerbox_entered', function() {
            console.log('just entered the trigger box (event)');
           
            
        });
        camera.addEventListener('triggerbox_exited', function() {
            console.log('just left the trigger box (event)');          
            
        });
  
  
  
        
        // testing other element
        var movingsphere = document.querySelector('#movingsphere');
        movingsphere.addEventListener('spheretest_entered', function() {
            console.log('jddd');
        });
        movingsphere.addEventListener('spheretest_exited', function() {
           console.log('jddd');
        });
}

function initialise_transport()
{
  // Setting mode of transport model
  var transport = localStorage.getItem("transport");
  var transport_model = document.querySelector('#transport_model');
  
  console.log(transport);
  
  if (transport == "bicycle")
  {
    transport_model.setAttribute("gltf-model", "https://cdn.rawgit.com/xXWingadiumXx/AFrame-Models/master/bicycle/scene.gltf");
  }
  else
  {
    transport_model.setAttribute("scale","0.2 0.2 0.2");
    transport_model.setAttribute("position","0 -4 -2");
    transport_model.setAttribute("rotation", "0 180 0");
    transport_model.setAttribute("gltf-model", "https://cdn.rawgit.com/xXWingadiumXx/AFrame-Models/master/razor_scooter/scene.gltf");
  }
}

function updateScore(num) {
  var score = document.getElementById("score");
  var highScore = parseInt(score.attributes.value.textContent)
  highScore = highScore + num;
  score.attributes.value.textContent = highScore.toString();
  localStorage.setItem('finalScore', highScore.toString());
}
function addCollisionEvents()
{
  var cameraEl = document.querySelector('[camera]');
  var score = document.getElementById("score");
  var wrongthings = document.getElementById("wrongthings");
  var goodthings = document.getElementById("goodthings");
  
  
  var highScore = parseInt(score.attributes.value.textContent)
  var model_to_begin_animation = document.getElementById("challenge");
 // console.log(model_to_begin_animation);
 //var z = document.querySelector('#quick_time_event');
 
  function crossRoadGood() {
    updateScore(10);
    goodlist = goodlist + "Crossed road on a green light. + 10 points\n"
    goodthings.attributes.value.textContent = goodlist
  }
  
  function crossZebraGood() {
    updateScore(10);
    goodlist = goodlist + "Safely crossed zebra crossing. + 10 points\n"
    goodthings.attributes.value.textContent = goodlist
  }
  
  function crashManBad() {
    updateScore(-30);
    wronglist = wronglist + "Crashed onto pedestrian. - 30 points\n"
    wrongthings.attributes.value.textContent = wronglist
  }
  
  function goodListTimeout() {
    setTimeout(function() {
      goodthings.attributes.value.textContent = ""
    }, 3000);
  }
  function wrongListTimeout() {
    setTimeout(function() {
      wrongthings.attributes.value.textContent = ""
    }, 3000);
  }
  
  cameraEl.addEventListener('collide', function (e) {
  console.log(e.detail.body.el.id);
  
  
  if (e.detail.body.el.id == "plus_zone_1") {
    crossRoadGood()
    goodListTimeout()
  } else if (e.detail.body.el.id == "plus_zone_3") {
    crossZebraGood()
    goodListTimeout()
  } else if (e.detail.body.el.id == "plus_zone_4") {
    crossZebraGood()
    goodListTimeout()
  } else if (e.detail.body.el.id == "man1") {
    crashManBad()
    wrongListTimeout()
  } else if (e.detail.body.el.id == "man2") {
    crashManBad()
    wrongListTimeout()
  } else if (e.detail.body.el.id == "man3") {
    crashManBad()
    wrongListTimeout()
  } 
  else if (e.detail.body.el.id == "challenge")
  {
    updateScore(-20);
    wronglist = wronglist + "You just killed a dog! - 20 points\n"
    wrongthings.attributes.value.textContent = wronglist

    wrongListTimeout()
  }
  else if (e.detail.body.el.id == "quick_time_event")
  {
  
  }
  else if (e.detail.body.el.id == "bonus")
  {
    if(localStorage.getItem("bonus_received") == 0)
    {
      localStorage.setItem("bonus_received", 1); 
      updateScore(20);
      goodlist = goodlist + "Bonus found. + 20 points\n"
      goodthings.attributes.value.textContent = goodlist
      goodListTimeout()
    }
    
  }
  else 
  {
    updateScore(-10);
    wronglist = wronglist + "You rode on a walkway! - 10 points\n"
    wrongthings.attributes.value.textContent = wronglist

    wrongListTimeout()
  }
    
    
  if (e.detail.body.el.id == "goal")
  {
    window.location.replace("https://2x01t12.glitch.me/end.html");
  }
  else if (e.detail.body.el.id == "quick_time_event")
  {
    model_to_begin_animation.innerHTML = '<a-animation attribute="position" dur="8000" to="50 1 10" from="-30 1 10"  fill="forwards" ></a-animation>  <a-entity sound="src: #dog_bark; autoplay: true; volume: 15;"></a-entity>'
     model_to_begin_animation.setAttribute("animation-mixer","");
   
   }
  
    
 // else 
// {
  
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

