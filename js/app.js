const ui = new Interfaz()

// leer el formulario
const formulario = document .querySelector('#formulario')

// EventListener
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    // leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda')
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value
    console.log(monedaSeleccionada)

    // leer la criptomoneda seleccionada
    const criptomonedaSelect = document.querySelector('#criptomoneda')
    const criptomonedaSeleccionada = criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value
    console.log(criptomonedaSeleccionada)

    if(monedaSeleccionada === '' && criptomonedaSeleccionada === '') {
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center')
    }else {
        console.log('Everything is ok')
    }
})


//