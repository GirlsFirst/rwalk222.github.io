$(window).on("load", function(){
/*  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=f7c291e55d624f92a436de14705d5899&category=health",
    type: "GET",
    data: {}
  }).done(function(data){
    console.log(data)
  })*/
  getArticles("health");
})

function getArticles(type= "") {
  var apiUrl= "https://newsapi.org/v2/top-headlines?country=us&apiKey=f7c291e55d624f92a436de14705d5899";
  var url= apiUrl+"&category="+type;
  $.ajax({
    url: url,
    type: "GET",
    data: {}
  }).done(function(data){
    displayArticles(data.articles)
  })
}

function displayArticles(data) {
  //add first image to page//
  document.getElementById("art1title").innerHTML=data[0].title;
  document.getElementById("art1description").innerHTML=data[0].description;
/*  document.getElementById("art1").innerHTML=data[0].title;var articleUrl= data[0].url;*/
  document.getElementById("art1img").innerHTML= `<img src="${data[0].urlToImage}">`
  //data[0].title;var imageUrl= data[0].urlToImage;//
}

/*function buildArticleHTML(article) {
  var title= article.title;
  var description= article.description;
  var articleUrl= article.url;
  var imageUrl= article.urlToImage;
}*/

function dropdown() {
  document.getElementById("dropdown").classList.toggle("dropdownShow")
}

function myFunction() {
   document.getElementById("dropdown").classList.toggle("show");
   menuChange(menu);
}

function menuChange(menu) {
  menu.classList.toggle("menu");
}
// Close the dropdown menu if the user clicks outside of it
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
function searchBar() {
  document.getElementById("searchid").classList.toggle("searchShow");
}

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();
