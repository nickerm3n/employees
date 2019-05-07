(function () {
	window.onload = function () {
		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'http://127.0.0.1:3000/employeeList');

		xhr.send();

		xhr.onreadystatechange = function() { // (3)
			if (xhr.readyState != 4) return;

			if (xhr.status != 200) {
				alert(xhr.status + ': ' + xhr.statusText);
			} else {
				employeeStatus(xhr.responseText)
			}
		}	
	}
})()

function employeeStatus(respone) {
	var employeers = JSON.parse(respone),
		bulleted = document.createElement('ul'),
		employeeList = document.getElementById('employeeList');

		bulleted.classList.add('bulleted');
		employeeList.appendChild(bulleted);

		employeers.forEach((element) => {
			var employeer = document.createElement('li');

			employeer.appendChild(document.createTextNode(element.name));
			element.inoffice === true ? employeer.className = 'in' : employeer.className = 'out';

			bulleted.appendChild(employeer);

		})

	}