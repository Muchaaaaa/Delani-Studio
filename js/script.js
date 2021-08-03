
let details=function(){
  if ($("#name").val() == "") {
      alert("Enter your name please");
  } else if ($("#email").val() == "") {
      alert("Enter your email please")
  }
   else if ($("comment").val() == "") {
      alert("Your feedback will be appreciated")
  }
   else {
 let  userName = $("#name").val();
  alert(userName + " we have recieved your message.Thank you.")
  }
}
