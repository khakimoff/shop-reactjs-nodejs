import React from 'react';

type ImageType = {
  src: string,
  width?: number,
  height?: number,
  alt: string,
} & typeof defaultProps

const defaultProps = {
  width: 100,
  height: 100,
};

const Image = (
  {
    src, width, height, alt,
  }: ImageType,
) => (
  <img
    src={src}
    width={width}
    height={height}
    alt={alt}
  />
);

Image.defaultProps = defaultProps;

export default Image;
