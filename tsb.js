// ==UserScript==
// @name         Translate.SB by M3GZ
// @namespace    https://www.nulled.to/user/4103370-m3gz/
// @version      1.0.0
// @description  Don't keep chatbox English at all times!
// @author       https://www.nulled.to/user/4103370-m3gz
// @match        https://www.nulled.to/
// @icon         https://i.imgur.com/mgBt7xt.png
// ==/UserScript==

const trans_to_lang = 'en';

function tran(t,e){const n=new XMLHttpRequest;n.responseType="json";const s=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${e}&dt=t&dj=1&source=input&q=${t}`;n.open("GET",s),n.send(),n.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=this.response.src,n=this.response.sentences[0];alert(`Translate.SB by M3GZ\r\n\r\nTranslated(${e}): ${n.trans}\r\nOriginal(${t}): ${n.orig}`)}}}document.querySelector("#shoutbox-announcement-text > p").innerHTML+=' &nbsp; &nbsp; <button id="sendTrans">Send translated text</button>',function t(){"use strict";let e=document.getElementsByClassName("cell-date");for(let t=0;t<e.length;t++){let s=e[t].outerHTML;if(e[t].parentNode.outerHTML.includes("m8")){e[t].parentNode.children[2].setAttribute("id",`transB${t}`);var n=document.getElementById(`transB${t}`);n.replaceWith(n.cloneNode(!0))}else e[t].outerHTML=`<div class="field" id="transB${t}"><button style='width:70px;padding-left:10px;'>m8_wot</button></div>`+s;document.getElementById(`transB${t}`).addEventListener("click",function(){tran(e[t].parentNode.children[1].children[0].textContent,trans_to_lang)})}setTimeout(t,2e3)}(),document.getElementById("sendTrans").addEventListener("click",function(){tran(prompt("Enter text: "),prompt("Translate to: "))});
