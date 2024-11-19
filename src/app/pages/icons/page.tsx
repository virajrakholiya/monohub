import React from 'react';
import Image from "next/image";
import data from "@/db/icons.json";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Icons</h1>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="p-0">
              <Image
                src={item.img}
                height={200}
                width={400}
                className="w-full h-48 object-cover rounded-t-lg"
                alt={item.name}
              />
            </CardHeader>
            <CardContent className="pt-4">
              <CardTitle className="text-xl font-bold">{item.name}</CardTitle>
            </CardContent>
            <CardFooter>
            <Link
                href={item.link}
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-black text-white">
                  Visit Site
                </Button>
              </Link>{" "}        </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
