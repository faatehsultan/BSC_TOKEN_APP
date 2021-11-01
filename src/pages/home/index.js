import { useState } from "react";

export default function Home() {
  const [contractAdd, setContractAddress] = useState("");
  const [flag, setFlag] = useState(false);
  // const [resField, setResField] = useState("");

  // const CallAPI = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get(
  //       `https://poocoin.app/tokens/${contractAdd}`,
  //       {
  //         headers: {
  //           Accept: "*/*",
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     )
  //     .then((data) => {
  //       setResField(data.data.result);
  //     })
  //     .catch((error) => {
  //       setResField("Error Occured!");
  //     });
  // };

  return (
    <div className="home bg-dark" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="fs-4 text-center">
          <img src="logo.png" alt="" className="img-fluid" />
        </div>
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFlag(!flag);
          }}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter Token Detail"
            onChange={(e) => {
              setContractAddress(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="Enter" className="btn btn-primary" />
        </form>
        {contractAdd && (
          <div className="fw-bold">
            <iframe
              frameborder="0"
              style={{ overflow: "hidden", minHeight: "100vh", width: "100%" }}
              height="100%"
              width="100%"
              title="chartframe"
              src={`https://poocoin.app/tokens/${contractAdd}`}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
