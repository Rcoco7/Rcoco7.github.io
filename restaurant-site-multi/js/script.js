//vegasの呼び出し
$('#main-visual').vegas({
  slides: [
      { src: "img/main1.webp" },
      { src: "img/main2.webp" },
      { src: "img/main3.webp" },
  ],
  timer: false,//タイマーの横棒を消した
  transition: 'swirlLeft',//画像の切り替わりアニメーションの設定
  animation: 'kenburns',
  delay: 5000,//画像が止まっている時間
  animationDuration:5000,//アニメーションの時間
});


$(function () {
  //ハンバーガーボタン
  //まずg-navを非表示にする
  $('#g-nav').hide();
  //#ham-btnをon.clickしたら、thisにToggleClassして#g-navをFadeToggleする
  $('#ham-btn').on('click', function () {
    $(this).toggleClass('is-active');
    $('#g-nav').fadeToggle(200);
  });
  //#g-nav aをon.clickしたら、#g-navをfadeOutすて、ｘを3本線に戻す
  $('#g-nav a').on('click', function () {
    $('#g-nav').fadeOut(200);
    $('#ham-btn').removeClass('is-active');
  });

  

  //ajaxで外部データ呼び出す、簡易版
  $('#news-list').load('news.txt');


  //カルーセル
  $('.bxslider').bxSlider({
    ticker: true,
    speed: 40000,
    minSlides: 2,
    maxSlides: 6,
    slideWidth: 320,
  });

  //西暦を取得しfullyearに代入する
  const fullYear = new Date().getFullYear();
  //const fullYear = 2025;確認の為
  if (fullYear >= 2025) {
    $('#this-year').text('2024-' + fullYear);
  } else {
    $('#this-year').text(fullYear);
  }
  


});



