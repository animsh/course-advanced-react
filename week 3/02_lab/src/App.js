import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render(mousePosition);
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <MousePosition render={
          (mousePosition) => {
            return (
               <><span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span></>
             )
          }
        } />
      </div>
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = ({mousePosition}) => {
  return (
    <p>
      <MousePosition render={
        (mousePosition) => {
          return (
            <>
            ({ mousePosition.x }, { mousePosition.y })
            </>
          );
        }
      } />
    </p>
  )
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
