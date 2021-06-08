import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

const RedSection = () => {
  return (
    <div>
      <NavBarContent>
        <h3>Fantastic Red</h3>
      </NavBarContent>
      <ColorRange>
        <CopyToClipboard text="#FF6263">
          <Wrap>
            <div style={{ backgroundColor: "#FF6263" }}></div>
            <h3>#FF6263</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#DE4839">
          <Wrap>
            <div style={{ backgroundColor: "#DE4839" }}></div>
            <h3>#DE4839</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#BF3325">
          <Wrap>
            <div style={{ backgroundColor: "#BF3325" }}></div>
            <h3>#BF3325</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#E21717">
          <Wrap>
            <div style={{ backgroundColor: "#E21717" }}></div>
            <h3>#E21717</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#BF3312">
          <Wrap>
            <div style={{ backgroundColor: "#BF3312" }}></div>
            <h3>#BF3312</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#D82E2F">
          <Wrap>
            <div style={{ backgroundColor: "#D82E2F" }}></div>
            <h3>#D82E2F</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#EB4D4B">
          <Wrap>
            <div style={{ backgroundColor: "#EB4D4B" }}></div>
            <h3>#EB4D4B</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#EF5354">
          <Wrap>
            <div style={{ backgroundColor: "#EF5354" }}></div>
            <h3>#EF5354</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#B4161B">
          <Wrap>
            <div style={{ backgroundColor: "#B4161B" }}></div>
            <h3>#B4161B</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#E6425E">
          <Wrap>
            <div style={{ backgroundColor: "#E6425E" }}></div>
            <h3>#E6425E</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#E83A59">
          <Wrap>
            <div style={{ backgroundColor: "#E83A59" }}></div>
            <h3>#E83A59</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#B9345A">
          <Wrap>
            <div style={{ backgroundColor: "#B9345A" }}></div>
            <h3>#B9345A</h3>
          </Wrap>
        </CopyToClipboard>
      </ColorRange>
    </div>
  );
};

export default RedSection;

const NavBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #1c1c1c;

  margin-bottom: 20px;

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
  justify-content: space-between;
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
