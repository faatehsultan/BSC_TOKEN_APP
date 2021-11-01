import axios from "axios";
import { api_key } from "../../constants";
import { useState } from "react";

export default function Home() {
  const [contractAdd, setContractAddress] = useState("");
  const [resField, setResField] = useState("");

  const CallAPI = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=${contractAdd}&apikey=${api_key}`
      )
      .then((data) => {
        setResField(data.data.result);
      })
      .catch((error) => {
        setResField("Error Occured!");
      });
  };

  return (
    <div className="home">
      <div className="container">
        <div className="fs-4 text-center">BSC Token Search App</div>
        <br />
        <br />
        <br />
        <form
          onSubmit={CallAPI}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <input
            type="text"
            className="form-group"
            placeholder="Enter Token Detail"
            onChange={(e) => {
              setContractAddress(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="Enter" className="btn btn-primary" />
        </form>
        <div className="fw-bold">{resField}</div>
      </div>
    </div>
  );
}
