export const EXCHANGE_RATES = {
  SAR_TO_USD: 1 / 3.7563, // Current rate as of Dec 2024
  USD_TO_SAR: 3.7563,
} as const

export function convertSarToUsd(sarAmount: number): number {
  return Math.round(sarAmount * EXCHANGE_RATES.SAR_TO_USD * 100) / 100
}

export function convertUsdToSar(usdAmount: number): number {
  return Math.round(usdAmount * EXCHANGE_RATES.USD_TO_SAR * 100) / 100
}

export function formatPrice(amount: number, currency: "USD" | "SAR" = "USD"): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return formatter.format(amount)
}
