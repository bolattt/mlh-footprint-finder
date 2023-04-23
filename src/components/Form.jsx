import { useState } from "react";
import axios from "axios";

function Form() {
  const [electric, setElectric] = useState("");
  const [gas, setGas] = useState("");
  const [yearlyMileage, setYearlyMileage] = useState("");
  const [flights, setFlights] = useState(0);
  const [flightsOver4hr, setFlightsOver4hr] = useState(false);
  const [recyclePaper, setRecyclePaper] = useState(false);
  const [recycleTin, setRecycleTin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="form p-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="electric">Monthly Electric Bill</label>
          <input
            type="text"
            className="form-control"
            id="electric"
            placeholder="Electric Bill"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
