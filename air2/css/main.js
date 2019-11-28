"use strict";

window.onload = function(e) {

	var inp1 = document.querySelector('input[name=num1]');
	var inp2 = document.querySelector('input[name=num2]');
	var pl = document.querySelector('button[name=plus]');
	var min = document.querySelector('button[name=minus]');
	var tim = document.querySelector('button[name=times]');
	var del = document.querySelector('button[name=del]');
	var sqrt = document.querySelector('button[name=sqr]');	
	var pow = document.querySelector('button[name=pow]');
			
	var span = document.querySelector('.res');

	pl.onclick = function(){

		var res = (parseFloat(inp1.value)) + (parseFloat(inp2.value));
		span.innerHTML = res.toFixed(2);

	}

	min.onclick = function(){

		var res = (parseFloat(inp1.value)) - (parseFloat(inp2.value));
		span.innerHTML = res.toFixed(2);

	}

	tim.onclick = function(){

		var res = (parseFloat(inp1.value)) *	 (parseFloat(inp2.value));
		span.innerHTML = res.toFixed(2);

	}
	del.onclick = function(){

		var res = (parseFloat(inp1.value)) / (parseFloat(inp2.value));
		span.innerHTML = res.toFixed(2);

	}
	sqrt.onclick = function(){

		var res = Math.sqrt(parseFloat(inp1.value))
		span.innerHTML = res.toFixed(2);

	}
	pow.onclick = function(){

		var res = Math.pow((parseFloat(inp1.value)), 2);
		span.innerHTML = res.toFixed(2);

	}
	
}

