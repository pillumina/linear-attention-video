import {Composition} from 'remotion';
import {LinearAttentionVideo} from './LinearAttentionVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LinearAttention"
        component={LinearAttentionVideo}
        durationInFrames={1440}  // 48 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
