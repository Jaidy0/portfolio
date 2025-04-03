$(function(){
  $('.sch > a').on('click' , function(){
    $('.sch').toggleClass('on')
  })
})

$(function(){
  $('exhibit-box').hide()

  $('.exhibit-wrap-tit').on('click' , function(){
    $('.exhibit-wrap-tit').removeClass('on')
    $(this).addClass('on')
    $(this).next().show()

    $('.exhibit-box').hide()
    $(this).next().show()
  })
})

$(function(){
  $('educul-tab-box').hide()

  $('.educul-tab-tit').on('click' , function(){
    $('.educul-tab-tit').removeClass('on')
    $(this).addClass('on')
    $(this).next().show()

    $('.educul-tab-box').hide()
    $(this).next().show()
  })
})


$(function(){
  $('newsno-wrap-box').hide()

  $('.newsno-wrap-tit').on('click' , function(){
    $('.newsno-wrap-tit').removeClass('on')
    $(this).addClass('on')
    $(this).next().show()

    $('.newsno-wrap-box').hide()
    $(this).next().show()
  })
})

