import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Course = ({ items }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            delay: index * 0.15,
          }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={item.img}
              alt={item.name}
              className="h-48 w-full object-cover"
            />

            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.des}</CardDescription>
            </CardHeader>

            <CardContent className="flex justify-around items-center">
              <Badge
                className={
                  item.type === "Free"
                    ? "bg-green-500 hover:bg-green-600 text-white p-4"
                    : "bg-orange-800 hover:bg-orange-600 text-white p-4"
                }
              >
                {item.type}
              </Badge>

              {item.type.toLowerCase() === "free" ? (
                <a href={item.src} target="_blank" rel="noopener noreferrer">
                  <Button className="cursor-pointer">
                    View Course
                  </Button>
                </a>
              ) : (
                <a href="/plan">
                  <Button
                    className="cursor-pointer"
                    variant="destructive"
                  >
                    Buy Course
                  </Button>
                </a>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Course;