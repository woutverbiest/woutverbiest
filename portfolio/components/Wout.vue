<template>
  <div class="section_heythere">
    <div>
      <h1>I’m<br />Wout</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img width="500" src="woutverbiest.png" />
    </div>

    <style>
      .section_heythere {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        background-color: white;
      }
      .section_heythere h1 {
        margin: 50px;
        text-align: left;
        font-size: 5rem;
        font-family: montserrat_black;
      }

      .section_heythere p {
        width: calc(100% - 100px);
        max-width: 492px;
        padding: 0 50px;
        overflow: hidden;
        text-align: justify;
        font-family: montserrat;
      }

      .section_heythere img {
        position: absolute;
        bottom: 0%;
        right: 50%;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
      }
    </style>
  </div>
</template>

<script>
export default {
  name: "Section_heythere",
  methods: {
    resetText() {
      var tl = this.$anime.timeline();
      tl.add({
        targets: ".section_heythere p",
        height: "0.01px",
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },

    setText() {
      var tl = this.$anime.timeline();
      tl.add({
        targets: ".section_heythere p",
        height: "150px",
        easing: "easeInOutQuad",
        duration: 1000,
      });
    },

    setImage() {
      var tl = this.$anime.timeline();

      tl.add({
        targets: ".section_heythere img",
        bottom: "37.5%",
        left: `${
          window.innerWidth > 992 ? (492 / window.innerWidth) * 100 : 0
        }%`,
        easing: "easeInOutQuad",
        duration: 1000,
        skewX: "0deg",
      });
    },
    resetImage() {
      var tl = this.$anime.timeline();

      tl.add({
        targets: ".section_heythere img",
        bottom: "0%",
        easing: "easeInOutQuad",
        duration: 1000,
        skewX:"-10deg",
      });
    },

    reset() {
      var tl = this.$anime.timeline();

      tl.add({
        targets: ".section_heythere",
        rotateZ: "-90deg",
        translateX: "-50%",
        duration: 1,
        easing: "easeOutBack",
        color: "#fff",
        right: "49.5%",
        top: "46%",
      });

      this.resetText();
      this.resetImage();
    },

    phase1() {
      var tl = this.$anime.timeline();

      tl.add({
        targets: ".section_heythere",
        rotateZ: "0deg",
        height: "400%",
        width: "100%",
        duration: "1000",
        top: "-150%",
        right: "-50%",
        easing: "easeInOutQuad",
        translateX: 0,
        delay: 0,
        color: "#000",
        skewX: "10deg",
      });

      this.resetText();
      this.resetImage();
    },

    phase2() {
      var tl = this.$anime.timeline();

      tl.add({
        targets: ".section_heythere",
        rotateZ: "0deg",
        height: "400%",
        width: "100%",
        duration: "1000",
        top: "-150%",
        right: `${
          window.innerWidth > 992 ? -50 + (496 / window.innerWidth) * 100 : 0
        }%`,
        easing: "easeInOutQuad",
        translateX: 0,
        color: "#000",
        skewX: "0deg",
      });

      this.setText();
      this.setImage();
    },
  },
};
</script>
