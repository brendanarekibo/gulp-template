$(function(){

	//global variables
	var currentDropdown = 0,
	    selectEl = $('.form_dropdown'),
	    selectedEl = $('.form_dropdown:selected'),
	    form = $('.form'),
	    optionClass = '.form_option',
	    options = 2;
	
	//populate the HTML select dropdown with options
	function populateDropdown(el, currentDropdown) {
		var currentElem = el.eq(currentDropdown);
		var currentElemName = currentElem.attr('name');
		
		currentElem.removeAttr('disabled');

		if (currentElem.find('option').length < 2) {
			for (var i = 0; i < options; i++) {
				$('<option value="' + currentDropdown + '" >' + currentElemName + ' ' + (i + 1) + ' </option>').appendTo(currentElem);
			}
		}
	}

	//on page load activate and populate the first dropdown
	populateDropdown(selectEl, currentDropdown);

	//event handler to check that option is selected
	selectEl.change(function(){ 
		currentDropdown = ($(this).index('.form_dropdown')) + 1;
	    populateDropdown(selectEl, currentDropdown);
	});

	//when send button is clickable and clicked log message to the console
	form.submit(function(event) {
		event.preventDefault();
		console.log("successful form");
	});
});