<script>
	import Navbar from "./Navbar.svelte";
	import Footer from "./Footer.svelte";
</script>

<div class="app">
	<div id="wrapper">
		<header>
			<Navbar/>
		</header>

		<main>
			<slot />
		</main>
	</div>

	<footer>
		<Footer />
	</footer>

</div>

<style>
	#wrapper{
		height : auto;
  		min-height: 100%;
	}
	footer{
		position : relative;
		transform : translateY(100%);
	}
</style>
