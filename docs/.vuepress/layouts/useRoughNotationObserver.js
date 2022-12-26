import { ref } from 'vue'
import { annotate, annotationGroup } from 'rough-notation'

/**
 * 提供一个观察者，在所观察元素出现在视窗内时播放注解动画
 */
const useRoughNotationObserver = () => {
  // 已触发动画元素的 id
  const alreadyShownIds = ref([])

  /**
   * 所观察元素 isIntersecting 状态变化时触发
   * @param {Object[]} entries 当前视窗内状态改变的元素
   */
  const notation = (entries) => {
    // 1. 筛选当前与 viewport 相交且没有触发过动画的元素
    const intersectingElements = entries
      .filter(
        ({ isIntersecting, target: { id: ele_id } }) =>
          isIntersecting && !alreadyShownIds.value.includes(ele_id)
      )
      .map(({ target }) => target)

    // 2. 构建 annotation 对象数组
    const intersectingAnnotations = intersectingElements.map((ele) => {
      const {
        dataset: { notationType },
      } = ele
      return annotate(ele, { type: notationType })
    })

    // 3. 按数组元素顺序播放注解动画
    const group = annotationGroup(intersectingAnnotations)
    group.show()

    // 4. 收集已完成动画的元素
    intersectingElements.forEach(({ id: ele_id }) => alreadyShownIds.value.push(ele_id))
  }

  return {
    roughNotationObserver: new IntersectionObserver(notation, { threshold: 1.0 }),
  }
}

export default useRoughNotationObserver
