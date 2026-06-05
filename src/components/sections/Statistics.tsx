const Statistics = () => {
  const stats = [
    { label: 'Store Locations', value: '150+' },
    { label: 'Pairs Sold', value: '2.5M+' },
    { label: 'Pro Athletes', value: '300+' },
    { label: 'Design Awards', value: '45' },
  ];

  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-l border-primary-500 first:border-0 pl-4 md:pl-0">
              <p className="text-5xl font-black italic mb-2 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-primary-100 text-xs font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
