<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src='item.imgUrl' />
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/70/b2f8425ce486ed.jpg_r_640x214_5db9de57.jpg',
        title: '细嗅历史的气息',
        desc: '阅尽沧桑，不变的是恬静，待君细细品味'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/d7/5acd9640ee6cb2.jpg_r_640x214_975d2c3f.jpg',
        title: '情侣必游',
        desc: '浪漫的乐园、静宜的园林，每一处，都弥漫这江南小镇委婉温馨的气息……'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/ab/1c456b9cbffc31.jpg_r_640x214_1c2552de.jpg',
        title: '魅力江南古镇',
        desc: '发呆静思，度过一个悠闲的下午'
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
  .item-img-wrapper
    height :0
    overflow :hidden
    padding-bottom :37.4%
    .item-img
        width :100%
  .item-info
    margin-top :.1rem
    text-indent :.2rem
    .item-title
      line-height :.54rem
      font-size :.32rem
      ellipsis()
    .item-desc
      padding-top :.1rem
      padding-bottom :.3rem
      line-height :.4rem
      color :#616161
      ellipsis()
</style>
