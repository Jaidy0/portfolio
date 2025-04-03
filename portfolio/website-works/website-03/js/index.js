$(function(){
  $('.open-btn').on('click' , function(){
    $('.gnb-box').css({
      display : 'block'
    })
  })
  $('.close-btn').on('click' , function(){
    $('.gnb-box').css({
      display : 'none'
    })
    $('.depth2').stop().slideUp(100)
  })

  $('.depth1 > a').on('click' , function(){
    $('.depth2').stop().slideUp(500)
    $(this).next().stop().slideDown(500)
  })
})
$(function(){
  $('.toget-tab-box .toget-tab2 a').hide()
  $('.toget-tab-box .toget-tab3 a').hide()

  $('.toget-tab span').on('click' , function(){
    $('.toget-tab span').removeClass('on')
    $(this).addClass('on')
    $(this).next().show()

    $('.toget-tab a').hide()
    $(this).next().show()
  })
})