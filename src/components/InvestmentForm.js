import React, { useState } from "react";
import styled from "styled-components";

const StepTitle = styled.span`
  color: var(--yellow);
  text-transform: uppercase;
  font-size: 2rem;
  text-decoration: underline;
`;

const InterestForm = styled.form`
  margin-top: 3rem;
`;

const InputLabel = styled.label`
  font-size: 2rem;
`;

const FormInput = styled.input`
  border-radius: 0.5rem;
  border: none;
  padding: 0.3rem;
  box-shadow: 2px 2px 2px;
`;

const FormSelect = styled.select`
  border-radius: 0.5rem;
  border: none;
  padding: 0.3rem;
  box-shadow: 2px 2px 2px;
`;

const InvestmentForm = () => {
  const [formState, useFormState] = useState({
    initialInvestment: 0,
    contributionAmount: 0,
    contributionIntervalNumber: 1,
    contributionIntervalSelect: "months",
  });

  const handleChange = (e) => {
    useFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <InterestForm>
      <StepTitle>Step 1: Initial investment</StepTitle>
      <fieldset>
        <InputLabel htmlFor="initialInvestment">
          Initial Investment
          <FormInput
            type="number"
            id="initialInvestment"
            name="initialInvestment"
            min="0"
            value={formState.initialInvestment}
            step="any"
            onChange={(e) => handleChange(e)}
          />
        </InputLabel>
      </fieldset>
      <StepTitle>Step 2: Contribute</StepTitle>
      <fieldset>
        <span>
          I plan to contribute/withdraw
          <FormInput type="number" value="0" step="any" />
          every
          <FormInput type="number" min="1" value="1" />
          <FormSelect id="contributionFrequency" name="contributionFrequency">
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
          </FormSelect>
        </span>
      </fieldset>
    </InterestForm>
  );
};

export default InvestmentForm;
