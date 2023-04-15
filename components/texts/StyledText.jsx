import { Text, StyleSheet } from "react-native";
import { colors } from "../../config/theme";

const StyledText = ({ children, style, small, normal, size, bold, ...props }) => {
	let activeColors = colors;

	return (
		<Text
			style={[
				{
					color: activeColors.tint,
					fontSize: size,
					fontWeight: bold || normal ? "bold" : "normal",
				},
				style,
			]}
			{...props}
		>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default StyledText;
