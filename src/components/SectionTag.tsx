const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <p className="flex items-center gap-4 text-[9px] tracking-[4px] uppercase text-gold mb-5">
    <span className="block w-6 h-px bg-gold" />
    {children}
  </p>
);

export default SectionTag;
