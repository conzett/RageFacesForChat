$(document).ready(function() {
	/* Load External Stylesheet */
	$('head').append('<link rel="stylesheet" type="text/css" media="screen" href="http://www.reddit.com/r/fffffffuuuuuuuuuuuu/stylesheet.css" />');
});

function substitute(string){
	string = string.replace(new RegExp("(\/megusta\$)", "g"), '<a href="/megusta"/>');
	string = string.replace(new RegExp("(\/troll\$)", "g"), '<a href="/troll"/>');
	string = string.replace(new RegExp("(\/trolldad\$)", "g"), '<a href="/trolldad"/>');
	string = string.replace(new RegExp("(\/dude\$)", "g"), '<a href="/dude"/>');

	return string;
}

function checker(selector){
	var msgs = $(selector).not('[data-rage]');
	if( msgs.length > 0){
		msgs.each(function(){
			var x = $(this);
			x.attr('data-rage', 'true');			
			var string = x.html();
			if(string.indexOf("/") != -1){
				string = substitute(string);				
				setTimeout(function(){x.html(string);}, 250);
			}
		});
	}
}