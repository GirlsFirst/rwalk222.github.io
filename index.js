function dropdown() {
  document.getElementById("dropdown").classList.toggle("dropdownShow")
}

function menuChange(change) {
  change.classList.toggle("menu");
  dropdown();
}

function searchBar() {
  document.getElementById("searchid").classList.toggle("searchShow");
}
