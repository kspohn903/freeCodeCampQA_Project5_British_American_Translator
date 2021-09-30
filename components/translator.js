/* works with "I had a bikky then went to the chip shop."
   does not work with "I had a bicky then went to the chippy." */
const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');
const fromentries = require('fromentries');

class Translator {
  
britishToAmerican(text){
var hili = [], str = '', arr = [], obj, objdot, 
    objtog, amer=[], rebrit , result1 = '', result2 ='', 
    newtext = '', char = '', endchar = '', n = '', m, 
    idx = 0, ji=0, jii=0,  jilength=0, jiilength=0, d=[], textarr='';
 
let unchgtxt = text;
if(text == undefined) { return { error: 'No text to translate' }; };
  
let regexA = new RegExp(/\d+:\d\d/, 'gi');
let regexB = new RegExp(/\d+.\d\d/, 'gi');
let regexR = new RegExp(/(\d\d\.\d\d)|(\d\d\:\d\d)/, 'gi');
let matchR= text.match(regexR);
/* let rstring = matchR.toString();
   let r = "<span class='highlight'>"+rstring+"</span>";  */
let matchB= text.match(regexB);  
if(matchB){ 
var z = matchB.map((e,i)=>{
  let symb = /\./gi;
  let n = e;
e = e.replace(new RegExp(symb,'gi'), ':');
e = '<span class="highlight">' + e + "</span>";
text = text.replace(n, e);
return text;
}); 
 
newtext = z[matchB.length-1];   /* console.log(newtext) */
} else { newtext = unchgtxt;  }; /* matchB ends */

/* if(newtext==unchgtxt){return "Everything looks good to me!";}; 
   unchanged text after time conv */

if(newtext == undefined) { return { error: 'No text to translate' }; };
 for(var k in britishOnly) { arr.push([britishOnly[k], k]);  };
  
// rebrit = Object.fromEntries(arr);
rebrit = fromentries(arr);  
//console.log(rebrit);
var altog = [rebrit, americanToBritishSpelling ];
//console.log(newtext); 
//idx = newtext.length-1; 
 char = newtext.charAt(newtext.length-1); 
 let ldx = newtext.charAt(newtext.lastIndexOf(char));

newtext = newtext.trim();
endchar = newtext.slice(-1);
newtext = newtext.slice(0, newtext.length-1)+" ";
//newtext = newtext.replace(newtext.charAt(newtext.length-1), 
// ' ' + newtext.charAt(newtext.lastIndexOf(char) ) );
 
/* put space between dot and word 
   helps to convert word at the end */

// console.log(char);
//let textarr = text.split(' ');
//textarr.map((e)=>{
//console.log(newtext);

for(var i=0;i<altog.length;i++){
   for(var j in altog[i]){  
//"<span class='highlight'>"+altog[i][j]+"</span>"     
 //m =newtext.toLowerCase().match(j+" ");
 
 if((newtext.toLowerCase().match(altog[i][j]+" ")!=null)){
 //m = j;   
ji = text.toLowerCase().search(altog[i][j]);
j = j.split(''); 
 if(unchgtxt.charAt(ji) == unchgtxt.charAt(ji).toUpperCase()){ 
   j[0] = j[0].toUpperCase(); 
 }
 j = j.join('');
 let hilite = '<span class="highlight">'+j+"</span>"; 
newtext = newtext.replace(new RegExp(altog[i][j], 'gi'), hilite);
 jii = newtext.indexOf(hilite);
//jilength = altog[i][j].length;
//jiilength = j.length;
 }
 //if(altog[1][j]=='footie') { m = j; }
 } /* altog[i] object loop ends */
}/* altog array loop ends */
//}); /* textarr mapped loop ends */
 
 let atbt = americanToBritishTitles;
     let ar = [], wrdarr = [];
   for(var j in atbt){  
  let nutxt = newtext.toLowerCase();
    if(nutxt.match(atbt[j]+" ")){ 
     if(!ar.includes(nutxt.search(nutxt.match(atbt[j])))){
     ar.push(nutxt.search(nutxt.match(atbt[j])));
      wrdarr.push(nutxt.match(atbt[j]));
     };
     // ar = ar.reverse();
     wrdarr =wrdarr.reverse();
     nutxt = " "+nutxt;

     let textstr = " " + newtext;
     var textarr = textstr.split(' ');

     var nsplit =nutxt.split(' ');
     let narr = [];
     // m = nsplit; 

   nsplit.map((e) => {
       for(var p in atbt){  
       if((atbt[p]==e)){
          narr.push([atbt[p], '<span class="highlight">'+ p+"</span>"], 
                    [(atbt[p][0].toUpperCase()+(atbt[p].slice(1,atbt[p].length))),  
                    "<span class='highlight'>" + ((p[0].toUpperCase()+(p.slice(1,p.length))))
                                               +"</span>"]);
       } 
      let nobj = fromentries(narr);
      //m = nobj['prof'];
      newtext = textarr.reduce((newtext,oldword)=>{  
       return newtext+=  " "+  (nobj[oldword] ||oldword);
      }); /* end of result */ 
     } /* end of for loop*/
    }); /* end of nsplit loop */
   } 
  } /* americanToBritishTitles object loop ends */
  
 /* Something... */
newtext= newtext.trim();
newtext = newtext+endchar;
  
  if(newtext == unchgtxt) { return "Everything looks good to me!"; };  
 
 //m= m.trim();
 //m = m+endchar;
// console.log(newtext)
  return newtext; // newtext //rebrit["advice column"]  //unchgtxt
 //result3 //.trim() // c//d //return titles //brit // text //objtog //textarr //matchdot//  objdot //  arr[0]  // match //str  //obj2 //textnewarr //
 
} /* britishtoAmerican method ends */

//============================================================
  
americanToBritish(text){
var hili = [], str = '', arr = [], obj, objdot, objtog, amer=[], brit = [], result1 = '', result2 ='', newtext = '', char = '', endchar = '', n = '', m = '', idx = 0, ji=0, jii=0,  jilength=0, jiilength=0,d=[];
 
let unchgtxt = text;
if(text==undefined){
 return { error: 'No text to translate' }
  };

var lowert = text.toLowerCase();

let regexA = new RegExp(/\d+:\d\d/, 'gi');
let regexB = new RegExp(/\d+.\d\d/, 'gi');
let regexR = new RegExp(/(\d\d\.\d\d)|(\d\d\:\d\d)/, 'gi');
let matchR= text.match(regexR);
//let rstring = matchR.toString();
//let r = "<span class='highlight'>"+rstring+"</span>"; 

let matchA= text.match(regexA);  

if(matchA){ 
var z = matchA.map((e,i)=>{
  let symb = ":";
  let n = e;
e = e.replace(new RegExp(symb,'gi'), '.');
//  console.log(e)
e = '<span class="highlight">' +e+"</span>";
text = text.replace(n, e);
return text;
}); 
 
newtext = z[matchA.length-1];  
//console.log(newtext)
}else{
newtext = unchgtxt; 
}
// matchA ends  
//if(newtext==unchgtxt){return "Everything looks good to me!";}; //unchanged text after time conv



if(newtext==undefined){
 return { error: 'No text to translate' }
  };

var altog = [americanToBritishTitles, americanOnly, americanToBritishSpelling ];


//console.log(newtext);

//idx = newtext.length-1; 
 char = newtext.charAt(newtext.length-1); 
 let ldx = newtext.charAt(newtext.lastIndexOf(char));

newtext = newtext.trim();
endchar = newtext.slice(-1);
newtext = newtext.slice(0, newtext.length-1)+" ";


//newtext = newtext.replace(newtext.charAt(newtext.length-1), ' '+newtext.charAt(newtext.lastIndexOf(char)));
 
//put space between dot and word
//helps to convert word at the end

// console.log(char);
//let textarr = text.split(' ');
//textarr.map((e)=>{
//
//console.log(newtext);

for(var i=0;i<altog.length;i++){
   for(var j in altog[i]){  
//"<span class='highlight'>"+altog[i][j]+"</span>"     
 //m =newtext.toLowerCase().match(j+" ");

 if(newtext.toLowerCase().match(j+" ")){ 
ji = text.toLowerCase().search(j);

altog[i][j] = altog[i][j].split('');
 if(unchgtxt.charAt(ji)==unchgtxt.charAt(ji).toUpperCase()){
altog[i][j][0] = altog[i][j][0].toUpperCase();
   }

altog[i][j] = altog[i][j].join('');
 
   let hilite = '<span class="highlight">' +altog[i][j]+"</span>"; 
    str += j;  
 newtext = newtext.replace(new RegExp(j, 'gi'), hilite);
jii = newtext.indexOf(hilite);
//jilength = j.length;
//jiilength = altog[i][j].length;

    //arr.push([newtext.indexOf(hilite), altog[i][j]]);
    }   
 
  
 } // altog[i] object loop ends
}//altog array loop ends 
//});//textarr mapped loop ends
 

//newtext= newtext.replace(' '+char, char);//wrong sequence
//
newtext= newtext.trim();
newtext = newtext+endchar;//bring back in the dot/period
 
 
 if(newtext==unchgtxt){
   return "Everything looks good to me!";
 };  

  
  return newtext  //unchgtxt
 //result3 //.trim() // c//d //return titles //brit // text //objtog //textarr //matchdot//  objdot //  arr[0]  // match //str  //obj2 //textnewarr //
 
}//americanToBritish method ends

 
 

}

module.exports = Translator;
