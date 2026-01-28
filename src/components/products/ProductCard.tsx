import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '@/data/products';

// Import all product images
import auroraImg from '@/assets/products/aurora.jpg';
import imperialImg from '@/assets/products/imperial.jpg';
import lunaImg from '@/assets/products/luna.jpg';
import versaillesImg from '@/assets/products/versailles.jpg';
import novaImg from '@/assets/products/nova.jpg';
import eclipseImg from '@/assets/products/eclipse.jpg';
import celesteImg from '@/assets/products/celeste.jpg';
import royalCrownImg from '@/assets/products/royal-crown.jpg';
import infinityImg from '@/assets/products/infinity.jpg';
import operaImg from '@/assets/products/opera.jpg';
import veneziaImg from '@/assets/products/venezia.jpg';
import diamondCascadeImg from '@/assets/products/diamond-cascade.jpg';

// Image mapping
const imageMap: Record<string, string> = {
  'aurora-crystal': auroraImg,
  'imperial-gold': imperialImg,
  'luna-floating': lunaImg,
  'versailles-classic': versaillesImg,
  'nova-linear': novaImg,
  'eclipse-dark': eclipseImg,
  'celeste-spiral': celesteImg,
  'royal-crown': royalCrownImg,
  'infinity-glow': infinityImg,
  'opera-grand': operaImg,
  'venezia-glass': veneziaImg,
  'diamond-cascade': diamondCascadeImg,
};

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const productImage = imageMap[product.id] || auroraImg;

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="crystal-card group overflow-hidden"
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={productImage}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-obsidian/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.15em] text-gold">
            {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)} Collection
          </p>
          <h3 className="mb-2 font-serif text-xl text-crystal transition-colors duration-300 group-hover:text-gold">
            {product.name}
          </h3>
          <p className="mb-4 font-sans text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          <p className="font-serif text-lg text-gold">{product.price}</p>
        </div>
      </motion.div>
    </Link>
  );
};
