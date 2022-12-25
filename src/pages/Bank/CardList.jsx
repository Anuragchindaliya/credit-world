import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const CardList = ({ bankId }) => {
  const { isLoading, data } = useQuery(
    ["card", bankId],
    () => {
      return axios.get(`http://localhost:5000/cards?bankId=${bankId}`);
    },
    {
      enabled: !!bankId,
      staleTime: 1000 * 60 * 30,
    }
  );
  if (isLoading) {
    return <div>Cards Loading...</div>;
  }
  const cardDetails = data?.data?.cards;
  if (!cardDetails?.length) {
    return (
      <div className="container " style={{ textAlign: "center" }}>
        <h6>Can't find cards</h6>
      </div>
    );
  }
  console.log({ cardDetails });
  return (
    <section>
      <div className="container all-cards mb-70">
        {/* first card start from here*/}
        {cardDetails?.map((card, ci) => {
          return (
            <div key={ci} className="card  single-card">
              <div className="card-header border-0 col-lg-3">
                <img
                  className="text-center"
                  src={card?.img}
                  alt={data?.name}
                  title={data?.name}
                />
              </div>
              <div className="card-block p-4 col-lg-9">
                <h4 className="card-title">{card?.name}</h4>
                <div className="card-text p-4 text-justify w-100">
                  <p>{card?.content}</p>
                  {card?.rewards && <CardRewards rewards={card?.rewards} />}
                </div>
                {/* modal */}
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary mr-2">
                  <Link
                    to={"/apply"}
                    // href="tel:+91-7217667147"
                    style={{ color: "#fff", fontWeight: 500 }}
                    state={card}
                  >
                    <i className="fas fa-phone-alt pr-2" />
                    Apply
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
