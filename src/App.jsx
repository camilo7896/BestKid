import Navbar from "./components/Navbar";
import CreateAccount from "./components/CreateAccount"
import InformationProfile from "./components/InformationProfile";

function App() {

  return (
    <>
      <Navbar />
      <h1 className="text-5xl underline text-center text-red-500">
        Hello world! <span className="text-darkGreen font-fontTitleBold">PRUEBA</span>
      </h1>
      <br />
      {/* <CreateAccount /> */}
      <InformationProfile />
    </>
  );
}

export default App;
