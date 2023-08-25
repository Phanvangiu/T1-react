import "./App.scss";
import Header from "./Mycomponents/header/Header"; 
import Footer from "./Mycomponents/footer/Footer";
import Default from "./Mycomponents/default/Default";
import MainMenu from "./Mycomponents/mainMenu/MainMenu";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainMenu></MainMenu>
      <Default></Default>
      <Footer></Footer>
    </div>
  );
}

export default App;
