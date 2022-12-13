var name = document.getElementById("first").innerText;
      console.log(name);

      function changetext() {
        document.getElementById("first").innerText = "EPIC GAMES PRIVTE";
      }
      function changebackgroundColor() {
        document.body.style.background = "gray";
      }
      function changebackgroundc() {
        var color = document.getElementById("colorpicker").value;
        document.body.style.background = color;
      }
      function changeprofile() {
        var newimg = document.getElementById("avatarp").files[0].name;
        document.getElementById("picture").src = newimg;
      }
      function signin() {
        var uesrname = document.getElementById("uesrname").value;
        var password = document.getElementById("password").value;
        if(uesrname == "ayman" && password == "aboaltayson"){
            window.location.href = "index.html";
        }
        else if(password != "aboaltayson"&&  uesrname != "ayman") {
         alert("Error !wrong password/username")

        }
        else if(uesrname != "ayman") {
        alert("Error !wrong username")

        }              
        else if(password != "aboaltayson") {
        alert("Error !wrong password")

        }
 
    }
    var name = document.getElementById("first").innerText;
      console.log(name);

      function changetext() {
        document.getElementById("first").innerText = "EPIC GAMES PRIVTE";
      }
      function changebackgroundColor() {
        document.body.style.background = "gray";
      }
      function changebackgroundc() {
        var color = document.getElementById("colorpicker").value;
        document.body.style.background = color;
      }
      function changeprofile() {
        var newimg = document.getElementById("avatarp").files[0].name;
        document.getElementById("picture").src = newimg;
      }
      function addToList() {
        var ul = document.getElementById("list");
        var li = document.createElement("li");

        li.appendChild(
        document.createTextNode(document.getElementById("addedtext").value)
      );
      ul.appendChild(li);
      }
      function myFunction() {
        document.getElementById("myForm").submit();
      }