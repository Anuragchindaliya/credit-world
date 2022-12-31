import React from "react";

const Comparison = () => {
  return (
    <section className="bg-gray py-20 ">
      <div className="container ">
        <h3 className="text-xl font-semibold text-gray-700">Comparison Table for HDFC Bank Credit Cards </h3>
        <p className="text-gray-600">
          IndiaLends brings an extensive list of HDFC Bank credit cards online
          with the sole purpose of catering to all types of consumers. The bank
          has designed these credit cards to best suit all the needs of
          customers, ranging from shopping to lifestyle to corporate
          requirements, and more. All the cards from HDFC Bank come with
          exciting benefits and reward points.
          <br />
          <br />
          Apply for our range of HDFC Bank Credit Cards online in less than 2
          minutes. Check your eligibility in the HDFC Bank eligibility section
          below, and compare the range of HDFC Bank credit cards.
        </p>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="col-md-2" style={{ verticalAlign: "top" }}>
                  <p>
                    <b>Name of the HDFC Bank Credit Card</b>
                  </p>
                </th>
                <th className="col-md-2" style={{ verticalAlign: "top" }}>
                  <p>
                    <b>Fees</b>
                  </p>
                </th>
                <th className="col-md-4" style={{ verticalAlign: "top" }}>
                  <p>
                    <b>Rewards</b>
                  </p>
                </th>
                <th className="col-md-4" style={{ verticalAlign: "top" }}>
                  <p>
                    <b>HDFC Credit Card Eligibility</b>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>HDFC Bank Millennia Credit Card</p>
                </td>
                <td>
                  <p>Joining fee - Rs.1000 + taxes</p>
                  <p>Annual fees - Rs.1000 + taxes</p>
                  <p>
                    (First year's membership fee will be waived off on spending
                    ₹30,000 or more in the first 90 days)
                  </p>
                </td>
                <td>
                  <p>-</p>
                  {/*<ul class="list-inside">
                      <li>Launch offer of ₹1000 worth gift vouchers on spends of ₹1,00,000 and above in each calendar quarter for first year only.</li>
                  </ul>*/}
                </td>
                <td>
                  <p>- Minimum 21 years of age &amp; Maximum 60 years of age</p>
                  <p>
                    - Personal monthly income of Rs.30,000 or above (for
                    Salaried)
                  </p>
                  <p>- ITR of Rs.3,60,000 or above (for Self Employed)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>HDFC Bank EasyEMI Card</p>
                </td>
                <td>
                  <p>Joining fee - Rs.500 + taxes</p>
                  <p>Annual fees - Rs.500 + taxes</p>
                  <p>
                    (First year's membership fee will be waived off on spending
                    ₹30,000 or more in the first 90 days)
                  </p>
                </td>
                <td>
                  <ul className="list-inside">
                    <li>
                      Launch offer of ₹1000 worth gift vouchers on spends of
                      ₹1,00,000 and above in each calendar quarter for first
                      year only.
                    </li>
                  </ul>
                </td>
                <td>
                  <p>- Minimum 21 years of age &amp; Maximum 60 years of age</p>
                  <p>
                    - Personal monthly income of Rs.20,000 or above (for
                    Salaried)
                  </p>
                  <p>- ITR of Rs.2,40,000 or above (for Self Employed)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>HDFC Bank Times Titanium Credit Card</p>
                </td>
                <td>
                  <p>Joining fee - Rs.500 </p>
                  <p>Annual fees - Rs.500</p>
                </td>
                <td>
                  <ul className="list-inside">
                    <li>
                      5 Reward Points on every Rs.150 spent for Weekday Dining
                    </li>
                  </ul>
                </td>
                <td>
                  <p>- Minimum 21 years of age &amp; Maximum 60 years of age</p>
                  <p>
                    - Personal monthly income of Rs.15,000 or above (for
                    Salaried)
                  </p>
                  <p>- ITR of Rs.2,00,000 or above (for Self Employed)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>HDFC Bank MoneyBack Credit Card</p>
                </td>
                <td>
                  <p>Joining fee - Rs.500 </p>
                  <p>Annual fees - Rs.500 </p>
                </td>
                <td>
                  <ul className="list-inside">
                    <li>
                      {" "}
                      Earn 2 Reward Points for every Rs.150 of Retail spends{" "}
                    </li>
                    <li>
                      Earn 4 Reward Points for every Rs.150 of Online spends{" "}
                    </li>
                  </ul>
                </td>
                <td>
                  <p>- Minimum 21 years of age &amp; Maximum 60 years of age</p>
                  <p>
                    - Personal monthly income of Rs.15,000 or above (for
                    Salaried)
                  </p>
                  <p>- ITR of Rs.2,00,000 or above (for Self Employed)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Jet Privilege HDFC Bank Platinum Credit Card</p>
                </td>
                <td>
                  <p>Joining fee - Rs.2,500 </p>
                  <p>Annual fees - Rs.2,500 </p>
                </td>
                <td>
                  <ul className="list-inside">
                    <li>
                      {" "}
                      Earn 4 JPMiles/ Rs.150 for all your retails spends except
                      for fuel
                    </li>
                    <li>
                      {" "}
                      Earn 3x (12 JPMiles / Rs.150)* for all travel bookings
                      made on jetairways.com
                    </li>
                  </ul>
                </td>
                <td>
                  <p>- Minimum 21 years of age &amp; Maximum 60 years of age</p>
                  <p>
                    - Personal monthly income of Rs.30,000 or above (for
                    Salaried)
                  </p>
                  <p>- ITR of Rs.3,60,000 or above (for Self Employed)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>HDFC Regalia Credit Card </p>
                </td>
                <td>
                  <p>Joining fee - Rs.2,500</p>
                  <p>Annual fees - Rs.2,500 </p>
                </td>
                <td>
                  <ul className="list-inside">
                    <li>4 Reward points for INR 150 spend.</li>
                  </ul>
                </td>
                <td>
                  <p>- Minimum 21 years of age &amp; Maximum 60 years of age</p>
                  <p>
                    - Personal monthly income of Rs.1,20,000 or above (for
                    Salaried)
                  </p>
                  <p>- ITR of Rs.1,20,00,00 or above (for Self Employed)</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
