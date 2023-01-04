import React,{useState} from 'react';
import Navigation from "./components/navbar";
import Main from "./components/main";
// import About from "./components/about";
// import Work from "./components/work";
// import Contact from "./components/contact"
import Footer from "./components/footer";

function App() {
  // const [pageState,setPageState] = useState({
  //   main:true,
  //   about:false,
  //   work:false,
  //   contact:false,
  // })
  return (
    <div>
      <Navigation />
      <Main />
      {/* <Navigation pageState={pageState} setPageState={setPageState} /> */}
      {/* {pageState.main? <Main />: ''}
      {pageState.about? <About />: ''}
      {pageState.work? <Work />: ''}
      {pageState.contact? <Contact />: ''} */}
      <Footer />
    </div>
  );
}

export default App;
