// alert("working");
document.querySelector("button").addEventListener("click", pageref);
function pageref(){
var rm1=Math.floor(Math.random()*6)+1;
var ranimage="dice"+rm1+".png";
var imgsrc="images/"+ranimage;
var imgs=document.querySelectorAll("img")[0];
imgs.setAttribute("src",imgsrc);
var rm2=Math.floor(Math.random()*6)+1;
var imgsrc2="images/dice"+rm2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);
if(rm1>rm2){
    document.querySelector("h1").innerHTML="⛳Player1 wins!!";
}
else if(rm1<rm2){
    document.querySelector("h1").innerHTML="⛳ Player2 wins!!";
}
else{
    document.querySelector("h1").innerHTML="🤝 Draw!";  
}}