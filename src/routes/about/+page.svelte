<script>
  import "../../assets/index.css";
  import SideBarItem from "../../components/SideBarItem.svelte";

  // Icons
  import HtmlIcon from "../../assets/img/about-icons/HtmlIcon.svelte";
  import CssIcon from "../../assets/img/about-icons/CssIcon.svelte";
  import JsIcon from "../../assets/img/about-icons/JsIcon.svelte";
  import VueIcon from "../../assets/img/about-icons/VueIcon.svelte";
  import SvelteIcon from "../../assets/img/about-icons/SvelteIcon.svelte";
  import TailwindIcon from "../../assets/img/about-icons/TailwindIcon.svelte";
  import ArrowIcon from "../../assets/img/home-icons/ArrowIcon.svelte";
  import SIdeBarItem from "../../components/SideBarItem.svelte";
</script>

<div>
  <SideBarItem />
  <section class="about">
    <div class="about-container">
      <h3><span>#</span>About me</h3>
      <p>
        I’m passionate about staying active, reading, and reflecting on
        philosophy. I also enjoy diving into coding, constantly learning and
        improving my skills. It’s the balance of physical, mental, and creative
        pursuits that keeps me motivated.
      </p>
    </div>
    <div class="about-container">
      <h3><span>#</span>Experience</h3>
      <h4>Junior Frontend Developer</h4>
      <p>
        <strong>WebMasters, Odessa (February 2024 - September 2024)</strong>
        Developed online stores and dropshipping landing pages with Vue.js and HTML/CSS,
        ensuring adaptive and user-friendly interfaces. Collaborated in a team of
        5, optimizing performance, refining UX with animations, and handling testing
        and bug fixes. Used Git for version control and participated in code reviews.
      </p>
      <h4>Trainee Frontend Developer</h4>
      <p>
        <strong>WebMasters, Odessa (November 2023 - February 2024) </strong>
        Developed advertising pages for various businesses. Performed layout, integration
        of off-the-shelf scripts, and basic testing before handing over the project.
        Actively participated in discussions and calls, offering ideas for interface
        improvements.
      </p>
    </div>
    <div class="about-container">
      <h3><span>#</span>Skills</h3>
      <div class="skills-images">
        <HtmlIcon />
        <CssIcon />
        <JsIcon />
        <VueIcon />
        <SvelteIcon />
        <TailwindIcon />
      </div>
    </div>
    <a href="/projects" class="arrow-link"
      >Go to selected projects <ArrowIcon /></a
    >
  </section>
</div>

<style scoped>
  .about {
    padding: 20px 0 40px 0;
  }
  .about-container {
    margin-top: 20px;
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
    margin-bottom: 0.8rem;
  }
  .skills-images {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    margin-top: 1rem;
  }
  .arrow-link {
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
