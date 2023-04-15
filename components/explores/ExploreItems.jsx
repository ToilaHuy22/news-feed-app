import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { colors } from "../../config/theme";
import { StatusBar } from "expo-status-bar";

import StyledText from "../texts/StyledText";

const ExploreItems = ({ image, avatar, author, title, date, ...props }) => {
	let activeColors = colors;

	return (
		<TouchableOpacity
			style={[{ backgroundColor: activeColors.second }, styles.container]}
			{...props}
		>
			<Image source={image} style={styles.image} />
			<View style={styles.bottomSection}>
				<StyledText
					numberOfLines={3}
					style={[{ color: activeColors.accent }, styles.title]}
					bold
				>
					{title}
				</StyledText>

				<View style={styles.authorMain}>
					<View style={styles.author}>
						<Image source={avatar} style={styles.avatar} />
						<StyledText numberOfLines={2} bold>
							{author}
						</StyledText>
					</View>
					<StyledText
						style={[styles.date, { color: activeColors.tertiary }]}
						small
					>
						{date}
					</StyledText>
				</View>
			</View>
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
		fontSize: 19,
	},
	date: {
		flex: 2,
	},
});

export default ExploreItems;
