import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1 space-y-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-8">GET IN <br /><span className="text-primary-600">STRIDE.</span></h2>
              <p className="text-slate-400 font-medium max-w-md leading-relaxed">
                Whether you have a question about our collections, technology, or your order, our elite support team is here to assist you 24/7.
              </p>
            </div>
            
            <div className="space-y-8 pt-8 border-t border-slate-800">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-800 text-primary-500 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Elite Line</p>
                  <p className="text-xl font-black italic tracking-tighter uppercase">+1 (800) ELITE-KICKS</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-800 text-primary-500 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Mail</p>
                  <p className="text-xl font-black italic tracking-tighter uppercase">hq@elitekicks.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-800 text-primary-500 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Global HQ</p>
                  <p className="text-xl font-black italic tracking-tighter uppercase">5th Ave, New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-slate-800 p-10 md:p-16 rounded-sm">
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-slate-700 py-4 focus:outline-none focus:border-primary-500 transition-colors font-bold text-lg"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b-2 border-slate-700 py-4 focus:outline-none focus:border-primary-500 transition-colors font-bold text-lg"
                    placeholder="Email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Inquiry Type</label>
                  <select className="w-full bg-transparent border-b-2 border-slate-700 py-4 focus:outline-none focus:border-primary-500 transition-colors font-bold text-lg appearance-none">
                    <option className="bg-slate-800">Order Inquiry</option>
                    <option className="bg-slate-800">Technical Support</option>
                    <option className="bg-slate-800">Press/Media</option>
                    <option className="bg-slate-800">Wholesale</option>
                  </select>
                </div>
                
                <div className="space-y-2 pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-primary-600 text-white font-black py-6 uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center justify-center gap-3"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
