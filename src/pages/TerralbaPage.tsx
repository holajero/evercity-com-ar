import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, MapPin, Droplets, Zap, Trees, ShieldCheck } from 'lucide-react';
export function TerralbaPage() {
  const amenities = [
    { icon: Zap, text: 'Red de energía eléctrica' },
    { icon: Droplets, text: 'Red de agua potable' },
    { icon: Trees, text: 'Espacios verdes parquizados' },
    { icon: ShieldCheck, text: 'Acceso controlado' },
  ];
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 bg-evercity-green/10">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-700/40 dark:[mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-base font-semibold text-evercity-green uppercase tracking-wider">
            Nuestro Proyecto Insignia
          </p>
          <h1 className="mt-2 text-4xl font-display font-extrabold text-foreground sm:text-5xl md:text-6xl">
            Terralba Loteo Residencial
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
            Un espacio diseñado para conectar con la naturaleza y disfrutar de la tranquilidad, con todas las comodidades de la vida moderna.
          </p>
          <div className="mt-8 flex justify-center items-center gap-x-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-evercity-red" />
            <span>Sobre Ruta 38, Monteros, Tucumán</span>
          </div>
        </div>
      </section>
      {/* Master Plan Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-foreground sm:text-4xl">
              Un Master Plan pensado para vos
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Lotes desde 300m² distribuidos armoniosamente, priorizando los espacios verdes y la comodidad de acceso.
            </p>
          </div>
          <div className="mt-12">
            <Card className="overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1568615930933-1095b6a15134?q=80&w=2070&auto=format&fit=crop"
                alt="Master Plan de Terralba"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold text-evercity-red uppercase tracking-wider">
              Servicios y Amenidades
            </h2>
            <p className="mt-2 text-3xl font-display font-extrabold text-foreground sm:text-4xl">
              Todo lo que necesitás para tu nuevo hogar
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => (
              <Card key={amenity.text} className="text-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-evercity-red text-white">
                      <amenity.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <CardTitle className="mt-4 text-lg font-medium text-foreground">
                    {amenity.text}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-extrabold text-foreground sm:text-4xl">
            <span className="block">¿Querés ser parte de Terralba?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-muted-foreground">
            No dejes pasar la oportunidad de invertir en tu futuro. Contactanos y te contamos todo sobre la financiación y disponibilidad.
          </p>
          <Button asChild size="lg" className="mt-8 w-full sm:w-auto bg-evercity-red hover:bg-evercity-red/90 text-white font-bold text-lg px-10 py-7">
            <Link to="/contact?project=terralba">Solicitar Información</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}