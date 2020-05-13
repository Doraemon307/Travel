export default {
  changeCity (state, city) {
    state.city = city
    try {
      // 使用localStorage本地存储数据
      localStorage.city = city
    } catch (e) {}
  }
}
