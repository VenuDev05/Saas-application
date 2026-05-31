import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Home = ({ items }) => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
            {items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                    <img
                        src={item.img}
                        alt={item.name}
                        className="h-48 w-full object-cover"
                    />

                    <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>
                            {item.des}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-around align-center">
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
                            <a href={item.src} target="blank"><Button className="cursor-pointer">View Course</Button></a>
                        ) : (
                            <Button className="cursor-pointer" variant="destructive">Buy Course</Button>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Home;