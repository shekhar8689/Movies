import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'

const category = () => {
  return (
    <View style={styles.MainContainer}>
      <FlatList
      contentContainerStyle={styles.FlatContainer}
      showsHorizontalScrollIndicator={false}
      numColumns={3}
      data={peopleData}
      renderItem={({item, index})=>(
        <View style={styles.CategoryMainContainer}>
          <Image 
          source={{uri:item.image}}
          style={styles.CategoryImageContainer} />
          <View style={styles.CategoryTitle}>
          <Text style={styles.CategoryTitleText}>{item.name}</Text>
          </View>
          <View style={styles.CategoryVideoCount}>
          <Text>{item.videoCount} Videos</Text>
          </View>
        </View>
      )}
      />
    </View>
  )
}

export default category

const styles = StyleSheet.create({
  MainContainer:{
    flex:1,
    alignItems: 'center',
    paddingTop:5,
  },
  FlatContainer:{
    justifyContent:"center",
  },
  CategoryMainContainer:{
    alignItems:'center',
    paddingTop:5,
    width:110,
    height:180,
    borderRadius:10,
    margin:2

  },
  CategoryImageContainer:{
  borderRadius:10,
  width:"90%",
  height:120,
  marginBottom:2,
  },
  CategoryTitle:{
    padding: 2,
    textAlign: 'center', 
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
  },
  CategoryTitleText: {
    textAlign: 'center', 
    fontSize: 14,
    fontWeight: 'bold', 
  },
  CategoryVideoCount:{}
})



const peopleData = [
  {
    id: '1',
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    videoCount: 12,
  },
  {
    id: '2',
    name: 'Emma Smith',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    videoCount: 20,
  },
  {
    id: '3',
    name: 'Michael Johnson',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    videoCount: 8,
  },
  {
    id: '4',
    name: 'Sophia Williams',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    videoCount: 15,
  },
  {
    id: '5',
    name: 'James Brown',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    videoCount: 25,
  },
  {
    id: '6',
    name: 'Olivia Jones',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    videoCount: 18,
  },
  {
    id: '7',
    name: 'William Garcia',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    videoCount: 10,
  },
  {
    id: '8',
    name: 'Ava Martinez',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    videoCount: 30,
  },
  {
    id: '9',
    name: 'Alexander Lee',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    videoCount: 7,
  },
  {
    id: '10',
    name: 'Mia Rodriguez',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
    videoCount: 14,
  },
  {
    id: '11',
    name: 'Daniel Wilson',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    videoCount: 22,
  },
  {
    id: '12',
    name: 'Isabella Anderson',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    videoCount: 17,
  },
  {
    id: '13',
    name: 'Ethan Thomas',
    image: 'https://randomuser.me/api/portraits/men/13.jpg',
    videoCount: 5,
  },
  {
    id: '14',
    name: 'Charlotte Hernandez',
    image: 'https://randomuser.me/api/portraits/women/14.jpg',
    videoCount: 19,
  },
  {
    id: '15',
    name: 'Liam Moore',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
    videoCount: 27,
  },
];

