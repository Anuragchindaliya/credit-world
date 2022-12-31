import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getCardsByBankId } from "../../api";

const CardList = ({ bankId }) => {
  const { isLoading, data } = useQuery(
    ["card", bankId],
    () => {
      return getCardsByBankId(bankId);
    },
    {
      enabled: !!bankId,
      staleTime: 1000 * 60 * 30,
    }
  );
  if (isLoading) {
    return (
      <div className="container py-5 my-5 d-flex justify-content-center align-items-center">
        <h4>
          <div className="spinner-border text-primary mx-2" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          Loading Cards...
        </h4>
      </div>
    );
  }
  const cardDetails = data?.data?.cards;
  if (!cardDetails?.length) {
    return (
      <div className="container " style={{ textAlign: "center" }}>
        <h6>No Cards Found</h6>
      </div>
    );
  }
  // console.log({ cardDetails });
  return (
    <section>
      <div className="container all-cards mb-70">
        {/* first card start from here*/}
        {cardDetails?.map((card, ci) => {
          return (
            <div key={ci} className="card  single-card">
              <div className="card-header border-0 col-lg-3">
                <img
                  style={{ margin: "auto", display: "block" }}
                  className="text-center"
                  src={card?.img}
                  alt={data?.name}
                  title={data?.name}
                />
              </div>
              <div className="card-block p-4 col-lg-9">
                <h4 className="m-0">{card?.name}</h4>
                <div className="card-text p-4 text-justify w-100">
                  {/* <p>{card?.content}</p> */}
                  <div dangerouslySetInnerHTML={{ __html: card.content }} />
                  {card?.rewards && <CardRewards rewards={card?.rewards} />}
                </div>
                {/* modal */}
                {/* Button trigger modal */}
                <button
                  type="button"
                  className="btn btn-danger bg-red-700 mr-2"
                >
                  <Link
                    to={"/apply"}
                    // href="tel:+91-7217667147"
                    style={{ color: "#fff", fontWeight: 500 }}
                    state={card}
                  >
                    <i
                      className="fas fa-phone-alt pr-2"
                      style={{ transform: "rotateY(180deg) translateX(10px)" }}
                    />
                    Apply Now
                  </Link>
                </button>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target={".bd-example-modal-lg" + ci}
                >
                  Know more
                </button> */}
              </div>
              {/* <div class="w-100"></div> */}
              {/* <div class="card-footer w-100 text-muted">
          FOOTER
      </div> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const CardRewards = ({ rewards }) => {
  return (
    <>
      <h5>Rewards</h5>
      <ul className="cards-list pl-3">
        {rewards?.map((reward, ri) => (
          <li key={ri}> {reward}</li>
        ))}
      </ul>
    </>
  );
};
export default CardList;
