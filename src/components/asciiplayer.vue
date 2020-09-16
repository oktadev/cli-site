<template>
    <figure :id="id"></figure>
</template>

<script>
    export default {
        props: ['id', 't', 'speed', 'cols'],
        data() {
            return {
                source: `https://asciinema.org/a/${this.id}.js`,
                ascid: `asciicast-${this.id}`
            }
        },
        mounted() {
            // Can't use script tags directly apparently
            let asciiscript = document.createElement('script');
            asciiscript.setAttribute('src', this.source);
            asciiscript.setAttribute('id', this.ascid);
            asciiscript.setAttribute('data-preload', '1');
            asciiscript.setAttribute('data-speed', this.speed);
            asciiscript.setAttribute('data-t', this.t);
            // asciiscript.setAttribute('data-cols', this.cols);
            console.log(this.id);
            document.getElementById(this.id).appendChild(asciiscript)
        }
    }
</script>