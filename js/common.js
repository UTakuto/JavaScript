/**
コンテンツのリサイズ
コンテンツの高さがウィンドウの高さより低い時は、ブラウザの高さと同じにする
*/
window.onload=(e)=>{const cw=document.querySelector('#content-wrap');const header=document.querySelector('#wrapper>header');const footer=document.querySelector('#wrapper>footer');let winH=e.currentTarget.innerHeight;let headerH=header.clientHeight+2;let footerH=footer.clientHeight;let cwH=cw.clientHeight;let siteH=headerH+cwH+footerH;if(winH>siteH){cw.style.height=(cwH+(winH-siteH))+'px';}const year=document.querySelector('#year');let date=new Date();year.innerText=date.getFullYear();}
