const items = {
  label: "DR-01",
  row: [
    {
      level: 1,
      locations: [
        {
          name: "DR-01-01",
          stock: [
            {
              product: "Hammer Drill",
              qty: 100,
              replenishment: "slow"
            }
          ]
        }
      ]
    },
    {
      level: 2,
      locations: [
        {
          name: "DR-01-02",
          stock: []
        },
        {
          name: "DR-02-02",
          stock: [
            {
              product: "Angle Grinder",
              qty: 3,
              replenishment: "fast"
            }
          ]
        }
      ]
    },
    {
      level: 3,
      locations: [
        {
          name: "DR-01-03",
          stock: [
            {
              product: "Skill Saw",
              qty: 2,
              replenishment: "standard"
            }
          ]
        },
        {
          name: "DR-01-04",
          stock: [
            {
              product: "Battery Drill",
              qty: 10,
              replenishment: "standard"
            }
          ]
        }
      ]
    }
  ]
};

export default items;
