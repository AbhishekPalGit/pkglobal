import React from "react";
import "./Spices.css";
import Metal from "./Metal";
import Textile from './Textile'
import Wooden from './Wooden'
import Bamboo from './Bamboo'

const Handicraft = () => {
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
        <h1>Handicrafts</h1>
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
            src={"/HeadImg/HANDICRAFTS CATEGORY PHOTO.jpg"}
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
          <h2>About Handicrafts</h2>

          <p>
            Handicraft is a type of craft where people make things using only
            their hands or basic tools. The items are usually decorative and
            have a particular use. The amount of skill, patience and precision
            that goes into the making of these beautiful pieces is commendable.
            the handicrafts of India have been loved and respected worldwide and
            have left everyone awestruck
          </p>
        </div>
      </div>
      {/* <button className="Spices-head">
        <h2>Ceramic Handicrafts</h2>
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
            src={
              "/Productsphoto/Handicrafts/CERAMIChandicrafts/121845019_3338688846199174_8258363931664769875_n.jpg"
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
            src={"/Productsphoto/Handicrafts/CERAMIChandicrafts/290277559_5368020866574744_9073934735131951138_n.jpg"}
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
              "/Productsphoto/Handicrafts/CERAMIChandicrafts/310154337_5708897395820421_154286340664332030_n.jpg"
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
            src={
              "/Productsphoto/Handicrafts/CERAMIChandicrafts/316819155_5803241353052691_9026745328047799991_n.jpg"
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
            src={"/Productsphoto/Handicrafts/CERAMIChandicrafts/317440412_5811898558853637_4488472212150361468_n.jpg"}
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
              "/Productsphoto/Handicrafts/CERAMIChandicrafts/britta-preusse-p7KKwjP3s68-unsplash.jpg"
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
            src={
              "/Productsphoto/Handicrafts/CERAMIChandicrafts/eniko-kis-L0g_gTN8l_A-unsplash.jpg"
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
            src={
              "/Productsphoto/Handicrafts/CERAMIChandicrafts/irene-strong-SQEP7N858_E-unsplash.jpg"
            }
            alt=""
          />
        </div>
      </div>
      <button className="Spices-head">
        <h2>Leather Handicrafts</h2>
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
            src={
              "/Productsphoto/Handicrafts/Leather handicrafts/AnyConv.com__leather-goods-500x500.png"
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
            src={"/Productsphoto/Handicrafts/Leather handicrafts/isabella-and-zsa-fischer-swBNkVR9N0o-unsplash.jpg"}
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
              "/Productsphoto/Handicrafts/Leather handicrafts/mostafa-mahmoudi-3OZr-hLbsq0-unsplash.jpg"
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
            src={
              "/Productsphoto/Handicrafts/Leather handicrafts/verity-sanders-q4ExhrHaSLY-unsplash.jpg"
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
            src={"/Productsphoto/Handicrafts/Leather handicrafts/julius-drost-GTmLKWZzZuo-unsplash.jpg"}
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
              "/Productsphoto/Handicrafts/Leather handicrafts/shoe-bag-leather-goods-sandal.jpg"
            }
            alt=""
          />
        </div>
        
      </div> */}
      <button className="Spices-head">
        <h2>Stone Handicrafts</h2>
      </button>
      <div style={{textAlign:"center",textDecoration:"none",color:"grey",marginTop:"10px"}}><h2>- Table Top -</h2></div>
      <div className="cards">
   
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/stoneCraft/TABLE TOP/Walnut Table With White Epoxy Resin.jpeg"}
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
              "/Productsphoto/stoneCraft/TABLE TOP/OCTA BLACK MARBLE INLAY TABLE TOP.jpeg"
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
            src={"/Productsphoto/stoneCraft/TABLE TOP/OCTA MARBLE INLAY TABLE TOP.jpeg"}
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
              "/Productsphoto/stoneCraft/TABLE TOP/Table Top Archives - Marble Inlay Handicraft Products.png"
            }
            alt=""
          />
        </div>
        
      </div>
      {/* //// */}
      <div style={{textAlign:"center",textDecoration:"none",color:"grey"}}><h2>- Storage Boxes -</h2></div>
      <div className="cards">
      
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/stoneCraft/STORAGE BOXES/MARBLE INLAY BOX.jpeg"}
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
              "/Productsphoto/stoneCraft/STORAGE BOXES/Marble Inlay Jewelry Box.png"
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
            src={"/Productsphoto/stoneCraft/STORAGE BOXES/Marble Lidded Box.jpeg"}
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
              "/Productsphoto/stoneCraft/STORAGE BOXES/Marble Marquetry Inlay Jewelry Storage Box.jpeg"
            }
            alt=""
          />
        </div>
        
      </div>
      {/* /////// 33333 */}
      <div style={{textAlign:"center",textDecoration:"none",color:"grey"}}><h2>- Kitchen Accesories -</h2></div>
      <div className="cards">
        
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/stoneCraft/KITCHEN ACCESORIES/Marble Fruit Bowl.jpeg"}
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
              "/Productsphoto/stoneCraft/KITCHEN ACCESORIES/Marble Inlay Round Plate.png"
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
            src={"/Productsphoto/stoneCraft/KITCHEN ACCESORIES/Marble Pantryware.jpeg"}
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
              "/Productsphoto/stoneCraft/KITCHEN ACCESORIES/Marble serving boards and canisters.jpeg"
            }
            alt=""
          />
        </div>
        
      </div>
      {/* //// 4444*/}
      <div style={{textAlign:"center",textDecoration:"none",color:"grey"}}><h2>- Decoratives -</h2></div>
      <div className="cards">
      
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/stoneCraft/DECORATIVES/Ashtray.jpeg"}
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
              "/Productsphoto/stoneCraft/DECORATIVES/CANDLE HOLDER.jpg"
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
            src={"/Productsphoto/stoneCraft/DECORATIVES/FLOWER POT.png"}
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
              "/Productsphoto/stoneCraft/DECORATIVES/LAMP.jpg"
            }
            alt=""
          />
        </div>
        
      </div>
      {/* //////5555 */}
      <div style={{textAlign:"center",textDecoration:"none",color:"grey"}}><h2>- Coaster -</h2></div>
      <div className="cards">
       
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/stoneCraft/COASTER/INLAY COASTER.jpg"}
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
              "/Productsphoto/stoneCraft/COASTER/MARBLE WITH WOODEN COASTER.jpeg"
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
            src={"/Productsphoto/stoneCraft/COASTER/ROUNDED COASTER.jpeg"}
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
              "/Productsphoto/stoneCraft/COASTER/STAR SHAPE Marble Coasters.jpeg"
            }
            alt=""
          />
        </div>
        
      </div>
      {/* ///////6666 */}
      <div style={{textAlign:"center",textDecoration:"none",color:"grey"}}><h2>- Chess -</h2></div>
      <div className="cards">
        
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/stoneCraft/CHESS/Chess Table Green Marble.jpeg"}
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
              "/Productsphoto/stoneCraft/CHESS/Marble INLAY Chess Board.jpeg"
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
            src={"/Productsphoto/stoneCraft/CHESS/OCTAGONAL CHESS.jpeg"}
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
              "/Productsphoto/stoneCraft/CHESS/OCTAGONAL Marble Inlay Chess Board.jpeg"
            }
            alt=""
          />
        </div>
        
      </div>
      {/* ////77777 */}
      <div style={{textAlign:"center",textDecoration:"none",color:"grey"}}><h2>- Bathroom Accesories -</h2></div>
      <div className="cards">
       
        <div className="card">
          <img
            className="card__image"
            style={{
              border: "2px solid #ebb4b4",
              padding: "20px",
              borderRadius: "4px",
            }}
            src={"/Productsphoto/stoneCraft/BATHROOM ACCESORIES/Bath Accessories.jpeg"}
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
              "/Productsphoto/stoneCraft/BATHROOM ACCESORIES/SOAP DISH.jpeg"
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
            src={"/Productsphoto/stoneCraft/BATHROOM ACCESORIES/SOAP DISPENSER.jpeg"}
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
              "/Productsphoto/stoneCraft/BATHROOM ACCESORIES/TOOTHBRUSH HOLDER.jpeg"
            }
            alt=""
          />
        </div>
        
      </div>
      {/* <button className="Spices-head">
        <h2>Imitation Jwellary Handicrafts</h2>
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
            src={
              "/Productsphoto/Handicrafts/imitation jwellery handicrafts/pexels-harry-cooke-6805687.jpg"
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
            src={"/Productsphoto/Handicrafts/imitation jwellery handicrafts/307035176_5610236852353143_2256691317643243184_n.jpg"}
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
              "/Productsphoto/Handicrafts/imitation jwellery handicrafts/FB_IMG_1667808136336.jpg"
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
            src={
              "/Productsphoto/Handicrafts/imitation jwellery handicrafts/FB_IMG_1667808140963.jpg"
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
            src={"/Productsphoto/Handicrafts/imitation jwellery handicrafts/FB_IMG_1667808119231.jpg"}
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
              "/Productsphoto/Handicrafts/imitation jwellery handicrafts/courtney-rose-35yy-0cwIMw-unsplash.jpg"
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
            src={"/Productsphoto/Handicrafts/imitation jwellery handicrafts/301271397_5580068775369951_7701048780298385140_n.jpg"}
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
              "/Productsphoto/Handicrafts/imitation jwellery handicrafts/260249069_4690473247662846_9056520566169778297_n.png"
            }
            alt=""
          />
        </div>
        
        
      </div> */}
      {/* <Metal/>
      <Textile/> */}
      <Wooden/>
      <Bamboo/>

    </div>
  );
};

export default Handicraft;
