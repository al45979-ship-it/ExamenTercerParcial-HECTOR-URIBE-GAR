# 🏁 Evaluación Práctica: Simulador de Mario Kart Customizer 🏁

**Asignatura:** Desarrollo Web (HTML5, CSS3 y JavaScript)  
**Objetivo:** Evaluar la capacidad del alumno para modificar la estructura (HTML), aplicar reglas de diseño responsivo y distribución (CSS3 Flexbox), y actualizar la lógica de programación y cálculo dinámico (JavaScript ES6).

---

## 📋 Instrucciones del Examen

Tomando como base la plantilla del proyecto que ya has clonado en tu repositorio de GitHub, deberás realizar de forma individual los siguientes 7 cambios puntuales. 

### 1. 👥 Nuevos Pilotos (HTML)
Añade dos nuevos corredores a la lista desplegable (`<select>`):
*   **Yoshi**: con un poder base de `40`.
*   **Luigi**: con un poder base de `50`.
*   *Nota:* Asegúrate de configurar correctamente los atributos `value` y `data-base` en las etiquetas `<option>`.

### 2. 🛞 Tipos de Neumáticos (HTML)
Agrega tres nuevas opciones de botones de opción (`<input type="radio">`) en la sección de neumáticos:
*   **Acero**: resta `-10` puntos de poder.
*   **Ligeros**: suma `+30` puntos de poder.
*   **Robustos**: resta `-20` puntos de poder.

### 3. 🍄 Mejoras del Kart (HTML)
Añade tres nuevas casillas de verificación (`<input type="checkbox">`) en la sección de mejoras acumulables:
*   **Estrella**: suma `+50` puntos de poder.
*   **Bananas**: resta `-15` puntos de peso/poder.
*   **Bill Bala**: resta `-25` puntos de peso/poder.

### 4. 🏎️ Nivel de Motor (HTML)
Modifica las reglas de validación del cuadro numérico (`<input type="number">`) que controla el nivel del motor para permitir un **rango del 1 al 9** (anteriormente el máximo era 5).

### 5. 🎨 Distribución en 2 Columnas con Flexbox (CSS3)
Modifica los estilos CSS de las secciones **Tipo de Neumáticos** (`.radio-group`) y **Mejoras del Kart** (`.checkbox-group`) para que sus opciones internas dejen de verse en una sola lista vertical y ahora se distribuyan en **2 columnas equilibradas**.
*   *Requisito:* Debes utilizar propiedades de **Flexbox** (como `display: flex`, `flex-wrap` y anchos porcentuales en los hijos `.option-label`).

### 6. 🧠 Actualización de Lógica e Imágenes (JavaScript)
Actualiza el script para dar soporte completo a las nuevas opciones:
*   Asegúrate de que la función de cálculo procese correctamente los nuevos valores numéricos (especialmente los valores negativos).
*   Ajusta la validación del nivel de motor en el script para que acepte y valide correctamente el **límite superior de 9**.
*   Añade imágenes de marcador de posición (placeholders) o reales para **Yoshi** y **Luigi** dentro del objeto `characterImages` para que cambien visualmente al seleccionarlos.

### 7. 🚀 Despliegue en GitHub
*   Realiza los `commits` correspondientes en tu entorno local explicando los cambios realizados.
*   Sube (`push`) los cambios finales a tu repositorio personal de GitHub.
*   Activa **GitHub Pages** en la configuración de tu repositorio para publicar la página web y comparte el enlace público con tu profesor.

---

## 📊 Rúbrica de Evaluación (60 Puntos Totales)

| Criterio | Descripción | Puntaje |
| :--- | :--- | :---: |
| **HTML - Elementos** | Inclusión correcta de Yoshi, Luigi, los 3 neumáticos, las 3 mejoras y cambio de límites en el input numérico. | **15 pts** |
| **CSS3 - Flexbox** | Implementación correcta de las 2 columnas con Flexbox en los contenedores de radios y checkboxes, manteniendo la visualización limpia. | **10 pts** |
| **JS - Operaciones** | El cálculo matemático procesa adecuadamente tanto los aumentos como las disminuciones de poder (valores negativos). | **10 pts** |
| **JS - Validaciones** | El nivel de motor limita correctamente los valores entre 1 y 9 tanto en la interfaz como en el código lógico. | **10 pts** |
| **JS - Imágenes** | Al seleccionar a Yoshi o Luigi, la imagen del contenedor cambia adecuadamente sin romper la interfaz. | **10 pts** |
| **GitHub Pages** | Repositorio actualizado con historial de commits claro y la página publicada y funcional en internet. | **5 pts** |

⚠️ **Nota importante:** El código no debe presentar errores en la consola del navegador (`F12`). Cualquier error de sintaxis que rompa el simulador penalizará la calificación final.
