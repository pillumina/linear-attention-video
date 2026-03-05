# Linear Attention Mechanism - 技术视频

专业的深度技术解析视频，讲解线性注意力机制（Linear Attention Mechanism）。

## 📊 视频规格

- **时长**: 48 秒
- **分辨率**: 1920x1080 (Full HD)
- **帧率**: 30 fps
- **风格**: 专业、严谨、学术

## 🎯 目标受众

- AI 工程师
- 研究人员
- 计算机科学学生
- 技术教育工作者

## 📝 内容大纲

### 1. 标题场景 (4秒)
- 主标题：线性注意力机制
- 副标题：Linear Attention Mechanism
- 核心亮点：O(n²) → O(n)

### 2. 标准注意力问题 (6秒)
- 标准注意力公式
- 复杂度分析：O(n²·d)
- 问题列表：
  - 长序列处理困难
  - 内存占用随 n² 增长
  - 计算时间随 n² 增加

### 3. 线性注意力核心思想 (6秒)
- 对比标准注意力 vs 线性注意力
- 关键洞察：利用矩阵结合律
- 复杂度降低：O(n²) → O(n·d²)

### 4. 数学推导 (7秒)
- 步骤 1: 标准注意力定义
- 步骤 2: 引入特征映射
- 步骤 3: 线性化形式
- 步骤 4: 矩阵形式（关键！）

### 5. 特征映射函数 (5秒)
- ELU + 1
- 随机特征映射
- Performer (FAVOR+)

### 6. 复杂度对比 (6秒)
- 可视化对比图表
- 实际数值对比
- 加速比展示

### 7. 应用场景 (5秒)
- 长序列建模
- 流式处理
- 高效推理

### 8. 总结 (5秒)
- 核心要点回顾
- 关键公式强调

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

访问 http://localhost:3000 预览视频。

### 渲染视频

```bash
npm run build
```

输出文件：`out/video.mp4`

## 🛠️ 技术栈

- **Remotion**: React 视频框架
- **KaTeX**: LaTeX 公式渲染
- **TypeScript**: 类型安全
- **@remotion/transitions**: 场景转换

## 📂 项目结构

```
linear-attention-video/
├── src/
│   ├── components/
│   │   └── LaTeX.tsx          # LaTeX 公式组件
│   ├── scenes/
│   │   ├── TitleScene.tsx
│   │   ├── StandardAttentionProblem.tsx
│   │   ├── LinearAttentionCore.tsx
│   │   ├── MathDerivation.tsx
│   │   ├── FeatureMaps.tsx
│   │   ├── ComplexityComparison.tsx
│   │   ├── Applications.tsx
│   │   └── Summary.tsx
│   ├── LinearAttentionVideo.tsx  # 主视频组件
│   ├── Root.tsx                   # Remotion 根组件
│   └── index.tsx                  # 入口文件
├── package.json
├── tsconfig.json
├── remotion.config.ts
└── README.md
```

## 🎨 设计特点

### 视觉风格
- 深色主题 (#0f172a)
- 渐变标题
- 卡片式布局
- 动画过渡效果

### 动画效果
- Spring 物理动画
- 渐入渐出
- 序列化显示
- 平滑过渡

### 公式展示
- KaTeX 渲染
- 高对比度配色
- 多尺寸支持
- 颜色自定义

## 📚 参考资源

### 论文
- [Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention](https://arxiv.org/abs/2006.16236)
- [Rethinking Attention with Performers](https://arxiv.org/abs/2009.14794)
- [Efficient Attention: Attention with Linear Complexities](https://arxiv.org/abs/1812.01243)

### 博客
- [Linear Attention Mechanism Explained](https://linear-attention.dev)
- [Understanding Linear Transformers](https://d2l.ai/chapter_attention-mechanisms/linear-attention.html)

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

*Created with Remotion and ❤️*
