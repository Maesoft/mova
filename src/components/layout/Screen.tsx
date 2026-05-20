import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
};

export default function Screen({ children }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950 px-4">
      {children}
    </SafeAreaView>
  );
}