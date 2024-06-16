"use client";
import React from "react";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Premium",
      price: "$29.99/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <div className="flex flex-col p-8">
      <h2 className="text-4xl font-bold mb-10">Subscription Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-xl mb-4">{plan.price}</p>
            <ul className="mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
