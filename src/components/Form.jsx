import { useState } from "react";
import axios from "axios";

function Form() {
  const [kwh, setKwh] = useState("");
  const [source, setSource] = useState("solar");

  function handleSubmit(e) {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://carbonfootprint1.p.rapidapi.com/CleanHydroToCarbonFootprint",
      params: { energy: source, consumption: kwh },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
      },
    };
    console.log(options);
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }
  console.log(kwh);
  console.log(source);
  return (
    <div className="form p-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="source">Example select</label>
          <select
            className="form-control"
            id="source"
            onChange={(e) => setSource(e.target.value)}
          >
            <option>Solar</option>
            <option>Wind</option>
            <option>Hydro Electric</option>
          </select>
        </div>

        <div className="form-group mb-2">
          <label htmlFor="kwh">The amount of energy consumed in KWH</label>
          <input
            type="number"
            className="form-control"
            id="kwh"
            placeholder="kwh"
            onChange={(e) => setKwh(e.target.value)}
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
