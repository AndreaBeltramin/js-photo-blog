// ! CONSEGNA

// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica
//proposta in maniera statica: utilizzando soltanto HTML e CSS
//e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

// Milestone 2
// Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
// https://jsonplaceholder.typicode.com/photos?_limit=6
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di
//JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

// Bonus
// rendi la pagina responsive, in modo che su mobile e tablet le foto
//si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata

const cardRow = document.getElementById("card-row");
const listUrlImage = [];

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
	.then((response) => response.json())
	.then((photos) => {
		console.table(photos);
		photos.forEach((photo) => {
			cardRow.innerHTML += `
			<div class="col">
				<div class="card h-100">
                    <div>
					    <img class="pin" src="./img/pin.svg" alt="pin">
				    </div>
					<img
						class="p-3"
						src= ${photo.url}
						
						alt="img-prova"
					/>
					<div>
						<p class="card-text px-3 pb-3 fs-6 text-capitalize">
							${photo.title}
						</p>
					</div>
				</div>
			</div> `;
		});

		const overlayEl = document.getElementById("overlay-card");
		const closeCardButton = document.getElementById("close-card");
		const cards = document.querySelectorAll(".card");
		console.log(cards);

		cards.forEach((cardEl) => {
			cardEl.addEventListener("click", function () {
				overlayEl.classList.remove("d-none");
			});
			closeCardButton.addEventListener("click", function () {
				overlayEl.classList.add("d-none");
			});
		});

		// const card = document.querySelector('.card')
		//

		// card.addEventListener(('click'), function(){
		//     overlayEl.classList.remove('d-none');
		// }
	});
