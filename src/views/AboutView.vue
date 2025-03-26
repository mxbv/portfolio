<script setup>
import HeaderItem from "@/components/HeaderItem.vue";

// Icons
import ArrowIcon from "@/assets/img/ArrowIcon.vue";
import JsIcon from "@/assets/img/skills/JsIcon.vue";
import HtmlIcon from "@/assets/img/skills/HtmlIcon.vue";
import CssIcon from "@/assets/img/skills/CssIcon.vue";
import VueIcon from "@/assets/img/skills/VueIcon.vue";
import BootstrapIcon from "@/assets/img/skills/BootstrapIcon.vue";
import GitIcon from "@/assets/img/skills/GitIcon.vue";
import TailwindIcon from "@/assets/img/skills/TailwindIcon.vue";
</script>
<template>
  <div>
    <HeaderItem />
    <section class="about">
      <div class="about-container">
        <h3><span>#</span>About me</h3>
        <p>
          I’m passionate about staying active, reading, and reflecting on philosophy. I also enjoy
          diving into coding, constantly learning and improving my skills. It’s the balance of
          physical, mental, and creative pursuits that keeps me motivated.
        </p>
      </div>
      <div class="about-container">
        <h3><span>#</span>Experience</h3>
        <h4>Junior Front-end Developer</h4>
        <p>
          <strong>WebMasters, Odessa — February 2024 - September 2024</strong>
          Developed online stores and dropshipping landing pages with Vue.js and HTML/CSS, ensuring
          adaptive and user-friendly interfaces. Collaborated in a team of 5, optimizing
          performance, refining UX with animations, and handling testing and bug fixes. Used Git for
          version control and participated in code reviews.
        </p>
        <h4>Trainee Front-end Developer</h4>
        <p>
          <strong>WebMasters, Odessa — November 2023 - February 2024</strong>
          Developed advertising pages for various businesses. Performed layout, integration of
          off-the-shelf scripts, and basic testing before handing over the project. Actively
          participated in discussions and calls, offering ideas for interface improvements.
        </p>
      </div>
      <div class="about-container">
        <h3><span>#</span>Skills</h3>
        <div class="skills-images">
          <HtmlIcon /> <CssIcon /> <JsIcon /> <VueIcon /> <BootstrapIcon /> <TailwindIcon />
          <GitIcon />
        </div>
      </div>
      <router-link to="/projects" class="link-to-next"
        >Go to selected projects <ArrowIcon
      /></router-link>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding: 70px 0 40px 0;
}
.about-container {
  margin-top: 2rem;
  border: solid 1px #262626;
  background-color: #202020;
  backdrop-filter: blur(10px);
  border-radius: 40px;
  box-shadow: 3px 3px 5px #101010;
  padding: 2rem;
  span {
    color: var(--accent);
  }
}
h3,
strong {
  display: block;
  font-weight: 500;
}

h4 {
  margin-top: 1rem;
  color: var(--accent);
}
p {
  font-size: 1.1rem;
  margin-top: 1rem;
}
strong {
  color: #ababab;
  margin-bottom: 1rem;
}
.skills-images {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  margin-top: 1rem;
  svg {
    transition: 0.3s;
  }
  svg:hover {
    transform: scale(1.2);
  }
}
.link-to-next {
  margin: 0 auto;
  margin-top: 50px;
}

@media screen and (max-width: 765px) {
  .about-container {
    padding: 1.5rem;
  }
  .skills-images {
    width: 95%;
  }
}
</style>
