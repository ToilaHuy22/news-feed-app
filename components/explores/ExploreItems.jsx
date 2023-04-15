import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { colors } from "../../config/theme";
import StyledText from "../texts/StyledText";

const ExploreItems = ({ image, title, ...props }) => {
	return (
		<TouchableOpacity
			onPress={() => alert(title)}
			style={[styles.container]}
			{...props}
		>
			<Image source={image} style={[styles.image, StyleSheet.absoluteFill]} />
			<StyledText style={styles.title} bold>
				{title}
			</StyledText>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 120,
		width: 120,
		borderRadius: 25,
		marginRight: 20,
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 25,
	},
	title: {
		borderRadius: 25,
		fontSize: 19,
		color: colors.primary,
		height: "100%",
		width: "100%",
		textAlign: "center",
		textAlignVertical: "center",
		backgroundColor: "#0003",
		// borderWidth: 4,
		borderColor: colors.accent,
	},
});

export default ExploreItems;
