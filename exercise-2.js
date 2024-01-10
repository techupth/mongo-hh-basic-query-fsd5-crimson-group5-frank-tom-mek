db.pizzaOrders.findOne(
  {
    customer_name: "Zoe",
  },
  { total_price: true, created_at: true }
);

db.pizzaOrders.findOne(
  {
    customer_name: "Zoe",
  },
  { total_price: 1, created_at: 1 }
);
