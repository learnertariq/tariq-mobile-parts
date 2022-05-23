import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faMoneyCheck,
  faHeart,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const BusinessProfile = () => {
  return (
    <section className="container mx-auto my-24">
      <div className="business-profile-header text-center mt-12">
        <h2 className="text-4xl mb-3">Billions of Technicians Trust Us</h2>
        <h4 className="text-xl">We Provide You Most Value</h4>
      </div>
      <div className="divider w-1/2 mx-auto"></div>
      <div className="max-w-[800px] mx-auto">
        <div className="profile-features-container flex justify-center items-center flex-wrap gap-3">
          <div className="profile-feature flex flex-col gap-2 items-center bg-cyan-900 w-40 rounded-xl p-3">
            <FontAwesomeIcon
              className="text-accent text-6xl"
              icon={faPeopleGroup}
            />
            <h3 className="text-4xl font-bold">300+</h3>
            <div>Happy Customers</div>
          </div>
          <div className="profile-feature flex flex-col gap-2 items-center bg-cyan-900 w-40 rounded-xl p-3">
            <FontAwesomeIcon
              className="text-accent text-6xl"
              icon={faMoneyCheck}
            />
            <h3 className="text-4xl font-bold">73M+</h3>
            <div>Annual Revenue</div>
          </div>
          <div className="profile-feature flex flex-col gap-2 items-center bg-cyan-900 w-40 rounded-xl p-3">
            <FontAwesomeIcon className="text-accent text-6xl" icon={faHeart} />
            <h3 className="text-4xl font-bold">12k+</h3>
            <div>Reviews</div>
          </div>
          <div className="profile-feature flex flex-col gap-2 items-center bg-cyan-900 w-40 rounded-xl p-3">
            <FontAwesomeIcon
              className="text-accent text-6xl"
              icon={faScrewdriverWrench}
            />
            <h3 className="text-4xl font-bold">600+</h3>
            <div>Tools</div>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl image-full mx-0 md:mx-20 my-4">
          <div className="card-body">
            <div className="card-actions justify-center items-center">
              <p>We value your response</p>
              <button className="btn btn-primary">Explore Our Products</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProfile;
