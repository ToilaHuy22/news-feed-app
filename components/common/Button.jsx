import { StyleSheet, TouchableOpacity, View } from "react-native";
import StyledText from "../texts/StyledText";

import { colors } from "../../config/theme";

const Button = ({ title, sizeWidth, sizeHeight, align, titleSize, onPress }) => {
	return (
		<View style={{ flex: 1, alignItems: align }}>
			<TouchableOpacity
				style={[
					styles.container,
					{
						width: sizeWidth,
						height: sizeHeight,
						alignItems: "center",
					},
				]}
				onPress={onPress}
			>
				<StyledText style={styles.title} size={titleSize} bold>
					{title}
				</StyledText>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.accent,
		justifyContent: "center",
		borderRadius: 8,
	},
	title: {
		color: colors.primary,
	},
});

export default Button;
