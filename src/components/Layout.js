import React from "react"
import "@fontsource/fira-sans"
import GlobalStyles from "../styles/GlobalStyles"
import "normalize.css"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	return (
		<>
			<GlobalStyles />
			{children}
		</>
	)
}

export default Layout
