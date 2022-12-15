import React from "react";

interface ColorSelectorProps {
  colors: string[];
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors }) => {
  return (
    <div>
      <p>Colors: </p>
      {colors.map((color: string, index: number) => (
        <span key={index} className="mx-1">
          {color}
        </span>
      ))}
    </div>
  );
};

export default ColorSelector;
