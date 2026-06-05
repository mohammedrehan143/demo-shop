import { Award, Zap, Shield, Heart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const About = () => {
  const highlights = [
    { 
      title: 'Crafted with Precision', 
      desc: 'Every pair is meticulously designed and tested to meet the highest standards of performance and comfort.',
      icon: <Award className="w-6 h-6" />
    },
    { 
      title: 'Revolutionary Tech', 
      desc: 'Our patented AeroCushion™ technology provides unmatched energy return and impact protection.',
      icon: <Zap className="w-6 h-6" />
    },
    { 
      title: 'Ethical Production', 
      desc: 'We are committed to 100% sustainable materials and fair labor practices across our global supply chain.',
      icon: <Heart className="w-6 h-6" />
    },
    { 
      title: 'Built to Last', 
      desc: 'Engineered with DuraStep™ outsoles that withstand the most demanding terrains and daily grinds.',
      icon: <Shield className="w-6 h-6" />
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=500&h=700" 
                alt="Shoe craftsmanship" 
                className="rounded-sm shadow-[40px_40px_0_0_rgba(249,115,22,0.1)] w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-10 z-20 hidden md:block">
              <p className="text-5xl font-black italic">EST.</p>
              <p className="text-5xl font-black italic text-primary-500">1998</p>
            </div>
          </div>
          
          <div className="flex-1 space-y-10">
            <SectionHeading 
              title="Redefining the Walk of Life" 
              subtitle="At ELITE KICKS, we believe that shoes are more than just footwear—they are the foundation of your journey. For over two decades, we've pushed the boundaries of what's possible."
              centered={false}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-12">
              {highlights.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-primary-600">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-10">
              <button className="text-slate-900 font-black uppercase tracking-widest text-sm border-b-4 border-primary-500 pb-1 hover:text-primary-600 hover:border-slate-900 transition-all">
                Our Heritage Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
