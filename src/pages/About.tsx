import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { Sparkles, Heart, Globe, Award } from 'lucide-react';

import craftsmanshipImg from '@/assets/craftsmanship.jpg';
import showroomImg from '@/assets/products/domus1.png';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-sapphire/30 to-obsidian" />
        <div className="container-luxury relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.4em] text-gold">
              Our Story
            </p>
            <h1 className="mb-6 font-serif text-5xl text-crystal md:text-6xl lg:text-7xl">
              About DOMUS
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-lg text-crystal/70">
              Crafting extraordinary crystal chandeliers that transform living
              spaces into realms of light and elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-luxury bg-obsidian">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold">
                Our Philosophy
              </p>
              <h2 className="mb-6 font-serif text-4xl text-crystal md:text-5xl">
                Light is the
                <br />
                <span className="text-gold-gradient">Soul of Space</span>
              </h2>
              <p className="mb-6 font-sans leading-relaxed text-muted-foreground">
                At DOMUS Lighting, we believe that light has the power to
                transform not just spaces, but the way we feel within them. A
                crystal chandelier is more than illumination—it is a statement
                of refined taste, a centerpiece that commands attention and
                inspires awe.
              </p>
              <p className="mb-8 font-sans leading-relaxed text-muted-foreground">
                Since our founding, we have been dedicated to curating the
                finest crystal chandeliers for discerning homeowners who
                understand that true luxury lies in the details. Each piece in
                our collection is selected for its exceptional craftsmanship,
                brilliance, and ability to create atmosphere.
              </p>
              <LuxuryButton to="/collections" variant="outline">
                Explore Our Collection
              </LuxuryButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={craftsmanshipImg}
                  alt="Crystal Chandelier Craftsmanship"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-40 w-40 border border-gold/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-luxury bg-obsidian-light">
        <div className="container-luxury">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold"
            >
              What We Stand For
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl text-crystal md:text-5xl"
            >
              Our Values
            </motion.h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Sparkles,
                title: 'Exceptional Quality',
                description:
                  'We source only the finest crystals and materials, ensuring each chandelier meets our exacting standards.',
              },
              {
                icon: Heart,
                title: 'Passion for Light',
                description:
                  'Our love for lighting design drives us to seek out unique and beautiful pieces from around the world.',
              },
              {
                icon: Globe,
                title: 'Global Sourcing',
                description:
                  'From European crystal houses to artisan workshops, we bring the world\'s best lighting to Tunisia.',
              },
              {
                icon: Award,
                title: 'Client Excellence',
                description:
                  'Your satisfaction is paramount. We provide personalized service from selection to installation.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="crystal-card p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mb-4 font-serif text-xl text-crystal">
                  {value.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="section-luxury bg-obsidian">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={showroomImg}
                  alt="DOMUS Lighting Showroom"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-40 w-40 border border-gold/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 flex flex-col justify-center lg:order-2"
            >
              <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold">
                Our Space
              </p>
              <h2 className="mb-6 font-serif text-4xl text-crystal md:text-5xl">
                The DOMUS Showroom
              </h2>
              <p className="mb-6 font-sans leading-relaxed text-muted-foreground">
                Located in the heart of Sousse, our showroom is designed to
                showcase the transformative power of crystal lighting. Each
                chandelier is displayed in a carefully curated setting,
                allowing you to experience its full brilliance before making
                your selection.
              </p>
              <p className="mb-8 font-sans leading-relaxed text-muted-foreground">
                Our knowledgeable team is ready to guide you through our
                collection, helping you find the perfect piece to complement
                your living space and personal style.
              </p>
              <LuxuryButton to="/showroom" variant="filled">
                Visit Our Showroom
              </LuxuryButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury bg-gradient-to-r from-sapphire to-obsidian">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold">
              Let's Create Together
            </p>
            <h2 className="mb-6 font-serif text-4xl text-crystal md:text-5xl">
              Ready to Transform Your Space?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl font-sans text-lg text-crystal/70">
              Contact us to begin your journey toward extraordinary lighting.
              Our team is here to help you find the perfect chandelier.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <LuxuryButton to="/contact" variant="filled">
                Contact Us
              </LuxuryButton>
              <LuxuryButton to="/collections" variant="outline">
                Browse Collections
              </LuxuryButton>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
