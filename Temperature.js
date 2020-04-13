
let Temperature = function(value) {
	this.value = Number(value);
}

Temperature.prototype.setValue = function(value){
	this.value = Number(value);
}

Temperature.prototype.convertToF = function(){
	return this.value * 1.8 + 32;
}

Temperature.prototype.convertToK = function(){
	return this.value + 273.15;
}
