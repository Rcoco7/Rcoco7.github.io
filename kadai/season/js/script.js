const fullYear= new Date().getFullYear()
//const fullYear=2025 //確認のために入力してみた
console.log(fullYear);

if(fullYear>= 2025){
 document.querySelector('#this-year').textContent='2024 - '+fullYear;     
}else{
  //#this-yearにfullYearを文字で表示させる
document.querySelector('#this-year').textContent=fullYear;
}