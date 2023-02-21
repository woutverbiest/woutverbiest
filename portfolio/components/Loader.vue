<template>
  <div>
    <div class="background-loader"></div>
    <div class="loader">
      <h1>Hey,<br />There</h1>
    </div>

    <style>
      .loader {
        width: 0;
        height: 0;
        background: black;
        position: absolute;
        left: 50%;
        top: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden;
      }
      .loader h1 {
        margin: 50px;
        text-align: right;
        font-size: 5rem;
        font-family: montserrat_black;
      }

      .background-loader {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: white;
      }
    </style>

    <script></script>
  </div>
</template>

<script>
export default {
  name: "loader",
  methods: {
    reset() {
      var tl = this.$anime.timeline();

      tl.add({
        width: "1%",
        height: "8%",
        left: "49.5%",
        top: "46%",
        color: "black",
        targets: ".loader",
        rotateZ: "90deg",
        duration: "1000",
        easing: "easeOutBack",
        borderRadius: "10px",
      });
      tl.add({
        targets: ".loader",
        rotateZ: "-90deg",
        duration: "1000",
        easing: "easeOutBack",
      });

      tl.add({
        targets: ".loader",
        rotateZ: "90deg",
        duration: "1000",
        easing: "easeOutBack",
        complete: (anim) => {
          this.$parent.phase1();
        },
      });
    },
    phase1() {
      var tl = this.$anime.timeline();
      tl.add({
        targets: ".background-loader",
        translateX: "100%",
        duration: 1,
      });
      tl.add({
        targets: ".loader",
        rotateZ: "0deg",
        height: "400%",
        width: "100%",
        duration: "1000",
        top: "-150%",
        left: "-50%",
        easing: "easeInOutQuad",
        color: "#fff",
        backgroundColor: "#000",
        skewX: "10deg",
      });
    },
    phase2() {
      var tl = this.$anime.timeline();

      tl.add({
        targets: ".loader",
        rotateZ: "0deg",
        height: "400%",
        width: "100%",
        duration: "1000",
        top: "-150%",
        left: `${
          window.innerWidth > 992
            ? -50 - (496 / window.innerWidth) * 100
            : -100 + (20 / window.innerWidth) * 100
        }%`,
        easing: "easeInOutQuad",
        // color: "#000",
        backgroundColor: "#fff",
        skewX: "0deg",
      });
    },
  },
};
</script>
