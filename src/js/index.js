import "./import/modules";
import "./import/components";
import players from "./import/players.json";


renderTable(players);

let search = document.querySelector('.js-input');

search.addEventListener('input', function({target}) {
	let newPlayers = players.filter( player => {
		let name = (player.name).toUpperCase();
		let valueInput = (target.value).toUpperCase();
		return name.includes(valueInput)
	})

	let tbody = document.querySelector('.tbody');
	tbody.innerHTML = "";
	
	renderTable(newPlayers);
});

function renderTable(players) {
	players.forEach( obj => {

		let tbody = document.querySelector('.tbody'),
			tr = document.createElement('div'),
			td1 = document.createElement('div'),
			td2 = document.createElement('div'),
			td3 = document.createElement('div'),
			td4 = document.createElement('div');

		function getStars( numberStars ) {
			numberStars = obj.level;
			let htmlStars = "";

			for ( let i = 0; i < numberStars; i++ ) {
				htmlStars += "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='28' height='30' viewbox='0 0 28 30'><g><g><image width='28' height='30' xlink:href='data:image/png;base64,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'></g></g></svg>";
			}
			return htmlStars;
		};

		td1.className = 'td'; td1.innerHTML = obj.id;
		td2.className = 'td'; td2.innerHTML = `<span>${ obj.name }</span>`;
		td3.className = 'td'; td3.innerHTML = `<div class="rating">${ getStars() }</div>`;
		td4.className = 'td'; td4.innerHTML = `<span class="online ${ obj.online ? "on" : "off" }"></span>`;
		tr.className = 'tr';

		tbody.append(tr);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);

	});
}