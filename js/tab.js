$(document).ready(function () {
  $("." + new URLSearchParams(location.search).get("id")).addClass("active");
});

function opentab(evt, menuName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.onload = function () {
  firstTab();
};

function firstTab() {
  let id = location.href.split("?id=")[1];
  id = id.split("&")[0]
  if (id.indexOf("&top") != -1) {
    id = id.split("&")[0];
  }
  document.getElementById(id).style.display = "block";
}

// mobile
function myFunction() {
  document.getElementById("menuDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
