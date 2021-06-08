import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderContent>
        <h2>Best UI Colors</h2>
        <h2>#Stay Attractive</h2>
      </HeaderContent>
      <BannerContent>
        <h1>Click to Copy</h1>
        <h3>Always Perfect color</h3>
      </BannerContent>
    </div>
  );
};

export default Header;

const HeaderContent = styled.div`
  width: 100%;
  height: 80px;
  background-color: #1c1c1c;
  padding: 10px;
  color: #cccccc;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`;

const BannerContent = styled.div`
  width: 100%;
  height: 145px;
  background-color: #1c1c1c;
  text-align: center;
  color: #cccccc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  h1 {
    font-weight: 500;
    font-size: 60px;
    margin-top: 0px;
  }
  h3 {
    font-size: 32px;
    font-weight: 400;
    margin-top: -25px;
  }
`;
