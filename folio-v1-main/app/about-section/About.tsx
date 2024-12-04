/**
 * About组件
 * 
 * 这是一个展示个人介绍和技能的部分，包含动画文本和音乐推荐轮播。
 * 使用了AnimatedTitle和AnimatedBody组件来实现文本动画效果。
 */

// 导入必要的组件和样式
import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      {/* 主要内容容器 */}
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        {/* 标题部分 */}
        <AnimatedTitle
          text="I MAKE BRANDS BEAUTIFUL, WEBSITES POWERFUL AND CONTENT CAPTIVATING."
          className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
        />

        {/* 内容部分：分为左右两栏 */}
        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          {/* 左栏：个人介绍 */}
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
            {/* 使用AnimatedBody组件显示多段介绍文本 */}
            <AnimatedBody text="I specialize in crafting high-converting landing pages..." />
            <AnimatedBody text="Whether I'm designing a sleek user interface..." className="hidden" />
            <AnimatedBody text="Beyond my work as a frontend developer..." />
            <AnimatedBody text="When I'm not coding..." />
            <AnimatedBody text="I'm currently working on some exciting projects..." />
          </div>

          {/* 右栏：技能列表 */}
          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            {/* Frontend Tools 部分 */}
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle text="Frontend Tools" className="..." />
              <AnimatedBody text="JavaScript (ES6+), React, Next.js..." />
            </div>

            {/* UI Libraries 部分 */}
            <div className="flex flex-col gap-3">
              <AnimatedTitle text="UI Libraries" className="..." />
              <AnimatedBody text="CSS3/SCSS/SASS, Tailwind CSS..." />
            </div>

            {/* Design Tools 部分 */}
            <div className="flex flex-col gap-3">
              <AnimatedTitle text="Design Tools" className="..." />
              <AnimatedBody text="Figma, Framer, FigJam..." />
            </div>
          </div>
        </div>

        {/* 音乐推荐部分 */}
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend..."
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
