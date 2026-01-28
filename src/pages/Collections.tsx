import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { products, collections } from '@/data/products';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ filter });
    }
  };

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return products;
    return products.filter((product) => product.collection === activeFilter);
  }, [activeFilter]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-sapphire/30 to-obsidian" />
        <div className="container-luxury relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.4em] text-gold">
              Crystal Chandeliers
            </p>
            <h1 className="mb-6 font-serif text-5xl text-crystal md:text-6xl lg:text-7xl">
              Our Collections
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-lg text-crystal/70">
              Discover our curated selection of luxury crystal chandeliers,
              each designed to transform your living space into a realm of
              light and elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-border bg-obsidian py-6">
        <div className="container-luxury">
          <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-2">
            <button
              onClick={() => handleFilterChange('all')}
              className={`whitespace-nowrap px-6 py-3 font-sans text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'border border-gold bg-gold/10 text-gold'
                  : 'border border-border text-muted-foreground hover:border-gold/50 hover:text-crystal'
              }`}
            >
              All Products
            </button>
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => handleFilterChange(collection.id)}
                className={`whitespace-nowrap px-6 py-3 font-sans text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeFilter === collection.id
                    ? 'border border-gold bg-gold/10 text-gold'
                    : 'border border-border text-muted-foreground hover:border-gold/50 hover:text-crystal'
                }`}
              >
                {collection.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-luxury bg-obsidian">
        <div className="container-luxury">
          <motion.div
            key={activeFilter}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-sans text-muted-foreground">
                No products found in this collection.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Collections;
