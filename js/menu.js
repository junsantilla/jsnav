$(document).ready(function(){

	if ($('.jsnav-header').length) {

		var jsnavHeader = $('.jsnav-header'),
			burgerMenu = jsnavHeader.find('.burger-menu'),
			jsnavMenuListWrapper = $('.jsnav-menu > ul'),
			jsnavMenuListDropdown = $('.jsnav-menu ul li:has(ul)')
		
		burgerMenu.on("click", function(){
			$(this).toggleClass('menu-open');
			jsnavMenuListWrapper.slideToggle(300);
		});
		
		jsnavMenuListDropdown.each(function(){
			$(this).append( '<span class="dropdown-plus"></span>' );
			$(this).addClass('dropdown_menu');
		});
		
		$('.dropdown-plus').on("click", function(){
			$(this).prev('ul').slideToggle(300);
			$(this).toggleClass('dropdown-open');
		});
		
		$('.dropdown_menu a').append('<span></span>');

	}

});