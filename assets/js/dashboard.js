let drowpdownBtns = document.body.getElementsByClassName('dropdown-btn');

for (let i = 0; i < drowpdownBtns.length; ++i) {
  drowpdownBtns[i].addEventListener('click', function () {

    for(let drowpdownBtn of document.body.getElementsByClassName('dropdown-btn'))
    {
      if(drowpdownBtn == this) continue;
      drowpdownBtn.classList.remove('active');
      drowpdownBtn.nextElementSibling.style.height = '0px';
    }

    this.classList.toggle('active');
    let drowpdownMenu = this.nextElementSibling;
    let dropdownIcon = this.children[1];

    let dropDownSize = drowpdownMenu.childElementCount * drowpdownMenu.firstElementChild.clientHeight + 50;
    if (drowpdownMenu.style.height == "0px" || drowpdownMenu.style.height == '') {
      drowpdownMenu.style.height = dropDownSize + "px";
    } else {
      drowpdownMenu.style.height = "0px";
    }
    dropdownIcon.classList.toggle('rotate-180');
  });
}

// handle header buttons
let menuBtn = document.getElementsByClassName('menuBtn');
let sideNav = document.getElementsByClassName('sidenav');

menuBtn[0].addEventListener('click', function(){
  if(sideNav[0].style.right != '0px'){
    sideNav[0].style.right = '0px';
    menuBtn[0].innerHTML = 'close';
  } else{
    sideNav[0].style.right = '-500px';
    menuBtn[0].innerHTML = 'menu';
  }
  // if search bar is open, close it
  let sBtn = document.getElementsByClassName('searchMobileBtn')[0];
  if(sBtn.innerHTML == 'close')
  {
    sBtn.click();
  }
});

let searchMobileBtn = document.getElementsByClassName('searchMobileBtn');
let searchMobileWrapper = document.getElementsByClassName('search-btn-mobile-wrapper');

searchMobileBtn[0].addEventListener('click', function(){

  if(searchMobileWrapper[0].style.top != '4rem'){
    searchMobileWrapper[0].style.top = '4rem';
    searchMobileBtn[0].innerHTML = 'close';
  }
  else if(searchMobileWrapper[0].style.top != '-4rem'){
    searchMobileWrapper[0].style.top = '-4rem';
    searchMobileBtn[0].innerHTML = 'search';
  }

});

let dropDownWrapper = document.body.getElementsByClassName('drop-down-wrapper');
for(let i = 0; i < dropDownWrapper.length; ++i){
  let dropBtn = dropDownWrapper[i].firstElementChild;
  let dropBtnType = dropBtn.innerHTML;
  let dropContent = dropDownWrapper[i].lastElementChild;
  dropBtn.addEventListener('click', function(){
    if(dropContent.style.visibility == 'hidden' || dropContent.style.visibility == ''){
      dropContent.style.visibility = 'visible';
      dropBtn.innerHTML = 'close';
      // close other open drop content
      // for(let j = 0; j < dropDownWrapper.length; ++j){
      //   let dropBtn_close = dropDownWrapper[j].firstElementChild;
      //   dropBtn_close.close();
      // }
    } else {
      dropContent.style.visibility = 'hidden';
      dropBtn.innerHTML = dropBtnType;
    }
  });
}