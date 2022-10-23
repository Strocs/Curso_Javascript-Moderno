const moduleBJ = (function() {
    'use strict'
    
    // Arreglo donde se depositará el deck
    let deck = [];

    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let playersPoint = [];

    // Referencias del HTML
    const changePlayerPoints = document.querySelectorAll('small'),
          divPlayersCards = document.querySelectorAll('.divCards');


    // Funciones

    const startGame = (numPlayers = 2) => {
        deck = crearDeck();
        playersPoint = [];

        for (let i = 0; i < numPlayers; i++) {
            playersPoint.push(0);
        }

        getBtn.disabled = false
        stopBtn.disabled = false

        // forEach, por cada elemento de la variable hace el cambio
        changePlayerPoints.forEach(elem => elem.innerText = 0);
        divPlayersCards.forEach(elem => elem.innerHTML = '');
    }

    const crearDeck = () => {
        deck = [];
        // el parentesis se lee: variable i es igual a 2, si i es menor o igual a 10, entonces i+1
        for ( let i = 2; i <= 10; i++) { 
            // Estoy creando un ciclo for of para obtener una variable de tipos a la vez en un ciclo que acabará cuando se cumpla la condición de arriba
            for (let tipo of tipos) {
                deck.push(i+tipo);
            }
        }

        // Con dos ciclo for of puedo combinar dos arreglos de forma eficiente
        for (let especial of especiales) {
            for (let tipo of tipos) {
                deck.push(especial+tipo)
            }
        }
        
        // el metodo shuffle corresponde a la libería underscore
        // se me ocurre que otra solución pudo haber sido crear el arreglo y solicitar con el método random un valor del arreglo (verificar)
        return _.shuffle(deck);
    }

    const pedirCarta = () => {
        // Este if funciona como método de seguridad para cuando no existan cartas en el deck el programa no se rompa
        if (deck.length === 0) {
            // throw permite que la función deje de ejecutarse lanzando un mensaje de error
            throw 'No hay más cartas en el deck.';
        }
        // Con el método pop elimino la última carta del deck y la paso a la variable
        return deck.pop();
    }

    const valorCarta = (carta) => {
        // Los string funcionan como arreglos, por lo tanto puedo pedir el primer valor de una string con el mismo método del arreglo
        // En este caso se usa el metodo substring que permite solicitar un rango especifico del string
        const valor = carta.substring(0, carta.length - 1);
        // isNaN identifica si el valor no es un número, aunque ese número sea un string
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            :valor * 1;
    }

    const pointAccumulate = (carta, turn) => {
        // acá estoy sumando los valores que pido con el botón
        playersPoint[turn] = playersPoint[turn] + valorCarta(carta);
        changePlayerPoints[turn].innerText = playersPoint[turn];
        return playersPoint[turn];
    }

    const createCard = (carta, turn) => {
        // agregar la imagen cara al HTML
        const imgCard = document.createElement('img');
        // Los apostofres `` permiten insertar una variable dentro del texto
        imgCard.src = `assets/cartas/${carta}.png`;
        imgCard.className = ('animate__animated animate__slideInLeft')
        imgCard.classList.add('carta');
        divPlayersCards[turn].append(imgCard);
    }
    
    const whoWin = () => {
        setTimeout(() => {
            if (playersPoint[playersPoint.length - 1] === playersPoint[0]) {
                alert('EMPATADIS')
            } else if (playersPoint[playersPoint.length - 1] > 21) {
                alert('WINNER WINNER CHICKEN DINNER!1')
            } else {
                alert('NOO PERDISTES :CC')
            }
        }, 500);
    }

    const computerTurn = (minPoint) => {
        do {
            const carta = pedirCarta();
            pointAccumulate(carta, playersPoint.length - 1);
            createCard(carta, playersPoint.length - 1);

        } while ((playersPoint[playersPoint.length - 1] < minPoint) && (minPoint <= 21));
        getBtn.disabled = true
        stopBtn.disabled = true
        whoWin();
    }

    
    // Eventos

    newBtn.addEventListener('click', () => {
        startGame();
    });

    getBtn.addEventListener('click', () => {
        const carta = pedirCarta();
        pointAccumulate(carta, 0);
        createCard(carta, 0);

        if (playersPoint[0] >= 21) {
            computerTurn(playersPoint[0]);
        }
        
    });

    stopBtn.addEventListener('click', () => {
        getBtn.disabled = true
        stopBtn.disabled = true
        computerTurn(playersPoint[0]);

    });

    return {
        newGame: startGame
    }

})();



