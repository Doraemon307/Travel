<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src='item.imgUrl' />
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/10/e980cba87b79a92f54c511a393749b8d.water.jpg_200x200_d8ceaa65.jpg',
        title: '穹窿山景区',
        desc: '江苏省苏州市吴中区穹窿山风景区'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/14/bf26ff3662c7a2a393835fbb.png_200x200_35c6466e.png',
        title: '苏州海洋馆',
        desc: '江苏省苏州市太湖国家旅游度假区环太湖大道28号'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201212/24/71e528a9f56c673393835fbb.png_200x200_377910b4.png',
        title: '苏州天颐温泉',
        desc: '江苏省苏州市吴中区越溪镇旺山生态园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top :.1rem
    line-height :.8rem
    background :#eee
    text-indent :.2rem
  .item
    overflow :hidden
    display :flex
    height :2.3rem
  .item-img
    width :1.9rem
    height :1.9rem
    padding :.1rem
  .item-info
    margin-top :.1rem
    flex :1
    padding :.1rem
    min-width :0
    .item-title
      line-height :.54rem
      font-size :.32rem
      ellipsis()
    .item-desc
      padding-top :.1rem
      line-height :.4rem
      color :#ccc
      ellipsis()
    .item-button
      line-height :.44rem
      margin-top :.16rem
      background :#ff9300
      padding :0 .2rem
      border-radius :.06rem
      color :#fff
</style>
