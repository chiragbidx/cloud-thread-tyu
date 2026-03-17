import { getHomeContent } from "@/content/home";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

const { features } = getHomeContent();

export const LayoutFeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          {features.eyebrow}
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          {features.heading}
        </h2>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground">
          {features.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-10">
        {features.items.map((feat, i) => (
          <Card key={feat.title}>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <Badge variant="secondary" className="text-lg px-2 py-1">{feat.icon}</Badge>
              <CardTitle>{feat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">{feat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};