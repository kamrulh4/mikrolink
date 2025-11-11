export function currencyFormtter(amount: number) {
  return new Intl.NumberFormat("en-BD", {
    notation: "compact",
    compactDisplay: "short",
    style: "currency",
    currency: "BDT",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 2,
  }).format(amount)
}
