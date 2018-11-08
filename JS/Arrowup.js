
// Creation du bouton qui retourne vers l'entête

//let barrow = document.createElement("button");
//barrow.setAttribute("class"," float-right col-2 offset-4")
let arrow = document.createElement("i");
arrow.setAttribute("id", "arrow");
arrow.setAttribute("class","fas fa-arrow-alt-circle-up fa-3x arrow float-right col-2 offset-5 p-0");
//barrow.appendChild(arrow);
let connect = document.getElementById("here");
connect.appendChild(arrow);

// Jquery 

$(function(){
    $("#arrow").click(function(){
        $("html,body").animate({scrollTop: 0},"slow");
    });
});

jQuery(function(){
    $(function () {
    $(window).scroll(function () { //Fonction appelée quand on descend la page
    if ($(this).scrollTop() > 800 ) {  // Quand on est à 200pixels du haut de page,
    $('#arrow').css('right','10px'); // Replace à 10pixels de la droite l'image
    } else { 
    $('#arrow').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
    }
    });
    });
    });

//function apparition de la box contactUs

$(function(){
    $('#boxSubmit').click(function(){
        $('.form-control').css("display","block");
        return false
    });
});