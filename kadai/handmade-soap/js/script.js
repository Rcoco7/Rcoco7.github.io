$(function(){

  //footer
  const fullYear = new Date().getFullYear();
  $('#this-year').text('2004 - ' + fullYear);



  //メインビジュアル vegas2
  $("#main-visual").vegas({
    slides: [
        { src: "img/vegas1.webp" },
        { src: "img/vegas2.webp" },
        { src: "img/vegas3.webp" },
       
    ],
    timer: false,
    transition: 'blur',
    animation: 'kenburns',
    delay: 5000,
    animationDuration: 5000
  });


  //ajaxでnews.txtを呼び出し
  $('#news-list').load('news.txt');


  //bxslider カルーセル
    $('.bxslider').bxSlider({
    ticker:true,
    speed: 40000,
    minSlides:2,
    maxSlides:6,
    slideWidth:320,
    
  });


  //ハンバーガーボタン
  $('#sp-nav').hide();
  $('#ham-btn').on('click',function(){
    $(this).toggleClass('is-active');
    $('#sp-nav').fadeToggle(200);
  });

  $('#sp-nav a').on('click',function(){
    $('#sp-nav').fadeOut(200);
    $('#ham-btn').removeClass('is-active');
  });



  $('#sp-btn').on('click',function(){
   $('.sub-menu').toggleClass('is-active');
  });

//customizeのプルダウンメニューを作成
 $('.js-example-basic-multiple').select2({
    placeholder:'選択してください',
    allowClear: true,
    maximumSelectionLength: 3,
    closeOnSelect: false,
    lunguage:'ja',
    
    });
    

//customizeの色分けした円をFade-in させた  
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
    });
  



});









let path = 'img/products/';
let img = ['item1.webp','item2.webp','item3.webp'];
let h3 = ['Coffee Scrab Soap','Orange Peel Soap','Botanical Herb Soap'];
let p = ['スクラブ効果で古い角質をしっかり除去し、コーヒーの香りに包まれながら、心地よい洗い心地が楽しめます。','オレンジの爽やかな香りが、バスタイムを心地よい空間に変えます。一日の終わりに、アロマ効果で心身をリラックスさせ、安らぎのひとときを','乾燥肌もっちり。ハーブの力で肌を健やかに保ちます。しっとりなめらかな肌へ導きます。オリーブオイルが肌に潤いを。乾燥が気になる方におすすめです。'];

for (let i = 0; i < 3; i++) {
  let inputText = '<div class="box"><div class="item"><img src="'+path+img[i]+'" alt=""></div><div class="text"><h3>'+h3[i]+'</h3><p>'+p[i]+'</p></div></div>';
  document.querySelector('#wrapper-items').innerHTML += inputText;
};
