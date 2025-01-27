import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const index = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, [])

    return (
        <View style={styles.Container}>
            {
                isLoading ? (
                    // Show shimmer placeholders while loading
                    <FlatList
                        data={Movies} // Placeholder data for shimmer effect
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={() => (
                            <View style={styles.MainVideoContainer}>
                                <ShimmerPlaceholder
                                    LinearGradient={LinearGradient}
                                    style={styles.VideoThumbnailShimmer}
                                />
                                <View style={styles.VideoDetailContainer}>
                                    <ShimmerPlaceholder
                                        LinearGradient={LinearGradient}
                                        style={styles.TextShimmer}
                                    />
                                    <ShimmerPlaceholder
                                        LinearGradient={LinearGradient}
                                        style={styles.TextShimmer}
                                    />
                                </View>
                            </View>
                        )}
                    />
                ) : (<FlatList data={Movies} showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.MainVideoContainer}>

                                <View style={styles.VideoContainer}>
                                    <Image
                                        source={{ uri: "https://picsum.photos/360/203" }}
                                        style={styles.VideoThumbnail}
                                        resizeMode='cover'
                                    />
                                    <View style={styles.VideoTimeContainer}>
                                        <Text style={styles.DurationText}>{item.duration}</Text>
                                    </View>
                                </View>
                                <View style={styles.VideoDetailContainer}>
                                    <View style={styles.VideoDetailTopContainer}>
                                        <View style={styles.VideoText}>
                                            <Text style={styles.Vtext}>{item.name}</Text>
                                        </View>
                                        <View style={styles.VideoIcon}>
                                            <FontAwesome name="ellipsis-v" size={25} color="black" />
                                        </View>
                                    </View>
                                    <View style={styles.VideoInformation}>
                                        <Text>{item.recent}</Text>
                                        <Text>{item.views}</Text>
                                        <Text>{item.uploaded}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }} />)}
        </View>
    )
}
// styles code start from here
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    MainVideoContainer: {

    },
    VideoContainer: {
        width: '100%',
        height: 200,
        overflow: 'hidden', // Ensures rounded corners
        position: 'relative',
        backgroundColor: 'lightgray',
    },
    VideoThumbnail: {
        width: '100%',
        height: '100%',
    },
    VideoTimeContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5
    },
    DurationText: {
        color: "white",
    },
    VideoDetailContainer: {
        backgroundColor: "transparent",
        height: 90,
    },
    VideoDetailTopContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    VideoText: {
        width: "90%",
        height: 50,
        padding: 5,
    },
    Vtext: {
        color: "black",
        fontSize: 20,
    },
    VideoIcon: {
        justifyContent: "center",
        alignItems: "center",
        width: "10%",
        height: 50,
    },
    VideoInformation: {
        width: "100%",
        height: 25,
        padding: 5,
        color: "lightgray",
        flexDirection: "row",
        gap: 10,

    },
     // Shimmer Placeholder Styles
     VideoThumbnailShimmer: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        backgroundColor: '#ccc',
    },
    TextShimmer: {
        width: '80%',
        height: 20,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: '#ddd',
    },
})

export default index

const Movies = [
    {
        "id": 1,
        "image": "https://via.placeholder.com/360x203",
        "name": "Inception",
        "duration": "2h 28m",
        "views": "12M views",
        "recent": "Trending",
        "uploaded": "2 days ago"
    },
    {
        "id": 2,
        "image": "https://via.placeholder.com/360x203",
        "name": "Interstellar",
        "duration": "2h 49m",
        "views": "20M views",
        "recent": "Popular",
        "uploaded": "1 week ago"
    },
    {
        "id": 3,
        "image": "https://via.placeholder.com/360x203",
        "name": "The Dark Knight",
        "duration": "2h 32m",
        "views": "35M views",
        "recent": "Classic",
        "uploaded": "5 years ago"
    },
    {
        "id": 4,
        "image": "https://via.placeholder.com/360x203",
        "name": "Avatar: The Way of Water",
        "duration": "3h 12m",
        "views": "15M views",
        "recent": "Trending",
        "uploaded": "3 months ago"
    },
    {
        "id": 5,
        "image": "https://via.placeholder.com/360x203",
        "name": "Avengers: Endgame",
        "duration": "3h 2m",
        "views": "50M views",
        "recent": "Blockbuster",
        "uploaded": "4 years ago"
    }
];


