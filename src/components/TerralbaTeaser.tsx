import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IllustrativeCard } from '@/components/ui/illustrative-card';
import { CheckCircle } from 'lucide-react';
export function TerralbaTeaser() {
  const amenities = [
    "Lotes de 300m² a 500m²",
    "Servicios de luz y agua",
    "Espacios verdes y recreativos",
    "Acceso controlado y seguridad",
  ];
  return (
    <section id="terralba" className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-bold uppercase tracking-widest text-evercity-green mb-2">Caso de Éxito</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Terralba: Tu lugar en el mundo
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ubicado estratégicamente sobre la Ruta 38, Terralba es nuestro proyecto insignia que combina naturaleza, confort y accesibilidad. Un loteo pensado para la vida moderna, sin perder la tranquilidad del entorno.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {amenities.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-evercity-green mr-2 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="bg-evercity-green hover:bg-evercity-green/90 text-white font-bold text-lg px-8 py-6">
              <Link to="/terralba">Conocer más sobre Terralba</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <IllustrativeCard>
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2000&auto=format&fit=crop"
                alt="Casa moderna en un barrio residencial"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </IllustrativeCard>
          </div>
        </div>
      </div>
    </section>
  );
}