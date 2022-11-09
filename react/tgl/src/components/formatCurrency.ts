const CURRENCY_FORMATTER = new Intl.NumberFormat("es-CL", {currency: "CLP", style:"currency", currencyDisplay:"narrowSymbol"})

export function formatCurrency(number:number) {
    return CURRENCY_FORMATTER.format(number)
}