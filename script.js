let slideItems = document.querySelectorAll('.slide-item');

let slider = document.querySelector('.slider');

let links = document.querySelectorAll('.slider-indicators > li');

let contentTitles = document.querySelectorAll('.content-title');

let contentBtns = document.querySelectorAll('.content-btn');

let count = 1;

links.forEach((link, indx) => {
  link.addEventListener('click', () => {
    count = indx;
    links.forEach((link) => {
      link.classList.remove('active');
    });

    slideItems.forEach((item) => {
      item.classList.remove('show');
    });

    contentTitles.forEach((contentTitle) => {
      contentTitle.classList.remove('animate');
    });

    contentBtns.forEach((btn) => {
      btn.classList.remove('animate');
    });

    contentBtns[indx].classList.add('animate');

    contentTitles[indx].classList.add('animate');

    slideItems[indx].classList.add('show');

    link.classList.add('active');
  });
});

// autoSliding

let autoplay = setInterval(playitem, 3000);
function playitem() {
  links.forEach((link) => {
    link.classList.remove('active');
  });
  links[count].click();
  count++;
  if (count == 3) {
    count = 0;
  }
}
