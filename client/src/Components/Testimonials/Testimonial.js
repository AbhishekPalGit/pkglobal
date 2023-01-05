import React from "react";
import "./Testimonial.css";
import { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
const Testimonial = () => {
  const [first, setfirst] = useState(0);

  const next = function () {
    if (first < 17) {
      document.getElementsByClassName("testimonial-box")[first].style.width =
        "0%";
      setfirst(first + 1);
      console.log(first);
    }
  };
  const previous = function () {
    if (first > 0) {
      document.getElementsByClassName("testimonial-box")[first].style.width =
        "0%";
      setfirst(first - 1);
      console.log(first);
    }
  };

  useEffect(() => {
    document.getElementsByClassName("testimonial-box")[first].style.width =
      "100%";
  }, [first]);
  return (
    <div id="review" style={{ backgroundColor: "white" }}>
      <button className="testimonial-head">
        <h2>Testimonials </h2>
      </button>
      <div className="testimonial-main">
        <BsFillArrowLeftCircleFill
          size={50}
          onClick={previous}
          style={{ marginTop: "75px" }}
        />
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194337.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Arav</h4>
          <h4 style={{ color: "green" }}> Arav Crafts </h4>

          <p>
            The reason I am giving PK global overseas as 5 star because I was
            stucked in export documentation and lots of process but than they
            came as saviour.{" "}
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194351.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Mohammed</h4>
          <h4 style={{ color: "green" }}> Mohammed Stone Work </h4>

          <p>
            They handle all my export products so well that I don’t believe
            import and export work can be filled so easily.
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194407.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Vihaan</h4>
          <h4 style={{ color: "green" }}> Krishna Ceramics </h4>

          <p>
            All products delivered and handled well. One stop solution for all
            importer and exporter .
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194420.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />{" "}
          .
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Aditya</h4>
          <h4 style={{ color: "green" }}> maa Jwellery </h4>
          <p>
            We regularly import all imitation jewellery from India on regular
            basis . This was made easy because of Pk Global Overseas. They
            handle major export and imports for and from India .
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194432.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Sai</h4>
          <h4 style={{ color: "green" }}> Sai Cups </h4>

          <p>
            Beat import export process easily with Pk global overseas.They take
            care for all procedure and make things easy to understand for you .
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194444.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Arjun</h4>
          <h4 style={{ color: "green" }}> Kumar Baskets </h4>

          <p>
            PK GLOBAL OVERSEAS is my regular supplier of fruits and vegetables.
            The quality i get is the best in reasonable prices.
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194457.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Aryan</h4>
          <h4 style={{ color: "green" }}>sharma saree store</h4>

          <p>Thank you Pk global Overseas for hassle free export procedure.</p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194510.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Vivaan</h4>
          <h4 style={{ color: "green" }}> vivaan marbles </h4>

          <p>
            Greeting from Italy . Thank you PK Global overseas for immense
            support for my new project for import. You made our work so easy
            from vendor to settling down price and negotiation to supplier.
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194521.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Krishna</h4>
          <h4 style={{ color: "green" }}> JK carving</h4>

          <p>
            I was completely stuck export procedure and heavy price .Than my
            friend referred me to PK Global Overseas and now I am exporting my
            major CARVING india to Indonesia .
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194533.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Atharv</h4>
          <h4 style={{ color: "green" }}>HK manufacturer </h4>

          <p>
          Importing good from India since years. Never face any complications while importing good from India to Turkey.
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194543.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Tanish Khan</h4>
          <h4 style={{ color: "green" }}>Tanish Clothing </h4>

          <p>
          I never understood the meaning of import and export clearly. But Pk Global overseas has made exporting goods as easy as sharing details on whatsapp. 

          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194556.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Ishan</h4>
          <h4 style={{ color: "green" }}> Ishan jwellery </h4>

          <p>
          hank you so much PK Global  for taking over my import and export procedure in your hand as it very hard job to follow the loop of duties.but all thanks to your team !  
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194613.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Dhruv</h4>
          <h4 style={{ color: "green" }}> DN ceramic </h4>

          <p>
          Good import and export agency I ever met !!!

          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194624.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Ryan</h4>
          <h4 style={{ color: "green" }}>Ryan threads </h4>

          <p>
          The more you work with them , the better you get results for you Investment on Export programme. 

          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194634.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Arnav</h4>
          <h4 style={{ color: "green" }}>Arnav inlay work </h4>

          <p>
          When I visited there office , they consulted me with adequate import and export policy of India step by step and helped me to setup my work at global market ! 
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194644.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Shaurya</h4>
          <h4 style={{ color: "green" }}> Bholenath Marbles  </h4>

          <p>
          Timely execution of delivery and very professional .
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194733.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Kabir</h4>
          <h4 style={{ color: "green" }}>Kabir furniture </h4>

          <p>
          Fast and reliable service
          </p>
        </div>
        <div className="testimonial-box">
          <img
            src="/testimonial/IMG_20221206_194840.jpg"
            alt="Avatar"
            style={{ width: "90px" }}
          />
          <h3 style={{ color: "orange" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </h3>
          <h4>Aarush</h4>
          <h4 style={{ color: "green" }}> Aarush Pearl</h4>

          <p>
          My team would love to appreciate the efforts made by PK global overseas management . We certainly look forward to have more projects under your management. 
          </p>
        </div>
        
        <BsFillArrowRightCircleFill
          size={50}
          onClick={next}
          style={{ marginTop: "75px" }}
        />
      </div>
    </div>
  );
};

export default Testimonial;
