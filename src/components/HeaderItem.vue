<script>
import GithubIcon from "@/assets/img/GithubIcon.vue";
import MailIcon from "@/assets/img/MailIcon.vue";
import LogoIcon from "@/assets/img/LogoIcon.vue";
import MenuIcon from "@/assets/img/MenuIcon.vue";

export default {
  components: {
    GithubIcon,
    MailIcon,
    LogoIcon,
    MenuIcon,
  },
  name: "navigationItem",
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 765) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<template>
  <header>
    <a href="https://mxbv.github.io/" class="logo"><LogoIcon /></a>
    <ul class="nav" v-show="!mobile">
      <li class="nav-link">
        <router-link to="/" class="border-left">Home</router-link>
      </li>
      <li class="nav-link"><router-link to="/about">About</router-link></li>
      <li class="nav-link"><router-link to="/projects">Projects</router-link></li>
      <div class="divider"></div>
      <li class="nav-link">
        <a href="https://github.com/mxbv"><GithubIcon /></a>
      </li>
      <li class="nav-link">
        <a href="mailto:bv.maks@icloud.com" class="border-right"><MailIcon /></a>
      </li>
    </ul>
    <div v-show="mobile" class="icon">
      <MenuIcon @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }" />
    </div>
    <transition name="mobile-nav">
      <ul class="dropdown-nav" v-show="mobileNav" @click="toggleMobileNav">
        <li class="nav-link">
          <router-link to="/" class="border-left">Home</router-link>
        </li>
        <li class="nav-link"><router-link to="/about">About</router-link></li>
        <li class="nav-link"><router-link to="/projects">Projects</router-link></li>
        <li class="nav-link">
          <a href="https://github.com/mxbv"><GithubIcon /></a>
        </li>
        <li class="nav-link">
          <a href="mailto:bv.maks@icloud.com" class="border-right"><MailIcon /></a>
        </li>
      </ul>
    </transition>
  </header>
</template>

<style scoped>
header {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 60px;
  z-index: 1000;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: solid 1px #1e1e1e;
  background-color: #111111d7;
  backdrop-filter: blur(10px);
  border-radius: 40px;
  box-shadow: 3px 3px 5px #101010;
  padding: 2.5px;
  transition: 0.3s;
}
.logo:hover {
  svg {
    transform: scale(1.1);
  }
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  border: solid 1px #1e1e1e;
  background-color: #171717d7;
  backdrop-filter: blur(10px);
  border-radius: 40px;
  box-shadow: 3px 3px 5px #101010;
}
.nav-link {
  height: 100%;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    font-size: 1.1rem;
    height: 100%;
    color: var(--text);
    text-decoration: none;
    transition: 0.3s;
  }
  a:hover {
    background-color: #1b1b1b;
  }
}

.border-left {
  border-radius: 40px 0 0 40px;
}
.border-right {
  border-radius: 0 40px 40px 0;
}
.divider {
  width: 1px;
  height: 100%;
  background-color: #1e1e1e;
}
.icon {
  cursor: pointer;
}
/* Mobile Nav*/
.dropdown-nav {
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 70px;
  left: 0;
  width: 100%;
  max-width: 100dvw;
  height: 100dvh;
  border: solid 1px #1e1e1e;
  border-top-color: #000000;
  background-color: #111111;
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding-bottom: 70px;
}
.icon-active {
  transition: 0.5s;
  transform: rotateX(180deg);
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.3s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
@media screen and (max-width: 765px) {
  header {
    justify-content: space-between;
    top: 0;
    border: solid 1px #1e1e1e;
    background-color: #171717;
    backdrop-filter: blur(10px);
    border-radius: 40px;
    box-shadow: 3px 3px 5px #101010;
    padding: 0 1rem;
    border-radius: 0;
    border-top: none;
    height: 70px;
  }
  .border-left {
    border-radius: 0;
  }
  .border-right {
    border-radius: 0;
  }
}
</style>
