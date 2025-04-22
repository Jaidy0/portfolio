$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".header, .gototop").addClass("active");
  } else {
    $(".header, .gototop").removeClass("active");
  }
});
$(".gototop").click(function () {
  $(window).scrollTop(0);
});
$(".tab-btn li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  $(".web").removeClass("active");
  $("#" + $(this).attr("data-alt")).addClass("active");

  $(".web-bg").removeClass("active");
  $("#" + $(this).attr("data-alt") + "-bg").addClass("active");
});
$(".arrow .next").click(function () {
  $(".web.active").next().addClass("active").siblings().removeClass("active");
  $(".web-bg.active")
    .next()
    .addClass("active")
    .siblings()
    .removeClass("active");
  $(".tab-btn li.active")
    .next()
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$(".arrow .prev").click(function () {
  $(".web.active").prev().addClass("active").siblings().removeClass("active");
  $(".web-bg.active")
    .prev()
    .addClass("active")
    .siblings()
    .removeClass("active");
  $(".tab-btn li.active")
    .prev()
    .addClass("active")
    .siblings()
    .removeClass("active");
});
$(".prac h4").click(function () {
  $(this).addClass("active");
  $(this).parent().siblings().find("h4").removeClass("active");
  $(this).next().addClass("active");
  $(this).parent().siblings().find(".prac-box-slide").removeClass("active");
});
$(".prac-tab li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  $(".prac-box-slide").removeClass("active");
  $("#" + $(this).attr("data-alt")).addClass("active");
});
$(".desi h4").click(function () {
  $(this).addClass("on");
  $(this).parent().siblings().find("h4").removeClass("on");
  $(this).next().addClass("active");
  $(this).parent().siblings().find(".design-box").removeClass("active");
});
$(".desi-tab li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  $(".design-box").removeClass("active");
  $("#" + $(this).attr("data-alt")).addClass("active");
});
$(".gnb-plus-btn").click(function () {
  $(this).toggleClass("active");
  $(".gnb-wrap").toggleClass("active");
  $("body").toggleClass("modal-open");
});

$(".gnb-wrap a").click(function () {
  $(this)
    .parents(".gnb-wrap.active")
    .removeClass("active")
    .siblings(".gnb-btn")
    .removeClass("active");
});
$(".modal-close-btn").click(function () {
  $(".modal-overlay").removeClass("active");
  $("body").removeClass("modal-open");
});

// Modal functionality
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");

modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
});

const modalCloseBtn = document.querySelector(".modal-close-btn");
modalCloseBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});
