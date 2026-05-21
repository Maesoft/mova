import { Dimensions, Text, View } from "react-native";

import { VideoView, useVideoPlayer } from "expo-video";

import { COLORS } from "@/constants/colors";

import { OnboardingItem } from "@/types/onboarding";

interface Props {
  item: OnboardingItem;
}

const { width } = Dimensions.get("window");

export default function OnboardingSlide({ item }: Props) {
  const player = useVideoPlayer(item.video, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View
      style={{
        width,
        backgroundColor: COLORS.background,
      }}
      className="flex-1 items-center pt-20 px-8"
    >
      {/* VIDEO */}
      <View
        className="overflow-hidden rounded-3xl"
        style={{
          width: width - 48,
          height: 340,
          backgroundColor: COLORS.card,
        }}
      >
        <VideoView
          player={player}
          allowsPictureInPicture={false}
          nativeControls={false}
          style={{
            flex: 1,
          }}
        />
      </View>

      {/* CONTENT */}
      <View className="mt-4 items-center">
        <Text
          className="text-center text-4xl font-bold"
          style={{
            color: COLORS.white,
          }}
        >
          {item.title}
        </Text>

        <Text
          className="mt-5 text-center text-base leading-7"
          style={{
            color: COLORS.muted,
          }}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
}