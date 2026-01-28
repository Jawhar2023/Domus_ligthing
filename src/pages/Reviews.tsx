import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { Star, MapPin, Clock, Check } from 'lucide-react';

const reviews = [
  {
    name: 'Selima Larhrib',
    rating: 5,
    text: 'Exceptional quality and service. The chandelier we purchased transformed our living room into a stunning space. Highly recommend DOMUS Lighting!',
    date: '2 months ago',
  },
  {
    name: 'Ahmed Ben Ali',
    rating: 5,
    text: 'Professional team and beautiful selection. They helped us choose the perfect chandelier for our villa. The installation was flawless.',
    date: '3 months ago',
  },
  {
    name: 'Fatma Mansour',
    rating: 5,
    text: 'The craftsmanship is incredible. Every crystal sparkles beautifully. Worth every dinar spent. Thank you DOMUS team!',
    date: '4 months ago',
  },
  {
    name: 'Mohamed Trabelsi',
    rating: 5,
    text: 'Best lighting showroom in Sousse. Wide variety of designs and excellent customer service. They went above and beyond.',
    date: '5 months ago',
  },
  {
    name: 'Nadia Bouaziz',
    rating: 5,
    text: 'Stunning chandeliers! The team was very helpful in selecting the right size and style for our space. Delivery was on time.',
    date: '6 months ago',
  },
];

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

const Reviews = () => {
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
              Client Experiences
            </p>
            <h1 className="mb-6 font-serif text-5xl text-crystal md:text-6xl lg:text-7xl">
              Reviews & Testimonials
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-lg text-crystal/70">
              Discover what our clients say about their experience with DOMUS
              Lighting and our luxury crystal chandeliers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="border-b border-border bg-obsidian py-12">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16"
          >
            {/* Overall Rating */}
            <div className="text-center">
              <div className="mb-2 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-8 w-8 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="font-serif text-5xl text-crystal">5.0</p>
              <p className="mt-2 font-sans text-sm text-muted-foreground">
                Based on Google Reviews
              </p>
            </div>

            {/* Google Business Info */}
            <div className="flex flex-col items-center gap-4 md:items-start">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="font-sans text-sm text-crystal">
                  DOMUS Lighting - Sousse
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" />
                <span className="font-sans text-sm text-crystal">
                  Open · Closes 7 PM
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-gold" />
                <span className="font-sans text-sm text-crystal">
                  Verified Business
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-luxury bg-obsidian">
        <div className="container-luxury">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="crystal-card p-8"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= review.rating
                          ? 'fill-gold text-gold'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mb-6 font-sans leading-relaxed text-crystal/80">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-lg text-crystal">
                      {review.name}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                    <span className="font-serif text-lg text-gold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Leave a Review CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="mb-6 font-serif text-2xl text-crystal">
              Had a great experience with us?
            </p>
            <LuxuryButton
              href="https://search.google.com/local/writereview?placeid=ChIJWdkwcs11AhMRFO-y9j87s54"
              variant="filled"
            >
              Leave a Review on Google
            </LuxuryButton>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-luxury bg-obsidian-light">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold">
              Have Questions?
            </p>
            <h2 className="mb-6 font-serif text-4xl text-crystal md:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mb-10 max-w-2xl font-sans text-lg text-muted-foreground">
              Our team is here to help you find the perfect chandelier for your
              space. Contact us for personalized consultation.
            </p>
            <LuxuryButton to="/contact" variant="outline">
              Contact Us
            </LuxuryButton>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
