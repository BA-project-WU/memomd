<template>
  <main class="startpage">
    <section class="startsection">
      <section class="section1">
        <img class="logo-start" src="~/assets/images/logo.png" alt="this is the memomd logo"
          style="height:inherit;width:auto;" />
      </section>
      <section class="section2">
        <button>
          <NuxtLink to="member/loginpage">Log ind</NuxtLink>
        </button>
        <button>
          <NuxtLink to="member/createuserpage">Opret bruger</NuxtLink>
        </button>
      </section>
    </section>
  </main>
</template>

<script setup>

definePageMeta({ layout: "false", });


</script>

<style scoped>
.startsection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-width: 280px;
}

.section2 {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

button {
  background-color: var(--primary-color);
  border: none;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: var(--font-text-size);
  margin: 30px 0px 0px 12px;
  padding: 20px;
  width: 200px;
}

a {
  color: var(--text-color);
  font-weight: var(--bold-text);
  text-decoration: none;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .logo-start {
    height: auto;
    width: 100vw;
  }
}
</style>