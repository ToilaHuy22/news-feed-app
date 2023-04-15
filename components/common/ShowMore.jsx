import { Animated, StyleSheet, View } from "react-native";
import StyledText from "../texts/StyledText";
import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";

const ShowMore = ({ text, numberOfLines }) => {
	const [showMore, setShowMore] = useState(false);

	const toggleShowMore = () => {
		setShowMore(!showMore);
	};

	const fadeAnim = useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
		Animated.timing(fadeAnim, {
			toValue: 200,
			duration: 1500,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		fadeIn();
	}, []);

	return (
		<View>
			<StyledText
				numberOfLines={showMore ? 0 : numberOfLines}
				style={styles.container}
			>
				{text}
			</StyledText>
			<Animated.View style={[styles.button]}>
				<Button
					title={showMore ? "Rút Gọn" : "Xem thêm"}
					titleSize={16}
					sizeHeight={30}
					sizeWidth={100}
					align={"center"}
					onPress={toggleShowMore}
				/>
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		marginTop: 10,
	},
});

export default ShowMore;
