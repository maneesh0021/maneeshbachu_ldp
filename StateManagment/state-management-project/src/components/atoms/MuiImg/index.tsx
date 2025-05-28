import React from "react";
import styled from "styled-components";

export interface MuiImgProps {
  src: string;
  alt: string;
  className?: string;
  height?: number | string;
  width?: number | string;
  onClick?: () => void;
}

const StyledImg = styled.img<Partial<MuiImgProps>>`
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  object-fit: contain;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;

const MuiImg: React.FC<MuiImgProps> = ({
  src,
  alt,
  className,
  height,
  width,
  onClick,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
      onClick={onClick}
    />
  );
};

export default MuiImg;
