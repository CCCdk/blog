interface Project {
  banner: string; // 图片链接
  title: string; // 项目标题
  description: string; // 项目简介
  link: string; // 项目链接
  tag?: string; // 项目标签
}

/**
 * TODO: 缺项处理
 * 在此处填写你的项目介绍
 */
export const projectsInfo: Project[] = [
  {
    banner: "/project-img/spreading-clouds.png",
    title: "Spreading clouds",
    description:
      "一个提供 GPT4 对话、为不同业务机构供应AI功能的人工智能网站。",
    link: "https://www.jdygpt.com/",
    tag: "Vue",
  },
  {
    banner: "/project-img/CodeFlow.jpg",
    title: "CodeFlow",
    description: "一个面向大学生计算机教育的平台",
    link: "http://oj.jdygpt.com/",
    tag: "Vue",
  }
];


export const projectsSource: Project[] = [
  {
    banner: "/project-img/AlemonJS.jpg",
    title: "AlemonJS",
    description:
      "基于 JavaScript 所构建的跨平台开发框架",
    link: "https://alemonjs.com/",
    tag: "React",
  }
];