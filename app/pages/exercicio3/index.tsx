import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Index() {
    return (
        <View className="flex-1">
            <View className="bg-blue-500">
                <Text className="text-2xl text-white font-bold m-3">Dashboard</Text>
            </View>

            <View className="">
                <View className="flex-row gap-3 m-2">

                    <View className="bg-white flex-1 rounded-lg">
                        <Text className="text-dark-200 font-bold mt-3">Visitas</Text>
                        <Text className="text-blue-950 font-bold">1.500</Text>
                        <Text className="mb-5">Últimos 7 dias</Text>
                    </View>

                    <View className="bg-white flex-1 rounded-lg">
                        <Text className="text-dark-200 font-bold mt-3">Vendas</Text>
                        <Text className="text-green-200 font-bold">320</Text>
                        <Text className="mb-5">Últimos 7 dias</Text>
                    </View>

                    <View className="bg-white flex-1 rounded-lg">
                        <Text className="text-dark-200 font-bold mt-3">Novos Usuários</Text>
                        <Text className="text-yellow-500 font-bold">120</Text>
                        <Text className="mb-5">Últimos 7 dias</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                

                <View>
                    <Image className="w-full h-96 bg-white"
                        source={{ uri: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwf8a3592d/NH4400MR_000_24.jpg?imwidth=450&impolicy=pctp" }}
                    />
                    <Text className="text-3xl text-dark-200 font-bold mb-3">Produto 1</Text>
                    <Text className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum qui esse numquam hic quia vero..</Text>
                    <TouchableOpacity
                        className="bg-blue-500 py-2 px-4 rounded-full items-center">
                        <Text className="text-white">Ver Produto</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Image className="w-full h-96 bg-white"
                        source={{ uri: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwf8a3592d/NH4400MR_000_24.jpg?imwidth=450&impolicy=pctp" }}
                    />
                    <Text className="text-3xl text-dark-200 font-bold mb-3">Produto 2</Text>
                    <Text className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum qui esse numquam hic quia vero..</Text>
                    <TouchableOpacity
                        className="bg-blue-500 py-2 px-4 rounded-full items-center">
                        <Text className="text-white">Ver Produto</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Image className="w-full h-96 bg-white"
                        source={{ uri: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwf8a3592d/NH4400MR_000_24.jpg?imwidth=450&impolicy=pctp" }}
                    />
                    <Text className="text-3xl text-dark-200 font-bold mb-3">Produto 3</Text>
                    <Text className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum qui esse numquam hic quia vero..</Text>
                    <TouchableOpacity
                        className="bg-blue-500 py-2 px-4 rounded-full items-center">
                        <Text className="text-white">Ver Produto</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </View>

    );
}
