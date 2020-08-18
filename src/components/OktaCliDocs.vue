<template>
  <div class="hello">
    <h2>{{ platform }}</h2>
  </div>
</template>

<script>

import os from 'platform-detect/os.mjs'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  computed: {
    platform() {
      let _os = 'UNKNOWN';
      if (os.windows) {
        _os = 'windows';
      } else if (os.linux) {
        _os = 'linux';
      } else if (os.macos) {
        _os = 'macos';
      }
      return _os;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
