<!doctype html>
<html class="no-js" lang="en">
	<head>
		<meta charset="utf-8">
		<title><%= projectName %></title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!--
			██╗  ██╗██╗ ██████╗██╗  ██╗ ██████╗ ███████╗███████╗
			██║ ██╔╝██║██╔════╝██║ ██╔╝██╔═══██╗██╔════╝██╔════╝
			█████╔╝ ██║██║     █████╔╝ ██║   ██║█████╗  █████╗
			██╔═██╗ ██║██║     ██╔═██╗ ██║   ██║██╔══╝  ██╔══╝
			██║  ██╗██║╚██████╗██║  ██╗╚██████╔╝██║     ██║
			╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝
			Built with Kickoff
		-->

		{/* <link rel="stylesheet" href="/assets/dist/css/kickoff.css"> */}

		<script>
			var win = window, doc = win.document, docElem = doc.documentElement;
			// Replace 'no-js'/'js' class on <html>
			docElem.className = docElem.className.replace(/\bno-js\b/g, '') + ' js ';
			/*
				Dynamically load scripts / cutting the mustard test
				https://gist.github.com/nicbell/9a9c919e6d69aff47e285945550b445c
			*/
		</script>

		<!-- Configure Polyfills https://cdn.polyfill.io/ -->
		{/* <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script><% */}
	</head>
	<body>
		<div id="main" class="l-container" role="main">

		</div><!-- Close #main -->

		<script src="/assets/dist/js/kickoff.js"></script>
	</body>
</html>
