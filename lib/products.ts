export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
}

export const PRODUCTS: Product[] = [
  {
    id: "indradhanush-digital",
    name: "Indradhanush - Digital Album",
    description: "Digital download of AKUZO's debut album 'Indradhanush' - 7 tracks, 7 colors, 7 truths.",
    priceInCents: 999, // $9.99
  },
]
