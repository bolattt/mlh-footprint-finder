import Form from "./Form";
import { useState } from "react";

function FormContainer() {
  const [footprint, setFootprint] = useState("");
  const [imgLink, setImgLink] = useState(
    "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fassets.justenergy.com%2Fwp-content%2Fuploads%2F2013%2F04%2FiStock_000014351447Medium-1.jpg"
  );
  return (
    <div className="card" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div class="col-md-4">
    <img src={imgLink} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <Form
        footprint={footprint}
        setFootprint={setFootprint}
        setImgLink={setImgLink}
      />
       
      </div>
    </div>
  </div>
</div>

  );
}

export default FormContainer;
