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
    let dropdownIcon = this.firstElementChild;
    // console.log(dropdownIcon.innerText);
    // if (drowpdownMenu.style.display === "flex") {
    //   drowpdownMenu.style.display = "none";
    //   dropdownIcon.innerText = 'arrow_drop_down';
    // } else {
    //   drowpdownMenu.style.display = "flex";
    //   dropdownIcon.innerText = 'arrow_drop_up';
    // }

    //console.log(drowpdownMenu.firstElementChild.offsetHeight);
    //console.log(drowpdownMenu.firstElementChild.clientHeight);
    //console.log(drowpdownMenu.firstElementChild.getBoundingClientRect().height);
    let dropDownSize = drowpdownMenu.childElementCount * drowpdownMenu.firstElementChild.clientHeight + 50;
    if (drowpdownMenu.style.height == "0px" || drowpdownMenu.style.height == '') {
      drowpdownMenu.style.height = dropDownSize + "px";
      // dropdownIcon.innerText = 'arrow_drop_up';
    } else {
      drowpdownMenu.style.height = "0px";
      // dropdownIcon.innerText = 'arrow_drop_down';
    }

    dropdownIcon.classList.toggle('rotate-180');
  });
}