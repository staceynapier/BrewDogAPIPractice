var app = function(){
  var url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
  // 
  // var options = document.querySelector('#beer-list');
  // options.addEventListener('select', onBeerSelect);
}

var makeRequest = function(url, callback){
  //create a new object XMLHTTPRequest object
  var request = new XMLHttpRequest();
  //set type of request we want to make hint:Get
  request.open('GET', url);
  // tell the request what function to run when it has completed
  request.addEventListener('load', callback);
  //send the request
  request.send();
}

var requestComplete = function(){
  console.log("Request Successfully Completed!");
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  localStorage.setItem('beer', beers);
  loopList(beers);
}

var loopList = function(beers){
  beers.forEach(function(beer){
    // createList(beer);
    createDropdown(beer);
  })
}

var onBeerSelect = function() {
  var beer = JSON.parse(this.options[this.selectedIndex].value);
  console.log(beer);
  var ul = document.querySelector('#beer-list');
  var li = document.createElement('li');
  var img = document.createElement('img');
  img.src = beer.image_url;
  li.innerText = beer.name;
  ul.appendChild(li);
  ul.appendChild(img);
}

var createDropdown = function(beer) {
  var options = document.querySelector('#beer-dropdown');
  var option = document.createElement('option');
  option.innerText = beer.name;
  options.appendChild(option);
}



// var activateListener = function(){
//
// }
// activateListener();
window.addEventListener('load', app);
