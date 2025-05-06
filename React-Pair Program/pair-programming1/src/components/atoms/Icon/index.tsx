import React from "react";

interface Props {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

const Icon: React.FC<Props> = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default Icon;
