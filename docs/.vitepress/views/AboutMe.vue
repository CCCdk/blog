<template>
  <div class="mt-2 px-6 pb-24 md:px-12 md:pb-32 lg:px-16">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-center">
      <!-- 头像与徽章 -->
      <div class="relative mx-auto w-full">
        <!-- 头像 -->
        <div class="relative h-52 py-2">
          <div
            class="avatar-ping absolute left-1/2 top-1/2 mx-auto h-48 w-48 rounded-full shadow-[0px_0px_3px#147eae] dark:shadow-[0px_0px_3px#9ba0a9]"
          ></div>
          <img class="mx-auto block h-48 w-48 rounded-full" src="./img/avatar.jpg" alt="avatar" />
        </div>
        <!-- Right-tags -->
        <p
          style="top: 32%"
          class="tag-bounce absolute hidden rounded-full px-3 py-0.5 text-sm font-bold shadow-[0px_0px_1px_1px#eee] sm:left-[69%] sm:block md:left-[66%] lg:left-[63%] xl:left-[60%]"
        >
          🎵 聪明的小孩
        </p>
        <p
          style="top: 50%"
          class="tag-bounce absolute hidden rounded-full px-3 py-0.5 text-sm font-bold shadow-[0px_0px_1px_1px#eee] sm:left-[69%] sm:block md:left-[66%] lg:left-[63%] xl:left-[60%]"
        >
          追番小达人~
        </p>
        <!-- Left-tags -->
        <p
          style="top: 32%"
          class="tag-bounce absolute hidden rounded-full px-3 py-0.5 text-sm font-bold shadow-[0px_0px_1px_1px#eee] sm:left-[8%] sm:block md:left-[13%] lg:left-[21%] xl:left-[27%]"
        >
          🌙 倒头就睡懒羊羊
        </p>
        <p
          style="top: 50%"
          class="tag-bounce absolute hidden rounded-full px-3 py-0.5 text-sm font-bold shadow-[0px_0px_1px_1px#eee] sm:left-[8%] sm:block md:left-[13%] lg:left-[21%] xl:left-[27%]"
        >
          宇宙无敌暴龙战士🚀
        </p>
      </div>
      <!-- 概述与箴言 -->
      <div class="mt-4 flex w-full flex-col">
        <div class="flex flex-col justify-between gap-5 md:flex-row md:gap-0">
          <!-- 概述 -->
          <div
            class="flex w-full flex-col justify-center rounded-xl border bg-gradient-to-r from-sky-400 to-teal-400 px-8 py-4 text-white dark:border-slate-900 dark:from-sky-700 dark:to-teal-600 md:w-[59%]"
          >
            <p class="text-lg text-slate-50">你好，很高兴认识你 👋</p>
            <h1 class="text-2xl font-bold lg:break-normal lg:break-words xl:text-3xl">
              A student from the Academy of Magic
            </h1>
            <p class="text-slate-100">😇前端开发 / 产品设计 / 算法 / 数据分析</p>
          </div>
          <!-- 箴言 -->
          <div
            class="bg-stripe w-full rounded-xl border bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-800 md:w-[39%]"
          >
            <p class="text-[12px]">箴言</p>
            <div>
              <h1 class="text-3xl leading-9">
                <span class="hidden font-bold text-teal-400 md:inline-block">🥳🥳ice_dk</span>
              </h1>
              <h1 class="font-serif text-3xl tracking-widest md:text-2xl lg:text-3xl">
                聪明的小孩
              </h1>
              <h1 class="text-2xl leading-9 md:text-3xl">
                <span class="inline-block font-bold text-teal-400 md:hidden">Miracle&nbsp; </span>
                <span class="inline-block lg:hidden">Is Everywhere</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <!-- 简介与技术栈 -->
      <div class="mt-4 flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0">
        <!-- 简介 -->
        <div
          class="bg-stripe w-full rounded-xl border bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-800 md:w-[35%]"
        >
          <p class="text-[12px]">简介</p>
          <div class="mt-2">
            <h1 class="text-xl">主修软件工程</h1>
            <h1 class="text-xl">辅修<span class="text-pink-500">魔法学</span></h1>
            <h1 class="text-xl md:text-base lg:text-xl">梦想成为脑袋灵活、随机应变的工程师</h1>
            <p></p>
          </div>
        </div>
        <!-- 技术栈 -->
        <div
          class="w-full rounded-xl border bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-800 md:w-[62%]"
        >
          <p class="text-[12px]">技术栈</p>
          <div class="mt-2 overflow-hidden">
            <!-- TODO:封装ICON组件,抽离背景颜色与svg地址 -->
            <div class="icon-scroll flex w-fit gap-4">
              <div
                class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-emerald-200 p-4"
              >
                <img src="./img/vue.svg" alt="vue.js" />
              </div>
              <div class="h-20 w-20 flex-shrink-0 rounded-lg bg-red-200 p-4">
                <img src="./img/html.svg" alt="" />
              </div>
              <div class="h-20 w-20 flex-shrink-0 rounded-lg bg-sky-200 p-4">
                <img src="./img/css.svg" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-slate-200 p-4">
                <img src="./img/tailwind.svg" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-[#f7cb4f] p-4">
                <img class="rounded-lg" src="./img/js.webp" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-red-400 p-4">
                <img class="rounded-lg" src="./img/git.svg" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-slate-200 p-4">
                <img class="rounded-lg" src="./img/python.svg" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-rose-200 p-4">
                <img class="rounded-lg" src="./img/npm.svg" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-indigo-200 p-4">
                <img class="rounded-lg" src="./img/eslint.svg" alt="" />
              </div>
              <div
                class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-emerald-200 p-4"
              >
                <img src="./img/vue.svg" alt="vue.js" />
              </div>
              <div class="h-20 w-20 flex-shrink-0 rounded-lg bg-red-200 p-4">
                <img src="./img/html.svg" alt="" />
              </div>
              <div class="h-20 w-20 flex-shrink-0 rounded-lg bg-sky-200 p-4">
                <img src="./img/css.svg" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-slate-200 p-4">
                <img src="./img/tailwind.svg" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-[#f7cb4f] p-4">
                <img class="rounded-lg" src="./img/js.webp" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-red-400 p-4">
                <img class="rounded-lg" src="./img/git.svg" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-slate-200 p-4">
                <img class="rounded-lg" src="./img/python.svg" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-rose-200 p-4">
                <img class="rounded-lg" src="./img/npm.svg" alt="" />
              </div>
              <div class="flex h-20 w-20 flex-shrink-0 justify-center rounded-lg bg-indigo-200 p-4">
                <img class="rounded-lg" src="./img/eslint.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 图片与荣誉 -->
      <div class="mt-4 flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0">
        <!-- 图片 -->
        <div
          class="honer-bg h-52 w-full rounded-xl bg-cover bg-center bg-no-repeat sm:h-auto md:w-[35%]"
        ></div>
        <!-- 荣誉 -->
        <div
          class="bg-stripe w-full rounded-xl border bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-800 md:w-[60%]"
        >
          <p class="text-[12px]">竞赛荣誉墙/专利</p>
          <h1 class="mt-2 text-4xl font-bold">追风赶月趁年华</h1>
          <div class="lg:text-x3 mt-4 md:text-base">
            <p class="py-1">🏅 2024年美国大学生数学建模竞赛（ MCM / ICM ）比赛 一等奖（国际级）</p>
            <p class="py-1">🥈 2023年数学竞赛网络挑战赛二等奖（国家级）</p>
            <p class="py-1">🥉 第四届全国大学生算法设计与编程挑战赛铜奖（国家级）</p>
            <p class="py-1">🥉 2023年第十三届 MathorCup 高校数学建模挑战赛三等奖（国家级）</p>
            <p class="py-1">🥉 第四届华数杯全国大学生数学建模竞赛三等奖（国家级）</p>
            <p class="py-1">🏅 2024年蓝桥杯个人赛 Web 大学组一等奖 （省级）</p>
            <p class="py-1">🥉 2024年广东省大学生数学建模竞赛二等奖（省级）</p>
            <p class="py-1">🥉 《反诈通》大学生创新创业打算省级立项（省级）</p>
            <p class="py-1">🥉 作为《数据蜂巢》项目负责人，荣获互联网+三等奖（校级）</p>
            <p class="py-1">🏅 校级一等奖学金，授予“精神文明奖”等荣誉（校级）</p>
            <p class="py-1">🥈 第十二届软件设计大赛第二名（校级）</p>
            <p class="py-1">✨ 结合书法的 AI 产品专利 (申请中)</p>
            <p class="py-1">✨ 数字经济与发展指数系统专利</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.honer-bg {
  background-image: url('./img/honer.jpg');
}
.music-bg {
  background-image: url('./img/music.jpg');
  filter: brightness(0.6);
}
.game-bg {
  background-image: url('./img/game.png');
  filter: brightness(0.8);
}
.sport-bg {
  background-image: url('./img/sport.jpg');
  filter: brightness(0.6);
}
.movie-bg {
  background-image: url('./img/movie.jpg');
  filter: brightness(0.6);
}
.avatar-ping {
  animation: avatarPing 2s ease-in infinite;
}
@keyframes avatarPing {
  0%,
  100% {
    transform: translateX(-50%) translateY(-50%) scale(1.05);
  }
  50% {
    transform: translateX(-50%) translateY(-50%) scale(1.1);
  }
}
.tag-bounce {
  animation: tagBounce 1.5s ease-in infinite;
}
@keyframes tagBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
}

.icon-scroll {
  animation: iconScroll 20s linear infinite;
}
@keyframes iconScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
