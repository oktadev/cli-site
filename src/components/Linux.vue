<template>
    <div>
        <pre>
        # Add Flathub repo
        flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

        # install the package
        flatpak install com.okta.developer.CLI

        # add this to your appropriate dot file
        alias okta="flatpak run com.okta.developer.CLI"
        </pre>
    </div>
</template>
<script>
export default {
    name: 'Linux'
}
</script>