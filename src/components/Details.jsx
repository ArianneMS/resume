import styled from "styled-components";

const Details = () => {
  return (
    <Container>
      <Name>Arianne-Maria Savu</Name>
      <Title>Communicator, Marketer and PR-ist</Title>
      <ContactRow>
        <Contact>+40 733 827 150</Contact>
        <Contact>arianne.savu@gmail.com</Contact>
      </ContactRow>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 43px;
  margin-left: 58px;
`;

const Name = styled.span`
  color: #000;
  font-family: "Lato", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: bolder;
  line-height: 140%; /* 50.4px */

  padding-bottom: 6px;
`;

const Title = styled.span`
color: #000;
font-family: "Lato", sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 550;
line-height: 150%; /* 30px */
`;

const Contact = styled.span`
color: #0B0B0B;
font-family: "Lato", sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 550;
line-height: 150%; /* 21px */
`;

const ContactRow = styled.div`
display: flex;
flex-direction: row;
gap: 7px;
`;
