<script setup lang="ts"></script>
<template>
  <div class="battery-data">
    <div class="card-title">
      <font-awesome-icon icon="fa-solid fa-chart-line" class="font-icon" />
      电池电芯特征数据
    </div>
    <div class="voltage-charact">
      <div class="voltage-wrap">
        <div class="valtage-header">
          <div class="header-left">
            <font-awesome-icon icon="fa-solid fa-bolt" class="icon" />
            电压特征数据
          </div>
          <div class="header-right">4项指标</div>
        </div>
        <div class="valtage-data">
          <div class="valtage-item">
            <div class="item-top">
              <div class="title">最大值Umax</div>
              <div class="data">4.2V</div>
            </div>
            <div class="item-bottom">
              <img src="@/assets/test.png" alt="" class="item-img" />
            </div>
          </div>
          <div class="valtage-item">2</div>
          <div class="valtage-item">3</div>
          <div class="valtage-item">4</div>
        </div>
      </div>
    </div>
    <div class="temperature-charact">
      <div class="temperature-wrap">
        <div class="temperature-header">
          <div class="header-left">
            <font-awesome-icon
              icon="fa-solid fa-temperature-full"
              class="icon"
            />
            温度特征数据
          </div>
          <div class="header-right">4项指标</div>
        </div>
        <div class="temperature-data">
          <div class="temperature-item">
            <div class="item-top">
              <div class="title">最大值Tmax</div>
              <div class="data">42℃</div>
            </div>
            <div class="item-bottom">
              <img src="@/assets/test.png" alt="" class="item-img" />
            </div>
          </div>
          <div class="temperature-item">2</div>
          <div class="temperature-item">3</div>
          <div class="temperature-item">4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.battery-data {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-medium);
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  transition: var(--transition-normal);
  padding: 16px;
  margin-top: 16px;
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
  .voltage-charact {
    margin-bottom: 48px;
    .voltage-wrap {
      .valtage-header {
        background: rgba(0, 212, 255, 0.05);
        border: 1px solid rgba(0, 212, 255, 0.2);
        border-radius: var(--radius-medium);
        padding: var(--spacing-md);
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--spacing-md);
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
        .header-left {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          .icon {
            color: var(--accent-blue);
          }
        }
        .header-right {
          color: var(--accent-blue);
          padding: 8px 10px;
          border: 1px solid var(--accent-blue);
          border-radius: 6px;
        }
      }
      .valtage-data {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: var(--spacing-lg);
        .valtage-item {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-small);
          &:hover {
            border-color: var(--border-highlight);
            box-shadow: 0 0 16px rgba(0, 255, 136, 0.15);
          }
          .item-top {
            background: var(--bg-secondary);
            padding: var(--spacing-md);
            .title {
              color: var(--text-secondary);
            }
            .data {
              color: var(--accent-blue);
              margin-top: var(--spacing-md);
            }
          }
          .item-bottom {
            text-align: center;
            padding: 8px 0px;
            .item-img {
              width: 50%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .temperature-charact {
    margin-bottom: 48px;
    .temperature-wrap {
      .temperature-header {
        background: rgba(0, 212, 255, 0.05);
        border: 1px solid rgba(0, 212, 255, 0.2);
        border-radius: var(--radius-medium);
        padding: var(--spacing-md);
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--spacing-md);
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
        .header-left {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          .icon {
            color: #ff9500;
          }
        }
        .header-right {
          color: #ff9500;
          padding: 8px 10px;
          border: 1px solid #ff9500;
          border-radius: 6px;
        }
      }
      .temperature-data {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: var(--spacing-lg);
        .temperature-item {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-small);
          &:hover {
            border-color: var(--border-highlight);
            box-shadow: 0 0 16px rgba(0, 255, 136, 0.15);
          }
          .item-top {
            background: var(--bg-secondary);
            padding: var(--spacing-md);
            .title {
              color: var(--text-secondary);
            }
            .data {
              color: #ff9500;
              margin-top: var(--spacing-md);
            }
          }
          .item-bottom {
            text-align: center;
            padding: 8px 0px;
            .item-img {
              width: 50%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
