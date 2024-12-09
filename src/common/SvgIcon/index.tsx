import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);

export const PngIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/icons/${src}`} alt={src} width={width} height={height} />
);
