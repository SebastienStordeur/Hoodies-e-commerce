import React from "react";

interface SizeSelectorProps {
  size: string[];
}
const SizeSelector: React.FC<SizeSelectorProps> = ({ size }) => {
  return (
    <React.Fragment>
      <select name="size" id="size-select">
        <option value="">Select your size</option>
        {size.map((itemSize, index: number) => {
          return (
            <option className="mx-1" value={itemSize} key={index}>
              {itemSize}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default SizeSelector;
