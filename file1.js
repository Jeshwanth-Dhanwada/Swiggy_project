//-----------------------------------Location-----------------------------------------

function locate(){
          document.getElementById('main_cont').classList.toggle("locate")
}

//-----------------------------------signin-------------------------------------------

function signin(){
          document.getElementById('sign_popup').classList.toggle("login")
}

//------------------------------------filterpopup-------------------------------------

filterbtn = document.getElementById('filterbtn')

function show(){
          document.getElementById('six').classList.toggle("active")
}




// ------------------------------------------------------------------------------------------------

function validate(){
  var aa = document.getElementById("tel")
  if (aa.trim().value==""){
    alert("Enter the value")
  }
}


// function validate(){
//   aa = document.getElementById("inp1")
//   if(aa.trim().value==""){
//             alert("should not be empty")
//   }
// }




