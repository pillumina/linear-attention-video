import {Composition} from 'remotion';
import {LinearAttentionVideoSimple} from './LinearAttentionVideoSimple';
import {LinearAttentionVideoDeep} from './LinearAttentionVideoDeep';
import {LinearAttentionVideoAnimated} from './LinearAttentionVideoAnimated';
import {LinearAttentionVideoOptimized} from './LinearAttentionVideoOptimized';
import {LinearAttentionVideoFinal} from './LinearAttentionVideoFinal';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LinearAttentionFinal"
        component={LinearAttentionVideoFinal}
        durationInFrames={2400}  // 80 seconds: 120+180+180+300+300+300+180+150+300+240+150
        fps={30}
        width={1280}
        height={720}
        defaultProps={{}}
      />
      <Composition
        id="LinearAttentionOptimized"
        component={LinearAttentionVideoOptimized}
        durationInFrames={2400}  // 80 seconds: 120+180+180+300+300+300+180+150+300+240+150
        fps={30}
        width={1280}
        height={720}
        defaultProps={{}}
      />
      <Composition
        id="LinearAttention"
        component={LinearAttentionVideoAnimated}
        durationInFrames={1860}  // 62 seconds: 120+180+180+300+300+300+180+150+150
        fps={30}
        width={1280}
        height={720}
        defaultProps={{}}
      />
      <Composition
        id="LinearAttentionDeep"
        component={LinearAttentionVideoDeep}
        durationInFrames={1860}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{}}
      />
      <Composition
        id="LinearAttentionSimple"
        component={LinearAttentionVideoSimple}
        durationInFrames={1170}  // 39 seconds
        fps={30}
        width={1280}
        height={720}
        defaultProps={{}}
      />
    </>
  );
};
