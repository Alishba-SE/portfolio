import React from "react";

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false, 
  ...props 
}, ref) => {
  const Comp = asChild ? "span" : "button";
  
  return (
    <Comp
      ref={ref}
      className={`btn btn-${variant} btn-${size} ${className || ""}`}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };