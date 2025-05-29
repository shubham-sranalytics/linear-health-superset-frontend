<template>
  <header>
    <nav>
      <router-link to="/">Referral</router-link> |
      <router-link to="/messaging">Messaging</router-link> |
      <router-link to="/assessment">Assessment</router-link> |
      <router-link to="/task">Task</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style>
header {
  padding: 20px;
  background-color: #f5f5f5;
}

nav a {
  margin: 0px 10px;
  text-decoration: none;
  color: #1815ce;
}
/* Style for active router links */
nav a.router-link-active {
  color: #ff6600;
}
</style>
