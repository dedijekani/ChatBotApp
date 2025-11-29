import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

export default function Index() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const onSend = (newMessages: IMessage[] = []) => {
    setMessages((previous) => GiftedChat.append(previous, newMessages));
    const userMessage = newMessages[0].text;

    const botMessage: IMessage = {
      _id: Math.random().toString(),
      text: `${userMessage}`,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Bot",
      },
    };

    setTimeout(() => {
      setMessages((previous) => GiftedChat.append(previous, [botMessage]));
    }, 500);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    ></KeyboardAvoidingView>
  );
}
