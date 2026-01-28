import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { QuantitySelector } from '@/components/ui/QuantitySelector';
import { getProductById, products } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: 'Added to Cart',
        description: `${quantity} ${quantity === 1 ? 'item' : 'items'} of ${product.name} ${quantity === 1 ? 'has' : 'have'} been added to your cart.`,
      });
      setQuantity(1); // Reset quantity after adding
    }
  };

  if (!product) {
    return (
      <Layout>
        <section className="flex min-h-screen items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-4xl text-crystal">
              Product Not Found
            </h1>
            <LuxuryButton to="/collections" variant="outline">
              Back to Collections
            </LuxuryButton>
          </div>
        </section>
      </Layout>
    );
  }

  const productImage = imageMap[product.id] || auroraImg;
  const relatedProducts = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="border-b border-border bg-obsidian pt-28 pb-6">
        <div className="container-luxury">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collections
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="section-luxury bg-obsidian">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={productImage}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-32 w-32 border border-gold/20" />
              <div className="absolute -top-4 -left-4 h-32 w-32 border border-gold/20" />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold">
                {product.collection.charAt(0).toUpperCase() +
                  product.collection.slice(1)}{' '}
                Collection
              </p>
              <h1 className="mb-6 font-serif text-4xl text-crystal md:text-5xl">
                {product.name}
              </h1>
              <p className="mb-8 font-serif text-2xl text-gold">
                {product.price}
              </p>

              <div className="mb-8 h-px w-full bg-gradient-to-r from-gold/50 via-gold/20 to-transparent" />

              {/* Story */}
              <div className="mb-8">
                <h3 className="mb-4 font-serif text-xl text-crystal">
                  The Story
                </h3>
                <p className="font-sans leading-relaxed text-muted-foreground">
                  {product.story}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="mb-4 font-serif text-xl text-crystal">
                  Features
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 border border-border bg-muted/20 px-4 py-2 font-sans text-xs uppercase tracking-[0.1em] text-crystal"
                    >
                      <Check className="h-3 w-3 text-gold" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-10">
                <h3 className="mb-4 font-serif text-xl text-crystal">
                  Specifications
                </h3>
                <div className="grid gap-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between border-b border-border pb-3"
                    >
                      <span className="font-sans text-sm capitalize text-muted-foreground">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-sans text-sm text-crystal">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="mb-3 block font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Quantity
                </label>
                <QuantitySelector
                  value={quantity}
                  onChange={setQuantity}
                  min={1}
                  max={10}
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={handleAddToCart}
                  className="group flex items-center justify-center gap-2 border border-gold bg-gold px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-obsidian transition-all duration-300 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
                <LuxuryButton to="/contact" variant="outline">
                  Request Information
                </LuxuryButton>
                <LuxuryButton to="/showroom" variant="outline">
                  Visit Showroom
                </LuxuryButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-luxury bg-obsidian-light">
          <div className="container-luxury">
            <div className="mb-12 text-center">
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold">
                You May Also Like
              </p>
              <h2 className="font-serif text-3xl text-crystal md:text-4xl">
                Related Chandeliers
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
