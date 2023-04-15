import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

//components
import MainContainer from "../components/containers/MainContainer";
import StyledText from "../components/texts/StyledText";
import NewsSection from "../components/news/NewsSection";
import ExploreSection from "../components/explores/ExploreSection";
import ShowMore from "../components/common/ShowMore";

import { colors } from "../config/theme";

//datafake
import { dataExplore, dataNewFeeds } from "../config/data";

export default function Detail() {
	let activeColors = colors;

	return (
		<MainContainer style={[{ backgroundColor: activeColors.second }]}>
			<Image source={dataNewFeeds[0].image} style={styles.image} />
			<View
				style={[{ backgroundColor: activeColors.primary }, styles.bottomSection]}
			>
				<StyledText
					numberOfLines={3}
					style={[{ color: activeColors.accent }, styles.title]}
					bold
					size={25}
				>
					{dataNewFeeds[0].title}
				</StyledText>

				<View style={styles.authorMain}>
					<View style={styles.author}>
						<Image source={dataNewFeeds[0].avatar} style={styles.avatar} />
						<StyledText numberOfLines={2} size={16} bold>
							{dataNewFeeds[0].author}
						</StyledText>
					</View>
					<StyledText
						style={[styles.date, { color: activeColors.tertiary }]}
						size={14}
					>
						{dataNewFeeds[0].date}
					</StyledText>
				</View>
				<View style={styles.content}>
					<ShowMore text={dataNewFeeds[0].content} numberOfLines={10} />
				</View>
			</View>
		</MainContainer>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
		borderRadius: 25,
	},
	bottomSection: {
		padding: 25,
		top: -30,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	title: {
		marginBottom: 20,
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
		width: 50,
		height: 50,
		borderRadius: 50,
		marginRight: 20,
	},
	date: {
		flex: 1,
	},
	content: {},
});
