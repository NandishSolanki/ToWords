'use strict';

function toWords(inputString) {
	var notNullString = inputString || '';
	var trimmedString = notNullString.trim();
	var arrayOfStrings = trimmedString.split(' ');

	var splitStringsArray = [];
	arrayOfStrings.forEach(tempString => {
		if (tempString != '') {
			var splitWords = tempString.split(/(?=[A-Z])/).join(" ");
			splitStringsArray.push(capitalizeFirstLetter(splitWords));	
		}
	});

	return splitStringsArray.join(" ");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = toWords;