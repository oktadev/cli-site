<template>
    <div>
        <codemirror v-model="code" :options="cmOptions"></codemirror>
    </div>
</template>
<script>
import dedent from 'dedent'

export default {
    name: 'Linux',
    data() {
        return {
            code: dedent`
                ## Add Flathub repo
                flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

                ## install the package
                flatpak install flathub com.okta.developer.CLI

                ## add this to your appropriate dot file
                alias okta="flatpak run com.okta.developer.CLI"`,
            cmOptions: {
                mode: 'text/x-sh',
                lineNumbers: true,
                line: true
            }
        }
    }
}
</script>
