/**
 * AnimatedBody组件
 * 
 * 这是一个使用Framer Motion实现的文本动画组件。当文本进入视图时，
 * 会从下方滑入并淡入显示。
 * 
 * @component
 * 
 * Props:
 * @param {string} text - 要显示的文本内容
 * @param {string} [className] - 可选的CSS类名，用于自定义样式
 * @param {string} [wordSpace] - 预留的单词间距属性（当前未使用）
 * @param {string} [charSpace] - 预留的字符间距属性（当前未使用）
 * 
 * 动画特性:
 * - 触发条件: 元素进入视图10%时触发
 * - 初始状态: 透明度0，向下偏移1em
 * - 结束状态: 透明度1，回到原位置
 * - 动画时长: 1秒
 * - 延迟时间: 0.1秒
 * - 缓动函数: 自定义贝塞尔曲线 [0.2, 0.65, 0.3, 0.9]
 * 
 * 无障碍特性:
 * - 包含aria-label用于屏幕阅读器
 * - 设置role="heading"表明这是一个标题元素
 * 
 * 使用示例:
 * ```jsx
 * <AnimatedBody 
 *   text="Hello World"
 *   className="text-lg text-gray-800"
 * />
 * ```
 */

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedBodyProps = {
  text: string;
  className?: string;
  wordSpace?: string;
  charSpace?: string;
};

export default function AnimatedBody({
  text,
  className,
  wordSpace,
  charSpace,
}: AnimatedBodyProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const bodyAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: 0.1,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.p
      aria-label={text}
      role="heading"
      className={className}
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={ctrls}
      variants={bodyAnimation}
    >
      {text}
    </motion.p>
  );
}
