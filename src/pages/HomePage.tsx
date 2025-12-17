import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IllustrativeCard, IllustrativeCardContent, IllustrativeCardHeader, IllustrativeCardTitle } from '@/components/ui/illustrative-card';
import { Users, Handshake, Target } from 'lucide-react';
import { TerralbaTeaser } from '@/components/TerralbaTeaser';
export function HomePage() {
  const values = [
    {
      icon: Target,
      title: 'Innovación',
      description: 'Aplicamos las últimas tendencias en urbanismo para crear espacios que inspiran.',
    },
    {
      icon: Handshake,
      title: 'Confianza',
      description: 'Construimos relaciones sólidas basadas en la transparencia y el compromiso.',
    },
    {
      icon: Users,
      title: 'Profesionalismo',
      description: 'Un equipo de expertos dedicados a hacer realidad tu proyecto de vida.',
    },
  ];
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-evercity-blue">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
          alt="Interior de una casa moderna y elegante"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-4 leading-tight animate-slide-up">
            Construimos el futuro de Tucumán
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Desarrollos inmobiliarios que transforman terrenos en proyectos de vida.
          </p>
          <Button
            size="lg"
            className="bg-evercity-red hover:bg-evercity-red/90 text-white font-bold text-lg px-10 py-7 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
            asChild
          >
            <Link to="/contact">Contactanos</Link>
          </Button>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Tu Inversión, Nuestra Pasión
            </h2>
            <p className="text-lg text-muted-foreground">
              En EverCity, combinamos experiencia, visión y un profundo conocimiento del mercado tucumano para ofrecer oportunidades de inversión únicas y seguras en loteos y desarrollos urbanísticos.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <IllustrativeCard key={index}>
                <IllustrativeCardHeader className="items-center text-center">
                  <div className="p-4 bg-evercity-red/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-evercity-red" />
                  </div>
                  <IllustrativeCardTitle className="text-2xl font-display">{value.title}</IllustrativeCardTitle>
                </IllustrativeCardHeader>
                <IllustrativeCardContent className="text-center text-muted-foreground">
                  {value.description}
                </IllustrativeCardContent>
              </IllustrativeCard>
            ))}
          </div>
        </div>
      </section>
      {/* Terralba Teaser Section */}
      <TerralbaTeaser />
      {/* Contact CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contactanos hoy mismo para recibir asesoramiento personalizado sobre nuestros proyectos y oportunidades de inversión.
          </p>
          <Button
            size="lg"
            className="bg-evercity-blue hover:bg-evercity-blue/90 text-white font-bold text-lg px-10 py-7"
            asChild
          >
            <Link to="/contact">Hablemos de tu futuro</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}