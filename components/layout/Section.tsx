import React, { ReactNode } from "react";

interface SectionProps {
  className?: string;
  id: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ className, id, children }) => {
  return (
    <section id={id} className={`max-w-[1440px] mx-auto px-6 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
