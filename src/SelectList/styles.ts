import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	inputStyle: {
		flexDirection: "row",
		borderWidth: 1,
		padding: 10,
		alignItems: "center",
		borderColor: "#DEDEDE",
		borderRadius: 5,
		justifyContent: "space-between",
	},
	inputValueStyle: {
		fontWeight: "400",
		flex: 1,
	},
	sectionItemStyle: {
		borderBottomWidth: 1.5,
		borderColor: "#F4F4F4",
		padding: 12,
	},
	sectionItemTextStyle: {
		fontWeight: "400",
	},
	sectionHeaderStyle: {
		padding: 12,
		borderColor: "#DEDEDE",
		borderBottomWidth: 1,
		fontWeight: "600",
	},
	sectionHeaderTextStyle: {
		fontSize: 16,
		fontWeight: "600",
	},
});

export default styles;