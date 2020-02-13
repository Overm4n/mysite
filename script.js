window.onload = function () {
	function time(){
	let Date_time = new Date();
	let Hours = String(Date_time.getHours());
	let Minutes = String(Date_time.getMinutes());
	if (Hours < 10) {
		Hours = '0' + Hours;
	}
	if (Minutes < 10) {
		Minutes = '0' + Minutes;
	}
	document.getElementById('time').innerHTML = Hours+':'+Minutes;
	if (Date_time.getHours() >= 6 && Date_time.getHours() < 12) {
		document.getElementById('header-banner').classList.add('morning');
		document.getElementById('title-time').innerHTML = 'Доброе утро.';
	}else if(Date_time.getHours() >= 12 && Date_time.getHours() < 18){
		document.getElementById('header-banner').classList.add('daytime');
		document.getElementById('title-time').innerHTML = 'Добрый день.';
	}else if(Date_time.getHours() >= 18 && Date_time.getHours() < 24){
		document.getElementById('header-banner').classList.add('evening');
		document.getElementById('title-time').innerHTML = 'Добрый вечер.';
	}else if(Date_time.getHours() >= 0 && Date_time.getHours() < 6){
		document.getElementById('header-banner').classList.add('night');
		document.getElementById('title-time').innerHTML = 'Доброй ночи.';
	}
	setTimeout(time,1000);
	}
	time();

	document.onscroll = function transform_menu (){
		let menu = document.getElementById('menu-block');
		if (menu.getBoundingClientRect().y < document.documentElement.clientHeight) {
			menu.classList.add('transform-menu');	
		}
		if(menu.getBoundingClientRect().y+35 == document.documentElement.clientHeight){
			menu.classList.remove('transform-menu');
		}
	}

  // Для 3D эффекта нужно указать perspective блоку в котором происходит траснформация. У меня это класс perspective
  // Трансформация по высоте - X, трансформация по ширине - Y
  // Класс 01 не обрабатывается т. к. задумывалось, что это фон
  function volume_block (event) {

	// При таком способе получения координат мыши в элементе, игнорируются вложенные элементы
	var x = event.clientX-this.getBoundingClientRect().left;
	var y = event.clientY-this.getBoundingClientRect().top;

	// Получение координат мыши в элементе и расчёт движений блока
	var center_height_image = Number(getComputedStyle(this).height.match(/[0-9]+/ig)[0])/2;
	var center_width_image = Number(getComputedStyle(this).width.match(/[0-9]+/ig)[0])/2;
	var step_X = 1/(center_height_image/4);
	var rotate_X = (center_height_image-y)*step_X;
	var step_Y = 1/(center_width_image/2);
	var rotate_Y = (x-center_width_image)*step_Y;

	// Движение блока
  this.setAttribute('style','transform: rotateX('+rotate_X+'deg) rotateY('+rotate_Y+'deg) translateZ(0px);'); 
	
	// Создание объёма содержимого элементов с классом 02
	var step_translat_Y_02 = 1/(center_height_image/(center_height_image/100));
	var translat_Y_02 = -(center_height_image-y)*step_translat_Y_02;
	var step_translat_X_02 = 1/(center_width_image/(center_width_image/100));
	var translat_X_02 = (x-center_width_image)*step_translat_X_02;
for (var i = 0; i < this.getElementsByClassName('02').length; i++) {
    this.getElementsByClassName('02')[i].setAttribute('style','transform: translateX('+translat_X_02+'px) translateY('+translat_Y_02+'px) translateZ(0px);');
}

	// Создание объёма содержимого элементов с классом 03
	var step_translat_Y_03 = 1/(center_height_image/(center_height_image/50));
	var translat_Y_03 = -(center_height_image-y)*step_translat_Y_03;
	var step_translat_X_03 = 1/(center_width_image/(center_width_image/50));
	var translat_X_03 = (x-center_width_image)*step_translat_X_03;

for (var i = 0; i < this.getElementsByClassName('03').length; i++) {
    this.getElementsByClassName('03')[i].setAttribute('style','transform: translateX('+translat_X_03+'px) translateY('+translat_Y_03+'px) translateZ(0px);');
}
	// Создание объёма содержимого элементов с классом 04
	var step_translat_Y_04 = 1/(center_height_image/(center_height_image/25));
	var translat_Y_04 = -(center_height_image-y)*step_translat_Y_04;
	var step_translat_X_04 = 1/(center_width_image/(center_width_image/25));
	var translat_X_04 = (x-center_width_image)*step_translat_X_04;

for (var i = 0; i < this.getElementsByClassName('04').length; i++) {
    this.getElementsByClassName('04')[i].setAttribute('style','transform: translateX('+translat_X_04+'px) translateY('+translat_Y_04+'px) translateZ(0px);');
}
	// console.log(center_height_image);
	// console.log(event.clientY-this.getBoundingClientRect().top);
	
}
	// Восстановление положения блока
function mouseleave_volume_block (event) {
	this.setAttribute('style','transform: rotateX(0deg) rotateY(0deg) translateZ(0px); transition: all 1s ease 0s;');
	for (var i = 0; i < this.getElementsByClassName('02').length; i++) {
		this.getElementsByClassName('02')[0].setAttribute('style','transform: translateX(0px) translateY(0px) translateZ(0px); transition: all 1s ease 0s;');
	}
	for (var i = 0; i < this.getElementsByClassName('03').length; i++) {
		this.getElementsByClassName('03')[0].setAttribute('style','transform: translateX(0px) translateY(0px) translateZ(0px); transition: all 1s ease 0s;');
	}
	for (var i = 0; i < this.getElementsByClassName('04').length; i++) {
		this.getElementsByClassName('04')[0].setAttribute('style','transform: translateX(0px) translateY(0px) translateZ(0px); transition: all 1s ease 0s;');
	}
}
	// Вешаю обработчики событий
for (var i = 0; i < document.getElementsByClassName('inner').length; i++) {
	document.getElementsByClassName('inner')[i].addEventListener("mousemove", volume_block, false);
	document.getElementsByClassName('inner')[i].addEventListener("mouseleave", mouseleave_volume_block, false);
}
}
