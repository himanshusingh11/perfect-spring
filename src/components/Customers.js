import React , {useState} from 'react';
import Picture5 from '../images/Picture5.png';

const Customers = () => {
  const serifFont2 = {
    fontFamily: "serif",
  };

  const customerData = [
    { id: 1, name: "M/S BADVE GROUP (Belrise Industries Limited)" },
    { id: 2, name: "M/S JBM GROUP (Manesar/Behrampur)" },
    { id: 3, name: "M/S GROZ ENGG. TOOLS (P) LTD." },
    { id: 4, name: "M/S SERVICES ENGINEERING INDUSTRIES" },
    { id: 5, name: "M/S WINDSOR EXPORTS" },
    { id: 6, name: "M/S ENGINEERS AUTO. (Ancillary unit of M/s Swaraj Tractor)" },
    { id: 7, name: "M/S RSB TRANSMISSIONS (I) LTD." },
    { id: 8, name: "M/S AUTOLINE INDUSTRIES LTD." },
    { id: 9, name: "M/S SRK TELE ENERGY INDIA PVT. LTD." },
    { id: 10, name: "M/S GEEKEN SEATING COLLECTION PVT LTD." },
    { id: 11, name: "M/S JAIHIND AUTOTECH INDUSTRIES" },
    { id: 12, name: "M/S TRACK COMPONENTS PVT. LTD." },
    { id: 13, name: "M/S SABO HEMA AUTOMOTIVE (P) LTD. (An Indo-Italian Joint Venture)" },
    { id: 14, name: "M/S NICE STEEL INDUSTRIES" },
    { id: 15, name: "M/S ELECTRO SPARK" },
    { id: 16, name: "M/S PURAVI POLYMER PVT. LTD." },
    { id: 17, name: "M/S SAM INSTRUMENTS PVT. LTD." },
    { id: 18, name: "M/S ELECTRONIC INSTRUMENTATION" },
    { id: 19, name: "M/S FAIR PRODUCTS (INDIA) LTD." },
    { id: 20, name: "M/S MODERN OFFICE FURNITURE" },
    { id: 21, name: "M/S CAS TECH PRODUCTS PVT.LTD." },
    { id: 22, name: "M/S STANDARD COATINGS" },
    { id: 23, name: "M/S NEHA INDUSTRIES" },
    { id: 24, name: "M/S SHREE PRYAG AIR CONTROL PVT.LTD." },
    { id: 25, name: "M/S AVANCE BUSSOL" },
    { id: 26, name: "M/S SARVATRA INDUSTRIES (India) PVT.LTD." },
    { id: 27, name: "M/S MAGNUM MI STEEL PVT.LTD." }
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 10;

  // Calculate index of the last customer on the current page
  const indexOfLastCustomer = currentPage * customersPerPage;
  // Calculate index of the first customer on the current page
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  // Get customers for the current page
  const currentCustomers = customerData.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to generate table rows
  const generateTableRows = () => {
    return currentCustomers.map(customer => (
      <tr key={customer.id}>
        <td>{customer.id}</td>
        <td>{customer.name}</td>
      </tr>
    ));
  };

  // Pagination numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(customerData.length / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='p-3 mt-2'>
      <div style={{ height: '40px' }}></div>
      <h1 style={serifFont2}>Our Customers</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Picture5} className="img-fluid rounded-start" alt="Customer Image"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={serifFont2}>Customer List</h5>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="text-center">
                    <tr style={{ textAlign: "justify" }}>
                      <th scope="col">S.No.</th>
                      <th scope="col" style={{width:'50%'}}>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generateTableRows()}
                  </tbody>
                </table>
              </div>
              <nav>
                <ul className="pagination justify-content-center">
                  {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                      <button onClick={() => paginate(number)} className="page-link">{number}</button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
