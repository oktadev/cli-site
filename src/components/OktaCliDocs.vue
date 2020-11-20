<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <h2 class="text-left">Okta CLI (beta) Documentation</h2>
          <p class="text-left">The Okta CLI is the easiest way to get started with Okta!</p>
          <p class="text-left">Get started with installation on your platform:</p>
          <div>
            <b-card no-body>
              <b-tabs card fill>
                <b-tab v-for="component in platformOrder" :key="component" :title="component"><component :key="component" :is="component"/></b-tab>
              </b-tabs>
            </b-card>
          </div>
          <p/>
          <p class="text-left">Create an Okta org, setup an Okta Application, and populate a code sample all with one command:</p>
          <asciiplayer class="text-left" id="gnxnMVLjTEuSCYuFNlZVYsQw2" t="4" speed="2"></asciiplayer>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

import os from 'platform-detect/os.mjs'
import Windows from '@/components/Windows.vue'
import MacOS from '@/components/Mac.vue'
import Linux from '@/components/Linux.vue'

import asciiplayer from '@/components/asciiplayer.vue'

export default {
  name: 'Home',
  components: {
    'Windows': Windows, 
    'MacOS': MacOS, 
    'Linux': Linux,
    'asciiplayer': asciiplayer
  },
  props: {
    msg: String
  },
  data() {
    return {

    }
  },
  mounted() {
    
  },
  computed: {
    platformOrder() {
      let platforms = ['MacOS', 'Windows', 'Linux'];
      if (os.windows) {
        this.move(platforms, 1, 0);
      } else if (os.linux) {
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
.CodeMirror {
  border: 1px solid #eee;
  height: auto;
}
</style>
