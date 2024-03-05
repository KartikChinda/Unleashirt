import Home from "./pages/Home";
import Canvas from './canvas/index';
import Customizer from './pages/Customizer';



function App() {


  return (
    <>
      {/* The main tag essentially can come only once in a component opposed to the div tag, and is a good practice to use this when the content is unique to a particular page.  */}
      <main className="app transition-all ease-in"

      >
        <Home />
        <Canvas />
        <Customizer />
      </main>

    </>
  )
}

export default App
