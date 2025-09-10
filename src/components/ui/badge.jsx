import React from "react";

const Badge = ({ className, variant = "default", ...props }) => {
  return (
    <div
      className={`badge badge-${variant} ${className || ""}`}
      {...props}
    />
  );
};

export { Badge };