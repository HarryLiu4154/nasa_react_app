import { useState } from "react";
import Footer from "./components/footer"
import Main from "./components/main"
import SideBar from "./components/SideBar"

function App() {

  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Main/>
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal} />
      )}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
