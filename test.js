gridLayoutWithParameter =(arr1)=> {
    
    $(arr1).each(i => {
      // 数组的索引
      let idx = randomFrom(0, arr.length - 1);

      // 计算li 元素 水平、垂直、纵深方向的偏移位
      offsetStepX = ((i % aScreenNum) % liElemRowMaxNum) * liElemOffsetX;
      offsetStepY = parseInt((i % aScreenNum) / liElemColMaxNum) * liElemOffsetY;
      offsetStepZ = parseInt(i / aScreenNum) * liElemOffsetZ;

      // 计算当前li 元素的坐标值
      liElemCoordX = liElemFristSiteX + offsetStepX;
      liElemCoordY = liElemFristSiteY + offsetStepY;
      liElemCoordZ = liElemFristSiteZ + offsetStepZ;

      $(arr1).eq(arr1[idx]).css({
        "transform": `translate3d(${liElemCoordX}px,${liElemCoordY}px,${liElemCoordZ}px)`,
        "transition": "4s ease-in-out"
      })

      // 删除数组中的值
      arr1.splice(idx, 1);
    }); currentStyle = gridLayout;
  }