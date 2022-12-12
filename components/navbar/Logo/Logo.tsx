import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <h1 className="font-bold text-2xl tracking-widest">HOODIES</h1>
    </Link>
  );
};

export default Logo;
