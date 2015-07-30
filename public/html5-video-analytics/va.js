/*
 __     ___     _                 _                _       _   _
 \ \   / (_) __| | ___  ___      / \   _ __   __ _| |_   _| |_(_) ___ ___
  \ \ / /| |/ _` |/ _ \/ _ \    / _ \ | '_ \ / _` | | | | | __| |/ __/ __|
   \ V / | | (_| |  __/ (_) |  / ___ \| | | | (_| | | |_| | |_| | (__\__ \
    \_/  |_|\__,_|\___|\___/  /_/   \_\_| |_|\__,_|_|\__, |\__|_|\___|___/
                                                     |___/
*/


/*

//javascript
va('#video,video,.video') 


// attribute 'va'
<video va>
<source src="video.mp4">
</video>

*/





var VA = { REVISION: '0.0.0' };

if ( typeof module === 'object' ) {
	module.exports = VA;
}

// set the default log handlers
VA.log = function() { console.log.apply( console, arguments ); }
VA.warn = function() { console.warn.apply( console, arguments ); }
VA.error = function() { console.error.apply( console, arguments ); }

