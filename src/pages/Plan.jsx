import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: 1,
    name: "Starter",
    price: "$99",
    duration: "30 Days",
    features: [
      "Access to all premium courses",
      "Course completion certificates",
      "Practice exercises",
      "Community support",
    ],
  },
  {
    id: 2,
    name: "Popular",
    price: "$499",
    duration: "180 Days",
    featured: true,
    features: [
      "Everything in Starter",
      "Priority support",
      "Downloadable resources",
      "Project-based learning",
      "Exclusive webinars",
    ],
  },
  {
    id: 3,
    name: "Pro",
    price: "$999",
    duration: "360 Days",
    features: [
      "Everything in Popular",
      "1-Year Access",
      "Premium project library",
      "Career guidance",
      "Interview preparation",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Plan = () => {
  return (
    <section className="py-16 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-slate-900">
            Choose Your Learning Plan
          </h1>

          <p className="mt-3 text-slate-600">
            Unlock premium courses, projects, and resources to accelerate your
            learning journey.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
            >
              <Card
                className={`relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  plan.featured
                    ? "border-2 border-blue-600 shadow-lg"
                    : "border"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">
                    {plan.name}
                  </CardTitle>

                  <div className="mt-4">
                    <span className="text-5xl font-bold text-blue-600">
                      {plan.price}
                    </span>
                  </div>

                  <p className="text-slate-500 mt-2">
                    Access for {plan.duration}
                  </p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-slate-700"
                      >
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full cursor-pointer"
                    variant={plan.featured ? "default" : "outline"}
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Plan;