import * as React from "react"
import styled from "styled-components"
import InvestmentForm from "../components/InvestmentForm"
import InvestmentGraph from "../components/InvestmentGraph"

const Title = styled.h1`
	text-align: center;
	text-transform: capitalize;
`

const IndexPage = () => {
	const test = [1, 10, 100, 1000]
	return (
		<>
			<Title>Compound interest calculator</Title>
			<main>
				<InvestmentForm />
				<InvestmentGraph dataPerYear={test} />
			</main>
		</>
	)
}

export default IndexPage
