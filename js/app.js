const cotizador = new API('97e978832659196b417dac07f44297545f49d27075dec9009b1135faeadefa85') 
const ui = new Interfaz()

cotizador.obtenerMonedasAPI()

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
        cotizador.obtenerValores(monedaSeleccionada, criptomonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptomonedaSeleccionada)
            })
    }
})