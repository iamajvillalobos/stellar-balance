import React from "react";

function Footer() {
  const siteUrl = "http://iamajvillalobos.micro.blog/about/";
  const repoUrl = "https://github.com/iamajvillalobos/stellar-balance";

  return (
    <footer>
      <div className="container">
        <p>
          This project is not affiliated with Stellar. It is an{" "}
          <a href={repoUrl}>open-source project</a> created by{" "}
          <a target="_blank" rel="noopener noreferrer" href={siteUrl}>
            AJ Villalobos
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
