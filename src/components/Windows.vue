<template>
    <div>
        <codemirror v-model="code" :options="cmOptions"></codemirror>
    </div>
</template>
<script>
import dedent from 'dedent'

export default {
    name: 'Windows',
    data() {
        return {
            code: dedent`
                rem Make sure the chocolatey package manager is installed
                @"%SystemRoot%\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command " [System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\\chocolatey\\bin"

                rem Then:
                choco install okta --version 0.6.0`,
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
<style>
.CodeMirror {
  border: 1px solid #eee;
  height: auto;
}
</style>
