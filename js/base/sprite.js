// ... 已有代码 ...

  constructor(imgSrc = '', width = 0, height = 0, x = 0, y = 0) {
    super();
    
    this.img = wx.createImage();
+   if (this.img._hasLoaded) return; // 防止重复初始化
    this.img.src = imgSrc;

    // ... 已有属性初始化代码 ...
  }

// ... 其他方法保持不变 ...