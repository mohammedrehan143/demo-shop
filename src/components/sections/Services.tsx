import { Settings, RefreshCw, Truck, Scissors, Users, Gift } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Custom Fitting',
      desc: 'Expert 3D foot scanning and analysis to find your perfect size and support profile.',
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: 'Elite Restoration',
      desc: 'Professional cleaning and sole replacement to keep your favorite pairs in peak condition.',
      icon: <RefreshCw className="w-8 h-8" />,
    },
    {
      title: 'Global Express',
      desc: 'Fast, secure, and insured shipping to over 150 countries worldwide.',
      icon: <Truck className="w-8 h-8" />,
    },
    {
      title: 'Bespoke Design',
      desc: 'Collaborate with our designers to create a one-of-one pair that matches your style.',
      icon: <Scissors className="w-8 h-8" />,
    },
    {
      title: 'VIP Membership',
      desc: 'Early access to limited drops, exclusive events, and members-only pricing.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Style Concierge',
      desc: 'Personalized footwear styling advice for professional, athletic, or casual needs.',
      icon: <Gift className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4">PREMIUM <span className="text-primary-500">EXPERIENCE</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We provide a comprehensive suite of services to ensure your footwear journey is as smooth as your stride.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-slate-800 border border-slate-800">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-900 p-12 hover:bg-slate-800 transition-all group"
            >
              <div className="text-primary-500 mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
