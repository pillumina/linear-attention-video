import React from 'react';
import {Composition, Sequence} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';

import {TitleScene} from './scenes/TitleScene';
import {StandardAttentionProblem} from './scenes/StandardAttentionProblem';
import {LinearAttentionCore} from './scenes/LinearAttentionCore';
import {MathDerivation} from './scenes/MathDerivation';
import {FeatureMaps} from './scenes/FeatureMaps';
import {ComplexityComparison} from './scenes/ComplexityComparison';
import {Applications} from './scenes/Applications';
import {Summary} from './scenes/Summary';

export const LinearAttentionVideo: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={120}>
        <TitleScene />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 30})}
      />

      <TransitionSeries.Sequence durationInFrames={180}>
        <StandardAttentionProblem />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 30})}
      />

      <TransitionSeries.Sequence durationInFrames={180}>
        <LinearAttentionCore />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 30})}
      />

      <TransitionSeries.Sequence durationInFrames={210}>
        <MathDerivation />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 30})}
      />

      <TransitionSeries.Sequence durationInFrames={150}>
        <FeatureMaps />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 30})}
      />

      <TransitionSeries.Sequence durationInFrames={180}>
        <ComplexityComparison />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 30})}
      />

      <TransitionSeries.Sequence durationInFrames={150}>
        <Applications />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({durationInFrames: 30})}
      />

      <TransitionSeries.Sequence durationInFrames={150}>
        <Summary />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
