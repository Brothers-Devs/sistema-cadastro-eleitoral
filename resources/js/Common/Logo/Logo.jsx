import React from "react";

const Logo = ({src = "/storage/logo-candidato.png", alt = "Logo", className = "w-44 h-32"}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default Logo;
