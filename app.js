function filterItems(category) {
  var items = document.getElementsByClassName("boxBody");

  for (var i = 0; i < items.length; i++) {
    if (category === "all" || items[i].classList.contains(category)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}

function searchItems() {
  var input = document.getElementById("searchBox").value.toLowerCase();
  var items = document.getElementsByClassName("boxBody");

  for (var i = 0; i < items.length; i++) {
    var name = items[i].getElementsByTagName("h1")[0].innerText.toLowerCase();

    if (name.includes(input)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}
