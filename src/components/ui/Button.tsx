import { Pressable, Text } from "react-native";

type Props = {
  title: string;
  variant?: "primary" | "outline";
  onPress?: () => void;
};

export default function Button({
  title,
  variant = "primary",
  onPress,
}: Props) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      className={`
        h-14
        rounded-full
        items-center
        justify-center
        px-6
        flex-row
        ${isPrimary ? "bg-[#C6FF3B]" : "border border-[#2A2A2A]"}
      `}
    >
      <Text
        className={`
          font-semibold
          text-base
          ${isPrimary ? "text-black" : "text-[#C6FF3B]"}
        `}
      >
        {title}
      </Text>
    </Pressable>
  );
}