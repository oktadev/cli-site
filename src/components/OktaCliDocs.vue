<template>
  <div>
    <b-container>
      <b-row>
        <b-col v-for="component in platformOrder" :key="component">
          <component :key="component" :is="component"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import os from 'platform-detect/os.mjs'
import Windows from '@/components/Windows.vue'
import Mac from '@/components/Mac.vue'
import Linux from '@/components/Linux.vue'

export default {
  name: 'HelloWorld',
  components: {
    Windows, Mac, Linux
  },
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  computed: {
    platformOrder() {
      let platforms = ['windows', 'linux', 'mac'];
      if (os.linux) {
        this.move(platforms, 1, 0);
      } else if (os.macos) {
        this.move(platforms, 2, 0);
      }
      return platforms;
    }
  },
  methods: {
    move(array, from, to) {
      array.splice(to, 0, array.splice(from, 1)[0]);
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
