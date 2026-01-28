import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { QuantitySelector } from '@/components/ui/QuantitySelector';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

// Import product images
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

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getSubtotal,
    getShipping,
    getTax,
    getTotal,
  } = useCart();

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const extractPrice = (price: string): number => {
    const match = price.match(/[\d,]+/);
    if (match) {
      return parseFloat(match[0].replace(/,/g, ''));
    }
    return 0;
  };

  const getItemSubtotal = (price: string, quantity: number) => {
    return extractPrice(price) * quantity;
  };

  const freeShippingThreshold = 100;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - getSubtotal());

  if (cartItems.length === 0) {
    return (
      <Layout>
        <section className="section-luxury bg-obsidian pt-32">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-8 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <ShoppingBag className="h-12 w-12 text-gold/50" />
                </div>
              </div>
              <h1 className="mb-4 font-serif text-4xl text-crystal md:text-5xl">
                Your Cart is Empty
              </h1>
              <p className="mb-8 font-sans text-lg text-muted-foreground">
                Start adding beautiful chandeliers to your cart
              </p>
              <LuxuryButton to="/collections" variant="filled">
                Browse Collections
              </LuxuryButton>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-luxury bg-obsidian-light pt-32">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                  <ShoppingBag className="h-8 w-8 text-gold" />
                </div>
              </div>
            </div>
            <h1 className="mb-4 font-serif text-4xl text-crystal md:text-5xl lg:text-6xl">
              Shopping Cart
            </h1>
            <p className="font-sans text-muted-foreground">
              Review your items and proceed to checkout
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="crystal-card space-y-4 p-6"
              >
                {cartItems.map((item) => {
                  const productImage = imageMap[item.product.id] || auroraImg;
                  const itemSubtotal = getItemSubtotal(item.product.price, item.quantity);

                  return (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4 border-b border-border pb-6 last:border-0"
                    >
                      {/* Product Image */}
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm">
                        <img
                          src={productImage}
                          alt={item.product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="mb-1 font-serif text-lg text-crystal">
                            {item.product.name}
                          </h3>
                          <p className="font-serif text-gold">{item.product.price}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="mt-4 flex items-center gap-4">
                          <QuantitySelector
                            value={item.quantity}
                            onChange={(newQuantity) => {
                              updateQuantity(item.product.id, newQuantity);
                            }}
                            min={1}
                            max={99}
                          />

                          <div className="flex-1">
                            <p className="font-sans text-sm text-muted-foreground">
                              Subtotal: <span className="text-gold">TND {itemSubtotal.toFixed(2)}</span>
                            </p>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveItem(item.product.id);
                            }}
                            type="button"
                            className="relative z-10 flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-sm border border-red-500/50 bg-red-500/10 p-2 text-red-500 transition-all duration-300 hover:bg-red-500/30 hover:border-red-500 hover:text-red-400 active:scale-90"
                            aria-label={`Remove ${item.product.name} from cart`}
                            title="Remove item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
                className="crystal-card sticky top-32 p-6"
              >
                <h2 className="mb-6 font-serif text-2xl text-crystal">Order Summary</h2>

                <div className="mb-6 space-y-3">
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-crystal">TND {getSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-crystal">
                      {getShipping() === 0 ? (
                        <span className="text-gold">Free</span>
                      ) : (
                        `TND ${getShipping().toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-crystal">TND {getTax().toFixed(2)}</span>
                  </div>
                </div>

                <div className="mb-6 border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="font-serif text-lg text-crystal">Total</span>
                    <span className="font-serif text-2xl text-gold">
                      TND {getTotal().toFixed(2)}
                    </span>
                  </div>
                </div>

                {amountNeededForFreeShipping > 0 && (
                  <div className="mb-6 rounded-sm bg-gold/10 p-4 text-center">
                    <p className="font-sans text-sm text-gold">
                      Add TND {amountNeededForFreeShipping.toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  <LuxuryButton
                    to="/contact"
                    variant="filled"
                    className="w-full justify-center"
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </LuxuryButton>
                  <Link
                    to="/collections"
                    className="block w-full border border-border bg-transparent px-6 py-3 text-center font-sans text-sm uppercase tracking-[0.1em] text-crystal transition-colors hover:border-gold hover:text-gold"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
