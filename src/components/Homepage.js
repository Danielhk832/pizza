import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import gsap from "gsap";
import Button from "@mui/material/Button";

export default function Homepage() {
  const history = useHistory();

  const toOrderForm = () => {
    history.push("/pizza");
  };

  return (
    <div className="app">
      <h1>Lambda Eats, SON</h1>
      <div className="hero-container">
        <div className="button-wrapper">
          <Button
            variant="contained"
            size="large"
            id="order-pizza"
            onClick={toOrderForm}
          >
            Order Pizza
          </Button>
        </div>
      </div>
    </div>
  );
}
