let Age;
// $(window).ready(function () {
//     Age = prompt("Quel âges-avez vous?");
//     if(Age < 18){
//         const url = 'https://www.imdb.com';
//         $(location).attr("href",url);
//     };
//   });
// Boite de dialogue Cookies
$('#Ok').click(function(){
    $("#BoxCookies").hide();
});

//                Box Login
// Apparition de la box Login
$('#Login').click(function(){
  $('#ContentForm').show();
  $('#Register').attr('disabled','true');
})
// Click Create comtpe
$('#CreateCpt').click(function(){
  $('#ContentForm').hide();
  $('#ContentFormRegister').show();
});

// Test de validation de l'id et password
$('#LoginBtn').click(function(){
  if($('#Id').val() == "" || ($('#Id').val() == "Enter your id")){
    alert("Enter a valid id.");
    return false
  }else if($('#Password').val() == "" || ($('#Password').val() == "Password")){
    alert("Enter a valid password.");
    $(this).css('border','1px solid red');
    return false;
  }
  else{
    $('#ContentForm').hide();
    $('#Register').removeAttr('disabled');
    return false;
  }
});
// Fermeture a l'aide de X
$('#ExitBoxLogin').click(function(){
  $('#ContentForm').hide();
  $('#Register').removeAttr('disabled');
});
// Fermeture a l'aide de Cancel
$('#CancelBoxLogin').click(function(){
  $('#ContentForm').hide();
  $('#Register').removeAttr('disabled');
})

//                Box Register
// Apparition de la box Register
$('#Register').click(function(){
  $('#ContentFormRegister').show();
  $('#Login').attr('disabled','true');
})
// Test validation des inputs
$('#BtnRegister').click(function(){
    if($('#Name').val() == "" || ($('#Name').val() == "Enter your Name")){
      alert("Enter a valid Name.");
      return false
    }else if($('#Email').val() == "" || ($('#Email').val() == "Enter your Email") || !($('#Email').is(':valid'))){
      alert("Enter a valid Email.");
      return false;
    }else if($('#RegisterPassword').val() == "" || ($('#RegisterPassword').val() == "Password")){
      alert("Enter a valid password.");
      return false;
    }else if($('#ConfirmPassword').val() == "" || ($('#ConfirmPassword').val() == "Password")){
      alert("Enter a valid Confirm password.");
      return false;
    } else if ($('#RegisterPassword').val() != $('#ConfirmPassword').val()){
      alert("Entrez 2 mots de passe similaires");
    }
    else if(!($('#AcceptCond').is(':checked'))){
      alert("Veuillez acceptez les condtions.");
      return false;
    }
    else{
      $('#ContentFormRegister').hide();
      $('#Login').removeAttr('disabled');
      return false;
    }
});
// Fermeture Box register avec X
$('#ExitBoxRegister').click(function(){
  $('#ContentFormRegister').hide();
  $('#Login').removeAttr('disabled');
});

// Caroussel 
let Suivant, Precedent , i =1;
$('#FlecheDroite').click(function(){
  if(i< 4 && i > 0){
  Precedent = $('#VideoShop'+(i));
  Suivant = $('#VideoShop'+(i+1));
  Suivant.show();
  Suivant.css('transform','translatex(0px)');
  Precedent.hide();
  i++;
}
});
$('#FlecheGauche').click(function(){
  if(i>1){
    i--;
  }
  if(i< 4 && i > 0){
    Precedent = $('#VideoShop'+(i));
    Suivant = $('#VideoShop'+(i+1));
    Precedent.show();
    Precedent.css('transform','translatex(0px)');
    Suivant.hide();
  }
});


