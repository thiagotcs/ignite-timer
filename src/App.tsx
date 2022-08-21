import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./components/styles/themes/default";
export const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="success" />
        <Button variant="danger" />
        <Button />
      </ThemeProvider>
    </>
  );
};
