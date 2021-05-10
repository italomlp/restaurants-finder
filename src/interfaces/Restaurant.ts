export interface APIResponseRestaurant {
  id: string;
  name: string;
  image: string;
  logo: string;
  description: string;
  telephone: string;
  price_range: string;
  payment_methods: string;
  website: string;
  opening_hours: string;
}

export default interface Restaurant {
  id: string;
  name: string;
  image: string;
  logo: string;
  description: string;
  telephone: string;
  priceRange: string;
  paymentMethods: string;
  website: string;
  openingHours: string;
}
