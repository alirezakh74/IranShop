let drowpdownBtn = document.body.getElementsByClassName('dropdown-btn');

for (let i = 0; i < drowpdownBtn.length; ++i) {
  drowpdownBtn[i].addEventListener('click', function () {
    // console.log('clicked');
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
    let dropDownSize = drowpdownMenu.childElementCount * drowpdownMenu.firstElementChild.clientHeight;
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