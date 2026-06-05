import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Marcus Thorne',
      role: 'Marathon Runner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
      text: 'The Vortex series is the most responsive shoe I\'ve ever worn. It feels like it\'s pushing you forward with every single step. Absolutely revolutionary.',
    },
    {
      name: 'Elena Vance',
      role: 'Professional Dancer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      text: 'Comfort meets style in a way I didn\'t think was possible. I wear ELITE KICKS during rehearsals and on the street. They are incredibly durable.',
    },
    {
      name: 'David Okafor',
      role: 'Basketball Coach',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
      text: 'The ankle support and traction on the Glide 2.0 is top-tier. My entire team switched to ELITE KICKS this season and the feedback has been amazing.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-4 uppercase">TRUSTED BY <br /><span className="text-primary-600">THE BEST</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Real performance. Real stories.</p>
          </div>
          <div className="flex gap-2">
             <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all cursor-pointer">←</div>
             <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all cursor-pointer">→</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] relative group"
            >
              <div className="flex mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-primary-500 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-600 font-medium leading-relaxed mb-10 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-100 pt-8">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-tighter">{review.name}</h4>
                  <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
