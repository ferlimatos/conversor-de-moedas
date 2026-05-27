// Constantes das cotações
const USD = 5.03
const EUR = 5.32
const GBP = 6.76

// O JavaScript está “procurando” elementos dentro do HTML
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input para receber somente números
amount.addEventListener("input", () => {

  const hasCharacterRegex = /\D+/g
  console.log(amount.value)
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Capturando o envio do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda, que recebe 3 parâmetros: amount (valor digitado), price (cotação da moeda) e symbol (símbolo da moeda)
function convertCurrency(amount, price, symbol) {
  // console.log(amount, price, symbol)

  // O try...catch serve para lidar com erros.
  try {
    description.textContent = `${symbol} 1 = ${price}`
    // Calcura o total
    let total = amount * price

    // Verifica se o resultado é um número
    if(isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.")
    }
    // Formatar o valor total
    result.textContent = formatCurrencyBRL(total)

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)

    // Remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value){
  // Converte para número para utilizar o toLocaleString para
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
