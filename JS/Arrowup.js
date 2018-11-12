//function apparition de la box contactUs

$(function(){
    $('#contact').click(function(){
        $('.box').css("display","block"); 
        return false
    });
});
$('#ExitBoxSubmit').click(function(){
    $('.box').css("display","none");
        return false
});

//box avec les input

let boxvalue = () =>{
let fName = document.getElementById("firstName").value;
let lName = document.getElementById("LastName").value;
let EmailContact = document.getElementById("EmailContact").value;
let subject = document.getElementById("subject").value;
let textArea = document.getElementById("textArea").value;

let userFName = document.getElementById("user-firstname");
let userLName = document.getElementById("user-lastname");
let userEmail = document.getElementById("user-email");
let userSubject = document.getElementById("user-subject");
let userMessage = document.getElementById("user-message");

userFName.innerHTML = "First Name : " + fName; 
userLName.innerHTML =" Last Name : " + lName; 
userEmail.innerHTML = "  Email : " + EmailContact;
userSubject.innerHTML = " Subject: " + subject; 
userMessage.innerHTML = "\n Your message : " + textArea;
};
let arrow = document.createElement("i");
arrow.setAttribute("id", "arrow");
arrow.setAttribute("class","fas fa-arrow-alt-circle-up fa-3x arrow float-right col-2 offset-5 p-0");
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
    $(window).scroll(function () { 
    if ($(this).scrollTop() > 800 ) {  
    $('#arrow').css('right','10px'); 
    } else { 
    $('#arrow').removeAttr( 'style' );
    }
    });
    });
    });
