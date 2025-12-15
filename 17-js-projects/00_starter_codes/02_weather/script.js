const BASE_URL = `http://api.weatherapi.com/v1/current.json`
const API_KEY = '3264e02b194c45f485d144358251512'

document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input')
    const getWeatherBtn = document.getElementById('get-weather-btn')
    const weatherInfo = document.getElementById('weather-info')
    const errorMessage = document.getElementById('error-message')

    const memoizedFetchWeatherData = memoize(fetchWeatherData)

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value
        if (!city) {
            errorMessage.classList.remove('hidden')
            weatherInfo.classList.add('hidden')
            return
        }
        errorMessage.classList.add('hidden')
        try {
            const data = await memoizedFetchWeatherData(city)
            if (data) {
                displayWeatherData(data)
            }
        } catch (error) {
            console.error(error)
            errorMessage.classList.remove('hidden')
        }
    })

    async function fetchWeatherData(city) {
        try {
            const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}`)
            const data = await response.json()
            return data
        } catch (error) {
            console.error(error)
            errorMessage.classList.remove('hidden')
        }
    }

    async function displayWeatherData(data) {
        weatherInfo.classList.remove('hidden')
        const cityName = document.getElementById('city-name')
        const temperature = document.getElementById('temperature')
        const description = document.getElementById('description')
        const weatherIcon = document.getElementById('weather-icon')
        cityName.innerHTML = `
    <span>${data.location.name}</span>
    <small>${data.location.region}, ${data.location.country}</small>
    `
        temperature.textContent = data.current.temp_c + '°C'
        description.textContent = data.current.condition.text
        weatherIcon.src = data.current.condition.icon
    }

    function memoize(fn) {
        let cache = {}
        return async function (...args) {
            const key = JSON.stringify(args)
            if (cache[key]) return cache[key]
            const result = await fn(...args)
            cache[key] = result
            return result
        }
    }
})