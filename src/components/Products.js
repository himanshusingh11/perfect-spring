import React from "react";

const Products = () => {
  const serifFont2 = {
    fontFamily: "serif",
  };
  

  const machineryData = {
    "COILING MACHINE": [
      {
        id: 1,
        name: "Automatic Compression Coiling Machine",
        capacity: "1.20 mm",
        quantity: 1,
      },
      {
        id: 2,
        name: "Automatic Compression Coiling Machine",
        capacity: "5.00 mm",
        quantity: 1,
      },
      {
        id: 3,
        name: "Automatic Compression Coiling Machine",
        capacity: "2.50 mm",
        quantity: 1,
      },
      {
        id: 4,
        name: "Automatic Compression Coiling Machine",
        capacity: "2.00 mm",
        quantity: 2,
      },
      {
        id: 5,
        name: "Automatic Torsion Coiling Machine",
        capacity: "6.00 mm",
        quantity: 1,
      },
      {
        id: 6,
        name: "Automatic Torsion Coiling Machine",
        capacity: "2.50 mm",
        quantity: 1,
      },
      {
        id: 7,
        name: "Automatic Torsion Coiling Machine",
        capacity: "1.20 mm",
        quantity: 1,
      },
    ],
    GRINDING: [
      {
        id: 1,
        name: "Spring End Grinder (SEG.)",
        capacity: "450 mm",
        quantity: 1,
      },
      {
        id: 2,
        name: "Spring End Grinder (SEG.)",
        capacity: "200 mm",
        quantity: 1,
      },
      { id: 3, name: "Bench Grinder", capacity: "200 mm", quantity: 1 },
      { id: 4, name: "Barrel Machine", capacity: "---------", quantity: 1 },
    ],
    "TEMPERING & HARDENING": [
      {
        id: 1,
        name: "Production Type Electric Furnace",
        capacity: "450x300x300 mm",
        quantity: 1,
      },
    ],
    "TOOL ROOM": [
      { id: 1, name: "Surface Grinder", capacity: "18”", quantity: 1 },
      { id: 2, name: "Hand Drill Machine", capacity: "½”", quantity: 1 },
      { id: 3, name: "Hand press", capacity: "1-10 Nos", quantity: 10 },
      { id: 4, name: "Drill Machine", capacity: "¾”", quantity: 1 },
      { id: 5, name: "Lathe Machine", capacity: "6 feet", quantity: 1 },
    ],
    "STAND BY POWER": [
      {
        id: 1,
        name: "GENERATOR SET (Eicher)",
        capacity: "35 KVA",
        quantity: 1,
      },
    ],
  };
  const checkingAidsData = {
    "RAW MATERIAL INSPECTION": [{ id: 1, name: "UTS. TESTER (SOLARMAN MAKE)" }],
    "COMPONENT INSPECTION": [
      { id: 1, name: "Digital Load Tester (BSI.Make)", quantity: 1 },
      { id: 2, name: "Digital Ring Load Tester(BSI. Make)", quantity: 1 },
      { id: 3, name: "Digital Verniers 12”", quantity: 2 },
      { id: 4, name: "Digital Vernier 8”", quantity: 3 },
      { id: 5, name: "Height Gauge 600 mm", quantity: 1 },
      { id: 6, name: "Micro Meter 0~25 mm.", quantity: 2 },
      { id: 7, name: "Degree Protector", quantity: 2 },
      { id: 8, name: "Inside and Outside Compass", quantity: 1 },
      { id: 9, name: "Surface Plate 630mm X 630mm.", quantity: 1 },
      { id: 10, name: "Try Square", quantity: 1 },
      { id: 11, name: "Right Angle Plate", quantity: 1 },
      { id: 12, name: "Radius Gauge", quantity: 2 },
    ],
  };

  const generateTableRowsForChecking = (data) => {
    return data.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        {/* <td>{item.capacity}</td>
        <td>{item.quantity || ""}</td>
        <td>{item.description || ""}</td> */}
      </tr>
    ));
  };

  // Function to generate table rows
  const generateTableRows = (data) => {
    return data.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.capacity}</td>
        <td>{item.quantity}</td>
      </tr>
    ));
  };

  return (
    <div className="p-3 mt-2">
      <div style={{ height: "40px" }}></div>
      <h1 style={serifFont2}>Machinery</h1>

      {Object.entries(machineryData).map(([section, data]) => (
        <div key={section}>
          <h3 style={serifFont2}>{section}</h3>
          <table className="table table-striped">
            <thead className="text-center">
              <tr style={{ textAlign: "justify" }}>
                <th scope="col" className="col" style={{ width: "25%" }}>
                  {" "}
                  S.No.{" "}
                </th>
                <th scope="col" className="col" style={{ width: "25%" }}>
                  {" "}
                  MACHINE{" "}
                </th>
                <th scope="col" className="col" style={{ width: "25%" }}>
                  {" "}
                  CAPACITY{" "}
                </th>
                <th scope="col" className="col" style={{ width: "25%" }}>
                  {" "}
                  NO.S{" "}
                </th>
              </tr>
            </thead>
            <tbody>{generateTableRows(data)}</tbody>
          </table>
        </div>
      ))}
      <h1 style={serifFont2}>List of Checking Aids</h1>

      {Object.entries(checkingAidsData).map(([section, data]) => (
        <div key={section}>
          <h3 style={serifFont2}>{section}</h3>
          <table className="table table-striped">
            <thead className="text-center">
              <tr style={{ textAlign: "justify" }}>
                <th scope="col">S.No.</th>
                <th scope="col" style={{ width: "25%" }}>
                  MACHINE
                </th>
              </tr>
            </thead>
            <tbody>{generateTableRowsForChecking(data)}</tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Products;
