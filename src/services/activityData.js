import { BsStar } from "react-icons/bs";
import { BiCycling } from "react-icons/bi";
import { IoMdFitness } from "react-icons/io";
import {
	MdSportsSoccer,
	MdSportsBasketball,
	MdSportsGolf,
	MdSportsMma,
	MdSportsTennis,
	MdSportsVolleyball,
} from "react-icons/md";

const initial_icon = [
	{
		id: 1,
		value: "Cycling",
		icon: <BiCycling />,
	},
	{
		id: 2,
		value: "Basketball",
		icon: <MdSportsBasketball />,
	},
	{
		id: 3,
		value: "Golf",
		icon: <MdSportsGolf />,
	},
	{
		id: 4,
		value: "Boxing",
		icon: <MdSportsMma />,
	},
	{
		id: 5,
		value: "Tennis",
		icon: <MdSportsTennis />,
	},
	{
		id: 6,
		value: "Fitness",
		icon: <IoMdFitness />,
	},
	{
		id: 7,
		value: "Volleyball",
		icon: <MdSportsVolleyball />,
	},
	{
		id: 8,
		value: "Football",
		icon: <MdSportsSoccer />,
	},
	{
		id: 9,
		value: "Other",
		icon: <BsStar />,
	},
];

export { initial_icon };
