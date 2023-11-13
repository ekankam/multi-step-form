export const plans = [
  {
    id: 1,
    name: "Arcade",
    subscription: {
      monthly: {
        price: 9,
        type: "monthly",
      },
      yearly: {
        price: 90,
        trails: "2 months free",
        type: "yearly",
      },
    },
  },
  {
    id: 2,
    name: "Advanced",
    subscription: {
      monthly: {
        price: 12,
        type: "monthly",
      },
      yearly: {
        price: 120,
        trails: "2 months free",
        type: "yearly",
      },
    },
  },
  {
    id: 3,
    name: "Pro",
    subscription: {
      monthly: {
        price: 15,
        type: "monthly",
      },
      yearly: {
        price: 150,
        trails: "2 months free",
        type: "yearly",
      },
    },
  },
];

export const addOns = [
  {
    id: 1,
    name: "Online service",
    description: "Access to multiplayer games",
    subscription: {
      monthly: {
        price: 1,
        type: "month",
      },
      yearly: {
        price: 10,
        type: "yearly",
      },
    },
  },
  {
    id: 2,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    subscription: {
      monthly: {
        price: 2,
        type: "month",
      },
      yearly: {
        price: 20,
        type: "yearly",
      },
    },
  },
  {
    id: 3,
    name: "Customizable profile",
    description: "Custom theme to your profile",
    subscription: {
      monthly: {
        price: 2,
        type: "month",
      },
      yearly: {
        price: 20,
        type: "yearly",
      },
    },
  },
];
