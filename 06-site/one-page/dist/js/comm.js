const headerEI = document.querySelector("#header");

//페이지에 스크롤 이벤트추가

window.addEventListener(
  "scroll",
  //_.throttle (함수,시간)
  //스크롤이 300ms 마다 한번씩 실행되도록설정
  _.throttle(function () {
    console.log(window.scrollY);
    //페이지의 스크롤 위치가 200px보다 크면
    if (window.scrollY > 200) {
      //gsap.to(요소, 시간, 옵션)
      gsap.to(headerEI, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      //패이지의 스크롤 위치가 200px보다 작으면...
      gsap.to(headerEI, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
