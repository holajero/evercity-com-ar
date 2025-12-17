import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-evercity-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-evercity-red">EverCity</h2>
            <p className="text-white/80">
              Desarrollos Inmobiliarios. Construyendo futuros, creando hogares en Tucumán.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-display tracking-wider uppercase text-white/90">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-evercity-red" />
                <span>Virgen de la Merced 128, San Miguel de Tucumán, Argentina</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-evercity-red" />
                <a href="tel:3816212142" className="hover:text-evercity-red transition-colors">3816 21-2142</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-evercity-red" />
                <a href="mailto:evercitydi@gmail.com" className="hover:text-evercity-red transition-colors">evercitydi@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-display tracking-wider uppercase text-white/90">Navegación</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-evercity-red transition-colors">Inicio</Link></li>
              <li><Link to="/terralba" className="hover:text-evercity-red transition-colors">Terralba</Link></li>
              <li><Link to="/contact" className="hover:text-evercity-red transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} EverCity Desarrollos Inmobiliarios. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}