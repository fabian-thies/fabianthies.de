<script>
    import Nav from "$lib/components/Nav.svelte";
    import "../app.css";

    let {children} = $props();
</script>

<Nav/>
{@render children()}