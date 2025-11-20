<script setup lang="ts">
import core from '@/assets/core.jpg';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
  <div class="architecture-process">
    <div class="card-title">
      <font-awesome-icon icon="fa-solid fa-diagram-project" class="font-icon" />
      电池大模型架构流程
    </div>
    <div class="card-content">
      <div class="architecture-flow">
        <!-- 输入部分 -->
        <div class="input-section">
          <div class="section-header">
            <h3 class="section-title">模型输入</h3>
            <font-awesome-icon :icon="faRightToBracket" class="section-icon" />
          </div>
          <div class="input-items">
            <div class="input-item">
              <div class="input-icon">
                <font-awesome-icon icon="fa-solid fa-clock" />
              </div>
              <div class="input-info">
                <span class="input-label">时间序列</span>
              </div>
            </div>
            <div class="input-item">
              <div class="input-icon">
                <font-awesome-icon icon="fa-solid fa-bolt" />
              </div>
              <div class="input-info">
                <span class="input-label">电流</span>
              </div>
            </div>
            <div class="input-item">
              <div class="input-icon">
                <font-awesome-icon icon="fa-solid fa-battery-three-quarters" />
              </div>
              <div class="input-info">
                <span class="input-label">电压</span>
              </div>
            </div>
            <div class="input-item">
              <div class="input-icon">
                <font-awesome-icon icon="fa-solid fa-thermometer-half" />
              </div>
              <div class="input-info">
                <span class="input-label">温度</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 流动箭头1 -->
        <div class="flow-arrow">
          <div class="arrow-body">
            <div class="arrow-flow"></div>
          </div>
          <div class="arrow-head">→</div>
          <!-- <font-awesome-icon
            icon="fa-solid fa-arrow-right"
            class="arrow-icon"
          /> -->
        </div>

        <!-- 架构部分 -->
        <div class="architecture-section">
          <div class="section-header">
            <h3 class="section-title">核心架构</h3>
            <font-awesome-icon
              icon="fa-solid fa-microchip"
              class="section-icon"
            />

          </div>
          <div class="architecture-content">
            <div class="architecture-image-container">
              <img
                :src="core"
                alt="电池大模型核心架构"
                class="architecture-image"
                id="coreImage"
              />
              <div class="architecture-glow"></div>
            </div>
            <div class="architecture-title-label">
              <span class="architecture-title-text">Masked Autoencoder</span>
            </div>
            <div class="architecture-stats">
              <div class="stats-grid">
                <div class="stat-card scale">
                  <div class="stat-icon">
                    <font-awesome-icon icon="fa-solid fa-database" />
                  </div>
                  <div class="stat-content">
                    <span class="stat-label">参数量</span>
                    <span class="stat-value">3B</span>
                  </div>
                </div>
                <div class="stat-card layers">
                  <div class="stat-icon">
                    <font-awesome-icon icon="fa-solid fa-layer-group" />
                  </div>
                  <div class="stat-content">
                    <span class="stat-label">网络层数</span>
                    <span class="stat-value">36层</span>
                  </div>
                </div>
                <div class="stat-card hidden-dim">
                  <div class="stat-icon">
                    <font-awesome-icon icon="fa-square" />
                  </div>
                  <div class="stat-content">
                    <span class="stat-label">隐藏维度</span>
                    <span class="stat-value">1024</span>
                  </div>
                </div>
                <div class="stat-card attention">
                  <div class="stat-icon">
                    <font-awesome-icon icon="fa-solid fa-eye" />
                  </div>
                  <div class="stat-content">
                    <span class="stat-label">注意力头数</span>
                    <span class="stat-value">16个</span>
                  </div>
                </div>
                <div class="stat-card ffn">
                  <div class="stat-icon">
                    <font-awesome-icon icon="fa-solid fa-bolt" />
                  </div>
                  <div class="stat-content">
                    <span class="stat-label">前馈维度</span>
                    <span class="stat-value">4096</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 流动箭头2 -->
        <div class="flow-arrow flow-arrow-2">
          <div class="arrow-body">
            <div class="arrow-flow"></div>
          </div>
          <div class="arrow-head">→</div>
        </div>

        <!-- SOC-Time预测 -->
        <div class="output-section">
          <div class="section-header">
            <h3 class="section-title">SOC-Time预测</h3>
            <font-awesome-icon
              icon="fa-solid fa-chart-line"
              class="section-icon"
            />
          </div>
          <div class="output-content">
            <div class="soc-image-container">
              <img
                :src="core"
                alt="SOC-Time分析图表"
                class="soc-time-image"
                onclick="openImageModal('soc_time_0.png', 'SOC-Time预测分析')"
              />
              <div class="prediction-overlay">
                <div class="prediction-badge">SOC预测</div>
              </div>
            </div>
            <div class="output-description">
              <p class="output-text">SOC上升时间分析（ΔT per 0.3% SOC）</p>
              <p class="output-subtitle">基于电池大模型输出</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.architecture-process {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-medium);
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  transition: var(--transition-normal);
  padding: 16px;
  &:hover {
    border-color: var(--border-highlight);
    box-shadow: 0 1px 1px rgba(0, 255, 136, 0.15);
  }
  .card-title {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-primary);
    .font-icon {
      color: var(--accent-green);
      filter: drop-shadow(0 0 4px var(--accent-green));
    }
  }
  .card-content {
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;

    .architecture-flow {
      display: grid;
      grid-template-columns: 22% 4% 42% 4% 25%;
      align-items: center;
      gap: var(--spacing-md);
      padding: var(--spacing-md);
      min-height: 280px;
      .input-section {
        background: rgba(0, 212, 255, 0.05);
        border: 1px solid rgba(0, 212, 255, 0.2);
        border-radius: var(--radius-medium);
        padding: var(--spacing-md);
        position: relative;
        overflow: hidden;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #00d4ff, transparent);
          animation: inputGlow 3s ease-in-out infinite;
        }

        .input-items {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        .input-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-sm);
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-small);
          transition: var(--transition-normal);
          &:hover {
            background: rgba(0, 212, 255, 0.1);
            transform: translateX(5px);
          }
          .input-icon {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 212, 255, 0.2);
            border-radius: 50%;
            color: var(--accent-blue);
            font-size: 0.9rem;
          }
          .input-info {
            display: flex;
            flex-direction: column;
            flex: 1;
            .input-label {
              font-size: 0.9rem;
              color: var(--text-primary);
              font-weight: 500;
            }
          }
        }
      }
      /* 流动箭头样式 */
      .arrow-body {
        width: 60px;
        height: 4px;
        background: rgba(0, 255, 136, 0.3);
        border-radius: 2px;
        position: relative;
        overflow: hidden;
      }
      .flow-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .arrow-body {
          width: 40px;
          .arrow-flow {
            position: absolute;
            top: 0;
            left: -20px;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              #00ff88,
              transparent
            );
            animation: flowAnimation 2s ease-in-out infinite;
          }
        }
        .arrow-head {
          font-size: 1.5rem;
          color: var(--accent-green);
          margin-left: 5px;
          animation: arrowPulse 2s ease-in-out infinite;
        }
      }

      /* 架构区域样式 */
      .architecture-section {
        background: rgba(0, 255, 136, 0.05);
        border: 1px solid rgba(0, 255, 136, 0.2);
        border-radius: var(--radius-medium);
        padding: var(--spacing-md);
        position: relative;
        text-align: center;
      }
      /* 输出区域样式 */
      .output-section {
        background: rgba(255, 149, 0, 0.05);
        border: 1px solid rgba(255, 149, 0, 0.2);
        border-radius: var(--radius-medium);
        padding: var(--spacing-xs) var(--spacing-sm);
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff9500, transparent);
          animation: outputGlow 3s ease-in-out infinite;
        }
        .soc-image-container {
          position: relative;
          height: 130px;
          width: 100%;
          max-width: 200px;
          margin: var(--spacing-xs) auto;
          background: rgba(255, 149, 0, 0.05);
          border: 1px solid rgba(255, 149, 0, 0.2);
          border-radius: var(--radius-small);
          padding: var(--spacing-xs);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          .soc-time-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
            border-radius: 4px;
            transition: var(--transition-normal);
            &:hover {
              transform: scale(1.02);
              box-shadow: 0 4px 16px rgba(255, 149, 0, 0.3);
              cursor: pointer;
            }
          }
          .prediction-overlay {
            position: absolute;
            top: 8px;
            right: 8px;
            z-index: 10;
            .prediction-badge {
              background: rgba(255, 149, 0, 0.9);
              color: white;
              padding: 4px 8px;
              border-radius: 12px;
              font-size: 0.7rem;
              font-weight: 600;
              box-shadow: 0 2px 8px rgba(255, 149, 0, 0.4);
              backdrop-filter: blur(4px);
            }
          }
        }
        .output-description {
          text-align: center;
          margin-top: var(--spacing-xs);
          .output-text {
            font-size: 1rem;
            font-weight: 600;
            color: #ff9500;
            margin: 0 0 var(--spacing-xs) 0;
          }
          .output-subtitle {
            font-size: 0.8rem;
            color: var(--text-secondary);
            margin: 0;
            font-style: italic;
          }
        }
      }
    }
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--spacing-lg);
      padding: var(--spacing-md);
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-small);
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent,
          var(--accent-green),
          transparent
        );
        opacity: 0.8;
      }
      .section-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-primary);
        margin: 0;
      }

      .section-icon {
        color: var(--accent-green);
        font-size: 1.2rem;
        margin-right: var(--spacing-sm);
      }
    }
    .architecture-content {
      position: relative;
      .architecture-image-container {
        position: relative;
        margin: var(--spacing-md) 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        .architecture-image {
          // width: 400px;
          /* 增大到400px，充分利用空间 */
          height: 300px;
          border-radius: var(--radius-small);
          transition: var(--transition-normal);
        }

        .architecture-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: radial-gradient(
            circle,
            rgba(0, 255, 136, 0.2),
            transparent
          );
          border-radius: var(--radius-medium);
          animation: architectureGlow 4s ease-in-out infinite;
          z-index: -1;
        }
      }
      .architecture-title-label {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8px 0;
        .architecture-title-text {
          background: rgba(26, 35, 48, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(64, 224, 208, 0.3);
          border-radius: 12px;
          padding: 8px 16px;
          color: var(--accent-green);
          font-size: 0.9rem;
          font-weight: 600;
          text-shadow: 0 0 8px rgba(64, 224, 208, 0.5);
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
      }
      .architecture-stats {
        margin-top: var(--spacing-md);
        padding-top: var(--spacing-md);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-sm);
          .stat-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(0, 255, 136, 0.2);
            border-radius: var(--radius-small);
            padding: var(--spacing-sm);
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
            transition: var(--transition-normal);
            position: relative;
            overflow: hidden;
            &:hover {
              transform: translateY(-2px);
              border-color: rgba(0, 255, 136, 0.4);
              box-shadow: 0 4px 12px rgba(0, 255, 136, 0.2);
            }
            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 2px;
              background: linear-gradient(
                90deg,
                transparent,
                var(--accent-green),
                transparent
              );
              opacity: 0;
              transition: var(--transition-normal);
            }
            .stat-content {
              display: flex;
              flex-direction: column;
              flex: 1;
              min-width: 0;
              .stat-label {
                color: var(--text-secondary);
                margin-bottom: 2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }

              .stat-value {
                font-weight: 600;
                color: var(--accent-green);
                font-family: 'Courier New', monospace;
              }
            }
            .stat-icon {
              width: 24px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(0, 255, 136, 0.2);
              border-radius: 50%;
              color: var(--accent-green);
              font-size: 0.75rem;
              flex-shrink: 0;
              transition: var(--transition-normal);
            }
          }
          .stat-card:hover::before {
            opacity: 1;
          }
          .scale .stat-icon,
          .layers .stat-icon {
            background: linear-gradient(135deg, #00ff88, #00d4ff);
            color: #000;
          }

          .hidden-dim .stat-icon,
          .attention .stat-icon {
            background: linear-gradient(135deg, #00d4ff, #00bcd4);
            color: #000;
          }
          .ffn .stat-icon {
            background: linear-gradient(135deg, #00bcd4, #4dd0e1);
            color: #000;
          }
        }
      }
    }
  }
}
</style>
