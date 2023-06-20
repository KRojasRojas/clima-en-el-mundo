let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'fd0f8342c440c532d22af382d807cb6c'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById ('ciudadEntrada').value 
    if (ciudad)
        fetchdatosClima(ciudad)
})

function fetchdatosClima(ciudad) {
fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima (data) {
    const divdatosClima = document.getElementById('datosClima')
    divdatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const sensacionTermica = data.main.feels_like
    const icono = data.weather[0].icon


    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre} , ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}ºC`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es de: ${humedad}%`

    const sensacionTermicaInfo = document.createElement('p')
    sensacionTermicaInfo.textContent = `La Sensación termica es: ${Math.floor(sensacionTermica-difKelvin)}ºC`

    const iconoInfo = document.createElement ('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`

    

    divdatosClima.appendChild(ciudadTitulo)
    divdatosClima.appendChild(temperaturaInfo)
    divdatosClima.appendChild(humedadInfo)
    divdatosClima.appendChild(descripcionInfo)
    divdatosClima.appendChild(iconoInfo)
    divdatosClima.appendChild(sensacionTermicaInfo)
}
