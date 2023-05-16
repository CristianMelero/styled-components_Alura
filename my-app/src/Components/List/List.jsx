import React from "react";
import { Box, Btn } from "../UI";
import { lista } from "../../info";
import Card from "../Card";

const List = () => {
	return (
		<Box>
			{lista.cargos.map((datos, i) => {
				return (
					<Card datos={datos} key={i}>
						
					</Card>
				);
			})}
            <Btn>Ver más</Btn>

		</Box>
	);
};

export default List;
