import UplusApi from "@uplus/uplus-api";
export const instance = new UplusApi();
export function uplusApiReady() {
  return new Promise((resolve, reject) => {
    console.log(instance);
    if (instance.deviceReady) {
      resolve(true);
    } else {
      instance.initDeviceReady()
        .then(() => {
          console.log("liutongbin===");
          resolve(true);
        })
        .catch((err) => {
          reject(`初始化失败:${JSON.stringify(err)}`);
        });
    }
  });
}
export async function upGetUserInfo() {
  const isReady = await uplusApiReady();

  console.log("liutongbin===res");
  if (instance.deviceReady && isReady) {
    instance.upUserModule
      .getUserInfo()
      .then((res) => {
        console.log("liutongbin===res", res);
        
      })
      .catch((err) => {
        console.log("liutongbin===err111", err);
        console.log(err);
      });
  }
  // instance
  //   .initDeviceReady()
  //   .then(function () {})
  //   .catch((err) => {
  //     console.log("liutongbin===err", err);
  //     console.log(err);
  //   });
}
