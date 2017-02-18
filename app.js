	// Create a "close" button and append it to each list item
	var myNodelist = document.getElementsByTagName("LI");
	var i;
	for (i = 0; i < myNodelist.length; i++) {
		var span = document.createElement("SPAN");
		var txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		myNodelist[i].appendChild(span);
	}

	// Click on a close button to hide the current list item
	for (i = 0; i < $('.close').length; i++) {
		$('.close').on('click', function() {
			var div = this.parentElement;
			$(div).css('display', 'none');
		});
	}

	// Add a "checked" symbol when clicking on a list item


	// create a new list item when click the 'add' button
	function newElement() {
		var li = document.createElement("li");
		var inputValue = $("#myInput").val();
		var t = document.createTextNode(inputValue);
		li.appendChild(t);
		var span = document.createElement("SPAN");
		var txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		li.appendChild(span);

		if (inputValue === '') {
			alert("You must write something!");
		} else {
			$("#myUL").append(li);
		}

		$("#myInput").val("");

		for (var i = 0; i < $('.close').length; i++) {
			$('.close').on('click', function() {
				var div = this.parentElement;
				$(div).css('display', 'none');
			});
		}

	}
