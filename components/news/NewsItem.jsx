import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { colors } from "../../config/theme";
import { StatusBar } from "expo-status-bar";

import StyledText from "../texts/StyledText";

const NewsItem = ({ image, avatar, author, title, date, ...props }) => {
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
						size={14}
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
		height: 370,
		width: 300,
		borderRadius: 25,
		marginRight: 20,
	},
	image: {
		width: 300,
		height: 190,
		borderRadius: 25,
	},
	bottomSection: {
		padding: 25,
		flex: 1,
		justifyContent: "space-between",
	},
	title: {
		fontSize: 19,
	},
	authorMain: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	author: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 25,
		flex: 3,
	},
	avatar: {
		width: 30,
		height: 30,
		borderRadius: 50,
		marginRight: 10,
	},
	date: {
		flex: 2,
	},
});

export default NewsItem;
