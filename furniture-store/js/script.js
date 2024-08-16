

//西暦の取得
$(function(){

const fullYear = new Date().getFullYear();
console.log(fullYear );
if(fullYear >= 2025){
    $('#this-year').text('2024 - ' + fullYear);
}else{
    $('#this-year').text(fullYear);
}




//ハンバーガーメニュー
//#ham-btnをon.clickしたら

$('#ham-btn').on('click',function(){
$(this).toggleClass('is-active');
$('#sp-nav').toggleClass('slide');
});


//スクロールイベント
$(window).on('scroll',function(){
    //自身のスクロール量を取得し代入
        let y = $(window).scrollTop();
        console.log(y);
        //headerの高さを取得
       let headerH = $('header').outerHeight();
       console.log(headerH);
       if(y > headerH){
        $('body').addClass('scroll');
       }else{
        $('body').removeClass('scroll');
       }
});

});
