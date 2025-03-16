import { Stack } from "expo-router";
import './globals.css';
import { StackRouter } from "@react-navigation/native";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen 
      name="(tabs)"
      options={{headerShown: false}}
    />
    <Stack.Screen 
      name="movie/[id]"
      options={{headerShown: false}}
    />
  </Stack>;
}
