interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest max-w-2xl mx-auto lg:mx-0">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1.5 w-24 bg-primary-600 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
