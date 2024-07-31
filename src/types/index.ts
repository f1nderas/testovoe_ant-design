export interface ISale {
  id: number;
  product: string;
  date: string;
  priceRub: number;
  priceUsd: number;
}
export interface IFilter {
  product: string;
  dataRange: string;
  currency: string;
}

export interface IProduct {
  id: number;
  name: string;
  priceRub: number;
  priceUsd: number;
}
