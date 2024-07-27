var myInput = document.getElementById("pass");
  var messageBox = document.getElementById("message");

  myInput.onfocus = function() {
    messageBox.style.display = "block";
  };

  myInput.onblur = function() {
    messageBox.style.display = "none";
  };

  myInput.addEventListener("input", function() {
    var password = myInput.value;
    });
   

    