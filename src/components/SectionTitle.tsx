const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display font-light text-[clamp(32px,4vw,52px)] text-forest leading-[1.15] max-w-[560px] mb-[72px]">
    {children}
  </h2>
);

export default SectionTitle;
