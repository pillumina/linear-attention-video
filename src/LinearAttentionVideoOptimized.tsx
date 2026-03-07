import React from 'react';
import {TransitionSeries} from '@remotion/transitions';
import {AbsoluteFill, Sequence} from 'remotion';
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
    margin: '0 auto',
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
    minWidth: '2rem',
  },
  stepText: {
    fontSize: '1.4rem',
    color: '#e2e8f0',
    flex: 1,
    marginBottom: '0.5rem',
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
  // 新增可视化样式
  flowChart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '2rem',
    padding: '2rem',
    backgroundColor: '#1e293b',
    borderRadius: '0.75rem',
  },
  flowBox: {
    backgroundColor: '#3b82f6',
    padding: '1rem 1.5rem',
    borderRadius: '0.5rem',
    color: 'white',
    fontWeight: 600,
    fontSize: '1.3rem',
    minWidth: '150px',
    textAlign: 'center',
  },
  flowBoxGreen: {
    backgroundColor: '#10b981',
    padding: '1rem 1.5rem',
    borderRadius: '0.5rem',
    color: 'white',
    fontWeight: 600,
    fontSize: '1.3rem',
    minWidth: '150px',
    textAlign: 'center',
  },
  flowBoxPurple: {
    backgroundColor: '#8b5cf6',
    padding: '1rem 1.5rem',
    borderRadius: '0.5rem',
    color: 'white',
    fontWeight: 600,
    fontSize: '1.3rem',
    minWidth: '150px',
    textAlign: 'center',
  },
  arrow: {
    fontSize: '2.5rem',
    color: '#64748b',
  },
  architectureBox: {
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '0.75rem',
    width: '100%',
    maxWidth: '900px',
    marginBottom: '2rem',
  },
  layer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#0f172a',
    borderRadius: '0.5rem',
  },
  layerLabel: {
    fontSize: '1.4rem',
    fontWeight: 600,
    minWidth: '150px',
    color: '#60a5fa',
  },
  layerContent: {
    flex: 1,
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  component: {
    backgroundColor: '#334155',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    fontSize: '1.1rem',
    color: '#e2e8f0',
  },
  componentHighlight: {
    backgroundColor: '#3b82f6',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    fontSize: '1.1rem',
    color: 'white',
    fontWeight: 600,
  },
  progressBar: {
    width: '100%',
    height: '2rem',
    backgroundColor: '#1e293b',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    marginBottom: '1rem',
  },
  progressFill: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 600,
    fontSize: '1rem',
  },
  comparisonTable: {
    width: '100%',
    maxWidth: '900px',
    borderCollapse: 'collapse',
    marginBottom: '2rem',
  },
  tableCell: {
    padding: '1rem',
    borderBottom: '1px solid #334155',
    textAlign: 'left',
    fontSize: '1.2rem',
  },
  tableHeader: {
    padding: '1rem',
    borderBottom: '2px solid #3b82f6',
    textAlign: 'left',
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#60a5fa',
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
      <p style={{ fontSize: '1.2rem', color: '#64748b' }}>深度技术解析 · AI 工程师必修</p>
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

// 场景 4: 核技巧（优化版 - 添加流程图）
const KernelTrickSceneOptimized: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>核技巧 - Softmax 近似</h2>
      
      {/* 流程图 */}
      <div style={styles.flowChart}>
        <div style={styles.flowBox}>
          <div>Softmax</div>
          <div style={{fontSize: '1rem', marginTop: '0.5rem', opacity: 0.9}}>O(n²)</div>
        </div>
        <span style={styles.arrow}>→</span>
        <div style={styles.flowBoxGreen}>
          <div>核函数</div>
          <div style={{fontSize: '1rem', marginTop: '0.5rem', opacity: 0.9}}>K(x,y)</div>
        </div>
        <span style={styles.arrow}>→</span>
        <div style={styles.flowBoxPurple}>
          <div>特征映射</div>
          <div style={{fontSize: '1rem', marginTop: '0.5rem', opacity: 0.9}}>φ(x)</div>
        </div>
      </div>

      <div style={styles.steps}>
        <div style={styles.step}>
          <span style={styles.stepNum}>1️⃣</span>
          <div style={{flex: 1}}>
            <p style={styles.stepText}>Mercer 定理：正定核函数可分解</p>
            <div style={styles.formulaBox}>
              <Latex formula="K(x, y) = \phi(x) \cdot \phi(y)^T" displayMode />
            </div>
          </div>
        </div>
        
        <div style={styles.step}>
          <span style={styles.stepNum}>2️⃣</span>
          <div style={{flex: 1}}>
            <p style={styles.stepText}>关键 insight</p>
            <div style={styles.formulaBox}>
              <Latex formula="\text{softmax}(QK^T) \approx \phi(Q) \cdot \phi(K)^T" displayMode />
            </div>
          </div>
        </div>
        
        <div style={styles.insight}>
          <p style={styles.insightText}>
            💡 φ(x) 的维度可以远小于 n，从而降低复杂度
          </p>
        </div>
      </div>
    </div>
  );
};

// 场景 5: 特征映射（优化版）
const FeatureMapSceneOptimized: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>特征映射 φ(x) 的具体形式</h2>
      
      <div style={styles.content}>
        <h3 style={styles.subheading}>方案 1：随机傅里叶特征（RFF）</h3>
        <div style={styles.formulaBoxLarge}>
          <Latex formula="\phi(x) = \frac{1}{\sqrt{m}}[\sin(w_1^T x), \cos(w_1^T x), \ldots]" displayMode />
        </div>
        <p style={styles.textBlue}>其中 <Latex formula="w_i \sim \mathcal{N}(0, \sigma^2 I)" /></p>
        
        <h3 style={{...styles.subheading, marginTop: '2rem'}}>方案 2：激活函数（Performer）</h3>
        <div style={styles.formulaBoxLarge}>
          <Latex formula="\phi(x) = \text{ReLU}(x) + \varepsilon" displayMode />
        </div>
        
        <div style={styles.insight}>
          <p style={styles.insightText}>
            💡 数学保证：<Latex formula="\mathbb{E}[\phi(x) \cdot \phi(y)^T] \approx K(x, y)" />
          </p>
          <p style={{...styles.stepTextSmall, marginTop: '0.5rem'}}>
            m 越大，近似越精确（但 m ≪ n）
          </p>
        </div>
      </div>
    </div>
  );
};

// 场景 6: 矩阵结合律（优化版 - 添加可视化）
const MatrixAssociativitySceneOptimized: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>矩阵结合律 - 改变计算顺序</h2>
      
      {/* 可视化对比 */}
      <div style={styles.architectureBox}>
        <div style={styles.layer}>
          <div style={styles.layerLabel}>标准注意力</div>
          <div style={styles.layerContent}>
            <div style={{...styles.component, backgroundColor: '#ef4444', color: 'white'}}>
              Q · K^T
            </div>
            <div style={styles.component}>(n × n)</div>
            <div style={styles.component}>· V</div>
            <div style={{...styles.component, backgroundColor: '#ef4444', color: 'white'}}>
              O(n²d)
            </div>
          </div>
        </div>
        
        <div style={{textAlign: 'center', margin: '1rem 0', fontSize: '2rem', color: '#64748b'}}>
          ⬇️ 矩阵结合律
        </div>
        
        <div style={styles.layer}>
          <div style={styles.layerLabel}>线性注意力</div>
          <div style={styles.layerContent}>
            <div style={styles.component}>φ(Q) ·</div>
            <div style={{...styles.componentHighlight, backgroundColor: '#10b981'}}>
              (φ(K)^T · V)
            </div>
            <div style={styles.component}>(d × d)</div>
            <div style={{...styles.componentHighlight, backgroundColor: '#10b981'}}>
              O(nd²)
            </div>
          </div>
        </div>
      </div>

      <div style={styles.insight}>
        <p style={styles.insightText}>
          💡 加速比：<Latex formula="\frac{O(n^2 d)}{O(n d^2)} = \frac{n}{d}" />
        </p>
        <p style={{...styles.stepTextSmall, marginTop: '0.5rem'}}>
          当 n=4096, d=64 时，加速 <strong style={{color: '#10b981'}}>64x</strong>
        </p>
      </div>
    </div>
  );
};

// 场景 7: 复杂度对比
const ComparisonScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>复杂度对比</h2>
      
      {/* 进度条可视化 */}
      <div style={{width: '100%', maxWidth: '800px', marginBottom: '2rem'}}>
        <div style={{marginBottom: '1.5rem'}}>
          <p style={{...styles.stepText, marginBottom: '0.5rem'}}>标准注意力 O(n²)</p>
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: '100%', backgroundColor: '#ef4444'}}>
              16M ops
            </div>
          </div>
        </div>
        
        <div>
          <p style={{...styles.stepText, marginBottom: '0.5rem'}}>线性注意力 O(n)</p>
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: '4%', backgroundColor: '#10b981'}}>
              64K ops
            </div>
          </div>
        </div>
      </div>
      
      <div style={styles.speedup}>
        <p style={styles.speedupText}>🚀 256x 加速比</p>
      </div>
    </div>
  );
};

// 场景 8: 应用场景
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

// 场景 9: DeltaNet（优化版 - 添加架构图）
const DeltaNetSceneOptimized: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>DeltaNet: 可擦写的记忆</h2>
      
      {/* 架构演进图 */}
      <div style={styles.architectureBox}>
        <div style={styles.layer}>
          <div style={{...styles.layerLabel, color: '#ef4444'}}>❌ Linear Attn</div>
          <div style={styles.layerContent}>
            <div style={styles.formulaBox}>
              <Latex formula="S_t = S_{t-1} + v_t k_t^T" />
            </div>
            <div style={{...styles.component, backgroundColor: '#ef4444', color: 'white', marginLeft: '1rem'}}>
              只加不减
            </div>
          </div>
        </div>
        
        <div style={styles.layer}>
          <div style={{...styles.layerLabel, color: '#f59e0b'}}>✅ DeltaNet</div>
          <div style={styles.layerContent}>
            <div style={styles.formulaBox}>
              <Latex formula="S_t = S_{t-1} - \beta_t(\text{error})k_t^T" />
            </div>
            <div style={{...styles.component, backgroundColor: '#f59e0b', color: 'white', marginLeft: '1rem'}}>
              Delta Rule
            </div>
          </div>
        </div>
        
        <div style={styles.layer}>
          <div style={{...styles.layerLabel, color: '#10b981'}}>⚡ Gated</div>
          <div style={styles.layerContent}>
            <div style={styles.formulaBox}>
              <Latex formula="S_t = \alpha_t S_{t-1} - \beta_t(\dots)" />
            </div>
            <div style={{...styles.componentHighlight, backgroundColor: '#10b981', marginLeft: '1rem'}}>
              α Gate
            </div>
          </div>
        </div>
      </div>

      <div style={styles.insight}>
        <p style={styles.insightText}>
          💡 α → 0: 快速清空 | α → 1: 精确更新
        </p>
      </div>
    </div>
  );
};

// 场景 10: Qwen3-Next（优化版 - 添加架构图）
const Qwen3NextSceneOptimized: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Qwen3-Next: 混合注意力架构</h2>
      
      {/* 架构比例可视化 */}
      <div style={{width: '100%', maxWidth: '900px', marginBottom: '2rem'}}>
        <div style={{marginBottom: '1rem'}}>
          <p style={{...styles.stepText, marginBottom: '0.5rem'}}>
            <span style={{color: '#3b82f6'}}>●</span> Gated DeltaNet (75%)
          </p>
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: '75%', backgroundColor: '#3b82f6'}}>
              线性复杂度 · 长序列
            </div>
          </div>
        </div>
        
        <div>
          <p style={{...styles.stepText, marginBottom: '0.5rem'}}>
            <span style={{color: '#a78bfa'}}>●</span> Gated Attention (25%)
          </p>
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: '25%', backgroundColor: '#a78bfa'}}>
              精确检索
            </div>
          </div>
        </div>
      </div>

      {/* 性能数据 */}
      <div style={styles.grid}>
        <div style={styles.appCard}>
          <div style={styles.appIcon}>📊</div>
          <h3 style={styles.appTitle}>256K 长上下文</h3>
          <p style={styles.appDesc}>超长序列处理</p>
        </div>
        <div style={styles.appCard}>
          <div style={styles.appIcon}>⚡</div>
          <h3 style={styles.appTitle}>1/2700 算力</h3>
          <p style={styles.appDesc}>极致效率</p>
        </div>
        <div style={styles.appCard}>
          <div style={styles.appIcon}>🧠</div>
          <h3 style={styles.appTitle}>512 专家 MoE</h3>
          <p style={styles.appDesc}>3B active</p>
        </div>
      </div>
    </div>
  );
};

// 场景 11: 总结
const SummaryScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>核心要点总结</h2>
      <div style={styles.summaryGrid}>
        <div style={styles.summaryCard}>
          <span style={styles.summaryIcon}>📊</span>
          <p style={styles.summaryText}>复杂度 <Latex formula="O(n^2) \rightarrow O(n \cdot d^2)" /></p>
        </div>
        <div style={styles.summaryCard}>
          <span style={styles.summaryIcon}>🧮</span>
          <p style={styles.summaryText}>核技巧近似 Softmax</p>
        </div>
        <div style={styles.summaryCard}>
          <span style={styles.summaryIcon}>🎯</span>
          <p style={styles.summaryText}>矩阵结合律改顺序</p>
        </div>
        <div style={styles.summaryCard}>
          <span style={styles.summaryIcon}>⚡</span>
          <p style={styles.summaryText}>支持长序列和流式</p>
        </div>
        <div style={styles.summaryCard}>
          <span style={styles.summaryIcon}>🔄</span>
          <p style={styles.summaryText}>DeltaNet 可擦写记忆</p>
        </div>
        <div style={styles.summaryCard}>
          <span style={styles.summaryIcon}>🚀</span>
          <p style={styles.summaryText}>Qwen3-Next 混合架构</p>
        </div>
      </div>
      <div style={styles.formulaBoxLarge}>
        <Latex formula="V' = \phi(Q) \cdot (\phi(K)^T V)" displayMode color="#10b981" />
      </div>
    </div>
  );
};

// 主视频组件
export const LinearAttentionVideoOptimized: React.FC = () => {
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
        <KernelTrickSceneOptimized />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={300}>
        <FeatureMapSceneOptimized />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={300}>
        <MatrixAssociativitySceneOptimized />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={180}>
        <ComparisonScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={150}>
        <ApplicationScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={300}>
        <DeltaNetSceneOptimized />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={240}>
        <Qwen3NextSceneOptimized />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={150}>
        <SummaryScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
