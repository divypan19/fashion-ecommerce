import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            At MyCart, we respect your privacy and are committed to protecting
            it through our compliance with this policy. This policy describes
            the types of information we may collect from you or that you may
            provide when you visit our website and our practices for collecting,
            using, maintaining, protecting, and disclosing that information.
          </p>
          <hr />
          <p>
            We collect several types of information from and about users of our
            website, including information:
            <br /> - By which you may be personally identified, such as name,
            postal address, e-mail address, telephone number, etc.
            <br /> - About your internet connection, the equipment you use to
            access our website, and usage details.
          </p>
          {/* <p>add privacy policy</p> */}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
