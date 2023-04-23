import { useState } from "react";

function Form({ setFootprint, footprint, setImgLink }) {
  const [electric, setElectric] = useState("");
  const [gas, setGas] = useState("");
  const [yearlyMileage, setYearlyMileage] = useState("");
  const [flights, setFlights] = useState(0);
  const [flightsOver4hr, setFlightsOver4hr] = useState(false);
  const [total, setTotal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let total =
      electric * 105 +
      gas * 105 +
      yearlyMileage * 0.79 +
      flights * 1100 +
      flightsOver4hr * 4400;
    setTotal(total);
    if (total < 16000) {
      setImgLink("/low.png");
      setFootprint("Low");
    } else if (total < 22000) {
      setImgLink("/average.png");
      setFootprint("Average");
    } else {
      setImgLink("/high.png");
      setFootprint("High");
    }
  }

  return (
    <div className="form p-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="electric">Monthly Electric Bill</label>
          <input
            type="number"
            className="form-control"
            id="electric"
            placeholder="Electric Bill"
            required
            onChange={(e) => setElectric(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="gas">Monthly Gas Bill</label>
          <input
            type="number"
            className="form-control"
            id="gas"
            placeholder="Gas Bill"
            required
            onChange={(e) => setGas(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="mileage">Yearly Car Mileage</label>
          <input
            type="number"
            className="form-control"
            id="gas"
            placeholder="Car Mileage"
            required
            onChange={(e) => setYearlyMileage(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="flights">
            Flights Taken (under 4hr) in last year
          </label>
          <input
            type="number"
            className="form-control"
            id="flights"
            placeholder="Flights Taken"
            required
            onChange={(e) => setFlights(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="flights4">
            Flights Taken (Over 4hr) in last year{" "}
          </label>
          <input
            type="number"
            className="form-control"
            id="flights4"
            placeholder="Flights Taken"
            required
            onChange={(e) => setFlightsOver4hr(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {footprint
        ? `${footprint} : Your carbon footprint is ${total} pounds per year.`
        : ""}
    </div>
  );
}

export default Form;
