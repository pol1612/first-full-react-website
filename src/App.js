import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import './Minimal.css'

function App() {
  return (
  <>
     <Header/>
     <Main companyName="ABC Corporation"/>
     <Footer publishMonth="October" publishYear="2023"/>
  </>
  );
}	
export default App;