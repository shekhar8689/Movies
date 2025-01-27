import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';



export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Movie',
          tabBarIcon: ({ color }) => <FontAwesome size={20} name="film" color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <TouchableOpacity onPress={() => alert('Filter clicked')}>
                <Ionicons name="filter" size={24} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Search clicked')}>
                <Ionicons name="search" size={24} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('More options clicked')}>
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: 'Catefory',
          tabBarIcon: ({ color }) => <FontAwesome size={20} name="group" color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <TouchableOpacity onPress={() => alert('Search clicked')}>
                <Ionicons name="search" size={24} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('More options clicked')}>
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'Favorite',
          tabBarIcon: ({ color }) => <FontAwesome size={20} name="heart" color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <TouchableOpacity onPress={() => alert('Search clicked')}>
                <Ionicons name="search" size={24} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('More options clicked')}>
                <Ionicons name="ellipsis-vertical" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
