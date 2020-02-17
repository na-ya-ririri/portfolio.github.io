$(function() {

  $('.qa__list--item').each(function() {
    $(this).on('click', function() {
      $(">.qa__q", this).stop(true, false).toggleClass('open');
      $(">.qa-a__wrapper", this).stop(true, false).slideToggle();
    });
  });

  // 連続クリックでの予期しない挙動を「.stop(true, false)」で制御
});