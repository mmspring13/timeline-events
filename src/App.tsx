import { Layout } from "./components/layout";
import { Widget } from "./components/timeline";
import { periods } from "./data";

function App() {
  const title = "Исторические\nдаты";

  return (
    <div className="xl:pl-[16.5%] xl:pr-[8.3%] flex justify-center items-center h-full">
      <Layout>
        <h1 className="text-line text-xl">{title}</h1>
        <Widget periods={periods} />
        {/* <h2>Lorem ipsum dolor sit.</h2> */}
      </Layout>
    </div>
  );
}

export default App;
