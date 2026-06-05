import { Search, PenTool, Zap, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: 'Biomechanic Scan',
      desc: 'We analyze your movement patterns and pressure points to understand your unique foot strike.',
      icon: <Search size={28} />,
    },
    {
      title: 'Custom Engineering',
      desc: 'Our AI-driven system designs a personalized midsole structure optimized for your performance.',
      icon: <PenTool size={28} />,
    },
    {
      title: 'Precision Build',
      desc: 'Every pair is laser-cut and hand-finished by master craftsmen in our elite laboratory.',
      icon: <Zap size={28} />,
    },
    {
      title: 'Performance Test',
      desc: 'Final quality check in our simulated terrain environment before shipping to your door.',
      icon: <CheckCircle size={28} />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 uppercase text-slate-900">ENGINEERING <span className="text-primary-600">PROCESS</span></h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">From Lab to Street</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-10 bg-slate-50 rounded-sm border border-slate-100 group hover:bg-slate-900 transition-all duration-500">
              <div className="absolute top-4 right-4 text-7xl font-black text-slate-200 group-hover:text-slate-800 transition-colors select-none">
                0{index + 1}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white text-primary-600 rounded-full flex items-center justify-center mb-10 shadow-lg group-hover:bg-primary-600 group-hover:text-white transition-all">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-slate-900 group-hover:text-white">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
