<template>
  <!--inspiration fra https://www.cssscript.com/confetti-animation/-->
  <div id="confettis">
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
  </div>
</template>

<script setup></script>

<style scoped>
#confettis {
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.confetti {
  animation: confetti 5s ease-in-out -2s infinite;
  height: 16px;
  left: 50%;
  position: absolute;
  transform-origin: left top;
  width: 16px;
}

.confetti:nth-child(1) {
  animation-delay: 0;
  background-color: #fc0120;
  left: 10%;
}

.confetti:nth-child(2) {
  animation-delay: -5s;
  background-color: #8257e6;
  left: 20%;
}

.confetti:nth-child(3) {
  animation-delay: -3s;
  background-color: #ffbf4d;
  left: 30%;
}

.confetti:nth-child(4) {
  animation-delay: -2.5s;
  background-color: #fe5d7a;
  left: 40%;
}

.confetti:nth-child(5) {
  animation-delay: -4s;
  background-color: #45ec9c;
  left: 50%;
}

.confetti:nth-child(6) {
  animation-delay: -6s;
  background-color: #f6e327;
  left: 60%;
}

.confetti:nth-child(7) {
  animation-delay: -1.5s;
  background-color: #96eb69;
  left: 70%;
}

.confetti:nth-child(8) {
  animation-delay: -2s;
  background-color: #007de7;
  left: 80%;
}

.confetti:nth-child(9) {
  animation-delay: -3.5s;
  background-color: #2deae3;
  left: 90%;
}

.confetti:nth-child(10) {
  animation-delay: -2.5s;
  background-color: #da32ab;
  left: 100%;
}

@keyframes confetti {
  0% {
    transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
  }

  25% {
    transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
  }

  50% {
    transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
  }

  75% {
    transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
  }

  100% {
    transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
  }
}
</style>