import React from 'react';
import styled from 'styled-components';

const BarsLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="bar" id="red" />
        <div className="bar" id="mint" />
        <div className="bar" id="grey" />
        <div className="bar" id="purple" />
        <div className="bar" id="red" />
        <div className="bar" id="mint" />
        <div className="bar" id="grey" />
        <div className="bar" id="red" />
        <div className="bar" id="mint" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
   display: flex;
   justify-content: center;
   align-content: center;
   align-items: center;
   gap: 15px;
   height: 80px;
   width: 100%;
  }

  .bar {
   width: 7px;
   height: 50px;
   border-radius: 10em;
   background-image: linear-gradient(60deg,rgb(24, 158, 211) 0%,rgb(9, 111, 136) 46%,rgb(2, 38, 49) 100%);
   background-size: 390%;
   animation: live 2s linear infinite;
  }

  @keyframes live {
   0%, 50%, 100% {
    transform: scaleY(1);
   }

   30%, 70% {
    background-position: right;
    transform: scaleY(1.15);
   }
  }`;

export default BarsLoader;
