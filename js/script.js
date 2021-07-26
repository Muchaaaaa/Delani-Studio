var validation = function () {
    let Name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
  
    if (Name === "" || email === "") {
      alert("Enter your details");
    } else {
      alert("Message received");
    }
  };