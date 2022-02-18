class Interfaz{
    
    constructor() {
        this.init()
    }
    init() {
        this.construirSelect()
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                // crear un select de opciones
                const select = document.querySelector('#criptomoneda')

                // iterar por los resultadoas de la api
                for( const [key, value] of Object.entries(monedas,monedas.Data)) {
                    // añadir el symbol y el nombre como opciones
                    const opcion = document.createElement('option')
                    opcion.value = value.Symbol
                    opcion.appendChild(document.createTextNode(value.CoinName))
                    select.appendChild(opcion)
                }
            })
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div')
        div.className = clases
        div.appendChild(document.createTextNode(mensaje))

        // seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes')
        divMensaje.appendChild(div)

        // Mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes').remove()
        }, 3000);
    }

    // imprime el resultado de la cotizacion
    mostrarResultado(resultado, moneda, crypto) {
        const resultadoAnterior = document.querySelector('resultado > div')

        if(resultadoAnterior) {
            resultadoAnterior.remove()
        }

        const datosMoneda = resultado[crypto][moneda]

        // Recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2),
            porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-AR')

        // Construir el template
        let templateHTML = `
            <div class="card bg-warning>
                <div card-body text-light>
                    <h2 class="card-tittle">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: ${precio}</p>
                </div>            
            </div>
        `

        this.mostrarOcultarSpinner('block')

        setTimeout(() => {
            // insertar el resultado
            document.querySelector('#resultado').innerHTML = templateHTML 
            this.mostrarOcultarSpinner('none')
        }, 3000); 
    }

    // Mostrar un spinner de carga al enviar la cotización
    mostrarOcultarSpinner(vista) {
        const spinner = document.querySelector('.contenido-spinner')
        spinner.style.display = vista
    }
}