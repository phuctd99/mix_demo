
var menu = document.querySelector('#menu');
var main = document.querySelector('body');
var drawer = document.querySelector('.navigation');
var search = document.querySelector('#searchicon');
var input = document.querySelector('.menu_input_form');
menu.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
});
main.addEventListener('click', function() {
drawer.classList.remove('open');					
});
search.addEventListener('click',function(e){
input.classList.toggle('active');
e.stopPropagation();
})
				
	

//tao slideshow cho mainbanner
function background_slideshow() {
	document.querySelector('.Main-Banner .bg-slide').style.display = "none";
    var img = ["url(\"images/Layer 9.jpg\")", "url(\"images/img-banner-1.jpg\")", "url(\"images/img-banner-2.jpg\")" ];
    var i = 0;
    setInterval(function() {
        if( i > 2) i = 0;
		document.querySelector(".Main-Banner").style.backgroundImage = img[i];
		i++;
    }, 3000) ;
}
	background_slideshow();//goi ham slideshow de chay



//tao slideshow popup cho made-with-love
var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function openModal(){
	document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  } 
  slides[slideIndex-1].style.display = "block";
}
// nhan vao overlay de thoat
var modal  = document.querySelector('#myModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//kiem tra du lieu cho form input
function checkInputForm(){
	var email = document.getElementsByClassName('form-control1')[1].value.trim();
		if(email == null || email == ""){
			alert("Ban can nhap email");
			return false;
		}
		else if( (/^[a-z][a-z0-9_]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4})$/).test(email) == false){// Dang cua email ...@gmail.com
				alert('Nhap sai email');
				return false;
		}
	alert('Chuc mung ban da nhap form dung');
	return true;
}





//tao active cho customer-review
function status1(x){							//non-active
	x.parentElement.style.margin = '20px 0px';
	x.firstElementChild.src = 'images/talk1.1.png';
	x.lastElementChild.style.color = 'black';
	x.style.backgroundImage = "url('images/talk1.png')";
	x.style.height = '320px';
	x.style.zIndex = 0;
}

function status2(x){							//active
	x.parentElement.style.margin = ' 0px';
	x.firstElementChild.src = 'images/talk2.2.png';
	x.lastElementChild.style.color = 'white';
	x.style.height = '360px';
	x.style.backgroundImage = "url('images/talk2.png')";
	x.style.zIndex = 1;
}

function changeActive(selector1, selector2, selector3){
	var s1 = document.querySelector(selector1);
	var s2 = document.querySelector(selector2);
	var s3 = document.querySelector(selector3);
	if(s1.style.zIndex == 0){
		status2(s1);
		status1(s2);
		status1(s3);
	}
}

//





