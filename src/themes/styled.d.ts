import 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      gray: string;
      red: string;
      green: string;
      title: string;
      body: string;
    };
  }
}
