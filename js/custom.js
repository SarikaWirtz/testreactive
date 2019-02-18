// calling data from json file.
//start sidebar JSON Singer links..
console.log("start");

//making request to server.
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
   const singerDetails = JSON.parse(xhr.responseText);
    let statusHTML = '<ul class="sidebarlinks">';
    for (let i = 0; i < singerDetails.length; i++) {
    	statusHTML += '<li class="sidebarlinks__item">';
      	statusHTML += `<a href="` + singerDetails[i].url + `">` + singerDetails[i].title+ '</a>';
      	statusHTML += 'By ';
      	statusHTML += singerDetails[i].author;
      	// statusHTML += singerDetails[i].url;
      	statusHTML += '</li>';
    }
    statusHTML += '</ul>';
   document.getElementById('json-links').innerHTML = statusHTML;
  }
};

xhr.open('GET', '../data/links.json');
xhr.send();
console.log("End");
//End sidebar JSON Singer links..

// arrow function start
$(document).ready(function(){
    // append arrow next to the article heading
    const $arrow = $('<img src="../images/arrowSprite.gif">').addClass('article_header-arrow');
    $('.article_header').append($arrow);

    //Hiding all article para 
    $('article p').hide();
    //click event on arrow 
    $('.article_header-arrow').on('click', function(){
    $(this).closest('article').siblings().removeClass('active').find('p').slideUp(400);
    $(this).closest('article').toggleClass('active').find('p').slideToggle(400);
    return false;
    });
 });
// arrow function End..





