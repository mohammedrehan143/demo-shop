import { ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 rounded-bl-[200px]" />
      <div className="absolute top-1/4 -left-20 -z-10 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <span>Collection 2026</span>
              <div className="w-1 h-1 bg-primary-500 rounded-full" />
              <span>Available Now</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter">
              BEYOND <br />
              <span className="text-primary-600">PERFORMANCE.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Engineered for the elite. Designed for the streets. Experience the perfect fusion of revolutionary technology and timeless aesthetics.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#portfolio" 
                className="bg-slate-900 text-white px-10 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-primary-600 transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                Shop Collection
                <ShoppingBag size={18} />
              </a>
              <button className="bg-white text-slate-900 border-2 border-slate-900 px-10 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
                Learn Technology
              </button>
            </div>

            <div className="pt-12 flex items-center justify-center lg:justify-start gap-12 border-t border-slate-100">
              <div>
                <p className="text-3xl font-black text-slate-900">450g</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Ultra Light</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-3xl font-black text-slate-900">MAX</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Cushioning</p>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <p className="text-3xl font-black text-slate-900">PRO</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Stability</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative group">
            <div className="relative z-10 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000&h=800" 
                alt="Elite Performance Shoe" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              />
            </div>
            
            {/* Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none">
              <span className="text-[180px] md:text-[250px] font-black text-slate-100 leading-none">ELITE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
