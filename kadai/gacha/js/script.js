function gacha() { 
  
  //配列に画像を挿入する
  let star3 = ['01.png', '02.png','03.png',];
  let star2 = ['04.png', '05.png', '06.png','07.png', '08.png', '09.png','10.png',];
  let star1 = ['11.png', '12.png', '13.png', '14.png', '15.png','16.png','17.png', '18.png', '19.png','20.png',];
console.log(star1);
  
  //排出率の設定
  //星3が10％星2が40％星1が50％
let star1Ratio = 50; //星1の排出率は60%
let star2Ratio = 90; //星1と星2の排出率を合わせた数字

//各ランクに入っているキャラ数
let star1Total = star1.length;
let star2Total = star2.length;
let star3Total = star3.length;

//値が空の配列を作る
let character = [];

//3回ガチャを回す
for (let i = 1; i < 4; i++){

  //1～100までのランダムを作る
  let randomNum = Math.ceil(Math.random() * 100);
  console.log(randomNum);

  //if文でランクの振り分け
  if (randomNum <= star1Ratio) {
    //1~60の場合はstar1の中でランダム抽選
    let star1Num = Math.floor(Math.random() * star1Total);
    character.push(star1[star1Num]);
  } else if (randomNum <= star2Ratio) {
    //61~95の場合はstar2の中でランダム抽選
    let star2Num = Math.floor(Math.random() * star2Total);
    character.push(star2[star2Num]); 
  } else {
    //96~100の場合はstar2の中でランダム抽選
    let star3Num = Math.floor(Math.random() * star3Total);
    character.push(star3[star3Num]);
  }
}

console.log(character);
//配列characterの中身全て表示

document.querySelector('#outer').innerHTML =
  '<p><img src="img/' + character[0] + '" alt=""></p><p><img src="img/' + character[1] + '" alt=""></p><p><img src="img/' + character[2] + '" alt=""></p>';
  
}

const fullYear = new Date().getFullYear();

if (fullYear >= 2025) {
  document.querySelector('#this-year').textContent = '2024 - ' + fullYear;
} else {
  document.querySelector('#this-year').textContent = fullYear;
}