<script>
  import "../../assets/index.css";
  import SideBarItem from "../../components/SideBarItem.svelte";
  import ArrowIcon from "../../assets/img/home-icons/ArrowIcon.svelte";
</script>

<div>
  <SideBarItem />
  <div class="projects-bg">
    <section class="projects">
      <h3><span>#</span>Selected projects</h3>
      <div class="projects-grid">
        <div class="projects-grid-item">
          <div class="projects-grid-item-img">
            <img src="./projects-img/Simpl.jpg" alt="Simpl" />
          </div>
          <div class="projects-grid-item-text">
            <h4>Simpl</h4>
            <p>
              A minimalistic and lightweight notes app <br />that stores data
              locally on your device
            </p>
            <div class="projects-grid-item-text-link">
              <a href="/simpl/" class="arrow-link"> View Live <ArrowIcon /></a>
              <a href="https://github.com/mxbv/Simpl" class="arrow-link">
                View Code <ArrowIcon /></a
              >
            </div>
          </div>
        </div>
        <div class="projects-grid-item">
          <div class="projects-grid-item-img">
            <img src="./projects-img/MovieX.jpg" alt="MovieX" />
          </div>
          <div class="projects-grid-item-text">
            <h4>MovieX</h4>
            <p>
              MovieX is a app that allows users to explore trending movies. It
              features a dedicated page where users can view the top popular
              films.
            </p>
            <div class="projects-grid-item-text-link">
              <a href="/moviex/" class="arrow-link"> View Live <ArrowIcon /></a>
              <a href="https://github.com/mxbv/MovieX" class="arrow-link">
                View Code <ArrowIcon /></a
              >
            </div>
          </div>
        </div>
        <div class="projects-grid-item">
          <div class="projects-grid-item-img">
            <img src="./projects-img/Stream.jpg" alt="Stream" />
          </div>
          <div class="projects-grid-item-text">
            <h4>Stream</h4>
            <p>
              A curated list of news sources and articles <br /> I occasionally explore.
            </p>
            <div class="projects-grid-item-text-link">
              <a href="/stream/" class="arrow-link"> View Live <ArrowIcon /></a>
              <a href="https://github.com/mxbv/Stream" class="arrow-link">
                View Code <ArrowIcon /></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style scoped>
  .projects-bg {
    display: flex;
    position: absolute;
    width: 100%;
    height: fit-content;
    left: 50%;
    transform: translateX(-50%);
    background-image: linear-gradient(to right, #2e2e2e 1px, transparent 1px),
      linear-gradient(to bottom, #2e2e2e 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .projects {
    padding: 40px 0 40px 0;
  }
  h3 {
    font-weight: 500;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-gap: 20px;
    margin-top: 40px;
  }
  .projects-grid-item {
    display: flex;
    justify-content: start;
    align-items: center;
    background: rgba(38, 38, 38, 0.05);
    border-radius: 50px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.6px);
    -webkit-backdrop-filter: blur(8.6px);
    border: 1px solid rgb(32, 32, 32);
    padding: 1rem;
    .projects-grid-item-img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      overflow: hidden;
      height: fit-content;
      border-radius: 40px;
      img {
        width: 100%;
        border-radius: 40px;
      }
      img:hover {
        transform: scale(1.05);
      }
    }
  }

  .projects-grid-item-text {
    width: 50%;
    margin-left: 20px;
  }
  p {
    font-weight: 300;
    margin-top: 10px;
  }
  .projects-grid-item-text-link {
    display: flex;
    width: 100%;
    text-decoration: none;
    flex-direction: column;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .arrow-link {
    margin-top: 20px;
  }

  @media screen and (max-width: 765px) {
    .projects-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
