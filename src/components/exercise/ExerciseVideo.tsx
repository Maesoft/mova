import {
  VideoView,
  useVideoPlayer,
} from "expo-video";

type Props = {
  videoUrl: string;
};

export default function ExerciseVideo({
  videoUrl,
}: Props) {
  const player = useVideoPlayer(
    videoUrl,
    (player) => {
      player.loop = true;
    }
  );

  return (
    <VideoView
      player={player}
      nativeControls
      allowsFullscreen
      allowsPictureInPicture
      style={{
        height: 250,
      }}
    />
  );
}