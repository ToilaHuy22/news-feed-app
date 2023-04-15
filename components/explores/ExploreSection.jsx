import { FlatList } from "react-native";

import ExploreItems from "./ExploreItems";

const ExploreSection = ({ data }) => {
	return (
		<FlatList
			data={data}
			renderItem={({ item }) => <ExploreItems {...item} />}
			keyExtractor={({ id }) => id.toString()}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingLeft: 25, paddingTop: 25 }}
		/>
	);
};

export default ExploreSection;
