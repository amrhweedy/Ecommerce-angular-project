export interface IOrder {
  userid: string;
  products: [
    {
      productid: Number;
      quantity: Number;
      price: Number;
    }
  ];
  amount: Number;
  address: {
    city: String;
    street: Number;
    building: Number;
  };
}
