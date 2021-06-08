import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

const GreenSection = () => {
  return (
    <div>
      <NavBarContent>
        <h3>Fantastic Green</h3>
      </NavBarContent>
      <ColorRange>
        <CopyToClipboard text="#1FAA59">
          <Wrap>
            <div style={{ backgroundColor: "#1FAA59" }}></div>
            <h3>#1FAA59</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#38CC77">
          <Wrap>
            <div style={{ backgroundColor: "#38CC77" }}></div>
            <h3>#38CC77</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#02B290">
          <Wrap>
            <div style={{ backgroundColor: "#02B290" }}></div>
            <h3>#02B290</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#50DBB4">
          <Wrap>
            <div style={{ backgroundColor: "#50DBB4" }}></div>
            <h3>#50DBB4</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#3DBE29">
          <Wrap>
            <div style={{ backgroundColor: "#3DBE29" }}></div>
            <h3>#3DBE29</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#4DD637">
          <Wrap>
            <div style={{ backgroundColor: "#4DD637" }}></div>
            <h3>#4DD637</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#1C8D73">
          <Wrap>
            <div style={{ backgroundColor: "#1C8D73" }}></div>
            <h3>#1C8D73</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#66AD47">
          <Wrap>
            <div style={{ backgroundColor: "#66AD47" }}></div>
            <h3>#66AD47</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#6EC72D">
          <Wrap>
            <div style={{ backgroundColor: "#6EC72D" }}></div>
            <h3>#6EC72D</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#6AC47E">
          <Wrap>
            <div style={{ backgroundColor: "#6AC47E" }}></div>
            <h3>#6AC47E</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#22CB5C">
          <Wrap>
            <div style={{ backgroundColor: "#22CB5C" }}></div>
            <h3>#22CB5C</h3>
          </Wrap>
        </CopyToClipboard>
        <CopyToClipboard text="#00D84A">
          <Wrap>
            <div style={{ backgroundColor: "#00D84A" }}></div>
            <h3>#00D84A</h3>
          </Wrap>
        </CopyToClipboard>
      </ColorRange>
    </div>
  );
};

export default GreenSection;

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
  @media only screen and (max-width: 1085px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media only screen and (max-width: 599px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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
