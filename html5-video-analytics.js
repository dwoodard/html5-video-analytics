(function () {
	function analitics(string, context){
		console.log(string, context)

		if (window == this) {
			return new analitics(str, context);
		};
	}


})()