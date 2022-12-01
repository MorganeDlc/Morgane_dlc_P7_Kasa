const size = {
    tablet: "768px",
    desktop: "1100px",
    desktopL: "1440px",
  };
  
export const device = {
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };