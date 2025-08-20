// Swiper 자동 슬라이드 + 마우스로 넘기기 가능
const swiper = new Swiper(".chatSwiper", {
  slidesPerView: "auto", // 여러 장이 한 화면에 걸쳐 보이게
  spaceBetween: 20,
  grabCursor: true, // 마우스 커서 손모양
  autoplay: {
    delay: 2000, // 2초마다 자동으로 넘어감
    disableOnInteraction: false, // 스와이프 후에도 다시 자동재생
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // 점 클릭 가능
  },
});
