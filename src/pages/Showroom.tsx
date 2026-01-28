import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { MapPin, Phone, Clock, Car, Truck } from 'lucide-react';

// Import showroom images
import showroomImg from '@/assets/showroom.jpg';
// Import PNG images - make sure domus1.png and domus2.png exist in src/assets/products/
import showroomExteriorImg from '@/assets/products/domus1.png';
import showroomInteriorImg from '@/assets/products/domus2.png';

const showroomExterior = showroomExteriorImg;
const showroomInterior = showroomInteriorImg;

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const Showroom = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src={showroomExterior}
            alt="DOMUS Lighting Showroom Exterior"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/85 via-obsidian/70 to-obsidian" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.4em] text-gold">
              Visit Us
            </p>
            <h1 className="mb-6 font-serif text-5xl text-crystal md:text-6xl lg:text-7xl">
              Our Showroom
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-lg text-crystal/70">
              Experience the brilliance of our crystal chandeliers in person.
              Step into our showroom and let light inspire you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Details */}
      <section className="section-luxury bg-obsidian">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square overflow-hidden rounded-sm lg:aspect-auto lg:h-full lg:min-h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.5!2d10.6!3d35.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13021775723cd959%3A0x9eb33b3ff6b2ef14!2sDOMUS%20Lighting!5e0!3m2!1sen!2stn!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="mb-8 font-serif text-3xl text-crystal md:text-4xl">
                DOMUS Lighting
              </h2>

              {/* Address */}
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl text-crystal">
                    Address
                  </h3>
                  <p className="font-sans text-muted-foreground">
                    5, Avenue Ibn Khaldoun
                    <br />
                    Sousse 4061, Tunisia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl text-crystal">
                    Phone
                  </h3>
                  <a
                    href="tel:+21692999842"
                    className="font-sans text-muted-foreground transition-colors duration-300 hover:text-gold"
                  >
                    +216 92 999 842
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl text-crystal">
                    Opening Hours
                  </h3>
                  <div className="space-y-1 font-sans text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mb-10">
                <h3 className="mb-4 font-serif text-xl text-crystal">
                  Services Available
                </h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 border border-border bg-muted/20 px-4 py-2">
                    <Car className="h-4 w-4 text-gold" />
                    <span className="font-sans text-sm text-crystal">
                      In-store Pickup
                    </span>
                  </div>
                  <div className="flex items-center gap-2 border border-border bg-muted/20 px-4 py-2">
                    <Truck className="h-4 w-4 text-gold" />
                    <span className="font-sans text-sm text-crystal">
                      Delivery Available
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <LuxuryButton
                href="https://maps.app.goo.gl/4YkfymcNZ4FmYEHk7"
                variant="filled"
              >
                Get Directions
              </LuxuryButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="section-luxury bg-obsidian">
        <div className="container-luxury">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold"
            >
              Our Showroom
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl text-crystal md:text-5xl lg:text-6xl"
            >
              Experience DOMUS
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground"
            >
              Step into our modern showroom where luxury lighting meets contemporary design
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Exterior Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={showroomExterior}
                  alt="DOMUS Lighting Storefront - Modern exterior with DOMUS LIGHTING signage"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-2 font-serif text-2xl text-crystal">
                    Our Storefront
                  </h3>
                  <p className="font-sans text-sm text-crystal/80">
                    Visit our modern showroom in the heart of Sousse
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interior Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={showroomInterior}
                  alt="DOMUS Lighting Interior - Modern LED lighting design showcase"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="mb-2 font-serif text-2xl text-crystal">
                    Interior Excellence
                  </h3>
                  <p className="font-sans text-sm text-crystal/80">
                    Experience our modern lighting installations and designs
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-luxury bg-obsidian-light">
        <div className="container-luxury">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold"
            >
              The DOMUS Experience
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-16 font-serif text-4xl text-crystal md:text-5xl"
            >
              What to Expect
            </motion.h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Personal Consultation',
                description:
                  'Our lighting experts will guide you through our collection, understanding your space and style preferences.',
              },
              {
                number: '02',
                title: 'See Chandeliers Illuminate',
                description:
                  'Experience the true brilliance of our chandeliers in our specially designed display rooms.',
              },
              {
                number: '03',
                title: 'Custom Solutions',
                description:
                  'Discuss custom sizing, finishes, and installation options tailored to your specific requirements.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="crystal-card p-8 text-center"
              >
                <span className="mb-4 block font-serif text-5xl text-gold/30">
                  {step.number}
                </span>
                <h3 className="mb-4 font-serif text-xl text-crystal">
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Showroom;
