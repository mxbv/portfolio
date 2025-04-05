<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  // Icons
  import GithubIcon from "../assets/img/nav-icons/GitHubIcon.svelte";
  import MailIcon from "../assets/img/nav-icons/MailIcon.svelte";
  import LogoIcon from "../assets/img/nav-icons/LogoIcon.svelte";
  import MenuIcon from "../assets/img/nav-icons/MenuIcon.svelte";

  let mobile = false;
  let mobileNav = false;
  let windowWidth = 0;

  const toggleMobileNav = () => {
    mobileNav = !mobileNav;
  };

  const checkScreen = () => {
    windowWidth = window.innerWidth;
    mobile = windowWidth <= 765;
    if (!mobile) {
      mobileNav = false;
    }
  };

  onMount(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  });

  // Функция для проверки, является ли ссылка активной
  function isActive(route) {
    return $page.url.pathname === route;
  }
</script>

<nav>
  <a href="https://mxbv.github.io/" class="logo"><LogoIcon /></a>

  {#if !mobile}
    <ul class="nav">
      <li class="nav-link">
        <a
          href="/"
          class:selected={isActive("/")}
          class="border-top"
          aria-label="home"
          ><svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 10.25V20C3 20.5523 3.44772 21 4 21H8.5C9.05228 21 9.5 20.5523 9.5 20V14H14.5V20C14.5 20.5523 14.9477 21 15.5 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg></a
        >
      </li>
      <li class="nav-link">
        <a href="/about" class:selected={isActive("/about")} aria-label="About"
          ><svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 21H20C20 21 18.5 15 12 15C5.5 15 4 21 4 21Z"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg></a
        >
      </li>
      <li class="nav-link">
        <a
          href="/projects"
          class:selected={isActive("/projects")}
          aria-label="Projects"
          ><svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14.3607 9.26543H22L15.8197 13.7557L18.1803 21.0211L12 16.5309L5.81966 21.0211L8.18034 13.7557L2 9.26543H9.63932L12 2Z"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </li>
      <div class="divider"></div>
      <li class="nav-link">
        <a href="https://github.com/mxbv"><GithubIcon /></a>
      </li>
      <li class="nav-link">
        <a href="mailto:bv.maks@icloud.com" class="border-bottom"
          ><MailIcon /></a
        >
      </li>
    </ul>
  {/if}

  {#if mobile}
    <div class="icon" on:click={toggleMobileNav}>
      <MenuIcon class={mobileNav ? "icon-active" : ""} />
    </div>
  {/if}

  {#if mobileNav}
    <ul class="dropdown-nav" on:click={toggleMobileNav}>
      <li class="nav-link"><a href="/" class="border-top">Home</a></li>
      <li class="nav-link"><a href="/about">About</a></li>
      <li class="nav-link"><a href="/projects">Projects</a></li>
      <li class="nav-link">
        <a href="https://github.com/mxbv"><GithubIcon /></a>
      </li>
      <li class="nav-link">
        <a href="mailto:bv.maks@icloud.com" class="border-bottom"
          ><MailIcon /></a
        >
      </li>
    </ul>
  {/if}
</nav>

<style scoped>
  nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    width: fit-content;
    height: fit-content;
    z-index: 1000;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    border: solid 1px #1e1e1e;
    background-color: #111111;
    border-radius: 40px;
    margin-top: 20px;
  }
  .nav-link {
    height: 100%;
  }
  .nav-link a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1.1rem;
    height: 100%;
    color: var(--text);
    text-decoration: none;
    transition: 0.3s;
    font-weight: 300;
  }
  .nav-link a:hover {
    background-color: #1b1b1b;
  }
  a.selected {
    background-color: #1b1b1b;
    svg {
      fill: var(--accent);
    }
  }
  a.border-top {
    border-radius: 40px 40px 0 0;
  }
  .border-bottom {
    border-radius: 0 0 40px 40px;
  }
  .divider {
    width: 100%;
    height: 1px;
    background-color: #1e1e1e;
  }
  .icon {
    cursor: pointer;
  }
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
    .border-top,
    .border-bottom {
      border-radius: 0;
    }
  }
</style>
