import { Share2, MessageSquare, Briefcase, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="space-y-8">
            <span className="text-3xl font-black italic text-primary-500 tracking-tighter">ELITE<span className="text-white">KICKS</span></span>
            <p className="text-sm leading-relaxed font-medium">
              Revolutionizing footwear through advanced biomechanics and street-ready design. Since 1998.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-primary-600 hover:text-white transition-all"><MessageSquare size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-primary-600 hover:text-white transition-all"><Share2 size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-primary-600 hover:text-white transition-all"><Briefcase size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-full hover:bg-primary-600 hover:text-white transition-all"><Camera size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Navigation</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tighter">
              <li><a href="#about" className="hover:text-primary-500 transition-colors">Our Story</a></li>
              <li><a href="#portfolio" className="hover:text-primary-500 transition-colors">Shop All</a></li>
              <li><a href="#services" className="hover:text-primary-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">Find a Store</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Categories</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tighter">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Running</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Basketball</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Lifestyle</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Limited Drops</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Newsletter</h3>
            <p className="text-xs mb-6 font-medium">Join the elite for exclusive drops and news.</p>
            <div className="flex bg-slate-900 p-1 rounded-sm">
              <input type="text" placeholder="Your Email" className="bg-transparent px-4 py-2 text-xs font-bold outline-none w-full" />
              <button className="bg-primary-600 text-white px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          <p>© {new Date().getFullYear()} Elite Kicks International. Engineered for greatness.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
