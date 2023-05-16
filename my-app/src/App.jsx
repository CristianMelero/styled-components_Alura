import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";


function App() {
	const [tema, setTema] = useState(() => {
		const temaGuardado = localStorage.getItem("tema");
		return temaGuardado ? JSON.parse(temaGuardado) : true;
	});

	const toggleTema = () => {
		setTema((tema) => !tema);
		localStorage.setItem("tema", JSON.stringify(tema));
	};

	useEffect(() => {
		localStorage.setItem("tema", JSON.stringify(tema));
	}, [tema]);

	return (
		<ThemeProvider theme={tema ? temaClaro : temaOscuro}>
			<GlobalStyle />
			<BtnTema onClick={toggleTema}>
				<SwitcherTema tema={tema} />
			</BtnTema>
			<Header />
			<Container />
		</ThemeProvider>
	);
}

export default App;
