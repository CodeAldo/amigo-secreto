// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);

    // Actualizar la lista en la interfaz
    actualizarListaAmigos();

    // Limpiar el campo de texto
    inputAmigo.value = "";
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = ""; // Limpiar la lista

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });
}

// Función para sortear amigos
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Crear una copia de la lista para asignar los amigos secretos
    const copiaLista = [...listaAmigos];
    const resultados = {};

    listaAmigos.forEach((amigo) => {
        // Filtrar para evitar que alguien se asigne a sí mismo
        const posiblesAmigos = copiaLista.filter((a) => a !== amigo);

        if (posiblesAmigos.length === 0) {
            alert("No se puede completar el sorteo. Intenta nuevamente.");
            return;
        }

        // Seleccionar un amigo secreto al azar
        const indiceAleatorio = Math.floor(Math.random() * posiblesAmigos.length);
        const amigoSecreto = posiblesAmigos[indiceAleatorio];

        // Asignar el amigo secreto y eliminarlo de la copia
        resultados[amigo] = amigoSecreto;
        copiaLista.splice(copiaLista.indexOf(amigoSecreto), 1);
    });

    // Mostrar los resultados en la interfaz
    mostrarResultados(resultados);
}

// Función para mostrar los resultados del sorteo
function mostrarResultados(resultados) {
    const ulResultados = document.getElementById("resultado");
    ulResultados.innerHTML = ""; // Limpiar los resultados anteriores

    for (const [amigo, amigoSecreto] of Object.entries(resultados)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${amigoSecreto}`;
        ulResultados.appendChild(li);
    }
}