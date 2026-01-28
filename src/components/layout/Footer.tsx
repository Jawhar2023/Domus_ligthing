import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-obsidian">
      <div className="container-luxury py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.3em] text-crystal">
                DOMUS
              </span>
              <span className="text-[10px] tracking-[0.4em] text-gold">
                LIGHTING
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Crafting extraordinary crystal chandeliers that transform living
              spaces into realms of light and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-crystal">Explore</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'Collections', path: '/collections' },
                { name: 'About Us', path: '/about' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Visit Showroom', path: '/showroom' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-sans text-sm text-muted-foreground transition-colors duration-300 hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-crystal">Contact</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://maps.google.com/?q=5+Avenue+Ibn+Khaldoun+Sousse+4061"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 font-sans text-sm text-muted-foreground transition-colors duration-300 hover:text-gold"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                5, Avenue Ibn Khaldoun, Sousse 4061
              </a>
              <a
                href="tel:+21692999842"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground transition-colors duration-300 hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                +216 92 999 842
              </a>
              <a
                href="mailto:contact@domuslighting.tn"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground transition-colors duration-300 hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" />
                contact@domuslighting.tn
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-crystal">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/domuslighting.tn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                <Facebook className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-gold" />
              </a>
              <a
                href="https://instagram.com/domuslighting.tn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                <Instagram className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} DOMUS Lighting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="font-sans text-xs text-muted-foreground transition-colors duration-300 hover:text-gold"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-sans text-xs text-muted-foreground transition-colors duration-300 hover:text-gold"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
