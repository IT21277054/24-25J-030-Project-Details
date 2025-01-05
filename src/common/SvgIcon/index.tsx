import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  console.log("SvgIcon src:", `/img/svg/${src}`);
  return <img src={`img/svg/${src}`} alt={src} width={width} height={height} />;
};

export const PngIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`img/icons/${src}`} alt={src} width={width} height={height} />
);

export const PngIconDoc = ({ src, width, height }: SvgIconProps) => (
  <img src={`img/documents/${src}`} alt={src} width={width} height={height} />
);
