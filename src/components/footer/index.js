import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="text-center row">
          <div className="col-md-12">
            <p>&copy; {new Date().getFullYear()} Trestle Academy Ghana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
