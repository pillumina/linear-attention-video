import {Composition} from 'remotion';
import {LinearAttentionVideoSimple} from './LinearAttentionVideoSimple';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LinearAttention"
        component={LinearAttentionVideoSimple}
        durationInFrames={300}  // 10 seconds preview
        fps={30}
        width={1280}
        height={720}
        defaultProps={{}}
      />
    </>
  );
};
