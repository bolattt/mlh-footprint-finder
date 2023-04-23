import axios from "axios";

const options = {
  method: "GET",
  url: "https://carbonfootprint1.p.rapidapi.com/CleanHydroToCarbonFootprint",
  params: { energy: "Solar", consumption: "500" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
  },
};

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return <div className="form">Form</div>;
}

export default Form;
