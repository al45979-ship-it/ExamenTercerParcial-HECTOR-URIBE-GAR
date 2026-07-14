    // JAVASCRIPT: Lógica de cálculo e IMAGEN
    const form = document.getElementById('kartForm');
    const characterSelect = document.getElementById('character');
    const characterImage = document.getElementById('characterImage');
    const totalPowerDisplay = document.getElementById('totalPower');
    const powerBar = document.getElementById('powerBar');

    // --- 1. DEFINICIÓN DE IMÁGENES ---
    // MAPA DE IMÁGENES DE EJEMPLO 
    const characterImages = {
        'mario': 'imagenes/mario.jpg',
        'bowser':  'imagenes/bowser.jpg',
        'toad':  'imagenes/toad.jpg',
        'peach':  'imagenes/peach.jpg',
    };

    function updateInterface() {
        // --- A. Actualizar Imagen ---
        const selectedId = characterSelect.value; // Obtiene 'mario', 'bowser', etc.
        const newImgSrc = characterImages[selectedId];

        // Efecto visual simple al cambiar (opacidad)
        characterImage.style.opacity = 0;
        
        // Pequeño delay para que la opacidad llegue a 0 antes de cambiar la fuente
        setTimeout(() => {
            characterImage.src = newImgSrc;
            characterImage.alt = "Imagen de " + selectedId;
            characterImage.style.opacity = 1; // Volver a mostrar
        }, 150);


        // --- B. Calcular Poder ---
        // Obtenemos el poder base usando el atributo 'data-base' que añadimos al HTML
        const selectedOption = characterSelect.options[characterSelect.selectedIndex];
        let characterBase = parseInt(selectedOption.getAttribute('data-base'));

        // Resto de la lógica (Radios, Checkboxes, Input) igual que antes
        let tireValue = 0;
        const selectedRadio = document.querySelector('input[name="tires"]:checked');
        if (selectedRadio) tireValue = parseInt(selectedRadio.value);

        let upgradesValue = 0;
        const checkboxes = document.querySelectorAll('input[name="upgrades"]:checked');
        checkboxes.forEach(cb => upgradesValue += parseInt(cb.value));

        let driverLevel = parseInt(document.getElementById('driverLevel').value);
        if (isNaN(driverLevel) || driverLevel < 1) driverLevel = 1;
        if (driverLevel > 5) driverLevel = 5;

        // FÓRMULA
        let total = (characterBase + tireValue + upgradesValue) * driverLevel;
        if (total < 0) total = 0;

        // --- C. Renderizar Resultados ---
        totalPowerDisplay.textContent = total;
        
        let percentage = (total / 500) * 100;
        if (percentage > 100) percentage = 100;
        powerBar.style.width = percentage + '%';
    }

    // Escuchar cambios en todo el formulario
    form.addEventListener('input', updateInterface);

    // Inicializar la interfaz al cargar
    updateInterface();