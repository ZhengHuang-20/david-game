import Pool from './base/pool';

export default class DataBus {
  constructor() {
    this.pool = new Pool(); // 新增对象池初始化
    this.reset();
  }
  
  reset() {
    this.frame = 0; // 当前帧数
    this.score = 0; // 当前分数
    this.bullets = []; // 存储子弹
    this.enemys = []; // 存储敌人
    this.animations = []; // 存储动画
    this.isGameOver = false; // 游戏是否结束
    this.pool.recoverAll('bullet'); 
    this.pool.recoverAll('enemy');
  }
}
