const slideSection = document.getElementById('slider_section');
const sliderBtnContainer = document.getElementById('slider_btn_container');

// Swiper instance
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".slide_next",
        prevEl: ".slide_prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    mousewheel: {
        invert: false,
    },
    grabCursor: true,
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});


const centerButton = () => {
    const sectionWidth = slideSection.clientWidth;
    const sectionHeight = slideSection.clientHeight;
    const leftHalfWidth = sectionWidth / 2;

    sliderBtnContainer.style.position = "absolute";
    sliderBtnContainer.style.transform = "translate(-57%, -50%)";
    sliderBtnContainer.style.top = `${sectionHeight / 2}px`;
    sliderBtnContainer.style.left = `${leftHalfWidth}px`;
};

slideSection.addEventListener("mousemove", (e) => {
    sliderBtnContainer.style.position = "fixed";
    sliderBtnContainer.style.transform = "translate(-50%, -50%)";
    sliderBtnContainer.style.top = `${e.clientY}px`;
    sliderBtnContainer.style.left = `${e.clientX}px`;
});

slideSection.addEventListener("mouseleave", centerButton);

window.addEventListener("resize", centerButton);
centerButton();


slideSection.addEventListener("click", (e) => {
    const sectionRect = slideSection.getBoundingClientRect();
    // console.log(sectionRect.width / 2)
    const sectionMidPoint = sectionRect.left + sectionRect.width / 2;
    // console.log(sectionMidPoint)

    if (e.clientX < sectionMidPoint) {
        // console.log(e.clientX)

        swiper.slidePrev();
    } else {
        // console.log(e.clientX)
        swiper.slideNext();
    }
});
