<template>
  <div class="canvas">
    <div class="test">
      <Wout ref="wout" />

      <Loader ref="loader" />
    </div>
    <style>
      body {
        background-color: red;
        height: 100vh;
      }
      .canvas {
        background-color: white;
        width: 98vw;
        height: 98vh;
        overflow: hidden;
        position: fixed;
        top: 1vh;
        left: 1vw;
      }
    </style>
  </div>
</template>

<script>
export default {
  name: "Canvas",
  data: () => {
    return { current_phase: 1 };
  },
  mounted() {
    this.reset();

    addEventListener("scroll", (event) => this.getScrollPercent());
    addEventListener("resize", (event) => this.resizeWindow());
  },
  methods: {
    reset() {
      this.$refs.loader.reset();
      this.$refs.wout.reset();
    },
    scrollable() {
      var tl = this.$anime.timeline();

      tl.add({
        targets: "body",
        height: "10000px",
        delay: 500,
        duration: 1000,
      });
    },
    phase1() {
      this.$refs.wout.phase1();
      this.$refs.loader.phase1();
      this.scrollable();
    },
    phase2() {
      this.$refs.loader.phase2();
      this.$refs.wout.phase2();
    },

    getScrollPercent() {
      var h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";

      let percentage =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

      console.log(percentage);

      if (percentage < 1) {
        if (this.current_phase != 1) {
          this.current_phase = 1;
          console.log("phase 1");
          this.phase1();
        }
      } else if (percentage < 15) {
        if (this.current_phase != 2) {
          this.current_phase = 2;
          console.log("phase 2");
          this.phase2();
        }
      }
    },
    resizeWindow() {
      if (this.current_phase == 1) {
        this.phase1();
      } else if (this.current_phase == 2) {
        this.phase2();
      }
    },
  },
};
</script>
