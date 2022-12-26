import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getAllCards, subscribe } from "../../api";

const Apply = () => {
  const { state } = useLocation();
  const [selectedCard, setSelectedCard] = useState(state);

  const {
    mutate: addSubscriber,
    isLoading: isApplying,
    isSuccess,
    reset
  } = useMutation(subscribe);
  const { data: allCards } = useQuery("allCards", getAllCards, {
    staleTime: 1000 * 60 * 30,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit", e);
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log({ formData, formProps });
    formProps.body = `<div><h1>Credit World</h1><p>Thanks for applying</p><div>Card Name: ${selectedCard?.name}</div><div>Sender Mail: ${formProps.email}</div><div>Message: ${formProps.message}</div></div>`;
    addSubscriber(formProps, { onSuccess: () => e.target.reset() });
  };

  const cards = allCards?.data?.cards;
  useEffect(() => {
    if (!state && cards?.length) {
      setSelectedCard(cards?.[0]);
    }
  }, [state, cards]);
  return (
    <div className="contact---area py-5 bg-gray">
      <div className="container bg-white p-5 rounded">
        {/* <h1>response</h1>
        <div dangerouslySetInnerHTML={{__html:data?.data?.bodyHtml}}></div> */}
        <div className="row">
          <div className="col-12">
            <h4 className="mb-50">Send a message</h4>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Name</label>
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
                    <label>Email</label>
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
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Card</label>
                        <select
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
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Contact</label>
                        <input
                          type="text"
                          className="form-control"
                          name="contact"
                          placeholder="Your Contact No."
                        />
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="form-group">
                        <label>Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Your Subject"
                        />
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          //   cols={30}
                          rows={3}
                          placeholder="Your Message"
                          defaultValue={""}
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
                      <>Apply</>
                    )}
                  </button>
                  {isSuccess && (
                    <div
                      className="alert alert-success font-weight-bolder"
                      role="alert"
                    >
                      <i className="fa-solid fa-circle-check mr-2 " />{" "}
                      Successfully subscribed
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
    </div>
  );
};

export default Apply;
