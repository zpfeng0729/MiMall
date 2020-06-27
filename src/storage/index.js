/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
  // 存储值
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val); // 递归
    } else {
      let val = this.getStorage(); // val是整个大的对象
      val[key] = value; // 大的模块下去存个value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  //获取某一个模块下面的属性，如user下面的userName
  //{"user":{"username":"jack","age":30,"sex":1}}  这里module_name就是user，key就是user下面的属性
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name); // 递归，返回user
      if (val) return val[key] // 返回user里面的属性
    }
    return this.getStorage()[key];
  },
  // 获取整个浏览器的缓存信息
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      delete val[module_name][key];
    } else {
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}
