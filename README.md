# jsnav
A responsive multi-level navigation menu.


## Installation

Add it directly to your webpage using a CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/junsantilla/jsnav/jsnav.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/gh/junsantilla/jsnav/js/menu.js" defer></script>
```

## Usage

After installing, simply add this navigation menu section to the ``<body>`` of your webpage:

```html
<div class="jsnav-header">
	<div class="jsnav-header-wrapper">
		<div class="logo">
			<a href="#">Demo</a>
		</div>
		<!-- .logo -->
		<div class="burger-menu">
			<div class="hamburger-inner"></div>
		</div>
		<!-- .burger-menu -->
		<nav class="jsnav-menu">
			<ul>
				<li class="current-menu">
					<a href="#">Home</a>
					<ul>
						<li><a href="#">Dropdown menu</a></li>
						<li><a href="#">Dropdown menu</a></li>
						<li>
							<a href="#">Dropdown menu</a>
							<ul>
								<li><a href="#">Dropdown menu</a></li>
								<li><a href="#">Dropdown menu</a></li>
								<li><a href="#">Dropdown menu</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li><a href="#">About Us</a></li>
				<li><a href="#">Portfolio</a>
				<li>
					<a href="#">Services</a>
					<ul>
						<li><a href="#">Dropdown menu</a></li>
						<li><a href="#">Dropdown menu</a></li>
						<li><a href="#">Dropdown menu</a></li>
						<li><a href="#">Dropdown menu</a></li>
					</ul>
				</li>
				<li><a href="#">Contact Us</a></li>
			</ul>
		</nav><!-- nav -->
	</div><!-- .jsnav-header-wrapper -->
</div><!-- .jsnav-header -->
```

## License
jsnav is licensed under MIT - <https://opensource.org/licenses/MIT>
