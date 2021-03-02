import * as React from "react";
import styled from "styled-components";
import InvestmentForm from "../components/InvestmentForm";

const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
`;

const IndexPage = () => {
  return (
    <>
      <Title>Compound interest calculator</Title>
      <main>
        <InvestmentForm />
      </main>
    </>
  );
};

export default IndexPage;
