import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const [likes, setLikes] = useState(0);

  const hobbies = [
    "Đọc sách",
    "Lập trình",
    "Du lịch",
    "Nấu ăn",
    "Chơi guitar",
    "Xem phim",
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Image source={{}} />
      </View>

      <Text>Jupiter</Text>
      <Text>
        Mình là một lập trình viên đam mê công nghệ, thích học hỏi điều mới mỗi
        ngày và mong muốn xây dựng những sản phẩm có ích cho cộng đồng.
      </Text>
      <Text>Sở Thích</Text>

      <FlatList
        data={hobbies}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
      />

      <TouchableOpacity onPress={() => setLikes(likes + 1)}>
        <Text>Like ({likes})</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
