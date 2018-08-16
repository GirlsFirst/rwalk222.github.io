$(window).on("load", function(){
/*  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=f7c291e55d624f92a436de14705d5899&category=health",
    type: "GET",
    data: {}
  }).done(function(data){
    console.log(data)
  })*/
  getArticles("business");
  getArticles2("business");
})

function getArticles(type= "") {
  var apiUrl= "https://newsapi.org/v2/top-headlines?country=us&apiKey=f7c291e55d624f92a436de14705d5899";
  var url= apiUrl+"&category="+type;
  $.ajax({
    url: url,
    type: "GET",
    data: {}
  }).done(function(data){
    displayArticles(data.articles);
  })
}

function displayArticles(data) {
  /*add first image to page
  document.getElementById("art1title").innerHTML=data[0].title;
  document.getElementById("art1description").innerHTML=data[0].description;
  document.getElementById("art1").innerHTML=data[0].title;var articleUrl= data[0].url;
  document.getElementById("art1img").innerHTML= `<img src="${data[0].urlToImage}" id= "r1img">`
  //data[0].title;var imageUrl= data[0].urlToImage;//
  document.getElementById("art2title").innerHTML=data[1].title;
  document.getElementById("art2description").innerHTML=data[1].description;
  document.getElementById("art2img").innerHTML= `<img src="${data[1].urlToImage}" id= "r2img">`
  document.getElementById("art3title").innerHTML=data[2].title;
  document.getElementById("art3description").innerHTML=data[2].description;
  document.getElementById("art3img").innerHTML= `<img src="${data[2].urlToImage}" id= "r3img">`
  document.getElementById("art4title").innerHTML=data[3].title;
  document.getElementById("art4description").innerHTML=data[3].description;
  document.getElementById("art4img").innerHTML= `<img src="${data[3].urlToImage}"id= "r4img">`*/
}

function buildArticleHTML(article, id) {
  var title= article.title;
  var description= article.description;
  var articleUrl= article.url;
  var imageUrl= article.urlToImage;
  return (`
    <div id= "article-${id}">
      <p id= "article-${id}-title">${title}</p>
      <div id= "article-${id}-img">
        <a href= "${articleUrl}" target= "_blank"><img src= "${imageUrl || 'logo.png'}" id= "img-${id}"></a>
      </div>
      <p id= "article-${id}-description">${description}</p>
    </div>
  `)
}

function buildArticleHTML2(article, id) {
  var title= article.title;
  var description= article.description;
  var articleUrl= article.url;
  var imageUrl= article.urlToImage;
  return (`
    <div id= "article-5">
      <div id= "article-5-img">
        <a href="${articleUrl}" target="_blank"><img src= "${imageUrl || 'logo.png'}" id= "img-5"></a>
      </div>
      <div id= "box-5">
        <p id= "article-5-title">${title}</p>
        <p id= "article-5-description">${description}</p>
      </div>
    </div>
    <hr>
  `)
}

function displayArticles(data) {
  /* This for loop is equivalent to running the following:
  ${buildArticleHTML(data[0], 1)}
  ${buildArticleHTML(data[1], 2)}
  ${buildArticleHTML(data[2], 3)}
  ${buildArticleHTML(data[3], 4)}*/
  var articlesHtml = [];
  for (var i = 0; i < 4; i++) {
    articlesHtml.push(buildArticleHTML(data[i], i + 1));
  }
  document.getElementById("mainphead").innerHTML= articlesHtml.join('');
}

function getArticles2(type= "") {
  var apiUrl= "https://newsapi.org/v2/top-headlines?country=us&apiKey=f7c291e55d624f92a436de14705d5899";
  var url= apiUrl+"&category="+type;
  $.ajax({
    url: url,
    type: "GET",
    data: {}
  }).done(function(data){
    displayArticles2(data.articles)
  })
}

function displayArticles2(data) {
  var articlesHtml = [];
  for (var i = 4; i < 20; i++) {
    articlesHtml.push(buildArticleHTML2(data[i], i + 1));
  }
  document.getElementById("News").innerHTML= articlesHtml.join('');

  /*document.getElementById("mainphead").innerHTML= articlesHtml.join('');
  document.getElementById("art1title").innerHTML=data[4].title;
  document.getElementById("art1description").innerHTML=data[4].description;
  document.getElementById("art1img").innerHTML= `<img src="${data[4].urlToImage}" id= "r1img">`
  //data[0].title;var imageUrl= data[0].urlToImage;//
  document.getElementById("art2title").innerHTML=data[5].title;
  document.getElementById("art2description").innerHTML=data[5].description;
  document.getElementById("art2img").innerHTML= `<img src="${data[5].urlToImage}" id= "r2img">`
  document.getElementById("art3title").innerHTML=data[6].title;
  document.getElementById("art3description").innerHTML=data[6].description;
  document.getElementById("art3img").innerHTML= `<img src="${data[6].urlToImage}" id= "r3img">`
  document.getElementById("art4title").innerHTML=data[7].title;
  document.getElementById("art4description").innerHTML=data[7].description;
  document.getElementById("art4img").innerHTML= `<img src="${data[7].urlToImage}"id= "r4img">`*/
}

/*function displayArticles2(data) {
  ${buildArticleHTML(data[0], 1)}
  ${buildArticleHTML(data[1], 2)}
  ${buildArticleHTML(data[2], 3)}
  ${buildArticleHTML(data[3], 4)}
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
