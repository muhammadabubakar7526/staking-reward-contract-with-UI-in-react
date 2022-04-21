import "./App.css";
import First from "./First";
import Stake from "./Stake";
import Unstake from "./Unstake";
import Claim from "./Claim";
import Details from "./Details";
import Connect from "./connect";
function App() {
  return (
    <>
      <div className="col-12 all">
        <Connect></Connect>
        <First></First>
        <Stake></Stake>
        <Unstake></Unstake>
        <Claim></Claim>
        <Details></Details>
      </div>
    </>
  );
}

export default App;
