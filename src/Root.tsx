import {Composition} from 'remotion';
import {LinearAttentionVideoSimple} from './LinearAttentionVideoSimple';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LinearAttention"
        component={LinearAttentionVideoSimple}
        durationInFrames={1170}  // 39 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};
