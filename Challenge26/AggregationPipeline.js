function getProductStatistics() {
  const pipeline = [
    {
      $group: {
        _id: null,
        totalProducts: { $sum: 1 },
        averagePrice: { $avg: "$price" },
        highestQuantity: { $max: "$quantity" },
      },
    },
  ];

  const result = db.products.aggregate(pipeline);
  const productStats = result.toArray()[0];

  return productStats;
}
