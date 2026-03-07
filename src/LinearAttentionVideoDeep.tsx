import React from 'react';
import {TransitionSeries} from '@remotion/transitions';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// LaTeX 渲染函数
const Latex: React.FC<{ formula: string; displayMode?: boolean; color?: string }> = ({ 
  formula, 
  displayMode = false,
  color = '#f8fafc'
}) => {
  const html = katex.renderToString(formula, {
    displayMode,
    throwOnError: false,
    trust: true,
  });
  
  return (
    <span 
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ color }}
    />
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
    padding: '2rem',
  },
  title: {
    fontSize: '4.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '2.2rem',
    fontWeight: 300,
    color: '#94a3b8',
    marginBottom: '1.5rem',
  },
  formula: {
    fontSize: '2.5rem',
    color: '#3b82f6',
    fontFamily: 'monospace',
    fontWeight: 600,
    marginBottom: '1.5rem',
  },
  author: {
    fontSize: '1.2rem',
    color: '#64748b',
  },
  heading: {
    fontSize: '2.8rem',
    fontWeight: 600,
    marginBottom: '2.5rem',
  },
  subheading: {
    fontSize: '1.8rem',
    fontWeight: 500,
    color: '#94a3b8',
    marginBottom: '1.5rem',
  },
  content: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '1100px',
  },
  formulaBox: {
    backgroundColor: '#1e293b',
    padding: '1.5rem 2rem',
    borderRadius: '0.5rem',
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.4rem',
  },
  formulaBoxLarge: {
    backgroundColor: '#1e293b',
    padding: '2rem 3rem',
    borderRadius: '0.75rem',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.6rem',
  },
  text: {
    fontSize: '1.5rem',
    color: '#ef4444',
    marginBottom: '1.5rem',
  },
  textGreen: {
    fontSize: '1.5rem',
    color: '#10b981',
    marginBottom: '1.5rem',
  },
  textBlue: {
    fontSize: '1.5rem',
    color: '#3b82f6',
    marginBottom: '1.5rem',
  },
  list: {
    textAlign: 'left',
    fontSize: '1.3rem',
    lineHeight: '2',
    listStyle: 'none',
    padding: 0,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    minWidth: '300px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  code: {
    fontSize: '1.3rem',
    fontFamily: 'monospace',
    color: '#cbd5e1',
    marginBottom: '0.5rem',
  },
  complexity: {
    fontSize: '1.8rem',
    fontWeight: 700,
  },
  vs: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#64748b',
  },
  steps: {
    textAlign: 'left',
    width: '100%',
    maxWidth: '900px',
  },
  step: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
    gap: '1rem',
  },
  stepNum: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#3b82f6',
    minWidth: '2rem',
  },
  stepText: {
    fontSize: '1.4rem',
    color: '#e2e8f0',
    flex: 1,
  },
  stepTextSmall: {
    fontSize: '1.2rem',
    color: '#cbd5e1',
    flex: 1,
    lineHeight: '1.6',
  },
  highlight: {
    backgroundColor: '#1e3a5f',
    padding: '0.2rem 0.5rem',
    borderRadius: '0.25rem',
    color: '#60a5fa',
  },
  metric: {
    textAlign: 'center',
    padding: '1.5rem',
  },
  metricTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  metricValue: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  metricDetail: {
    fontSize: '1.1rem',
    color: '#94a3b8',
  },
  speedup: {
    backgroundColor: '#1e3a5f',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    marginTop: '1.5rem',
  },
  speedupText: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#3b82f6',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    width: '100%',
    maxWidth: '1100px',
    marginTop: '2rem',
  },
  appCard: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
  },
  appIcon: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
  },
  appTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  appDesc: {
    fontSize: '1rem',
    color: '#94a3b8',
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '900px',
    marginBottom: '2rem',
  },
  summaryCard: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  summaryIcon: {
    fontSize: '2rem',
  },
  summaryText: {
    fontSize: '1.2rem',
    color: '#e2e8f0',
    flex: 1,
  },
  insight: {
    backgroundColor: '#1e3a5f',
    padding: '1rem 1.5rem',
    borderRadius: '0.5rem',
    marginTop: '1rem',
    borderLeft: '4px solid #3b82f6',
  },
  insightText: {
    fontSize: '1.2rem',
    color: '#60a5fa',
  },
  equation: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
  },
};

// 场景 1: 标题页
const TitleScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>线性注意力机制</h1>
      <h2 style={styles.subtitle}>Linear Attention Mechanism</h2>
      <div style={styles.formulaBoxLarge}>
        <Latex formula="O(n^2) \rightarrow O(n)" displayMode color="#3b82f6" />
      </div>
      <p style={styles.author}>深度技术解析 · AI 工程师必修</p>
    </div>
  );
};

// 场景 2: 问题定义
const ProblemScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>标准注意力机制的复杂度问题</h2>
      <div style={styles.content}>
        <div style={styles.formulaBoxLarge}>
          <Latex formula="\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d}}\right) V" displayMode />
        </div>
        <p style={styles.text}>复杂度: <Latex formula="O(n^2 \cdot d)" /></p>
        <ul style={styles.list}>
          <li>• 长序列处理困难 (n &gt; 4096)</li>
          <li>• 内存占用随 <Latex formula="n^2" /> 增长</li>
          <li>• 计算时间随 <Latex formula="n^2" /> 增加</li>
        </ul>
      </div>
    </div>
  );
};

// 场景 3: 核心思想
const SolutionScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>线性注意力的核心思想</h2>
      <div style={styles.row}>
        <div style={styles.card}>
          <h3 style={{...styles.cardTitle, color: '#ef4444'}}>标准注意力</h3>
          <div style={styles.formulaBox}>
            <Latex formula="\text{softmax}(QK^T)V" />
          </div>
          <p style={{...styles.complexity, color: '#ef4444'}}>
            <Latex formula="O(n^2)" />
          </p>
        </div>
        <div style={styles.vs}>VS</div>
        <div style={styles.card}>
          <h3 style={{...styles.cardTitle, color: '#10b981'}}>线性注意力</h3>
          <div style={styles.formulaBox}>
            <Latex formula="\phi(Q) \cdot (\phi(K)^T V)" />
          </div>
          <p style={{...styles.complexity, color: '#10b981'}}>
            <Latex formula="O(n)" />
          </p>
        </div>
      </div>
    </div>
  );
};

// 场景 4.1: 核技巧
const KernelTrickScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>核技巧 - 将 Softmax 看作核函数</h2>
      <div style={styles.steps}>
        <div style={styles.step}>
          <span style={styles.stepNum}>1</span>
          <div>
            <p style={styles.stepText}>标准注意力中的 Softmax：</p>
            <div style={styles.formulaBox}>
              <Latex formula="\text{softmax}(QK^T) = K(Q, K)" displayMode />
            </div>
          </div>
        </div>
        
        <div style={styles.step}>
          <span style={styles.stepNum}>2</span>
          <div>
            <p style={styles.stepText}>核函数定义（高斯核）：</p>
            <div style={styles.formulaBox}>
              <Latex formula="K(x, y) = \exp\left(\frac{x \cdot y^T}{\sqrt{d}}\right)" displayMode />
            </div>
          </div>
        </div>
        
        <div style={styles.step}>
          <span style={styles.stepNum}>3</span>
          <div>
            <p style={styles.stepText}><strong style={{color: '#3b82f6'}}>Mercer 定理</strong>：任何正定核函数可分解为：</p>
            <div style={styles.formulaBox}>
              <Latex formula="K(x, y) = \phi(x) \cdot \phi(y)^T" displayMode />
            </div>
          </div>
        </div>
        
        <div style={styles.step}>
          <span style={styles.stepNum}>4</span>
          <div style={styles.insight}>
            <p style={styles.insightText}>
              💡 关键 insight：<Latex formula="\text{softmax}(QK^T) \approx \phi(Q) \cdot \phi(K)^T" />
            </p>
            <p style={{...styles.stepTextSmall, marginTop: '0.5rem'}}>
              其中 <Latex formula="\phi(x)" /> 的维度可以远小于 <Latex formula="n" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 场景 4.2: 特征映射
const FeatureMapScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>特征映射 <Latex formula="\phi(x)" /> 的具体形式</h2>
      <div style={styles.content}>
        <h3 style={styles.subheading}>方案 1：随机傅里叶特征（RFF）</h3>
        <div style={styles.formulaBoxLarge}>
          <Latex formula="\phi(x) = \frac{1}{\sqrt{m}}[\sin(w_1^T x), \cos(w_1^T x), \ldots, \sin(w_m^T x), \cos(w_m^T x)]" displayMode />
        </div>
        <p style={styles.textBlue}>
          其中 <Latex formula="w_i \sim \mathcal{N}(0, \sigma^2 I)" />，<Latex formula="\sigma = 1/\sqrt{d}" />
        </p>
        
        <h3 style={{...styles.subheading, marginTop: '1.5rem'}}>方案 2：激活函数（Performer）</h3>
        <div style={styles.formulaBoxLarge}>
          <Latex formula="\phi(x) = \text{ReLU}(x) + \varepsilon \quad \text{或} \quad \text{ELU}(x) + 1" displayMode />
        </div>
        
        <div style={styles.insight}>
          <p style={styles.insightText}>
            💡 数学保证：<Latex formula="\mathbb{E}[\phi(x) \cdot \phi(y)^T] \approx K(x, y)" />
          </p>
          <p style={{...styles.stepTextSmall, marginTop: '0.5rem'}}>
            • <Latex formula="m" /> 越大，近似越精确（但 <Latex formula="m \ll n" />）<br/>
            • 复杂度从 <Latex formula="O(n^2)" /> 降到 <Latex formula="O(n \cdot m^2)" />
          </p>
        </div>
      </div>
    </div>
  );
};

// 场景 4.3: 矩阵结合律
const MatrixAssociativityScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>矩阵结合律 - 改变计算顺序</h2>
      <div style={styles.content}>
        <div style={styles.row}>
          <div style={{...styles.card, minWidth: '400px'}}>
            <h3 style={{...styles.cardTitle, color: '#ef4444'}}>标准注意力</h3>
            <div style={styles.formulaBox}>
              <Latex formula="(Q \cdot K^T) \cdot V" displayMode />
            </div>
            <p style={{...styles.text, marginBottom: '0.5rem'}}>先计算 <Latex formula="n \times n" /> 矩阵</p>
            <p style={{...styles.complexity, color: '#ef4444'}}>
              <Latex formula="O(n^2 \cdot d)" />
            </p>
          </div>
          
          <div style={{...styles.card, minWidth: '400px'}}>
            <h3 style={{...styles.cardTitle, color: '#10b981'}}>线性注意力</h3>
            <div style={styles.formulaBox}>
              <Latex formula="\phi(Q) \cdot (\phi(K)^T \cdot V)" displayMode />
            </div>
            <p style={{...styles.textGreen, marginBottom: '0.5rem'}}>先计算 <Latex formula="d \times d" /> 矩阵</p>
            <p style={{...styles.complexity, color: '#10b981'}}>
              <Latex formula="O(n \cdot d^2)" />
            </p>
          </div>
        </div>
        
        <div style={styles.insight}>
          <p style={styles.insightText}>
            💡 加速比公式：<Latex formula="\frac{O(n^2 d)}{O(n d^2)} = \frac{n}{d}" />
          </p>
          <p style={{...styles.stepTextSmall, marginTop: '0.5rem'}}>
            当 <Latex formula="n = 4096, d = 64" /> 时，加速 <Latex formula="\frac{4096}{64} = 64x" />
          </p>
        </div>
      </div>
    </div>
  );
};

// 场景 5: 性能对比
const ComparisonScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>复杂度对比</h2>
      <div style={styles.row}>
        <div style={styles.metric}>
          <p style={{...styles.metricTitle, color: '#ef4444'}}>标准注意力</p>
          <p style={styles.metricValue}><Latex formula="O(n^2)" /></p>
          <p style={styles.metricDetail}>n=4096: ~16M ops</p>
        </div>
        <div style={styles.metric}>
          <p style={{...styles.metricTitle, color: '#10b981'}}>线性注意力</p>
          <p style={styles.metricValue}><Latex formula="O(n)" /></p>
          <p style={styles.metricDetail}>n=4096: ~64K ops</p>
        </div>
      </div>
      <div style={styles.speedup}>
        <p style={styles.speedupText}>256x 加速比</p>
      </div>
    </div>
  );
};

// 场景 6: 应用场景
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

// 场景 7: 总结
const SummaryScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>核心要点总结</h2>
      <div style={styles.summaryGrid}>
        <div style={styles.summaryCard}>
          <span style={styles.summaryIcon}>📊</span>
          <p style={styles.summaryText}>复杂度从 <Latex formula="O(n^2)" /> 降至 <Latex formula="O(n \cdot d^2)" /></p>
        </div>
        <div style={styles.summaryCard}>
          <span style={styles.summaryIcon}>🧮</span>
          <p style={styles.summaryText}>利用核技巧近似 Softmax</p>
        </div>
        <div style={styles.summaryCard}>
          <span style={styles.summaryIcon}>🎯</span>
          <p style={styles.summaryText}>矩阵结合律改变计算顺序</p>
        </div>
        <div style={styles.summaryCard}>
          <span style={styles.summaryIcon}>⚡</span>
          <p style={styles.summaryText}>支持超长序列和流式处理</p>
        </div>
      </div>
      <div style={styles.formulaBoxLarge}>
        <Latex formula="V' = \phi(Q) \cdot (\phi(K)^T V)" displayMode color="#10b981" />
      </div>
    </div>
  );
};

// 主视频组件
export const LinearAttentionVideoDeep: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={120}>
        <TitleScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={180}>
        <ProblemScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={180}>
        <SolutionScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={300}>
        <KernelTrickScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={300}>
        <FeatureMapScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={300}>
        <MatrixAssociativityScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={180}>
        <ComparisonScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={150}>
        <ApplicationScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={150}>
        <SummaryScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
