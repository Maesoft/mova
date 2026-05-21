import { View } from "react-native";

import { COLORS } from "@/constants/colors";

interface Props {
  total: number;
  currentIndex: number;
}

export default function Pagination({
  total,
  currentIndex,
}: Props) {
  return (
    <View className="flex-row items-center justify-center gap-3">
      {Array.from({ length: total }).map((_, index) => {
        const active = index === currentIndex;

        return (
          <View
            key={index}
            className="rounded-full"
            style={{
              width: active ? 28 : 10,
              height: 10,
              backgroundColor: active
                ? COLORS.primary
                : COLORS.border,
            }}
          />
        );
      })}
    </View>
  );
}