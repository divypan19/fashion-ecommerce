import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - MyCart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            MyCart is a leading online fashion platform, offering an extensive
            range of products from top international and local brands. We are
            committed to delivering a seamless and enjoyable shopping experience
            for fashion enthusiasts across the globe.
            <hr />
            We believe fashion is a form of self-expression and we strive to
            make it accessible to everyone, regardless of their location or
            budget.
            
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
