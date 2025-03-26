<script setup>
import HeaderItem from "@/components/HeaderItem.vue";
</script>

<template>
  <div>
    <HeaderItem />
    <section class="projects">
      <h3><span>#</span>Selected projects</h3>
      <div class="projects-grid">
        <a href="/simpl/" class="projects-grid-item">
          <img src="/img/Simpl.jpg" alt="" />
          <h4>Simpl</h4>
          <p>
            A minimalistic and lightweight <br />
            note-taking app
          </p>
        </a>
        <a href="/moviex/" class="projects-grid-item"
          ><img src="/img/MovieX.jpg" alt="MovieX" />
          <h4>MovieX</h4>
          <p>App that allows users to explore trending movies.</p></a
        >
        <a href="/stream/" class="projects-grid-item"
          ><img src="/img/Stream.jpg" alt="MovieX" />
          <h4>Stream</h4>
          <p>RSS feeds reader</p></a
        >
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects {
  padding: 70px 0;
}
h3 {
  margin-top: 2rem;
  font-weight: 500;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  margin-top: 20px;
}
.projects-grid-item {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1.5rem;
  border: solid 1px #262626;
  background-color: #202020;
  backdrop-filter: blur(10px);
  border-radius: 40px;
  box-shadow: 3px 3px 5px #101010;
  text-decoration: none;
  transition: 0.3s;
  img {
    border-radius: 40px;
  }
}
.projects-grid-item:hover {
  transform: scale(1.02);
}
h4 {
  margin-top: 10px;
  svg {
    margin-left: 10px;
  }
}
p {
  margin-top: 10px;
}

@media screen and (max-width: 765px) {
  .projects-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
