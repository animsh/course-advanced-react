import logo from './logo.svg';
import './App.css';
import React from "react";

const OrderItem = ({ children }) => {
  const styles = { display: "inline", marginLeft: "24px" }
  return (
    <>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index === 0 ? { display: "inline" } : styles)
          }
        })
      }
      )}
    </>
  )
}

function App() {

  return (
    <div className="App">
      <OrderItem>
        <p>Maharaja Veg Pizza</p>
        <p>320/-</p>
        <p>Extra Topping</p>
        <p>Priority</p>
      </OrderItem>
    </div>
  );
}

export default App;
