import { Text, View, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View className="bg-blue-500">
        <Text className="text-2xl text-white font-bold m-3">Detalhes do Produto</Text>
        <View className="bg-white">
            <Image className="w-full h-96 bg-white"
            source={{uri: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwf8a3592d/NH4400MR_000_24.jpg?imwidth=450&impolicy=pctp"}} 
            />
            <Text className="text-3xl text-dark-200 font-bold mb-3">Produto Excepcional</Text>
            <Text className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio corrupti minima, delectus quaerat alias magnam hic totam similique doloremque eligendi nesciunt deleniti sit sunt maxime dolore tempore dolorem esse quas! Vitae a eos, quia animi fugit laborum quae quibusdam, similique corporis libero facere id eius consequuntur, molestias fuga ut tenetur.</Text>
            <Text className="text-3xl text-green-500 font-bold mb-3">R$ 299.99</Text>
            <TouchableOpacity
            className="bg-blue-500 py-2 px-4 rounded-full items-center">
                <Text className="text-white">Comprar Agora</Text>
            </TouchableOpacity>
        </View>
    </View> 
  );
}
