import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Showroom', path: '/showroom' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-obsidian/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container-luxury">
          <div className="flex h-20 items-center justify-between md:h-24">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-2xl tracking-[0.3em] text-crystal md:text-3xl">
                  DOMUS
                </span>
                <span className="text-[10px] tracking-[0.4em] text-gold">
                  LIGHTING
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-12 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative"
                >
                  <span
                    className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-gold'
                        : 'text-crystal/70 hover:text-crystal'
                    }`}
                  >
                    {link.name}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-gold"
                    initial={{ width: 0 }}
                    animate={{
                      width: location.pathname === link.path ? '100%' : 0,
                    }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
              
              {/* Cart Icon */}
              <Link
                to="/cart"
                className="group relative flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/20"
                >
                  <ShoppingBag className="h-5 w-5 text-gold" />
                  {cartItemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-obsidian"
                    >
                      {cartItemCount > 9 ? '9+' : cartItemCount}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            </nav>

            {/* Mobile Menu & Cart */}
            <div className="flex items-center gap-4 lg:hidden">
              <Link to="/cart" className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                  <ShoppingBag className="h-5 w-5 text-gold" />
                  {cartItemCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-obsidian">
                      {cartItemCount > 9 ? '9+' : cartItemCount}
                    </span>
                  )}
                </div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-10 p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-crystal" />
                ) : (
                  <Menu className="h-6 w-6 text-crystal" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`font-serif text-3xl tracking-wide transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-gold'
                        : 'text-crystal/70 hover:text-crystal'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
