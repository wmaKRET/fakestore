import Header from "./components/header/Header";
import Store from "./components/store/Store";
import "./app.scss";

const App = () => {
  const xd = 1;

  return (
    <>
      <Header />
      <div className="container">
        <Store />
      </div>
    </>
  );
};

export default App;
