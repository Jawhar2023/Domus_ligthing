import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent',
      description: 'Thank you for contacting us. We will respond shortly.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

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
              Get in Touch
            </p>
            <h1 className="mb-6 font-serif text-5xl text-crystal md:text-6xl lg:text-7xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-lg text-crystal/70">
              Have questions about our chandeliers or need personalized advice?
              We're here to help you find the perfect lighting solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-luxury bg-obsidian">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-8 font-serif text-3xl text-crystal md:text-4xl">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-border bg-muted/20 px-4 py-3 font-sans text-crystal outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-border bg-muted/20 px-4 py-3 font-sans text-crystal outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-gold"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-border bg-muted/20 px-4 py-3 font-sans text-crystal outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-gold"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-border bg-muted/20 px-4 py-3 font-sans text-crystal outline-none transition-colors duration-300 focus:border-gold"
                    >
                      <option value="" className="bg-obsidian">Select a topic</option>
                      <option value="product-inquiry" className="bg-obsidian">Product Inquiry</option>
                      <option value="consultation" className="bg-obsidian">Consultation Request</option>
                      <option value="installation" className="bg-obsidian">Installation Services</option>
                      <option value="custom-order" className="bg-obsidian">Custom Order</option>
                      <option value="other" className="bg-obsidian">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none border border-border bg-muted/20 px-4 py-3 font-sans text-crystal outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-gold"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <LuxuryButton
                  type="submit"
                  variant="filled"
                  className={isSubmitting ? 'pointer-events-none opacity-70' : ''}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </LuxuryButton>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="mb-8 font-serif text-3xl text-crystal md:text-4xl">
                Contact Information
              </h2>

              <div className="mb-12 space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-serif text-xl text-crystal">
                      Visit Our Showroom
                    </h3>
                    <p className="font-sans text-muted-foreground">
                      5, Avenue Ibn Khaldoun
                      <br />
                      Sousse 4061, Tunisia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-serif text-xl text-crystal">
                      Call Us
                    </h3>
                    <a
                      href="tel:+21692999842"
                      className="font-sans text-muted-foreground transition-colors duration-300 hover:text-gold"
                    >
                      +216 92 999 842
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-serif text-xl text-crystal">
                      Email Us
                    </h3>
                    <a
                      href="mailto:contact@domuslighting.tn"
                      className="font-sans text-muted-foreground transition-colors duration-300 hover:text-gold"
                    >
                      contact@domuslighting.tn
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
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
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 font-serif text-xl text-crystal">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/domuslighting.tn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-gold hover:bg-gold/10"
                  >
                    <Facebook className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-gold" />
                  </a>
                  <a
                    href="https://instagram.com/domuslighting.tn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-gold hover:bg-gold/10"
                  >
                    <Instagram className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-gold" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.5!2d10.6!3d35.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13021775723cd959%3A0x9eb33b3ff6b2ef14!2sDOMUS%20Lighting!5e0!3m2!1sen!2stn!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </Layout>
  );
};

export default Contact;
