$(function() {
  var openBtn = $('.drawer-btn');
  var drawerMenu = $('.drawer-menu');
  var closeBtn = $('.drawer-btn-close');
  var overlay = $('.overlay');

  function menuOpen() {
    drawerMenu.addClass('open'); //ドロワーメニューを表示
    overlay.fadeIn();
    // $('body').addClass('overlay');
    closeBtn.fadeIn();
  }
  function menuClose() {
    drawerMenu.removeClass('open'); //ドロワーメニューを非表示
    overlay.fadeOut();
    // $('body').removeClass('overlay');
    closeBtn.fadeOut('fast');
  }

  openBtn.on('click', function() {
    menuOpen();
  });
  closeBtn.on('click', function() {
    menuClose();
  });
  overlay.on('click', function() { //Closeボタン以外(背景)クリックでもドロワーメニューを非表示にさせる
    menuClose();
  });

  // ↓オーバーレイ部分のクリックでもドロワーメニューを非表示にしようとしたがうまく行かず…
  
  // $('.overlay').on('click', function() {
  //   menuClose();
  // });
  // $('body').hasClass('overlay').removeClass('overlay');
  // $('body').on('click', function() {
  //   if($('body').hasClass('overlay')) {
  //     menuClose();
  //   }
  // });
  // $('body').on('click', function() {
  //   if($('body').hasClass('overlay')) {
  //     menuClose();
  //   } else {
  //     openClose();
  //   }
  // });
  // $('body.overlay').on('click', function() {
  //   if ($('.drawer-menu').is(':visible')) {
  //     $('.drawer-menu').removeClass('open');
  //     $(this).removeClass('overlay');
  //     $('.drawer-btn-close').fadeOut('fast');
  //   }
  // });

});