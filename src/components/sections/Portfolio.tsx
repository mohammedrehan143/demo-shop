const Portfolio = () => {
  const collections = [
    {
      title: 'Vortex Running',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=600&h=800',
    },
    {
      title: 'Urban Stealth',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600&h=800',
    },
    {
      title: 'Apex Hiker',
      category: 'Outdoor',
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600&h=800',
    },
    {
      title: 'Glide 2.0',
      category: 'Basketball',
      image: 'https://images.unsplash.com/photo-1512374382149-433a72b75d9b?auto=format&fit=crop&q=80&w=600&h=800',
    },
    {
      title: 'Prime Leather',
      category: 'Formal',
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=600&h=800',
    },
    {
      title: 'Nitro Sprint',
      category: 'Track',
      image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=600&h=800',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4">LATEST <span className="text-primary-500">COLLECTIONS</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto uppercase text-xs font-bold tracking-widest">Masterpieces in motion</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {collections.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-slate-100"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-6 left-6">
                <span className="bg-white text-slate-900 px-4 py-1 text-[10px] font-black uppercase tracking-widest shadow-xl">
                  {item.category}
                </span>
              </div>
              <div className="p-8 flex justify-between items-end bg-white">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter text-slate-900">{item.title}</h3>
                  <p className="text-primary-600 font-bold text-sm">$189.99</p>
                </div>
                <button className="bg-slate-900 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-primary-600 transition-colors shadow-lg">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-white text-slate-900 border-4 border-slate-900 px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-900 hover:text-white transition-all shadow-xl">
            Explore All Footwear
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
