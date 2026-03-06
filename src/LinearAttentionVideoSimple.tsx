import React from 'react';
import {TransitionSeries} from '@remotion/transitions';

const TitleScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>线性注意力机制</h1>
      <h2 style={styles.subtitle}>Linear Attention Mechanism</h2>
      <div style={styles.formula}>O(n²) → O(n)</div>
      <p style={styles.author}>深度技术解析 · AI 工程师必修</p>
    </div>
  );
};

const ProblemScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>标准注意力机制的复杂度问题</h2>
      <div style={styles.content}>
        <div style={styles.formulaBox}>Attention(Q,K,V) = softmax(QK^T/√d) V</div>
        <p style={styles.text}>复杂度: O(n²·d)</p>
        <ul style={styles.list}>
          <li>长序列处理困难 (n &gt; 4096)</li>
          <li>内存占用随 n² 增长</li>
          <li>计算时间随 n² 增加</li>
        </ul>
      </div>
    </div>
  );
};

const SolutionScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>线性注意力的核心思想</h2>
      <div style={styles.row}>
        <div style={styles.card}>
          <h3 style={{...styles.cardTitle, color: '#ef4444'}}>标准注意力</h3>
          <p style={styles.code}>softmax(QK^T)V</p>
          <p style={{...styles.complexity, color: '#ef4444'}}>O(n²)</p>
        </div>
        <div style={styles.vs}>VS</div>
        <div style={styles.card}>
          <h3 style={{...styles.cardTitle, color: '#10b981'}}>线性注意力</h3>
          <p style={styles.code}>φ(Q)·(φ(K)^T V)</p>
          <p style={{...styles.complexity, color: '#10b981'}}>O(n)</p>
        </div>
      </div>
    </div>
  );
};

const DerivationScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>数学推导</h2>
      <div style={styles.steps}>
        <div style={styles.step}>
          <span style={styles.stepNum}>1</span>
          <span style={styles.stepText}>标准注意力: softmax(QK^T)V</span>
        </div>
        <div style={styles.step}>
          <span style={styles.stepNum}>2</span>
          <span style={styles.stepText}>引入特征映射 φ(x)</span>
        </div>
        <div style={styles.step}>
          <span style={styles.stepNum}>3</span>
          <span style={styles.stepText}>线性化形式: φ(Q)·(φ(K)^T V)</span>
        </div>
        <div style={styles.step}>
          <span style={styles.stepNum}>4</span>
          <span style={styles.stepText}>复杂度: O(n·d²) ✅</span>
        </div>
      </div>
    </div>
  );
};

const ComparisonScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>复杂度对比</h2>
      <div style={styles.row}>
        <div style={styles.metric}>
          <p style={{...styles.metricTitle, color: '#ef4444'}}>标准注意力</p>
          <p style={styles.metricValue}>O(n²)</p>
          <p style={styles.metricDetail}>n=4096: ~16M ops</p>
        </div>
        <div style={styles.metric}>
          <p style={{...styles.metricTitle, color: '#10b981'}}>线性注意力</p>
          <p style={styles.metricValue}>O(n)</p>
          <p style={styles.metricDetail}>n=4096: ~64K ops</p>
        </div>
      </div>
      <div style={styles.speedup}>
        <p style={styles.speedupText}>256x 加速比</p>
      </div>
    </div>
  );
};

const ApplicationScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>应用场景</h2>
      <div style={styles.grid}>
        <div style={styles.appCard}>
          <span style={styles.appIcon}>📄</span>
          <h3 style={styles.appTitle}>长序列建模</h3>
          <p style={styles.appDesc}>文档摘要、代码分析</p>
        </div>
        <div style={styles.appCard}>
          <span style={styles.appIcon}>⚡</span>
          <h3 style={styles.appTitle}>流式处理</h3>
          <p style={styles.appDesc}>实时翻译、语音识别</p>
        </div>
        <div style={styles.appCard}>
          <span style={styles.appIcon}>🚀</span>
          <h3 style={styles.appTitle}>高效推理</h3>
          <p style={styles.appDesc}>移动端 AI、边缘设备</p>
        </div>
      </div>
    </div>
  );
};

const SummaryScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>核心要点总结</h2>
      <div style={styles.summaryList}>
        <div style={styles.summaryItem}>📊 复杂度从 O(n²) 降至 O(n·d²)</div>
        <div style={styles.summaryItem}>🧮 利用矩阵结合律重新排列计算</div>
        <div style={styles.summaryItem}>🎯 通过特征映射近似 softmax</div>
        <div style={styles.summaryItem}>⚡ 支持超长序列和流式处理</div>
      </div>
      <div style={styles.finalFormula}>
        V' = φ(Q)·(φ(K)^T V)
      </div>
    </div>
  );
};

export const LinearAttentionVideoSimple: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={120}><TitleScene /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={180}><ProblemScene /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={180}><SolutionScene /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={210}><DerivationScene /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={180}><ComparisonScene /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={150}><ApplicationScene /></TransitionSeries.Sequence>
      <TransitionSeries.Sequence durationInFrames={150}><SummaryScene /></TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

const styles: {[key: string]: React.CSSProperties} = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0f172a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#f8fafc',
    padding: '4rem',
  },
  title: {
    fontSize: '5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '2.5rem',
    fontWeight: 300,
    color: '#94a3b8',
    marginBottom: '2rem',
  },
  formula: {
    fontSize: '2.5rem',
    color: '#3b82f6',
    fontFamily: 'monospace',
    fontWeight: 600,
    marginBottom: '2rem',
  },
  author: {
    fontSize: '1.2rem',
    color: '#64748b',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 600,
    marginBottom: '3rem',
  },
  content: {
    textAlign: 'center',
  },
  formulaBox: {
    backgroundColor: '#1e293b',
    padding: '1.5rem 2rem',
    borderRadius: '0.5rem',
    fontFamily: 'monospace',
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.5rem',
    color: '#ef4444',
    marginBottom: '1.5rem',
  },
  list: {
    textAlign: 'left',
    fontSize: '1.2rem',
    lineHeight: 2,
  },
  row: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '1rem',
    textAlign: 'center',
    minWidth: '300px',
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  code: {
    fontFamily: 'monospace',
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  complexity: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  vs: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#64748b',
  },
  steps: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '#1e293b',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
  },
  stepNum: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
  },
  stepText: {
    fontSize: '1.2rem',
  },
  metric: {
    textAlign: 'center',
    padding: '2rem',
  },
  metricTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  metricValue: {
    fontSize: '3rem',
    fontWeight: 700,
    margin: '1rem 0',
  },
  metricDetail: {
    fontSize: '1rem',
    color: '#94a3b8',
  },
  speedup: {
    backgroundColor: '#1e3a5f',
    padding: '1.5rem 3rem',
    borderRadius: '1rem',
    marginTop: '2rem',
  },
  speedupText: {
    fontSize: '2rem',
    color: '#3b82f6',
    fontWeight: 700,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
  },
  appCard: {
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '1rem',
    textAlign: 'center',
  },
  appIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },
  appTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  appDesc: {
    fontSize: '0.9rem',
    color: '#94a3b8',
  },
  summaryList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginBottom: '3rem',
  },
  summaryItem: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    fontSize: '1.2rem',
  },
  finalFormula: {
    backgroundColor: '#1e3a5f',
    padding: '2rem 4rem',
    borderRadius: '1rem',
    fontSize: '2rem',
    color: '#10b981',
    fontFamily: 'monospace',
    fontWeight: 600,
  },
};
