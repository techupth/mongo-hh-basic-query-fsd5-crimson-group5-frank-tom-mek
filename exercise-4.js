db.pizzaOrders.find({
  $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
});

//แบบที่ 1
db.pizzaOrders.find({
  $and: [
    { size: "small" },
    { quantity: { $gte: 1 } },
    { quantity: { $lte: 5 } },
  ],
});

//แบบที่ 2
db.pizzaOrders.find({
  $and: [{ size: "small" }, { quantity: { $gte: 1, $lte: 5 } }],
});

db.pizzaOrders.find({
  $and: [{ credit_card_type: null }, { quantity: { $gt: 10 } }],
});
