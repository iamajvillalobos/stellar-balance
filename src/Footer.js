import React from "react";

function Footer() {
  const reactUrl = "https://reactjs.org/";
  const siteUrl = "http://iamajvillalobos.micro.blog/about/";
  const repoUrl = "https://github.com/iamajvillalobos/stellar-balance";

  return (
    <footer>
      <div className="container">
        <p>
          This project is not affiliated with Stellar. It is an &nbsp;
          <a href={repoUrl}>open-source project</a> to showcase my learnings
          with <a href={reactUrl}>React</a>. Created by &nbsp;
          <a target="_blank" rel="noopener noreferrer" href={siteUrl}>
            AJ Villalobos
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
