import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

const YellowSection = () => {
  return (
    <div>
      <NavBarContent>
        <h3>Fantastic Yellow</h3>
      </NavBarContent>
      <ColorRange>
        <CopyToClipboard text="#E8BD0D">
          <Wrap>
            <div style={{ backgroundColor: "#E8BD0D" }}></div>
            <h3>#E8BD0D</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#EDBF69">
          <Wrap>
            <div style={{ backgroundColor: "#EDBF69" }}></div>
            <h3>#EDBF69</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#F4BE2C">
          <Wrap>
            <div style={{ backgroundColor: "#F4BE2C" }}></div>
            <h3>#F4BE2C</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#EDC126">
          <Wrap>
            <div style={{ backgroundColor: "#EDC126" }}></div>
            <h3>#EDC126</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#E5D68A">
          <Wrap>
            <div style={{ backgroundColor: "#E5D68A" }}></div>
            <h3>#E5D68A</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#DDD101">
          <Wrap>
            <div style={{ backgroundColor: "#DDD101" }}></div>
            <h3>#DDD101</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#D9D55B">
          <Wrap>
            <div style={{ backgroundColor: "#D9D55B" }}></div>
            <h3>#D9D55B</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#F7CD2E">
          <Wrap>
            <div style={{ backgroundColor: "#F7CD2E" }}></div>
            <h3>#F7CD2E</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#AF9D5A">
          <Wrap>
            <div style={{ backgroundColor: "#AF9D5A" }}></div>
            <h3>#AF9D5A</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#C7C11A">
          <Wrap>
            <div style={{ backgroundColor: "#C7C11A" }}></div>
            <h3>#C7C11A</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#F4CE6A">
          <Wrap>
            <div style={{ backgroundColor: "#F4CE6A" }}></div>
            <h3>#F4CE6A</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#A77B06">
          <Wrap>
            <div style={{ backgroundColor: "#A77B06" }}></div>
            <h3>#A77B06</h3>
          </Wrap>
        </CopyToClipboard>
      </ColorRange>
    </div>
  );
};

export default YellowSection;

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
  /* margin-left: 20px; */
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
