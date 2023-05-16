import React from "react";
import { styled } from "styled-components";
import ImagenPorTipo from "../../ImageFilter";

const CardStyle = styled.div`
	box-shadow: 4px 4px 20px 0px;
	border-radius: 10px;
	margin: 2px 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px;
	font-size: 12px;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	.type{
		font-weight: bold;
	}
`;

const Card =  ({ datos }) => {
	const { type, value, from, date } = datos;

	return (
		<CardStyle>
			{ImagenPorTipo(type)}
			<Info>
				<span className="type">{datos.type}</span>
				<span>{from}</span>
				<span>{value}</span>
			</Info>
			<span>{date}</span>
		</CardStyle>
	);
};

export default Card;