import React from "react";

const BusinessProfile = () => {
  return (
    <section className="container mx-auto my-24">
      <div className="business-profile-header text-center mt-12">
        <h2 className="text-4xl mb-3">Billions of Technicians Trust Us</h2>
        <h4 className="text-xl">We Provide You Most Value</h4>
      </div>
      <div class="divider w-1/2 mx-auto"></div>
      <div className="max-w-[800px] mx-auto">
        <div className="profile-features-container flex justify-center items-center flex-wrap gap-3">
          <div className="profile-feature flex flex-col gap-2 items-center bg-cyan-900 w-40 rounded-xl p-3">
            <h3 className="text-4xl font-bold">73</h3>
            <div>Countries</div>
          </div>
          <div className="profile-feature flex flex-col gap-2 items-center bg-cyan-900 w-40 rounded-xl p-3">
            <h3 className="text-4xl font-bold">723+</h3>
            <div>Happy Clients</div>
          </div>
          <div className="profile-feature flex flex-col gap-2 items-center bg-cyan-900 w-40 rounded-xl p-3">
            <h3 className="text-4xl font-bold">1200+</h3>
            <div>Feedbacks</div>
          </div>
          <div className="profile-feature flex flex-col gap-2 items-center bg-cyan-900 w-40 rounded-xl p-3">
            <h3 className="text-4xl font-bold">600+</h3>
            <div>Projects</div>
          </div>
        </div>

        <div class="card  bg-base-100 shadow-xl image-full mx-0 md:mx-20 my-4">
          <div class="card-body">
            <div class="card-actions justify-center items-center">
              <p>We value your response</p>
              <button class="btn btn-primary">Explore Our Products</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProfile;
