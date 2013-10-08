$(function(){

	$.myPoplinr = function () {
		console.log('It\'s just a plugin...');
	}
	
	$.anotherPoplinr = {
		functionOne : function () {
			console.log('It\'s functionOne...');
		},
		functionTwo : function () {
			console.log('It\'s functionTwo...');
		}
	};

	// Working on selections, plugin functions must be added to the 'fn' object of the '$' object...
	$.fn.modify = function () {
		// 'this' === selected elements via: $("h2").modify(); for example...
		// .each will apply the changes to each selection...
		this.each(function(){
			var blue = "blue";
			// 'this' === currently selected element in the iteration...
			$(this).addClass(blue);
		});
		// 'this' === altered selected elements...
		// It allows method chaining, also: $('h2').modify().attr('align', 'right');
		return this;
	}

	// Subselector plugins...
	// A new selector prefixed with a ':'...
	// To call this: $("h2:align(right)");...
	// 1. Select all 'h2' elements on the page...
	// 2. Pass each selected element to the 'align' method...
	$.extend($.expr[':'], {
		// align === name of the subselector...
		// It's value === a filtering function...
		'classCheck' : function(element, index, matches, set) {
			// return true or false...	
			if($(element).hasClass("blue")===matches[3]){
				console.log('true');
				return true;
			} else {
				console.log('false');
				return false;
			}
		}
	}); // Not working...

});