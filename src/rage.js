function check(){
	var msgs = $('[role="chatMessage"] [dir]').not('[data-rage]');
	if( msgs.length > 0){
		msgs.each(function(){
			$(this).attr('data-rage', 'true');
			var string = $(this).html();
			if(string.indexOf("/") != -1){
				string = string.replace(new RegExp("(\/megusta\$)", "g"), '<a href="/megusta"/>');
				string = string.replace(new RegExp("(\/troll\$)", "g"), '<a href="/troll"/>');
				string = string.replace(new RegExp("(\/trolldad\$)", "g"), '<a href="/trolldad"/>');
				string = string.replace(new RegExp("(\/dude\$)", "g"), '<a href="/dude"/>');
				setTimeout(function(){$(this).html(string)},500);
			}
		});
	}
}
setInterval ( 'check()', 500);

$(document).ready(function() {
	$('head').append('<link rel="stylesheet" type="text/css" media="screen" href="http://www.reddit.com/r/fffffffuuuuuuuuuuuu/stylesheet.css" />');
});