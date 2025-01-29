import { Layout } from "./components/layout";
import { Widget } from "./components/timeline";
import useMedia from "react-use/lib/useMedia";
import { periods } from "./data";
import "./app.scss";
import { StickyCursor } from "./components/sticky-cursor";

function App() {
  const title = "Исторические\nдаты";
  const isTablet = useMedia("(min-width: 980px)");

  return (
    <Layout>
      {isTablet && <StickyCursor />}
      <h1 className="app-title">{title}</h1>
      <Widget periods={periods} />
    </Layout>
  );
}

export default App;
