function replacePartial(partial){

	var partials = $('.partial').toArray();
	for(var i = 0; i < partials.length; i++){
		if(partial == i){
			partials[i].style.display = "block";
			console.log("FOund partial");
		}else{
			partials[i].style.display = "none";
			console.log("NOT FOUND PARTIAL");
		}
	}
}
