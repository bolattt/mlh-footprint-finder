import Form from "./Form";
import { useState } from "react";

function FormContainer() {
  const [footprint, setFootprint] = useState("");
  const [imgLink, setImgLink] = useState(
    "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fassets.justenergy.com%2Fwp-content%2Fuploads%2F2013%2F04%2FiStock_000014351447Medium-1.jpg"
  );
  return (
    <div className="form-container p-5">
      <img src={imgLink} alt="img" width={400} />
      <Form
        footprint={footprint}
        setFootprint={setFootprint}
        setImgLink={setImgLink}
      />

    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <Form />
</div>

    
  );
}

export default FormContainer;
