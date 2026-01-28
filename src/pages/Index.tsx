import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { CrystalChandelier } from '@/components/3d/CrystalChandelier';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts, products } from '@/data/products';
import { Sparkles, Award, Truck } from 'lucide-react';

import heroImage from '@/assets/hero-chandelier.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury Crystal Chandelier"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/50 to-obsidian" />
        </div>

        {/* 3D Chandelier Overlay */}
        <div className="absolute inset-0 opacity-50">
          <CrystalChandelier />
        </div>

        {/* Content */}
        <div className="container-luxury relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="mx-auto max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 font-sans text-xs uppercase tracking-[0.4em] text-gold"
            >
              Premium Crystal Chandeliers
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-8 font-serif text-5xl leading-tight text-crystal md:text-7xl lg:text-8xl"
            >
              Where Light
              <br />
              <span className="text-gold-gradient">Becomes Art</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mx-auto mb-12 max-w-2xl font-sans text-lg leading-relaxed text-crystal/70 md:text-xl"
            >
              Luxury Crystal Chandeliers Designed to Transform Living Spaces
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col items-center justify-center gap-6 sm:flex-row"
            >
              <LuxuryButton to="/collections" variant="filled">
                Explore Collection
              </LuxuryButton>
              <LuxuryButton to="/showroom" variant="outline">
                Visit Showroom
              </LuxuryButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-crystal/50">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-12 w-px bg-gradient-to-b from-gold to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Curated Excellence - Products */}
      <section className="section-luxury bg-obsidian">
        <div className="container-luxury">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold"
            >
              Featured Products
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl text-crystal md:text-5xl lg:text-6xl"
            >
              Curated Excellence
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {products.slice(0, 6).map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-luxury bg-obsidian-light">
        <div className="container-luxury">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold"
            >
              Featured Pieces
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl text-crystal md:text-5xl lg:text-6xl"
            >
              Signature Chandeliers
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <LuxuryButton to="/collections" variant="outline">
              View All Products
            </LuxuryButton>
          </motion.div>
        </div>
      </section>

      {/* Why Choose DOMUS */}
      <section className="section-luxury bg-obsidian">
        <div className="container-luxury">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold"
            >
              The DOMUS Difference
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl text-crystal md:text-5xl lg:text-6xl"
            >
              Excellence in Every Detail
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: Sparkles,
                title: 'Premium Crystals',
                description:
                  'Hand-selected crystals sourced from the finest manufacturers worldwide, ensuring exceptional clarity and brilliance.',
              },
              {
                icon: Award,
                title: 'Expert Craftsmanship',
                description:
                  'Each chandelier is meticulously assembled by master artisans with decades of experience in luxury lighting.',
              },
              {
                icon: Truck,
                title: 'White Glove Service',
                description:
                  'Professional installation and delivery services to ensure your chandelier is perfectly positioned.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="crystal-card p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <feature.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mb-4 font-serif text-xl text-crystal">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sapphire to-obsidian" />
        <div className="absolute inset-0 opacity-30">
          <CrystalChandelier />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold">
              Visit Our Showroom
            </p>
            <h2 className="mb-6 font-serif text-4xl text-crystal md:text-5xl lg:text-6xl">
              Experience the Brilliance
            </h2>
            <p className="mx-auto mb-10 max-w-2xl font-sans text-lg text-crystal/70">
              Step into our showroom and witness the mesmerizing interplay of
              light and crystal. Our lighting consultants await to help you find
              the perfect centerpiece for your home.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <LuxuryButton to="/showroom" variant="filled">
                Get Directions
              </LuxuryButton>
              <LuxuryButton to="/contact" variant="outline">
                Contact Us
              </LuxuryButton>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
