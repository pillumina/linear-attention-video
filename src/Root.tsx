import {Composition} from 'remotion';
import {LinearAttentionVideoSimple} from './LinearAttentionVideoSimple';
import {LinearAttentionVideoDeep} from './LinearAttentionVideoDeep';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LinearAttention"
        component={LinearAttentionVideoDeep}
        durationInFrames={1860}  // 62 seconds: 120+180+180+300+300+300+180+150+150
        fps={30}
        width={1280}
        height={720}
        defaultProps={{}}
      />
      <Composition
        id="LinearAttentionSimple"
        component={LinearAttentionVideoSimple}
        durationInFrames={1170}  // 39 seconds: 120+180+180+210+180+150+150
        fps={30}
        width={1280}
        height={720}
        defaultProps={{}}
      />
    </>
  );
};
