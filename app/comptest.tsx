import { View } from "react-native";

//自訂標籤
function WelcomeMessage(){
    return <text>hello World</text>
};

const name = (firstname, lastname) => {
    return firstname + lastname
};
//return UI標籤
const WelcomeMessage2 = () => {
    return <text>這邊呼叫上面的函式, {name("hello", 'NTUB')}</text>
};
//組成UI元件
export default function Index() {
  return (
    <View>
        <text>React Native顯示</text>
        <WelcomeMessage />
        <view>
            <text>你好</text>
        </view>
        <WelcomeMessage2 />
    </View>
  );
}