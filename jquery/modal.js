$(function() {

  var modal = $('.privacy-modal__wrapper');
  var overLay = $('.modal-overlay');
  var modalPos;

  // プライバシーリンクをクリックしたらモーダルとオーバーレイを表示
  $('.privacy-content').on('click', function() {
    modal.fadeIn();
    overLay.fadeIn();
    
    modalPos = $(window).scrollTop(); //モーダルを表示した時のスクロール位置を取得
    $('body').addClass('fixed').css({'top': -modalPos});
    
  });

  // ✕ボタンおよび閉じるリンク(共通クラスを付与)をクリックしたらモーダルとオーバーレイを非表示
  $('.close-modal').on('click', function() {
    modal.fadeOut();
    overLay.fadeOut();

    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo( 0 , modalPos );

  });

  // オーバーレイをクリックしてもモーダルを非表示
  overLay.on('click', function() {
    modal.fadeOut();
    overLay.fadeOut();

    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo( 0 , modalPos );

  });

});

// モーダル表示時に背景をスクロールさせない方法：https://imasashi.net/modal-window_bg-fixed.html