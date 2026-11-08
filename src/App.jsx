import { List } from "./components/List.jsx";
import { Header } from "./components/List.jsx";
const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <List />
      </div>
    </>
  );
};
export { App };
