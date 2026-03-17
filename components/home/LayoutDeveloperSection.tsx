import { getHomeContent } from "@/content/home";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const { services } = getHomeContent();

type ServiceItem = {
  title: string;
  description: string;
  pro?: boolean;
};

export const LayoutDeveloperSection = () => {
  return (
    <section id="developer" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          {services.eyebrow}
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          {services.heading}
        </h2>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground">
          {services.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 my-10">
        {services.items.map((service: ServiceItem) => (
          <Card key={service.title} className={service.pro ? "border-primary border-[1.5px] shadow-md" : ""}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              {service.pro && (
                <Badge variant="outline" className="ml-2 text-primary border-primary">Pro</Badge>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};