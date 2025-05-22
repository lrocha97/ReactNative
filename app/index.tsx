import { Text, View, Image, Button, TouchableOpacity, TextInput, } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-slate-400 justify-center items-center">
      
      <Image className="w-32 h-32 rounded-full bm-4"
      source={{uri: "https://wallpapers.com/images/hd/homer-simpson-funny-nv3un39cjzu6qjju.jpg"}} 
      />

      <Text className="text-5xl text-dark-200 font-bold mb-3">Lucas Rocha</Text>
      <Text className="text-xl text-dark-150 mb-3">Idade: 28 anos</Text>
      <Text className="text-xl text-dark-150 mb-3">Localização: Campo Grande - MS</Text>

      <TouchableOpacity
      className="bg-blue-500 py-2 px-4 rounded-full">
        <Text className="text-white font-bold">Editar Perfil</Text>
      </TouchableOpacity>
    </View>
    
  );
}
