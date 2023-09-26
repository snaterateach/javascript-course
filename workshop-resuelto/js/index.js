// PASO 1 - Crear Referencias
const menu = document.getElementById("options"); // Seccion para ocultar/mostrar listado de personajes
const selectedPlayer = document.getElementById('player'); // Seccion del Personaje Seleccionado para Jugar
const listPlayers = document.getElementById('listPlayers'); // Listado de personajes

// PASO 6 - Inicializar puntuaciones iniciales del juego
// Puntuaciones iniciales
let userInitialScore = 0;
let machineInitialScore = 0;

// PASO 7 - Referencias  a la tabla de puntuaciones
// Referencias a la tabla de  puntuaciones
const userScore = document.getElementById("user_score");
const machineScore = document.getElementById("machine_score");
const machinePlayer = document.getElementById("machine_player");

// PASO 8 - Referencias a las opciones del juego
// Referencias a las opciones
const rockOption = document.getElementById("rock");
const paperOption = document.getElementById("paper");
const scissorOption = document.getElementById("scissor");

// Referencias al resultado del juego
const movement = document.getElementById("movement");
const result = document.getElementById("result");

let characterList; // variable Global
let storagedList; // variable Global

// lista de opciones - Emulamos un ENUM
const optionList = {
	rock: "Piedra",
	scissor: "Tijera",
	paper: "Papel"
}

// Usamos el concepto de FALSY
characterList = JSON.parse(localStorage.getItem("characterList")) || [];

// PASO 16 - Reiniciamos el juego 
const resetGame = ()=>{
    selectedPlayer.className = 'row align-items-md-stretch player oculto';
    userScore.innerText = 0; // Seteamos el contador de usuario
    machineScore.innerText = 0; // Seteamos el contador de la maquina
    menu.className = 'visible'; // Mostramos de nuevo la lista de personajes
    result.innerHTML = ""; // Borramos los datos del juego
    userInitialScore = 0;
    machineInitialScore = 0;
}

// PASO 15 - Evaluamos el total de puntos de ambos jugadores 
const allScores = ()=>{
    if(userInitialScore === 5 || machineInitialScore === 5 ){
        movement.innerHTML = "";
        if(userInitialScore === 5){
            result.innerHTML = `<span style="color:green">Felicidades, eres el GANADOR!</span>
            <br><button type="button" class="btn btn-success" onclick="resetGame()">Reiniciar Juego</button>`;
        }
        if(machineInitialScore === 5){
            result.innerHTML = `<span style="color:red">Lo sentimos, PERDISTE!</span>
            <br><button type="button" class="btn btn-success" onclick="resetGame()">Reiniciar Juego</button>`;
        }
        
    }
}

// PASO 12 - Usuario gana se suma uno al contador del usuario 
const winner = (userOption,machineOption)=>{
    userInitialScore++;
    userScore.innerText = userInitialScore;
    movement.innerHTML = `${optionList[userOption]} (Tú) <span>${optionList[machineOption]} (${machinePlayer.innerText})</span>`;
    result.innerHTML = `<span style="color:green">Tu Ganas!</span>`;
    allScores();
}

// PASO 13 - Usuario pierde se suma uno al contador de la maquina 
const loser = (userOption,machineOption)=>{
    machineInitialScore++;
    machineScore.innerText = machineInitialScore;
    movement.innerHTML = `${optionList[userOption]} (Tú) <span>${optionList[machineOption]} (${machinePlayer.innerText})</span>`;
    result.innerHTML = `<span style="color:red">${machinePlayer.innerText} Gana!</span>`;
    allScores();
}

// PASO 14 - Hay empate, nadie gana puntos 
const tie = (userOption,machineOption)=>{
    movement.innerHTML = `${optionList[userOption]} (Tú) <span>${optionList[machineOption]} (${machinePlayer.innerText})</span>`;
    result.innerHTML = `<span style="color:orange">Hay un empate!. No se suman Puntos.</span>`;
}

// PASO 11 - Evalua la opcion seleccionada por el usuario y la maquina 
const evaluateGame = (userOption,machineOption)=>{
    switch (true) {
        case userOption === 'rock' && machineOption === 'scissor':
        case userOption === 'scissor' && machineOption === 'paper':
        case userOption === 'paper' && machineOption === 'rock':
            winner(userOption,machineOption);
            break;
        case machineOption === 'rock' && userOption === 'scissor':
        case machineOption === 'scissor' && userOption === 'paper':
        case machineOption === 'paper' && userOption === 'rock':
            loser(userOption,machineOption);
            break;
        case machineOption === userOption:
            tie(userOption,machineOption);
            break;
    }

}

// PASO 10 - Obtiene una opcion aleatoria 
const machinePlay = () =>{
    const options = ['rock','paper','scissor'];
    const machineOption = Math.floor(Math.random() * 3); // numero aleatorio entre 0 y 3
    return options[machineOption];
}

// PASO 9 - Obtiene la opcion seleccionada por el usuario
const game = (choice) =>{
    const userOption =  choice;
    const machineOption =  machinePlay();
    
    evaluateGame(userOption,machineOption)
    
}

// PASO 9 - Asociamos eventos a cada una de las opciones
rockOption.addEventListener('click', function(){
    game('rock'); // Seleccionamos Piedra
});

paperOption.addEventListener('click', function(){
    game('paper'); // Seleccionamos papel
});

scissorOption.addEventListener('click', function(){
    game('scissor'); // Tijera
});

// PASO 5 - Seleccionar el Personaje con el que vamos a Jugar
const selectPlayer = (name, image) =>{ 
    machinePlayer.innerHTML = `<b>${name}</b>`; // Muestra el nombre del personaje seleccionado en la Tabla de resultados
    let playerSelected = document.querySelector('#playerSelected'); // Referencia seccion personaje seleccionado
    let playerName = document.querySelector('#playerName');
    let divPlayer =  document.createElement('div');
    playerSelected.innerHTML = "";
    playerName.innerHTML = "";
    playerName.innerHTML = `<b>Estas jugando con:</b> ${name}`;
   
    divPlayer.innerHTML = `<br>
                        <div class="menu-grid">
                            <div class="menu-grid-item">
                                <img src="./img/${image}" alt="${name}">
                            </div>
                            
                        </div>`;
    playerSelected.append(divPlayer);

 
    menu.className = 'oculto'; // ocultamos listado de presonajes
    // Mostramos personaje seleccionado
    selectedPlayer.className = 'row align-items-md-stretch player visible';

}

// PASO 3 - Cargar la lista de personajes
const addCharacters = () =>{
    //Cargamos al storage del listado de personajes almacenado
    characterList = localStorage.setItem("characterList", JSON.stringify(characters))
}

// PASO 4 - Cargar la lista de personajes
const showCharacters = () =>{ 
    let storaged  = JSON.parse(localStorage.getItem("characterList"));
    storagedList = [];
    listPlayers.innerHTML = "";
    
    //Iteramos almacenados con for...of para transformar todos sus objetos a tipo personaje.
    for (const objeto of storaged){
        storagedList.push(new Caracteres(objeto));
    }

    // Iteramos para la construccion de cada elemento de la lista de personajes
    for (const player of storagedList) {
        let rootDiv = document.createElement("div");
        rootDiv.className = "col";
        rootDiv.innerHTML = player.assemble();
        
        listPlayers.append(rootDiv);
    }
}

// PASO 2 - Cargar la lista de personajes
const inicialize = ()=>{
    // Usamos Operador AND para verificar si hay personajes cargados en la lista
    (characterList.length === 0) && addCharacters();
    showCharacters();
            
} 

inicialize();
