<template>
    <div>
        <codemirror ref="cm" v-model="code" :options="cmOptions"></codemirror>
    </div>
</template>
<script>
import dedent from 'dedent'

export default {
    name: 'macOS',
    data() {
        return {
            code: dedent`
                ## Make sure Homebrew is installed
                /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

                ## Then:
                brew cask install oktadeveloper/tap/okta`,
            cmOptions: {
                mode: 'text/x-sh',
                lineNumbers: true,
                line: true
            }
        }
    },
    mounted() {
    }
}
</script>
<style scoped>
.CodeMirror {
  border: 1px solid #eee;
  height: auto;
}
</style>