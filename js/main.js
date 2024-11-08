// ! CONSEGNA

// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica
// proposta in maniera statica: utilizzando soltanto HTML e CSS
// e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

// Milestone 2
// Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
// https://jsonplaceholder.typicode.com/photos?_limit=6
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di
// JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

// Bonus
// rendi la pagina responsive, in modo che su mobile e tablet le foto
// si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata

// ! CONSEGNA

// Milestone 1
// Facciamo in modo di creare un overlay che copra l’intera pagina
// e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

// Milestone 2
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none
// Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

// Milestone 3
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata,
// dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
// Ci sono diversi modi di farlo, prova a sperimentare

// Bonus
// Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi
// e la loro ombra aumenta, il tutto in manierà fluida.
// Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

//richiamo dal DOM la riga delle card dove aggiungerò le foto nelle card
const cardRow = document.getElementById("card-row");
const listUrlImage = [];

//faccio richiesta all'api di mandarmi 6 foto
fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
	.then((response) => response.json())
	.then((photos) => {
		console.table(photos);

		//per ogni foto nell'array delle foto arrivate dall'api
		photos.forEach((photo) => {
			//creo l'html da inserire nella row del DOM per ogni foto
			//inserisco l' URL della foto arrivata dall'api
			//sotto l'immagine inserisco il titolo che arriva sempre dall'api
			cardRow.innerHTML += `
			<div class="col">
				<div class="card h-100">
                    <div>
					    <img class="pin" src="./img/pin.svg" alt="pin">
				    </div>
					<img
						class="p-3"
						src= ${photo.url}
						alt="img-api"
					/>
					<div>
						<p class="card-text px-3 pb-3 fs-6 text-capitalize">
							${photo.title}
						</p>
					</div>
				</div>
			</div> `;
		});

		//richiamo dal DOM gli elementi che mi servono
		const overlayEl = document.getElementById("overlay-card");
		const closeCardButton = document.getElementById("close-card-button");
		const cardAperta = document.getElementById("card-aperta");
		const cards = document.querySelectorAll(".card");
		const img = document.getElementById("immagine-overlay");
		console.log(cards);

		//per ogni card presente nell'array Cards
		cards.forEach((cardEl, index) => {
			//al click di ogni card
			cardEl.addEventListener("click", function () {
				//se l'indice della card presente nell'array cards corrisponde
				//al singolo elemento card
				if (cards[index] == cardEl) {
					//aggiungo all'html della card aperta nell'overlay l'immagine
					cardAperta.innerHTML = `
                    <img src= ${photos[index].url}
                        alt="img-prova"
                    />`;
				}

				//rimuovo la classe d-none all'overlay
				overlayEl.classList.remove("d-none");

				//mi stampo l'indice della card cliccata
				console.log(index);
			});

			//al click del bottone di chiusura della card
			closeCardButton.addEventListener("click", function () {
				//aggiungo la classe d-none all'overlay
				overlayEl.classList.add("d-none");
			});
		});
	});
