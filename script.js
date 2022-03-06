function change_theme() {
  elements1 = document.getElementsByClassName("card-title");
  elements2 = document.getElementsByClassName("embed-responsive");
  if (document.body.style.backgroundColor == "bisque") {
    document.body.style.backgroundColor = "rgb(63, 63, 63)";
    document.getElementById("header").style.color = "white";
    document.getElementById("ctlLogin_LoginButton").style.backgroundColor = "darkgrey";
    for (let i = 0; i < elements1.length; i++) {
      elements1[i].style.color = "white";
    }
    for (let i = 0; i < elements2.length; i++) {
      elements2[i].style.border = "1px solid white";
    }
  } else {
    document.body.style.backgroundColor = "bisque";
    document.getElementById("header").style.color = "blue";
    document.getElementById("ctlLogin_LoginButton").style.backgroundColor = "white";
    for (let i = 0; i < elements1.length; i++) {
      elements1[i].style.color = "black";
    }
    for (let i = 0; i < elements2.length; i++) {
      elements2[i].style.border = "1px solid black";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("ctlLogin_LoginButton")
    .addEventListener("click", change_theme);
});
