import * as React from "react"

const MoneyContext = React.createContext()

// eslint-disable-next-line react/prop-types
function MoneyProvider({ children }) {
	const [data] = React.useState([])
	return <MoneyContext.Provider value={data}>{children}</MoneyContext.Provider>
}

function useMoney() {
	const context = React.useContext(MoneyContext)
	if (context === undefined)
		throw new Error("useMoney mush be used with a MoneyProvider")
	return context
}

export { MoneyProvider, useMoney }
