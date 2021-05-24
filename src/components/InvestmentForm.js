import React, { useState } from "react"
import styled from "styled-components"

const StepTitle = styled.span`
	color: var(--yellow);
	text-transform: uppercase;
	font-size: 2rem;
	text-decoration: underline;
`

const InterestForm = styled.form`
	margin-top: 3rem;
`

const InputLabel = styled.label`
	font-size: 2rem;
`

const FormInput = styled.input`
	border-radius: 0.5rem;
	border: none;
	padding: 0.3rem;
	box-shadow: 2px 2px 2px;
	max-width: 100px;
	margin: 0 0.5rem;
`

const FormSelect = styled.select`
	border-radius: 0.5rem;
	border: none;
	padding: 0.3rem;
	box-shadow: 2px 2px 2px;
	margin: 0 0.5rem;
`

const InvestmentForm = () => {
	const [formState, useFormState] = useState({
		initialInvestment: 0,
		contributionAmount: 0,
		contributionLengthInYears: 1,
		interestRate: 0,
		compoundFrequency: "daily",
		moneyEachYear: [],
	})

	const handleChange = (e) => {
		useFormState({ ...formState, [e.target.name]: e.target.value })
	}

	const calculateInterest = () => {
		const {
			initialInvestment,
			contributionAmount,
			contributionLengthInYears,
			interestRate,
			compoundFrequency,
		} = formState

		// How many times is the interest compounded in a year
		let compoundTimesPerYear
		switch (compoundFrequency) {
			case "daily":
				compoundTimesPerYear = 365
				break
			case "monthly":
				compoundTimesPerYear = 12
				break
			case "semiAnnually":
				compoundTimesPerYear = 2
				break
			case "annually":
				compoundTimesPerYear = 1
				break
			default:
				throw new Error(`Unhandled compound frequency ${compoundFrequency}`)
		}
		const interestRateDecimal = interestRate / 100

		const moneyEachYear = [parseInt(initialInvestment, 10)]
		for (let i = 0; i < contributionLengthInYears; i++) {
			const interestOnInitialCapital =
				moneyEachYear[i] *
				(1 + interestRateDecimal / compoundTimesPerYear) ** compoundTimesPerYear

			const interestOnContributions =
				contributionAmount *
				(((1 + interestRateDecimal / compoundTimesPerYear) **
					compoundTimesPerYear -
					1) /
					(interestRateDecimal / compoundTimesPerYear || 1))
			moneyEachYear.push(
				Math.round((interestOnInitialCapital + interestOnContributions) * 1e2) /
					1e2
			)
		}
		useFormState({ ...formState, moneyEachYear })
		return moneyEachYear
	}

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
						onChange={(e) => {
							if (e.target.value < 0) return
							handleChange(e)
						}}
					/>
				</InputLabel>
			</fieldset>
			<StepTitle>Step 2: Contribute</StepTitle>
			<fieldset>
				<span>
					<InputLabel htmlFor="contributionAmount">
						Monthly contribution
						<FormInput
							type="number"
							id="contributionAmount"
							name="contributionAmount"
							value={formState.contributionAmount}
							onChange={(e) => handleChange(e)}
							step="any"
						/>
					</InputLabel>
					<InputLabel htmlFor="contributionLengthInYears">
						Length of time in years
						<FormInput
							type="number"
							min="1"
							id="contributionLengthInYears"
							name="contributionLengthInYears"
							value={formState.contributionLengthInYears}
							onChange={(e) => {
								const value = parseInt(e.target.value, 10)
								if (!Number.isInteger(value) || value < 1) return
								handleChange(e)
							}}
						/>
					</InputLabel>
				</span>
			</fieldset>
			<StepTitle>Step 3: Interest</StepTitle>
			<fieldset>
				<InputLabel htmlFor="interestRate">
					Interest Rate
					<FormInput
						type="number"
						id="interestRate"
						name="interestRate"
						min="0"
						value={formState.interestRate}
						step="any"
						onChange={(e) => {
							if (e.target.value < 0) return
							handleChange(e)
						}}
					/>
				</InputLabel>
				<InputLabel htmlFor="compoundFrequency">
					Compound Frequency
					<FormSelect
						id="compoundFrequency"
						name="compoundFrequency"
						value={formState.compoundFrequency}
						onChange={(e) => handleChange(e)}
					>
						<option value="daily">Daily</option>
						<option value="monthly">Monthly</option>
						<option value="semiAnnually">Semi Annually</option>
						<option value="annually">Annually</option>
					</FormSelect>
				</InputLabel>
			</fieldset>
			<button type="button" onClick={() => calculateInterest()}>
				Calculate
			</button>
		</InterestForm>
	)
}

export default InvestmentForm
