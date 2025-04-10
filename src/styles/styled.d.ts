import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      primary: string;
      secondary: string;
      alert: string;
    };
    fonts: {
      body: string;
      heading: string;
      brand: string;
    };
  }
}
