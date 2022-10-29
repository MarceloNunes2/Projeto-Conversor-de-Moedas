const button = document.getElementById('converte-button')
const select = document.getElementById('select-currency')
const dolar = 5.29
const euro = 5.27
const bitcon = 108.957
const convertValues = () => {
    const inputReal = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValeuText = document.getElementById("currency-valeu-text")

    

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency',
    currency: 'BRL' }
    ).format(inputReal)

    if (select.value === 'US$ Dolar Americano'){
        currencyValeuText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency',
        currency: 'USD' }
        ).format(inputReal/dolar)
    }
    if(select.value === '€ Euro'){
        currencyValeuText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency',
        currency: 'EUR' }
        ).format(inputReal/euro)
    }
    if (select.value === '₿ Bitcoin'){
        currencyValeuText.innerHTML = ((inputReal/bitcon).toFixed(5))

    }
        
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.getElementById('currency-img')
    

    if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = 'img/euro.png'
    }
    if(select.value === '₿ Bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = 'img/bitcon.png'
    }
    if(select.value === 'US$ Dolar Americano'){
        currencyName.innerHTML = 'Dolar'
        currencyImage.src = 'img/estados-unidos (1) 1.png'
    }
    
    convertValues()
    
}

button.addEventListener("click",convertValues)
select.addEventListener("change",changeCurrency)