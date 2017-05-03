var imgadr= ['images/1.jpg','images/development/20.jpg','images/11.jpg','images/development/1.jpg','images/sysacco/sysacco_1/1.JPG','images/shamtex/SHAMTEX_2/1.jpg','images/megaplast/mega_2/3.jpg','images/29.jpg'];
/* var headArray= ['First Heading','Second Heading', 'Third Heading', 'Last heading'];
var paraArray= ['First paragraph is awesome!',
				'Second paragraph goes here!', 
				'Third paragraph for you',
				 'Last but not least important paragraph!']; */
//var box = "";
var x = document.getElementById('boxjs').className += 'box_2';			 
var box = [ document.getElementById('group').innerHTML ,
			document.getElementById('development').innerHTML ,
			document.getElementById('famco').innerHTML,
			document.getElementById('transport').innerHTML,
			document.getElementById('sysacco').innerHTML,
			document.getElementById('shamtex').innerHTML,
			document.getElementById('megaplast').innerHTML,
			document.getElementById('investments').innerHTML,
			
//+'<div class="w3-text-amber w3-center">'+'FARZAT GROUP FOR DEVELOPMENT'+'</div>'+'<p>'+'started its vital activities at the beginning of 1987, inspired by the national and humanitarian desire to participate in the comprehensive sincere efforts for the development and prosperity of our beloved country.The Group has several pioneer companies.'+'</p>',

//'<div class="w3-text-amber w3-center">'+'FARZAT FOR DEVELOPMENT CO.LTD'+'</div>'+'<p>'+'Commercial Company, founded in 1987. It`s branches are located all over the major Syrian and Lebanese cities.'+'<br>'+'Main commercial Activities: steel - wood - papers - tires - agriculture equipments – Spare parts -tractors - corn - soya - tea- rice and many other principal materials.'+'<br>'+'Location /Head office: Homs – Syria.'+'</p>',

//'<div class="w3-text-amber w3-center">'+'FARZAT ALIMENTARY MANUFACTURES CO.LTD. (FAMCO).'+'</div>'+
//'<p>'+'Industrial Company, founded in 1992, on 185,000 sqm.'+'<br>'+
//'Main products: cotton oil – sunflower oil – corn oil – soya oil – palm oil – ghee – Butter – soap, and all types of pelletized feed'+'<br>'+
//'Location / Head Office: HOMS – SYRIA.'+'</p>',

//'<div class="w3-text-amber w3-center">'+'FARZAT FOR TRANSPORT CO.'+'</div>'+
//'<p>'+'Transportation Company, founded in 1992. It owns more than 100 vehicles.'+'<br>'+
//'Main activity:  transportation inside / outside Syria.'+'<br>'+
//'Location / Head office: HOMS – SYRIA.'+'</p>',

//'<div class="w3-text-amber w3-center">'+'SYRIAN SAUDI CHEMICAL CO.LTD. (SYSACCO).'+'</div>'+
//'<p>'+'Industrial company, founded in 2005, on 200,000 sqm.It produces about 25,000 MT of caustic soda, and about 50,000 MT HCL. In addition to, other important products like CL2. All from Salt as a primary material. '+'<br>'+
//'The products are distributing domestically and to international markets (Iraq, Turkey, and Lebanon).'+'<br>'+
//'Location / Head office: ALEPPO-SYRIA.'+'</p>',

//'<div class="w3-text-amber w3-center">'+'SHAMTEX CO.SA.'+'</div>'+
//'<p>'+'Industrial company, founded in 2007, on 40,000 sqm. '+'<br>'+
//'Main Products:  fine cotton yarns in single / double.'+'<br>'+
//' Location / Head office: 10th of RAMADAN CITY – EGYPT.'+'</p>',

//'<div class="w3-text-amber w3-center">'+'FARZAT PLASTIC MANUFACTURES CO. LTD. (MEGAPLAST).'+'</div>'+
//'<p>'+'Joint venture (Syrian – South Korean) industrial company, Founded in 2008.It produces all types of plastic products. '+'<br>'+
//'Location/ Head office: HESSIA industrial zone – HOMS – SYRIA.'+'</p>',

//'<div class="w3-text-amber w3-center">'+'INVESTMENTS'+'</div>'+
//'- QNB BANK – DAMASCUS.'+'</br>'+
//'- CHAM BANK – DAMASCUS.'+'</br>'+
//'- AL- SHARQ BANK – DAMASCUS.'+'</br>'+
//'- SYRIAN ISLAMIC INSURANCE COMPANY – &nbsp;&nbsp;DAMASCUS.'+'</br>'+
//'- QASIOUN UNIVERSITY – DAMASCUS.'+'</p>'

 ];	 
var cnt= 0;
var timer;
//gradient
//var slider= document.getElementById('slider');??  add script at the end of html?
// onload body ----or---- call the function at the beginning of script?-> script must be top or buttom?  
function sliderTimer()
{
  timer= setInterval(slider, 3000);
}

function slider()
{
  cnt++;
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  //document.getElementById('sliderHeader').innerHTML= headArray[cnt];  //or append?
  //document.getElementById('sliderPara').innerHTML= paraArray[cnt];
	//document.getElementById('boxjs').innerHTML= box[cnt];
}

function next()
{
  clearInterval(timer);
  
  cnt++; 
  if(cnt == imgadr.length)
    cnt= 0;
    
  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  //document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  //document.getElementById('sliderPara').innerHTML= paraArray[cnt];
    document.getElementById('boxjs').innerHTML= box[cnt];
	
  sliderTimer();
}

function prev()
{
console.log('prev');
  clearInterval(timer);
  
  cnt--;
  if(cnt == -1)
    cnt= imgadr.length-1;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  //document.getElementById('sliderHeader').innerHTML= headArray[cnt];
 // document.getElementById('sliderPara').innerHTML= paraArray[cnt];
	document.getElementById('boxjs').innerHTML= box[cnt];
    
  sliderTimer();
}
