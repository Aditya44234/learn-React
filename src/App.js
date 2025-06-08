import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
    <>
    {/* Navigation Bar */}
    <Navbar navbar="AJAI" Search="Search" />

    {/* Form  */}

    <Form heading="Enter the text here"/>

    {/* About Us */}
    <About/>




    </>
  );
}

export default App;
