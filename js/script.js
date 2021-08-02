$(".design-img").click(function(){
  $(".design-img").toggle(800);
  $(".p-design").toggle(800);
});

$(".p-design").click(function(){
  $(".design-img").toggle(800);
  $(".p-design").toggle(800);
});

$(".development-img").click(function(){
  $(".development-img").toggle(800);
  $(".p-development").toggle(800);
});

$(".p-development").click(function(){
  $(".development-img").toggle(800);
  $(".p-development").toggle(800);
});

$(".management-img").click(function(){
  $(".management-img").toggle(800);
  $(".p-management").toggle(800);
});

$(".p-management").click(function(){
  $(".management-img").toggle(800);
  $(".p-management").toggle(800);    
});



let collectInput = () => {
  if ($("#name").val() == "") {
      alert("Enter your name please");
  } else if ($("#email").val() == "") {
      alert("Enter your email please")
  }
   else if ($("#userMessage").val() == "") {
      alert("Your feedback is appreciated")
  }
   else {
  userName = $("#name").val();
  alert(userName + " we have recieved your message.Thank you.")
  }
}
