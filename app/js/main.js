"use strict"

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }

};


if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}


// menu burger
const bntBurger = document.querySelector('.burger');
const menuBtn = document.querySelector('.menu__btn');
const nav = document.querySelector('.nav');

if (bntBurger) {
  bntBurger.addEventListener("click", (e) => {
    document.body.classList.toggle('_lock');
    bntBurger.classList.toggle('_active');
    nav.classList.toggle('_active');
    menuBtn.classList.toggle('_active');
  });

}

if (bntBurger.classList.contains('_active')) {
  document.body.classList.remove('_lock');
  bntBurger.classList.remove('_active');
  nav.classList.remove('_active');
}

//header__bottom
const burgerClubBridges = document.querySelector('.burger-club-bridges');
const burgerFooter = document.querySelector('.burger-footer');
const clubBridges = document.querySelector('.club-bridges');
const social = document.querySelector('.social');

if (burgerClubBridges) {
  let copyClubBridges = clubBridges.cloneNode(true);
  burgerClubBridges.append(copyClubBridges);
}

if (burgerFooter) {
  let copySocial = social.cloneNode(true);
  burgerFooter.append(copySocial);
}



//# sourceMappingURL=main.js.map
