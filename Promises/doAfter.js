const doAfter = (time) => {
  //1 var
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randValue = Math.random();
      if (randValue > 0.1) {
        resolve(randValue);
      } else {
        reject(randValue);
      }
    }, time * 1000);
  });
};


