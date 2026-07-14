// JAVASCRIPT: Lógica de cálculo e IMAGEN
var form = document.getElementById('kartForm');
var characterSelect = document.getElementById('character');
var characterImage = document.getElementById('characterImage');
var totalPowerDisplay = document.getElementById('totalPower');
var powerBar = document.getElementById('powerBar');

// --- 1. DEFINICIÓN DE IMÁGENES ---
// MAPA DE IMÁGENES DE EJEMPLO
var characterImages = {
    mario': 'imagenes/mario.jpg',
    'bowser': 'imagenes/bowser.jpg',
    'toad': 'imagenes/toad.jpg',
    'peach': 'imagenes/peach.jpg',
    'yoshi': 'imagenes/yoshi.jpg',
    'luigi': 'imagenes/luigi.jpg',
};

function updateInterface() {
    // --- A. Actualizar Imagen ---
    var selectedId = characterSelect.value; // Obtiene 'mario', 'bowser', 'yoshi', 'luigi', etc.
    var newImgSrc = characterImages[selectedId];
    // Efecto visual simple al cambiar (opacidad)
    characterImage.style.opacity = 0;

    // Pequeño delay para que la opacidad llegue a 0 antes de cambiar la fuente
    setTimeout(function() {
        characterImage.src = newImgSrc;
        characterImage.alt = "Imagen de " + selectedId;
        characterImage.style.opacity = 1; // Volver a mostrar
    }, 150);

    // --- B. Calcular Poder ---
    // Obtenemos el poder base usando el atributo 'data-base' que añadimos al HTML
    var selectedOption = characterSelect.options[characterSelect.selectedIndex];
    var characterBase = parseInt(selectedOption.getAttribute('data-base'));

    // Neumáticos: puede ser positivo o negativo (Acero -10, Ligeros +30, Robustos -20, etc.)
    var tireValue = 0;
    var selectedRadio = document.querySelector('input[name="tires"]:checked');
    if (selectedRadio) tireValue = parseInt(selectedRadio.value);

    // Mejoras: suma todos los checkboxes marcados, respetando valores negativos
    // (Estrella +50, Bananas -15, Bill Bala -25, Caparazón Bowser -10, etc.)
    var upgradesValue = 0;
    var checkboxes = document.querySelectorAll('input[name="upgrades"]:checked');
    checkboxes.forEach(function(cb) {
        upgradesValue += parseInt(cb.value);
    });

    // Nivel de motor: validado ahora en el rango 1-9
    var driverLevel = parseInt(document.getElementById('driverLevel').value);
    if (isNaN(driverLevel) || driverLevel < 1) driverLevel = 1;
    if (driverLevel > 9) driverLevel = 9;

    // FÓRMULA
    var total = (characterBase + tireValue + upgradesValue) * driverLevel;
    if (total < 0) total = 0;

    // --- C. Renderizar Resultados ---
    totalPowerDisplay.textContent = total;

    var percentage = (total / 500) * 100;
    if (percentage > 100) percentage = 100;
    powerBar.style.width = percentage + '%';
}

// Escuchar cambios en todo el formulario
form.addEventListener('input', updateInterface);
// Inicializar la interfaz al cargar
updateInterface();
