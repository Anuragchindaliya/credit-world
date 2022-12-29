import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getAllCards, subscribe } from "../../api";
import BankLogo from "../../components/common/BankLogo";
import "./index.css";

const salaried = "salaried";
const selfEmployed = "selfEmployed";
const Apply = () => {
  const { state } = useLocation();
  const [selectedCard, setSelectedCard] = useState(state);
  const [occupation, setOccupation] = useState(salaried);
  const [isCardUser, setCardUser] = useState(false);

  const {
    mutate: addSubscriber,
    isLoading: isApplying,
    isSuccess,
    reset,
    data: successRes,
  } = useMutation(subscribe);
  const { data: allCards } = useQuery("allCards", getAllCards, {
    staleTime: 1000 * 60 * 30,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit", e);
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    formProps.body = `<div><h1>Credit World</h1><p>Thanks for applying</p><div>Name: ${formProps?.name}</div><div>Sender Mail: ${formProps?.email}</div><div>Contact: ${formProps?.contact}</div><div>pincode: ${formProps?.pincode}</div><div>Credit card User: ${formProps?.cardUser? "YES":"NO"}</div><div>Card Name: ${selectedCard?.name}</div><div><br /><img src="${selectedCard?.img}" style="width:200px" /></div></div>`;
    console.log({ formData, formProps });
    // return;
    addSubscriber(
      { cardId: selectedCard.id, ...formProps }
      // { onSuccess: () => e.target.reset() }
    );
  };

  const cards = allCards?.data?.cards;
  useEffect(() => {
    if (!state && cards?.length) {
      setSelectedCard(cards?.[0]);
    }
  }, [state, cards]);
  const handleOccupation = (e) => {
    setOccupation(e.target.id);
  };
  const handleCardUser = () => {
    setCardUser((b) => !b);
  };
  return (
    <div className="applyForm bg-gray">
      <div
        className="container bg-white p-5 rounded"
        style={{ boxShadow: "5px 5px 5px #dce0ff" }}
      >
        {/* <h1>response</h1>
        <div dangerouslySetInnerHTML={{__html:data?.data?.bodyHtml}}></div> */}
        <div className="row">
          <div className="col-12">
            <h4 className="">Send a message</h4>
            <p>We will this information to connect you for your card request</p>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Contact<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="contact"
                      placeholder="Your Contact No."
                      // pattern="\d{10}"
                      maxLength={10}
                      minLength={10}
                      title="Please enter number in correct format"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your E-mail"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="form-group">
                      Are you credit card user
                      <span className="text-danger">*</span>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 ">
                        <input
                          type="radio"
                          className="mr-2"
                          name="cardUser"
                          id={"cardYes"}
                          onChange={handleCardUser}
                          checked={isCardUser}
                          value="1"
                          required
                        />
                        <label htmlFor="cardYes">Yes</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="radio"
                          className="mr-2"
                          name="cardUser"
                          id={"cardNo"}
                          value="0"
                          onChange={handleCardUser}
                          checked={!isCardUser}
                          required
                        />
                        <label htmlFor="cardNo">No</label>
                      </div>
                      {/* <div className="row">
                        <div className="col-lg-6 ">
                          <input
                            type="number"
                            className="form-control"
                            name="crLimitMin"
                            placeholder="Your min credit limit"
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="number"
                            className="form-control"
                            name="crLimitMax"
                            placeholder="Your max credit limit"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="form-group">
                      Occupation<span className="text-danger">*</span>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 ">
                        <input
                          type="radio"
                          className="mr-2"
                          name="occupation"
                          id={salaried}
                          onChange={handleOccupation}
                          checked={occupation === salaried}
                          required
                        />
                        <label htmlFor="salaried">Salaried</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="radio"
                          className="mr-2"
                          name="occupation"
                          id={selfEmployed}
                          onChange={handleOccupation}
                          checked={occupation === selfEmployed}
                          required
                        />
                        <label htmlFor="selfEmployed">Self Employed</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {occupation === salaried ? (
                    <div className="form-group">
                      <label>
                        Net Salary<span className="text-danger">*</span>{" "}
                        (monthly)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="salary"
                        placeholder="Your Salary in rupees"
                        required
                      />
                    </div>
                  ) : (
                    <div className="form-group">
                      <label>
                        Income Tax Return<span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="ITR"
                        placeholder="Your Income Tax Return"
                        required
                      />
                    </div>
                  )}
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Current area pincode</label>
                    <input
                      type="text"
                      className="form-control"
                      name="pincode"
                      placeholder="Your area pincode"
                      pattern={"[0-9]{6}"}
                      title="pincode should be of six character"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Card</label>
                        <select
                          disabled={state?.id}
                          className="form-control mb-3"
                          name="cardId"
                          placeholder="Select credit card"
                          // defaultValue={selectedCard?.id || ""}
                          value={selectedCard?.id || ""}
                          onChange={(e) => {
                            const dataset =
                              e.target.options[e.target.selectedIndex].dataset;
                            setSelectedCard({ ...dataset, id: e.target.value });
                            console.log({ e }, dataset);
                          }}
                        >
                          {cards?.map((item) => {
                            return (
                              <option
                                key={item?.id}
                                value={item?.id}
                                data-img={item?.img}
                                data-name={item?.name}
                              >
                                {item?.name}
                              </option>
                            );
                          })}
                        </select>
                        <img
                          src={selectedCard?.img}
                          style={{ maxHeight: 200 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-flex mt-10" style={{ gap: "1rem" }}>
                  <button
                    className="btn credit-btn  d-flex align-items-center justify-content-center"
                    type="submit"
                    disabled={isApplying}
                  >
                    {isApplying ? (
                      <>
                        <div
                          className="spinner-border text-white mx-2"
                          role="status"
                        >
                          <span className="sr-only">Applying...</span>
                        </div>{" "}
                        Applying...
                      </>
                    ) : (
                      <>Apply now</>
                    )}
                  </button>
                  {isSuccess && successRes?.data?.messageRes && (
                    <div
                      className="alert alert-success font-weight-bolder"
                      role="alert"
                    >
                      <i className="fa-solid fa-circle-check mr-2 " />{" "}
                      {successRes?.data?.messageRes}
                      <button
                        type="button"
                        className="close px-1"
                        data-dismiss="alert"
                        aria-label="Close"
                        onClick={reset}
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BankLogo />
    </div>
  );
};

export default Apply;
