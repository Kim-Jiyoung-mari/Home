//메인배너
const mainSwiper = new Swiper('.main_swiper',{
    autoplay:{
        delay:5000, // 실제 배너 5~7초 많이 사용
    },
    loop:true,
    scrollbar: {
        el: ".main_swiper .swiper-scrollbar",
    },
});

// 2행 베스트셀러
const contentSwiper = new Swiper('.items1',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:4,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .all .progress .swiper-scrollbar",
    },
});

// 3행 마데카 프라임
const madecaSwiper = new Swiper('.items2',{
    autoplay:{
        delay:3000, // 실제 배너 5~7초 많이 사용
    },
    slidesPerView:3,
    spaceBetween:14,
    loop:true,
    scrollbar: {
        el: " .item_contents .progress .swiper-scrollbar",
    },
});