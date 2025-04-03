$(function(){
  /* Include html Files */
  $('.gnb-include').load('../include/gnb.html')
  $('.signup-header-include').load('../include/signup-header.html')
  $('.main-header-include').load('../include/main-header.html')
  $('.goods-detail-header-include').load('../include/goods-detail-header.html')
  $('.alert-back-header-include').load('../include/alert-back-header.html')

  /* Front-Slider */
  $('.front-slider').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
  });  

  /* Front-Banner-Slider */
  $('.front-banner').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
  });  

  /* Goods Suggestion Slider */
  $('.goods-suggestion-items').slick({
    slidesToShow: 3,
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScroll: 2,
  });

  /* Goods Detail Slider */
  $('.goods-detail-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  });

  /* Wish */
  $('.wish').click(function(){
    $(this).toggleClass('active')
  })  

  /* Front Footer */
  $('.btn-view-more').click(function(){
    $('.company-info-more').show()
  })
  
  /* Goods Accordion */
  $('.goods-accordion .title').click(function(){
    $(this).toggleClass('active')
    $(this).parents('.goods-accordion-content').siblings().find('.title').removeClass('active')
  })
  
  /* Goods Order Info */
  $('.btn-order-choice').click(function(){
    $('.goods-order-choice').hide()
    $('.goods-order-final').slideDown()
    $('.overlay-fold').show()

  })
  $('.btn-fold, .overlay-fold').click(function(){
    $('.goods-order-choice').show()
    $('.goods-order-final').slideUp()
    $('.overlay-fold').hide()
  })

  /* Category Accordion */
  $('.category-accordion .detail').eq(0).show()
  $('.category-accordion .title').click(function(){

    $(this).next().stop().slideToggle()
    
    $(this).toggleClass('active')
    $(this).parents('.category-accordion-box').siblings().find('.detail').stop().slideUp()
    $(this).parents('.category-accordion-box').siblings().find('.title').removeClass('active')
  })  

  /* Recent Search Result */
  $('.search-recent .btn-clear').click(function(){
    $(this).parent().hide()
    // $(this).parent().slideUp(150)
    // $(this).parent().fadeOut(150)
  })

  $('.search-recent .btn-all-clear').click(function(){
    $('.search-recent .item').hide()
  })
  
  /* Cart Item Empty */
  $('.cart-content .btn-clear').click(function(){
    $(this).parent().parent().remove();
    if($('.cart-items').length == 0) {
      $('.cart-item-empty').show();
      $('.cart-items-check-all').hide();
      $('.cart-items-summary').hide();
      $('.btn-primary.btn-order').hide();
    }
  })
  $('.cart-content .btn-all-clear').click(function(){
    $('.cart-items').remove();
    if($('.cart-items').length == 0) {
      $('.cart-item-empty').show();
      $('.cart-items-check-all').hide();
      $('.cart-items-summary').hide();
      $('.btn-primary.btn-order').hide();
    }
  })

  /* Cart Check All */
  $('.cart-chk-all').click(function(){
    $('.cart-chk').prop('checked', this.checked)
  })


})

