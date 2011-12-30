function check(){
	var msgs = $('[role="chatMessage"] [dir]').not('[data-rage]');
	if( msgs.length > 0){
		msgs.each(function(){
			var x = $(this);
			x.attr('data-rage', 'true');			
			var string = x.html();
			if(string.indexOf("/") != -1){
				string = string.replace(new RegExp("(\/megusta\$)", "g"), '<a href="/megusta"/>');
				string = string.replace(new RegExp("(\/troll\$)", "g"), '<a href="/troll"/>');
				string = string.replace(new RegExp("(\/trolldad\$)", "g"), '<a href="/trolldad"/>');
				string = string.replace(new RegExp("(\/dude\$)", "g"), '<a href="/dude"/>');
				setTimeout(
					function(){
						x.html(string);
					}, 250);
			}
		});
	}
}
setInterval ( 'check()', 250);

$(document).ready(function() {
	/* Load External Stylesheet */
	$('head').append('<link rel="stylesheet" type="text/css" media="screen" href="http://www.reddit.com/r/fffffffuuuuuuuuuuuu/stylesheet.css" />');
});