import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

const BlueSection = () => {
  return (
    <div>
      <NavBarContent>
        <h3>Fantastic Blue</h3>
      </NavBarContent>
      <ColorRange>
        <CopyToClipboard text="#1B98F5">
          <Wrap>
            <div style={{ backgroundColor: "#1B98F5" }}></div>
            <h3>#1B98F5</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#23C4ED">
          <Wrap>
            <div style={{ backgroundColor: "#23C4ED" }}></div>
            <h3>#23C4ED</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#383CC1">
          <Wrap>
            <div style={{ backgroundColor: "#383CC1" }}></div>
            <h3>#383CC1</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#12B0E8">
          <Wrap>
            <div style={{ backgroundColor: "#12B0E8" }}></div>
            <h3>#12B0E8</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#51E1ED">
          <Wrap>
            <div style={{ backgroundColor: "#51E1ED" }}></div>
            <h3>#51E1ED</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#207398">
          <Wrap>
            <div style={{ backgroundColor: "#207398" }}></div>
            <h3>#207398</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#46B2E0">
          <Wrap>
            <div style={{ backgroundColor: "#46B2E0" }}></div>
            <h3>#46B2E0</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#3944F7">
          <Wrap>
            <div style={{ backgroundColor: "#3944F7" }}></div>
            <h3>#3944F7</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#2827CC">
          <Wrap>
            <div style={{ backgroundColor: "#2827CC" }}></div>
            <h3>#2827CC</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#120E43">
          <Wrap>
            <div style={{ backgroundColor: "#120E43" }}></div>
            <h3>#120E43</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#5DA3FA">
          <Wrap>
            <div style={{ backgroundColor: "#5DA3FA" }}></div>
            <h3>#5DA3FA</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#03203C">
          <Wrap>
            <div style={{ backgroundColor: "#03203C" }}></div>
            <h3>#03203C</h3>
          </Wrap>
        </CopyToClipboard>
      </ColorRange>
    </div>
  );
};

export default BlueSection;

const NavBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #1c1c1c;
  height: min-content;
  margin-bottom: 10px;

  h3 {
    font-size: 32px;
    font-weight: 400;
    padding-left: 12px;
    color: #cecaca;
  }
`;

const ColorRange = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  overflow: hidden;
  margin-bottom: 25px;
  text-align: center;
  align-items: center;
  /* margin-left: 25px; */
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  div {
    width: 192px;
    height: 307px;
    border-radius: 10px;
    text-align: center;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      transform: scale(1.05);
    }
  }

  h3 {
    text-align: center;
    color: #cccccc;
    margin-top: 2px;
  }
`;
