<script>
  import SIdeBarItem from "../components/SideBarItem.svelte";
  import "../assets/index.css";
  import ArrowIcon from "../assets/img/home-icons/ArrowIcon.svelte";
  import CvIcon from "../assets/img/home-icons/CvIcon.svelte";
  import SideBarItem from "../components/SideBarItem.svelte";
</script>

<div class="home">
  <SideBarItem />
  <section>
    <div class="home-text">
      <h1>
        Hello. I'm
        <span>Max Baranov</span>
      </h1>
      <h2><span>Frontend developer</span> based in Ukraine</h2>
      <p>Trying to do useful things to make the world a better place.</p>
      <div class="links-container">
        <a href="./Max_Baranov_CV_2025.pdf" class="get-cv"
          ><CvIcon /> Get a CV.pdf</a
        >
        <span class="or">Or</span>
        <a href="/about" class="arrow-link"
          >Let’s get acquainted!<ArrowIcon /></a
        >
      </div>
    </div>
  </section>
</div>

<style scoped>
  .home {
    background: radial-gradient(circle, #2e2e2e 10%, var(--bg) 10%);
    background-size: 20px 20px;
  }
  section {
    display: flex;
    align-items: center;
  }
  .home-text {
    width: 100%;
  }
  h1 {
    font-size: 4rem;
    margin-top: 20px;
    font-weight: 700;
    span {
      font-size: 4rem;
      color: var(--accent);
    }
  }
  h2 {
    font-weight: normal;
    margin-top: 10px;
  }
  p {
    font-weight: 300;
    margin-top: 20px;
    color: #979797;
  }
  .links-container {
    display: flex;
    width: fit-content;
    align-items: center;
    margin-top: 40px;
  }
  .or {
    display: block;
    color: #838383;
  }
  .get-cv {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    background-color: var(--accent);
    width: fit-content;
    border-radius: 40px;
    transition: 0.3s;
    margin-right: 20px;
    font-weight: 300;
  }
  .get-cv:hover {
    background-color: #535add;
  }
  .arrow-link {
    margin-left: 20px;
  }
  @media screen and (max-width: 765px) {
    .home {
      height: 700px;
      padding: 70px 0 30px 0;
    }
    .links-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 40px;
    }
    .get-cv {
      width: 100%;
      margin: 0;
      margin-bottom: 20px;
    }
    .or {
      margin-bottom: 20px;
    }
    .link-to-next {
      margin: 0;
    }
    h2 {
      font-size: 1.5rem;
      margin-top: 20px;
      span {
        font-size: 1.5rem;
      }
    }
  }
</style>
