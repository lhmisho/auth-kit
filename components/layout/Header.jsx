import React from "react";
import Head from "next/head";
import "../../style/styles.scss";

class Header extends React.Component{
  render(){
    return (
      <div>
        <Head>
          <title>Auth kit</title>
          <link rel="manifest" href="/public/manifest.json" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>
      </div>
    );
  }
}

export default Header;