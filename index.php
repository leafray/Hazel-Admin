<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Admin</title>

	<link rel="stylesheet" href="http://localhost/admin/css/style.css">
	 <base href="http://localhost/admin/">
</head>
<body>

	<?php

	include "inc/header.php";
	include "inc/sidebar.php";

	$url =  ltrim($_SERVER['REQUEST_URI'], '/');
	$exp = explode('/', $url);

	$host = $_SERVER['HTTP_HOST'];
	?>

	<section class="main-content">
		<div class="content-wrapper">
		<?php
			if( !file_exists('inc/pages/'. $exp[1] .'.php') ) {
				header('Location: http://'. $host .'/admin/dashboard');
			}
			else {
				include 'inc/pages/'. $exp[1] .'.php';
			}
		?>
		</div>
	</section>
	
	<script src="js/jquery-3.4.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>

</body>
</html>