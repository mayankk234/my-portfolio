import React from "react";
import styled from "styled-components";
import Image from "next/image";
import grauns from "../public/images/GRAUN.png";
import accenture from "../public/images/accenture_espana_logo.jpeg";
import acerko from "../public/images/covers_acerko.png";

const Card = () => {
  return (
    <StyledWrapper>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div style={{ display: "flex", justifyContent: "center" }} className="flex flex-col md:flex-row sm:row">
          <div className="card">
            <div className="imge">
              <div className="Usericon">
                <Image
                  src={grauns}
                  alt="grauns"
                  width={80}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <p className="UserName">Grauns LTD</p>
              <p className="Id">Work</p>
              <p className="Id2">01/03/2024 - Actual</p>
            </div>
            <div className="Description"></div>
          </div>
          <div className="card">
            <div className="imge">
              <div className="Usericon">
                <Image
                  src={accenture}
                  alt="grauns"
                  width={80}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <p
                className="UserName"
                style={{ color: "white", fontSize: "15px" }}
              >
                Accenture spain
              </p>
              <p className="Id">InternShip</p>
              <p className="Id2">06/01/2023 - 01/06/2023</p>
            </div>
            <div className="Description"></div>
          </div>
          <div className="card">
            <div className="imge">
              <div className="Usericon">
                <Image
                  src={acerko}
                  alt="grauns"
                  width={80}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <p
                className="UserName"
                style={{ color: "white", fontSize: "15px" }}
              >
                Acerko Telecom
              </p>
              <p className="Id">InternShip</p>
              <p className="Id2">01/10/2021 - 07/01/2022</p>
            </div>
            <div className="Description"></div>
          </div>
        </div>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 290px;
    height: 120px;
    background: rgb(38, 38, 38);
    box-shadow: 1px 1px 20px rgb(4, 201, 235);
    border-radius: 10px;
    margin: 15px;
    
    @media (max-width: 768px) {
      width: 260px;
      margin: 10px;
    }
    
    @media (max-width: 480px) {
      width: 240px;
      margin: 8px;
    }
  }
  
  .imge {
    height: 100px;
    background-color: rgb(4, 201, 235);
    border-radius: 10px;
  }

  .imge .Usericon {
    background-color: #414141;
    transform: translateX(10px) translateY(10px);
    width: 80px;
    height: 80px;
    border-radius: 10px;
    
    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
    }
  }

  .imge .UserName {
    background-color: transparent;
    width: 150px;
    height: 15px;
    border-width: 10px;
    border-radius: 5px;
    border-color: transparent;
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    transform: translateX(100px) translateY(-80px);
    
    @media (max-width: 480px) {
      transform: translateX(90px) translateY(-70px);
      font-size: 13px;
    }
  }

  .imge .Id {
    background-color: transparent;
    width: 120px;
    height: 15px;
    border-width: 10px;
    border-radius: 5px;
    border-color: transparent;
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    transform: translateX(100px) translateY(-74px);
    
    @media (max-width: 480px) {
      transform: translateX(90px) translateY(-64px);
      font-size: 13px;
    }
  }

  .imge .Id2 {
    background-color: transparent;
    width: 200px;
    height: 15px;
    border-width: 10px;
    border-radius: 5px;
    border-color: transparent;
    color: rgb(255, 255, 255);
    font-size: 13px;
    font-weight: bold;
    transform: translateX(100px) translateY(-66px);
    
    @media (max-width: 480px) {
      transform: translateX(90px) translateY(-56px);
      font-size: 11px;
    }
  }
`;

export default Card;
