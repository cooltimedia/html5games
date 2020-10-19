/* GamePlay Rules*/
var max_right_scene = '1010'
var max_left_scene = '10'
var interval = null
window.onload = () => {
    /*Inteval Var*/
    
    /* Character Initial Position*/
    let character_scene_position = document.getElementById("character_id")
    let caracter_top = character_scene_position.offsetTop
    let caracter_left = character_scene_position.offsetLeft
}
/* Keydown Event */
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    /* Get Character Actual Position*/
    let character_scene_position = document.getElementById("character_id")
    let caracter_top = character_scene_position.offsetTop
    let caracter_left = character_scene_position.offsetLeft
    if (keyName === 'ArrowRight'){
        if (Number(caracter_left) >= Number(max_right_scene)) {
        alert('Winner')
        } else {
            moveRight()
            /*interval = window.setInterval(moveRight,150);*/
        }
    } else if(keyName === 'ArrowLeft') {
        if (Number(caracter_left) <= Number(max_left_scene)) {
                console.log("Out of Scene")
            } else {
                moveLeft()
                /*interval = window.setInterval(moveRight,150);*/
            }        
    }
});
/* Keydown Funcions*/
/* Right */
function moveRight(){
    clearInterval(interval)
    var num_image = 1
    var num_pixel_move = 5
    interval = window.setInterval(function(){
        /* Image Character Change*/
        document.getElementById("character_image_id").src = "../static/images/pos-right-" + num_image + ".png";
        /* Image Position Change*/
        /* Character Actual Position*/
        var character_scene_position = document.getElementById("character_id")
        var caracter_right = character_scene_position.offsetLeft + num_pixel_move
        var leftCharacterChange = String(caracter_right) + 'px'
        document.getElementById("character_id").style.left = leftCharacterChange
        if (Number(caracter_right) >= Number(max_right_scene)){
            alert("Winner")
        }
        num_image += 1
        if (num_image == 7){
            num_image = 1
        }
    },150)
}
/* Left */
function moveLeft(){
    clearInterval(interval)
    var num_image = 1
    var num_pixel_move = 5
    interval = window.setInterval(function(){
        /* Image Character Change*/
        document.getElementById("character_image_id").src = "../static/images/pos-left-" + num_image + ".png";
        /* Image Position Change*/
        /* Character Actual Position*/
        var character_scene_position = document.getElementById("character_id")
        var caracter_left = character_scene_position.offsetLeft - num_pixel_move
        var leftCharacterChange = String(caracter_left) + 'px'
        document.getElementById("character_id").style.left = leftCharacterChange
        if (Number(caracter_left) <= Number(max_left_scene)){
            document.getElementById("character_id").style.left = '10px'
        }

        num_image += 1
        if (num_image == 7){
            num_image = 1
        }
    },150)
}