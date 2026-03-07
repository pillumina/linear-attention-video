import React from 'react';
import {TransitionSeries} from '@remotion/transitions';
import {FadeInUp, SpringScale, StepByStepFormula, AnimatedList, Latex} from './AnimationComponents';

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
    padding: '3rem',  // 增加 padding 防止截断
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '4rem',  // 稍微缩小
    fontWeight: 700,
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '2rem',
    fontWeight: 300,
    color: '#94a3b8',
    marginBottom: '1.5rem',
  },
  heading: {
    fontSize: '2.5rem',  // 稍微缩小
    fontWeight: 600,
    marginBottom: '2rem',
  },
  subheading: {
    fontSize: '1.6rem',
    fontWeight: 500,
    color: '#94a3b8',
    marginBottom: '1.5rem',
  },
  content: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '1000px',  // 缩小以适应画布
  },
  formulaBox: {
    backgroundColor: '#1e293b',
    padding: '1.2rem 1.8rem',  // 缩小 padding
    borderRadius: '0.5rem',
    marginBottom: '1.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.3rem',  // 稍微缩小
  },
  formulaBoxLarge: {
    backgroundColor: '#1e293b',
    padding: '1.5rem 2.5rem',  // 缩小 padding
    borderRadius: '0.75rem',
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.4rem',  // 稍微缩小
  },
  text: {
    fontSize: '1.4rem',
    color: '#ef4444',
    marginBottom: '1.2rem',
  },
  textGreen: {
    fontSize: '1.4rem',
    color: '#10b981',
    marginBottom: '1.2rem',
  },
  textBlue: {
    fontSize: '1.4rem',
    color: '#3b82f6',
    marginBottom: '1.2rem',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2.5rem',  // 缩小 gap
    alignItems: 'center',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',  // 允许换行防止截断
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '1.8rem',  // 缩小 padding
    borderRadius: '0.5rem',
    textAlign: 'center',
    minWidth: '280px',  // 缩小
    maxWidth: '450px',  // 限制最大宽度
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: 600,
    marginBottom: '0.8rem',
  },
  complexity: {
    fontSize: '1.6rem',
    fontWeight: 700,
  },
  vs: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#64748b',
  },
  steps: {
    textAlign: 'left',
    width: '100%',
    maxWidth: '850px',  // 缩小
  },
  step: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1.2rem',
    gap: '0.8rem',
  },
  stepNum: {
    fontSize: '1.4rem',
    fontWeight: 700,
    minWidth: '2rem',
  },
  stepText: {
    fontSize: '1.3rem',
    color: '#e2e8f0',
    flex: 1,
  },
  stepTextSmall: {
    fontSize: '1.1rem',
    color: '#cbd5e1',
    flex: 1,
    lineHeight: '1.5',
  },
  insight: {
    backgroundColor: '#1e3a5f',
    padding: '1rem 1.2rem',  // 缩小 padding
    borderRadius: '0.5rem',
    marginTop: '0.8rem',
    borderLeft: '4px solid #3b82f6',
  },
  insightText: {
    fontSize: '1.1rem',
    color: '#60a5fa',
  },
  metric: {
    textAlign: 'center',
    padding: '1.2rem',
  },
  metricTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  metricValue: {
    fontSize: '2.2rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  metricDetail: {
    fontSize: '1rem',
    color: '#94a3b8',
  },
  speedup: {
    backgroundColor: '#1e3a5f',
    padding: '0.8rem 1.8rem',
    borderRadius: '0.5rem',
    marginTop: '1.2rem',
  },
  speedupText: {
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#3b82f6',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '1000px',  // 缩小
    marginTop: '1.5rem',
  },
  appCard: {
    backgroundColor: '#1e293b',
    padding: '1.2rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
  },
  appIcon: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
  },
  appTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  appDesc: {
    fontSize: '0.95rem',
    color: '#94a3b8',
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.2rem',
    width: '100%',
    maxWidth: '850px',  // 缩小
    marginBottom: '1.5rem',
  },
  summaryCard: {
    backgroundColor: '#1e293b',
    padding: '1.2rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  summaryIcon: {
    fontSize: '1.8rem',
  },
  summaryText: {
    fontSize: '1.1rem',
    color: '#e2e8f0',
    flex: 1,
  },
  // 新增：架构可视化样式
  architectureBox: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    width: '100%',
    maxWidth: '850px',
    marginBottom: '1.5rem',
  },
  layer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    marginBottom: '1.2rem',
    padding: '0.8rem',
    backgroundColor: '#0f172a',
    borderRadius: '0.5rem',
    flexWrap: 'wrap',  // 允许换行
  },
  layerLabel: {
    fontSize: '1.3rem',
    fontWeight: 600,
    minWidth: '120px',
    color: '#60a5fa',
  },
  layerContent: {
    flex: 1,
    display: 'flex',
    gap: '0.8rem',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  component: {
    backgroundColor: '#334155',
    padding: '0.4rem 0.8rem',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    color: '#e2e8f0',
  },
  componentHighlight: {
    backgroundColor: '#3b82f6',
    padding: '0.4rem 0.8rem',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    color: 'white',
    fontWeight: 600,
  },
  // 新增：进度条样式
  progressBar: {
    width: '100%',
    height: '1.8rem',
    backgroundColor: '#1e293b',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    marginBottom: '0.8rem',
  },
  progressFill: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 600,
    fontSize: '0.95rem',
  },
};

// 场景 1: 标题页
const TitleScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={30}>
        <h1 style={styles.title}>线性注意力机制</h1>
      </FadeInUp>
      
      <FadeInUp delay={15} duration={30}>
        <h2 style={styles.subtitle}>Linear Attention Mechanism</h2>
      </FadeInUp>
      
      <SpringScale delay={30}>
        <div style={styles.formulaBoxLarge}>
          <Latex formula="O(n^2) \rightarrow O(n)" displayMode color="#3b82f6" />
        </div>
      </SpringScale>
      
      <FadeInUp delay={45} duration={20}>
        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>深度技术解析 · AI 工程师必修</p>
      </FadeInUp>
    </div>
  );
};

// 场景 2: 问题定义
const ProblemScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={20}>
        <h2 style={styles.heading}>标准注意力机制的复杂度问题</h2>
      </FadeInUp>
      
      <div style={styles.content}>
        <SpringScale delay={20}>
          <div style={styles.formulaBoxLarge}>
            <Latex formula="\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d}}\right) V" displayMode />
          </div>
        </SpringScale>
        
        <FadeInUp delay={40} duration={20}>
          <p style={styles.text}>复杂度: <Latex formula="O(n^2 \cdot d)" /></p>
        </FadeInUp>
        
        <AnimatedList items={[
          {text: '• 长序列处理困难 (n > 4096)', delay: 60},
          {text: '• 内存占用随 n² 增长', delay: 80},
          {text: '• 计算时间随 n² 增加', delay: 100},
        ]} />
      </div>
    </div>
  );
};

// 场景 3: 核心思想
const SolutionScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={20}>
        <h2 style={styles.heading}>线性注意力的核心思想</h2>
      </FadeInUp>
      
      <div style={styles.row}>
        <SpringScale delay={30}>
          <div style={styles.card}>
            <h3 style={{...styles.cardTitle, color: '#ef4444'}}>标准注意力</h3>
            <div style={styles.formulaBox}>
              <Latex formula="\text{softmax}(QK^T)V" />
            </div>
            <p style={{...styles.complexity, color: '#ef4444'}}>
              <Latex formula="O(n^2)" />
            </p>
          </div>
        </SpringScale>
        
        <FadeInUp delay={60} duration={15}>
          <div style={styles.vs}>VS</div>
        </FadeInUp>
        
        <SpringScale delay={90}>
          <div style={styles.card}>
            <h3 style={{...styles.cardTitle, color: '#10b981'}}>线性注意力</h3>
            <div style={styles.formulaBox}>
              <Latex formula="\phi(Q) \cdot (\phi(K)^T V)" />
            </div>
            <p style={{...styles.complexity, color: '#10b981'}}>
              <Latex formula="O(n)" />
            </p>
          </div>
        </SpringScale>
      </div>
    </div>
  );
};

// 场景 4: 核技巧（优化版 - 添加流程可视化）
const KernelTrickScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={20}>
        <h2 style={styles.heading}>核技巧 - Softmax 近似</h2>
      </FadeInUp>
      
      {/* 流程可视化 */}
      <FadeInUp delay={20} duration={25}>
        <div style={{...styles.row, marginBottom: '2rem'}}>
          <div style={{
            ...styles.card,
            backgroundColor: '#3b82f6',
            minWidth: '180px'
          }}>
            <div style={{...styles.cardTitle, color: 'white'}}>Softmax</div>
            <div style={{fontSize: '1rem', color: 'rgba(255,255,255,0.9)'}}>O(n²)</div>
          </div>
          <div style={{...styles.vs, fontSize: '2.5rem'}}>→</div>
          <div style={{
            ...styles.card,
            backgroundColor: '#10b981',
            minWidth: '180px'
          }}>
            <div style={{...styles.cardTitle, color: 'white'}}>核函数</div>
            <div style={{fontSize: '1rem', color: 'rgba(255,255,255,0.9)'}}>K(x,y)</div>
          </div>
          <div style={{...styles.vs, fontSize: '2.5rem'}}>→</div>
          <div style={{
            ...styles.card,
            backgroundColor: '#8b5cf6',
            minWidth: '180px'
          }}>
            <div style={{...styles.cardTitle, color: 'white'}}>特征映射</div>
            <div style={{fontSize: '1rem', color: 'rgba(255,255,255,0.9)'}}>φ(x)</div>
          </div>
        </div>
      </FadeInUp>
      
      <div style={styles.steps}>
        <FadeInUp delay={50} duration={20}>
          <div style={styles.step}>
            <span style={styles.stepNum}>1️⃣</span>
            <div style={{flex: 1}}>
              <p style={styles.stepText}>Mercer 定理：核函数可分解</p>
              <div style={styles.formulaBox}>
                <Latex formula="K(x, y) = \phi(x) \cdot \phi(y)^T" displayMode />
              </div>
            </div>
          </div>
        </FadeInUp>
        
        <FadeInUp delay={100} duration={20}>
          <div style={styles.step}>
            <span style={styles.stepNum}>2️⃣</span>
            <div style={{flex: 1}}>
              <p style={styles.stepText}>关键 insight</p>
              <div style={styles.formulaBox}>
                <Latex formula="\text{softmax}(QK^T) \approx \phi(Q) \cdot \phi(K)^T" displayMode />
              </div>
            </div>
          </div>
        </FadeInUp>
        
        <FadeInUp delay={150} duration={20}>
          <div style={styles.insight}>
            <p style={styles.insightText}>
              💡 φ(x) 的维度可以远小于 n，从而降低复杂度
            </p>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

// 场景 5: 特征映射
const FeatureMapScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={20}>
        <h2 style={styles.heading}>特征映射 φ(x) 的具体形式</h2>
      </FadeInUp>
      
      <div style={styles.content}>
        <FadeInUp delay={30} duration={20}>
          <h3 style={styles.subheading}>方案 1：随机傅里叶特征（RFF）</h3>
        </FadeInUp>
        
        <SpringScale delay={60}>
          <div style={styles.formulaBoxLarge}>
            <Latex formula="\phi(x) = \frac{1}{\sqrt{m}}[\sin(w_1^T x), \cos(w_1^T x), \ldots]" displayMode />
          </div>
        </SpringScale>
        
        <FadeInUp delay={90} duration={15}>
          <p style={styles.textBlue}>
            其中 <Latex formula="w_i \sim \mathcal{N}(0, \sigma^2 I)" />
          </p>
        </FadeInUp>
        
        <FadeInUp delay={120} duration={20}>
          <h3 style={{...styles.subheading, marginTop: '1.5rem'}}>方案 2：激活函数（Performer）</h3>
        </FadeInUp>
        
        <SpringScale delay={150}>
          <div style={styles.formulaBoxLarge}>
            <Latex formula="\phi(x) = \text{ReLU}(x) + \varepsilon" displayMode />
          </div>
        </SpringScale>
        
        <FadeInUp delay={180} duration={20}>
          <div style={styles.insight}>
            <p style={styles.insightText}>
              💡 数学保证：<Latex formula="\mathbb{E}[\phi(x) \cdot \phi(y)^T] \approx K(x, y)" />
            </p>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

// 场景 6: 矩阵结合律（优化版 - 添加架构可视化）
const MatrixAssociativityScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={20}>
        <h2 style={styles.heading}>矩阵结合律 - 改变计算顺序</h2>
      </FadeInUp>
      
      {/* 架构可视化 */}
      <SpringScale delay={30}>
        <div style={styles.architectureBox}>
          <div style={styles.layer}>
            <div style={{...styles.layerLabel, color: '#ef4444'}}>标准注意力</div>
            <div style={styles.layerContent}>
              <div style={{...styles.component, backgroundColor: '#ef4444', color: 'white'}}>
                Q·K^T
              </div>
              <div style={styles.component}>(n×n)</div>
              <div style={styles.component}>· V</div>
              <div style={{...styles.component, backgroundColor: '#ef4444', color: 'white'}}>
                O(n²d)
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center', margin: '0.8rem 0', fontSize: '1.8rem', color: '#64748b'}}>
            ⬇️ 矩阵结合律
          </div>
          
          <div style={styles.layer}>
            <div style={{...styles.layerLabel, color: '#10b981'}}>线性注意力</div>
            <div style={styles.layerContent}>
              <div style={styles.component}>φ(Q)·</div>
              <div style={{...styles.componentHighlight, backgroundColor: '#10b981'}}>
                (φ(K)^T·V)
              </div>
              <div style={styles.component}>(d×d)</div>
              <div style={{...styles.componentHighlight, backgroundColor: '#10b981'}}>
                O(nd²)
              </div>
            </div>
          </div>
        </div>
      </SpringScale>

      <FadeInUp delay={60} duration={20}>
        <div style={styles.insight}>
          <p style={styles.insightText}>
            💡 加速比：<Latex formula="\frac{O(n^2 d)}{O(n d^2)} = \frac{n}{d}" />
          </p>
          <p style={{...styles.stepTextSmall, marginTop: '0.5rem'}}>
            当 n=4096, d=64 时，加速 <strong style={{color: '#10b981'}}>64x</strong>
          </p>
        </div>
      </FadeInUp>
    </div>
  );
};

// 场景 7: 性能对比（优化版 - 添加进度条）
const ComparisonScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={20}>
        <h2 style={styles.heading}>复杂度对比</h2>
      </FadeInUp>
      
      {/* 进度条可视化 */}
      <div style={{width: '100%', maxWidth: '750px', marginBottom: '1.5rem'}}>
        <FadeInUp delay={30} duration={20}>
          <div style={{marginBottom: '1.2rem'}}>
            <p style={{...styles.stepText, marginBottom: '0.5rem'}}>标准注意力 O(n²)</p>
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: '100%', backgroundColor: '#ef4444'}}>
                16M ops
              </div>
            </div>
          </div>
        </FadeInUp>
        
        <FadeInUp delay={60} duration={20}>
          <div>
            <p style={{...styles.stepText, marginBottom: '0.5rem'}}>线性注意力 O(n)</p>
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: '4%', backgroundColor: '#10b981'}}>
                64K ops
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
      
      <SpringScale delay={90}>
        <div style={styles.speedup}>
          <p style={styles.speedupText}>🚀 256x 加速比</p>
        </div>
      </SpringScale>
    </div>
  );
};

// 场景 8: 应用场景
const ApplicationScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={20}>
        <h2 style={styles.heading}>应用场景</h2>
      </FadeInUp>
      
      <div style={styles.grid}>
        <SpringScale delay={30}>
          <div style={styles.appCard}>
            <span style={styles.appIcon}>📄</span>
            <h3 style={styles.appTitle}>长序列建模</h3>
            <p style={styles.appDesc}>文档摘要、代码分析</p>
          </div>
        </SpringScale>
        
        <SpringScale delay={50}>
          <div style={styles.appCard}>
            <span style={styles.appIcon}>⚡</span>
            <h3 style={styles.appTitle}>流式处理</h3>
            <p style={styles.appDesc}>实时翻译、语音识别</p>
          </div>
        </SpringScale>
        
        <SpringScale delay={70}>
          <div style={styles.appCard}>
            <span style={styles.appIcon}>🚀</span>
            <h3 style={styles.appTitle}>高效推理</h3>
            <p style={styles.appDesc}>移动端 AI、边缘设备</p>
          </div>
        </SpringScale>
      </div>
    </div>
  );
};

// 场景 9: DeltaNet（新增 - 带动画）
const DeltaNetScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={20}>
        <h2 style={styles.heading}>DeltaNet: 可擦写的记忆</h2>
      </FadeInUp>
      
      {/* 架构演进可视化 */}
      <SpringScale delay={30}>
        <div style={styles.architectureBox}>
          <div style={styles.layer}>
            <div style={{...styles.layerLabel, color: '#ef4444'}}>❌ Linear Attn</div>
            <div style={styles.layerContent}>
              <div style={styles.formulaBox}>
                <Latex formula="S_t = S_{t-1} + v_t k_t^T" />
              </div>
              <div style={{...styles.component, backgroundColor: '#ef4444', color: 'white'}}>
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
              <div style={{...styles.component, backgroundColor: '#f59e0b', color: 'white'}}>
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
              <div style={{...styles.componentHighlight, backgroundColor: '#10b981'}}>
                α Gate
              </div>
            </div>
          </div>
        </div>
      </SpringScale>

      <FadeInUp delay={60} duration={20}>
        <div style={styles.insight}>
          <p style={styles.insightText}>
            💡 α → 0: 快速清空 | α → 1: 精确更新
          </p>
        </div>
      </FadeInUp>
    </div>
  );
};

// 场景 10: Qwen3-Next（新增 - 带动画）
const Qwen3NextScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={20}>
        <h2 style={styles.heading}>Qwen3-Next: 混合注意力架构</h2>
      </FadeInUp>
      
      {/* 架构比例可视化 */}
      <div style={{width: '100%', maxWidth: '850px', marginBottom: '1.5rem'}}>
        <FadeInUp delay={30} duration={20}>
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
        </FadeInUp>
        
        <FadeInUp delay={60} duration={20}>
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
        </FadeInUp>
      </div>

      {/* 性能数据 */}
      <div style={styles.grid}>
        <SpringScale delay={90}>
          <div style={styles.appCard}>
            <div style={styles.appIcon}>📊</div>
            <h3 style={styles.appTitle}>256K 长上下文</h3>
            <p style={styles.appDesc}>超长序列处理</p>
          </div>
        </SpringScale>
        
        <SpringScale delay={110}>
          <div style={styles.appCard}>
            <div style={styles.appIcon}>⚡</div>
            <h3 style={styles.appTitle}>1/2700 算力</h3>
            <p style={styles.appDesc}>极致效率</p>
          </div>
        </SpringScale>
        
        <SpringScale delay={130}>
          <div style={styles.appCard}>
            <div style={styles.appIcon}>🧠</div>
            <h3 style={styles.appTitle}>512 专家 MoE</h3>
            <p style={styles.appDesc}>3B active</p>
          </div>
        </SpringScale>
      </div>
    </div>
  );
};

// 场景 11: 总结（更新）
const SummaryScene: React.FC = () => {
  return (
    <div style={styles.container}>
      <FadeInUp delay={0} duration={20}>
        <h2 style={styles.heading}>核心要点总结</h2>
      </FadeInUp>
      
      <div style={styles.summaryGrid}>
        <SpringScale delay={30}>
          <div style={styles.summaryCard}>
            <span style={styles.summaryIcon}>📊</span>
            <p style={styles.summaryText}>复杂度 <Latex formula="O(n^2) \rightarrow O(n \cdot d^2)" /></p>
          </div>
        </SpringScale>
        
        <SpringScale delay={45}>
          <div style={styles.summaryCard}>
            <span style={styles.summaryIcon}>🧮</span>
            <p style={styles.summaryText}>核技巧近似 Softmax</p>
          </div>
        </SpringScale>
        
        <SpringScale delay={60}>
          <div style={styles.summaryCard}>
            <span style={styles.summaryIcon}>🎯</span>
            <p style={styles.summaryText}>矩阵结合律改顺序</p>
          </div>
        </SpringScale>
        
        <SpringScale delay={75}>
          <div style={styles.summaryCard}>
            <span style={styles.summaryIcon}>⚡</span>
            <p style={styles.summaryText}>支持长序列和流式</p>
          </div>
        </SpringScale>
        
        <SpringScale delay={90}>
          <div style={styles.summaryCard}>
            <span style={styles.summaryIcon}>🔄</span>
            <p style={styles.summaryText}>DeltaNet 可擦写记忆</p>
          </div>
        </SpringScale>
        
        <SpringScale delay={105}>
          <div style={styles.summaryCard}>
            <span style={styles.summaryIcon}>🚀</span>
            <p style={styles.summaryText}>Qwen3-Next 混合架构</p>
          </div>
        </SpringScale>
      </div>
      
      <SpringScale delay={120}>
        <div style={styles.formulaBoxLarge}>
          <Latex formula="V' = \phi(Q) \cdot (\phi(K)^T V)" displayMode color="#10b981" />
        </div>
      </SpringScale>
    </div>
  );
};

// 主视频组件
export const LinearAttentionVideoFinal: React.FC = () => {
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
      
      <TransitionSeries.Sequence durationInFrames={300}>
        <DeltaNetScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={240}>
        <Qwen3NextScene />
      </TransitionSeries.Sequence>
      
      <TransitionSeries.Sequence durationInFrames={150}>
        <SummaryScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
