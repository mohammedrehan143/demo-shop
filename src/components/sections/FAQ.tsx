import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I find my correct size?',
      answer: 'We recommend using our interactive 3D scan available on the mobile app, or visiting any Elite Kicks laboratory for a professional fitting session.',
    },
    {
      question: 'What is your return policy for limited drops?',
      answer: 'Limited edition drops can be returned within 14 days of receipt, provided they are in unworn, original condition with all tags and packaging intact.',
    },
    {
      question: 'Are your shoes suitable for professional competitive sports?',
      answer: 'Yes, our Performance line is engineered specifically to meet and exceed professional athletic standards and is currently used by hundreds of elite athletes globally.',
    },
    {
      question: 'How do I clean my Elite Kicks?',
      answer: 'We recommend using our specialized restoration kit for home cleaning. For deep cleaning or technical repairs, please use our Elite Restoration service.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Absolutely. We ship to over 150 countries with end-to-end tracking and guaranteed delivery windows.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black italic tracking-tighter mb-4 uppercase">SUPPORT <span className="text-primary-600">CENTER</span></h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto" />
        </div>
        
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-50 border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-8 text-left hover:bg-slate-100 transition-colors group"
              >
                <span className="font-black text-slate-900 uppercase tracking-tighter group-hover:text-primary-600 transition-colors">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary-600 shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-slate-400 shrink-0" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-8 text-slate-500 font-medium text-sm leading-relaxed border-t border-slate-200/50 pt-6 animate-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
