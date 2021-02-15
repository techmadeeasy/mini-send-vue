<template>
  <div id="app">
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <img src="https://www.mailersend.com/images/logo.svg" alt="">
      </b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item :to="{name: 'new-email'}">New</b-nav-item>
          <b-nav-item :to="{name: 'email-activity'}">Activity</b-nav-item>
<!--          <b-nav-item :to="{name: 'recipient-emails'}">Activity</b-nav-item>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
