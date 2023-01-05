import React from "react";
import "./Spices.css";

const Bamboo = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "20vh",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          verticalAlign: "center",
          paddingTop: "45px",
        }}
      >
        <h1>Bamboo Handicrafts</h1>
      </div>
      <div
        className="about-block"
        style={{ width: "100%", minHeight: "40vh", backgroundColor: "white" }}
      >
        <div
          className="aboutBlock-left"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          <img
            src={"/Productsphoto/Handicrafts/BAMBOOhandicrafts/chair.jpg"}
            style={{ width: "90%", height: "90%" }}
          />
        </div>
        <div
          className="aboutBlock-right"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            paddingTop: "20px",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          <h2>Bamboo Handicrafts</h2>

          <p>
            A wide variety of products made in bamboo are, floor mats, beach
            mats, table mats, table runners, coasters, curtains, furniture,
            shoulder bags, purses, coin, jewelry, magazine holders, cutlery
            trays, fruit trays, boxes, bins, baskets, lamps, table watches,
            masks etc. Few of the famous products made at URAVU are the bamboo
            pen and bamboo rainmakers.
          </p>
        </div>
      </div>
      <button className="Spices-head">
        <h2>Bamboo Handicrafts</h2>
      </button>
      <div className="cards">
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/Handicrafts/BAMBOOhandicrafts/BAMBOO BANGLES.jpg"}
            alt=""
          />
        </div>

        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/Handicrafts/BAMBOOhandicrafts/BAMBOO PENS.png"}
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={
              "/Productsphoto/Handicrafts/BAMBOOhandicrafts/BI-Bamboo_Razor-2.0-01_1000x.png"
            }
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/Handicrafts/BAMBOOhandicrafts/COMB.png"}
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={
              "/Productsphoto/Handicrafts/BAMBOOhandicrafts/CUP.jpg"
            }
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/Handicrafts/BAMBOOhandicrafts/FLOWER POTS.jpg"}
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={
              "/Productsphoto/Handicrafts/BAMBOOhandicrafts/CURTAINS.jpg"
            }
            alt=""
          />
        </div>
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/Handicrafts/BAMBOOhandicrafts/BOTTLE.jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Bamboo;
