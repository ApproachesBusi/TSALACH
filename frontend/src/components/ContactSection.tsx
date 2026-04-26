import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    // Simulate API call
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert('Thank you! Your quote request has been received. We will contact you soon.');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <div className="mb-12">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Let's Talk</span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark mt-4 mb-8 tracking-tight">
                Ready to Build Your <span className="text-brand-orange underline decoration-4 underline-offset-8 decoration-brand-orange/30">Dream</span>?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
                Whether it's a new home or a large commercial project, our team is ready to bring your vision to life.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, title: 'Call Us', value: '+1 (555) 123-4567' },
                { icon: Mail, title: 'Email Us', value: 'info@tsalachgroup.com' },
                { icon: MapPin, title: 'Visit Us', value: '123 Construction Way, Industrial Park, Lagos, Nigeria' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                    <p className="text-gray-600 font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12"
            >
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:shadow-green-500/20 transition-all"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 invert" alt="WhatsApp" />
                Contact via WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl shadow-brand-dark/5 border border-gray-100"
          >
            <h3 className="text-2xl font-display font-bold text-brand-dark mb-8">Request a Free Quote</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                  <input
                    {...register('name')}
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-orange transition-all outline-none text-brand-dark"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input
                    {...register('email')}
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-orange transition-all outline-none text-brand-dark"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                  <input
                    {...register('phone')}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-orange transition-all outline-none text-brand-dark"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Project Type</label>
                  <select
                    {...register('projectType')}
                    className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-orange transition-all outline-none text-brand-dark appearance-none"
                  >
                    <option value="">Select Category</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="renovation">Renovation</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                  {errors.projectType && <p className="text-red-500 text-xs mt-1 font-medium">{errors.projectType.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-orange transition-all outline-none text-brand-dark resize-none"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-dark text-white p-5 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-orange transition-all flex items-center justify-center gap-3 group shadow-xl shadow-brand-dark/10 hover:shadow-brand-orange/30 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Quote Request
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
