// import PriceTable from "./components/PriceTable";
import TrendDashboard from "./components/TrendDashboard";

console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};
console.debug = () => {};

function App() {
  return (
    <div className="custom-scroll">
      <TrendDashboard />
    </div>
  );
}

export default App;
