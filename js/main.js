
(function () {
  // Бургер

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger__icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 1100) return

    if (burgerIcon) {
      e.preventDefault();
    }

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }
  }


})()

document.querySelectorAll('.hero__dropdown-inner').forEach(function (DropDownWrapper) {


  const dropDownButton = DropDownWrapper.querySelector('.hero__dropdown-btn');
  const dropDownList = DropDownWrapper.querySelector('.hero__dropdown-list');
  const DropDownListItems = dropDownList.querySelectorAll('.hero__dropdown-item');
  const DropDownInputHidden = DropDownWrapper.querySelector('.hero__dropdown_input--hidden');


  dropDownButton.addEventListener('click', function () {
    dropDownList.classList.toggle('hero__dropdown-list--visible');
    dropDownButton.classList.toggle('hero__dropdown-btn--active');
    dropDownButton.classList.toggle('hero__dropdown-btn--opened');
  });

  DropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();

      dropDownButton.innerText = this.innerText;
      DropDownInputHidden.value = this.dataset.value;
      dropDownList.classList.remove('hero__dropdown-list--visible');
      dropDownButton.classList.remove('hero__dropdown-btn--opened');
      dropDownButton.classList.remove('hero__dropdown-btn--active');
    })
  });


  document.addEventListener('click', function (e) {
    if (e.target !== dropDownButton) {
      dropDownList.classList.remove('hero__dropdown-list--visible');
      dropDownButton.classList.remove('hero__dropdown-btn--active');
      dropDownButton.classList.remove('hero__dropdown-btn--opened');
    };
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownList.classList.remove('hero__dropdown-list--visible');
      dropDownButton.classList.remove('hero__dropdown-btn--active');
      dropDownButton.classList.remove('hero__dropdown-btn--opened');
    };
  });
  var swiper = new Swiper("#swiper-2", {
    slidesPerView: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      801: {
        slidesPerView: 0,
      }
    }
  });
  var swiper = new Swiper("#swiper-1", {
    slidesPerView: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      801: {
        slidesPerView: 0,
      }
    }
  });
  var swiper = new Swiper("#swiper-3", {
    slidesPerView: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      801: {
        slidesPerView: 0,
      }
    }
  });
})
