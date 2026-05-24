import { View } from "react-native";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: Props) {
  return (
    <View
      className={`
        bg-[#0B0B0B]
        rounded-[28px]
        border border-[#161616]
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </View>
  );
}