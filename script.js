var animrgb = 'background-color: aquamarine;';
var tran = 'transform: translate(7%,5%);';
function btnchst(){
    document.querySelector('.upbut0').style.cssText = animrgb;
    document.querySelector('.upbut1').style.cssText = animrgb;
    document.querySelector('.upbut2').style.cssText = animrgb;
    document.querySelector('.upbut3').style.cssText = animrgb;
    document.querySelector('.upbut4').style.cssText = animrgb;
    document.querySelector('.upbut5').style.cssText = animrgb;
    document.querySelector('.upbut6').style.cssText = animrgb;
    document.querySelector('.upbut7').style.cssText = animrgb;
    document.querySelector('.upbut8').style.cssText = animrgb;
    document.querySelector('.upbut9').style.cssText = animrgb;
    document.querySelector('.upbut10').style.cssText = animrgb;
    document.querySelector('.key11').style.cssText = animrgb;
    document.querySelector('.key21').style.cssText = animrgb;
    document.querySelector('.key31').style.cssText = animrgb;
    document.querySelector('.key41').style.cssText = animrgb;
    document.querySelector('.key51').style.cssText = animrgb;
    document.querySelector('.key61').style.cssText = animrgb;
    document.querySelector('.key71').style.cssText = animrgb;
    document.querySelector('.key81').style.cssText = animrgb;
    document.querySelector('.key91').style.cssText = animrgb;
    document.querySelector('.key101').style.cssText = animrgb;
    document.querySelector('.key111').style.cssText = animrgb;
    document.querySelector('.key121').style.cssText = animrgb;
    document.querySelector('.key12').style.cssText = animrgb;
    document.querySelector('.key22').style.cssText = animrgb;
    document.querySelector('.key32').style.cssText = animrgb;
    document.querySelector('.key42').style.cssText = animrgb;
    document.querySelector('.key52').style.cssText = animrgb;
    document.querySelector('.key62').style.cssText = animrgb;
    document.querySelector('.key72').style.cssText = animrgb;
    document.querySelector('.key82').style.cssText = animrgb;
    document.querySelector('.key92').style.cssText = animrgb;
    document.querySelector('.key102').style.cssText = animrgb;
    document.querySelector('.key112').style.cssText = animrgb;
    document.querySelector('.key122').style.cssText = animrgb;
    document.querySelector('.key13').style.cssText = animrgb;
    document.querySelector('.key23').style.cssText = animrgb;
    document.querySelector('.key33').style.cssText = animrgb;
    document.querySelector('.key43').style.cssText = animrgb;
    document.querySelector('.key53').style.cssText = animrgb;
    document.querySelector('.key63').style.cssText = animrgb;
    document.querySelector('.key73').style.cssText = animrgb;
    document.querySelector('.key83').style.cssText = animrgb;
    document.querySelector('.key93').style.cssText = animrgb;
    document.querySelector('.key103').style.cssText = animrgb;
    document.querySelector('.key113').style.cssText = animrgb;
    document.querySelector('.key134').style.cssText = animrgb;
    document.querySelector('.key234').style.cssText = animrgb;
    document.querySelector('.key334').style.cssText = animrgb;
    document.querySelector('.key734').style.cssText = animrgb + tran;
    document.querySelector('.key834').style.cssText = animrgb;
    document.querySelector('.key934').style.cssText = animrgb;
    document.querySelector('.key1034').style.cssText = animrgb;
    document.querySelector('.key1134').style.cssText = animrgb;
    console.log('i am there')
}
var lap = 1 ;
let theme1=()=>{
animrgb = 'animation: rgb 30s infinite linear;';
btnchst();
return animrgb ;
}
let theme2=()=>{
animrgb = 'animation: rgb-gradient 30s infinite linear; color: whitesmoke;';
btnchst();
return animrgb ;
}
let theme3=()=>{
    animrgb = 'animation: none;';
btnchst();
return animrgb ;
}
let theme5=()=>{
    animrgb = 'animation: none; background:  linear-gradient(360deg,green,yellow);';
    btnchst();
    return animrgb ;
}
let showb=()=>{
    document.querySelector('.frs').style.cssText ="opacity: 100%; height: 35px;width: 70px;font-size: 12px;font-weight: bold;position: absolute;left: 50%;top: 5%;transform: translate(-50%,-50%);"
    setTimeout(ft,1500);
}
let ft=()=>{
    document.querySelector('.frs').style.cssText ="opacity: 0%";
};
let display = document.getElementById("display");
let btns = Array.from(document.getElementsByTagName('button'));
btns.map( button => {
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case '←':
                if (display.innerText){
                display.innerText = display.innerText.slice(0, -1);
                if (display.innerText ===""){
                    document.querySelector("#google").href = "https://www.google.com" 
                    document.querySelector("#youtube").href = "https://www.youtube.com" 
                    document.querySelector("#maps").href = "https://maps.google.com" 
                }
                else{
                    document.querySelector("#google").href = "https://www.google.com/search?q= "+ display.innerText +"&oq="+ display.innerText
                    document.querySelector("#youtube").href = "https://www.youtube.com/results?search_query="+ display.innerText
                    document.querySelector("#maps").href = "https://www.google.com/maps/place/"+ display.innerText
                      
                }
                }
                break;
            case 'shift':
                if (lap === 1 ){
                    document.querySelector('.key134').style.cssText = "background-color: red;"
                    lap = 0 ;
                }
                else{
                    document.querySelector('.key134').style.cssText = 'background-color: cyan;' ;
                    lap = 1 ;
                }
                break;
            case 'نسخ':
                navigator.clipboard.writeText(display.innerText);
                alert("( "+display.innerText +" )"+" copied to clipboard ")
                break;
            case 'pause frame':
                document.querySelector('.allcontent').style.cssText = 'animation: none'
                break;
            case 'بحث':
                if (display.innertext !== "")
                document.querySelector("#search").href = "https://www.google.com/search?q= "+ display.innerText +"&oq="+ display.innerText
                break
            default:
                display.innerText += e.target.innerText;
                document.querySelector("#google").href = "https://www.google.com/search?q= "+ display.innerText +"&oq="+ display.innerText
                document.querySelector("#youtube").href = "https://www.youtube.com/results?search_query="+ display.innerText
                document.querySelector("#maps").href = "https://www.google.com/maps/place/"+ display.innerText
        }
    });
});

function copy(){ navigator.clipboard.writeText(display.innerText);alert("( "+display.innerText +" )"+" copied to clipboard ");};