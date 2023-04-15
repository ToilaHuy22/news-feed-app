import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//components
import MainContainer from "../components/containers/MainContainer";
import StyledText from "../components/texts/StyledText";
import NewsSection from "../components/news/NewsSection";
import ExploreSection from "../components/explores/ExploreSection";

//datafake
import { dataExplore, dataNewFeeds } from "../config/data";

export default function Home() {
	return (
		<MainContainer>
			{/* <AppHeader> */}
			<StyledText style={styles.sectionTitle} size={24}>
				Thịnh Hành
			</StyledText>
			<NewsSection data={dataNewFeeds} />
			<StyledText style={styles.sectionTitle} size={24}>
				Khác
			</StyledText>
			<ExploreSection data={dataExplore} />
			{/* </AppHeader> */}
		</MainContainer>
	);
}

const styles = StyleSheet.create({
	sectionTitle: {
		marginTop: 25,
		marginLeft: 25,
	},
});
