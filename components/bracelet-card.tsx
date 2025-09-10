import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Bracelet } from "@/lib/types";

interface BraceletCardProps {
  bracelet: Bracelet;
}

export function BraceletCard({ bracelet }: BraceletCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-0 my-0 border-transparent border-2 bg-rose-50 shadow-xl">
      <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-rose-100 to-purple-100 bg-white">
        <Image
          src={bracelet.image_url || "/placeholder.svg"}
          alt={bracelet.name}
          fill
          className="object-cover hover:scale-110 duration-500 ease-out rounded-none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
      </div>

      <CardContent className="p-6 my-0 py-6 pb-12 pr-6 pt-0">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3 ">
            <h3 className="text-xl text-gray-800 leading-tight font-sans font-normal">
              {bracelet.name}
            </h3>
            <Badge className="shrink-0 rounded-full bg-primary text-white border-0 font-regular text-lg px-4 py-2">
              {bracelet.price}zł
            </Badge>
          </div>

          <p className="text-sm text-gray-600 text-pretty leading-relaxed line-clamp-3 font-light">
            {bracelet.description}
          </p>

          {bracelet.stones && bracelet.stones.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {bracelet.stones.slice(0, 3).map((stone, index) => (
                <Badge
                  key={stone}
                  className={`text-xs font-medium border-0 shadow-sm ${
                    index === 0
                      ? "bg-rose-200 text-rose-800"
                      : index === 1
                      ? "bg-purple-200 text-purple-800"
                      : "bg-pink-200 text-pink-800"
                  }`}
                >
                  {stone}
                </Badge>
              ))}
              {bracelet.stones.length > 3 && (
                <Badge className="text-xs bg-gray-200 text-gray-700 border-0 font-medium">
                  +{bracelet.stones.length - 3} więcej
                </Badge>
              )}
            </div>
          )}

          <div className="flex items-center gap-2 pt-2 bottom-0">
            <div className="w-2 h-2 rounded-full bg-rose-300"></div>
            <span className="text-sm text-gray-700 font-extralight">
              Własnoręcznie robione
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
