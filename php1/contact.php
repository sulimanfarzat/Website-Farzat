<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: TangledDemo'; 
    $to = 's_farzat@outlook.com'; 
    $subject = 'Hello';
    $human = $_POST['human'];
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit'] && $human == '4') {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<p>Your message has been sent!</p>';
	} else { 
	    echo '<p>Something went wrong, go back and try again!</p>'; 
	} 
    } else if ($_POST['submit'] && $human != '4') {
	echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
	<head>
	<meta content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Farzat Contant</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="FARZAT GROUP FOR DEVELOPMENT Started its vital activities at the beginning of 1987, inspired by the national and humanitarian desire to participate in the comprehensive sincere efforts for the development and prosperity of human beings." />
	<meta name="keywords" content="farzat, Farzat, farzat, farzat for development, oil, famco, mahmoud farzat, mudar farzat, farzat, oil, ghee, sunflower oil, cotton, cotton oil, corn oil, linter, yarns, cotton yarns, plastic, ps, gpps, palm oil, shortening, margarine, cotton meal, soya meal, feed meal, foam meals, foam, homs" />
	<meta name="author" content="FARZAT GROUP FOR DEVELOPMENT" />

 

  	<!-- FaceDr. Farzat Book 1st and Twitter integration -->
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />

	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
	<link rel="shortcut icon" href="favicon.ico">

	<!-- <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'> -->
	
        <!-- Animate.css -->
        <link rel="stylesheet" href="css/animate.css">
        <!-- Icomoon Icon Fonts-->
        <link rel="stylesheet" href="css/icomoon.css">
        <!-- Bootstrap  -->
        <link rel="stylesheet" href="css/bootstrap.css">
        <!-- Superfish -->
        <link rel="stylesheet" href="css/superfish.css">

        <link rel="stylesheet" href="css/style.css">

        <link rel="stylesheet" href="css/w3.css">

        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

        <link type="text/css" rel="stylesheet" href="css/style-slide.css" />



	<!-- Modernizr JS -->
	<script src="js/modernizr-2.6.2.min.js"></script>
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

	</head>
	<body>
		<div id="fh5co-wrapper">
		<div id="fh5co-page">
      <div id="fh5co-header">
        <header id="fh5co-header-section">
          <div class="container">
            <div class="nav-header">
              <a class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
              <h1><a href="index.html" ><img id="fh5co-logo" src="images/logos/FARZAT-TRANSPARENT-new.png"></a></h1>
              <!-- START #fh5co-menu-wrap -->
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul class="sf-menu" id="fh5co-primary-menu">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                    <li>
                        <a href="about.html" class="fh5co-sub-ddown">About</a>
                    </li>
				  <li>
              <a href="founder.html" class="fh5co-sub-ddown">The Founder</a>
              <ul class="fh5co-sub-menu">
                  <li><a href="founder.html#dr_farzat" target="_blank">Dr. Farzat Profile</a></li>
                  <li><a href="founder.html#myNav">DR. Farzat Prize</a></li>
                  <li><a href="https://drive.google.com/file/d/0B2M-od738SmBNVNJaGs5M01GTDA/view?usp=sharing" target="_blank">Dr. Farzat Book 1st</a></li>
              </ul>
                  </li>
                  <li>
                    <a href="development.html" class="fh5co-sub-ddown">Company</a>
                    <ul class="fh5co-sub-menu">
                      <li>
                        <a href="development.html" target="_blank" class="fh5co-sub-ddown">DEVELOPMENT</a>
                      </li>
                  
                  <li>
                    <a href="famco.html" target="_blank">FAMCO </a>
                  </li>
                  <li><a href="sysacco.html" target="_blank">SYSACCO</a></li>
                  <li><a href="megaplast.html" target="_blank">MEGAPLAST</a></li>
                  <li><a href="shamtex.html" target="_blank">SHAMTEX </a></li>
                 <!--  <li>
                    <a href="##" target="_blank">INVESTMENTS</a>
                  </li>
                  <li>
                    <a href="##" target="_blank">CHARITY</a>
                  </li> -->
                  </ul>
                  </li>
   
                  <li class="active"><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

      </div>
		
		
		<div class="fh5co-hero w3-dark" style="top:129px">			
		<div id="fh5co-contact" class="fh5co-section animate-box">
			<div class="container">
				
					<div class="row">
						<div class="col-md-6">
							<h3 class="section-title">Our Address:</h3>
							<p>FARZAT GROUP FOR DEVELOPMENT.</p>
							<ul class="contact-info">
								<li><i class="icon-location-pin"></i>FARZAT BUILDING, AL DABLAN GARDEN</li>
								<li><i class="icon-phone2"></i>+963 31 486 6711</li>
                                <li><i class="icon-old-phone"></i>+20 12 0110 5350</li>
                                <li><i class="icon-phone"></i>+963 31 486 6718</li>
								<li><i class="icon-mail"></i><a href="#"> info@farzat.co</a></li>
								<li><i class="icon-globe2"></i><a href="index.html"> www.farzat.co</a></li>
							</ul>
						</div>
                        <div class="col-md-6">
                            <div class="row">
                                <form method="post" action="?">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" class="form-control" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" id="" cols="30" rows="7" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input  id="submit" name="submit" type="submit" value="Send Message" class="btn btn-primary">
                                        </div>
                                    </div>
                                    </form>
                            </div>
                        </div>
					</div>
			
			</div>
		</div>
     </div>   

		<!-- END fh5co-contact -->
		<div id="map" class="fh5co-map"></div>
		<!-- END map -->


		
		
            <footer>
                <div id="footer" class="w3-opacity-min">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 text-center">
                                <p class="fh5co-social-icons">
                                    <a target="_blank" href="https://plus.google.com/+MudarFARZAT/posts"><i class="icon-google2"></i></a>
                                    <a target="_blank" href="https://www.youtube.com/channel/UCCSnx8NH7vsXUPvpUGi4aZg"><i class="icon-youtube"></i></a>
                                    <a target="_blank" href="https://www.faceDr. Farzat Book 1st.com/farzatgroup?ref=hl"><i class="icon-faceDr. Farzat Book 1st2"></i></a>
                                    <!--  <a target="_blank" href="#"><i class="icon-instagram"></i></a> -->
                                    <a target="_blank" href="https://www.linkedin.com/in/farzat-group-for-development-a8b779135/"><i class="icon-linkedin2"></i></a>
                                    <a target="_blank" href="skype:m_farzat?call"><i class="icon-skype2"></i></a>

                                </p>
                                <p style="margin-bottom:0;">
                                    Copyright 2016 Farzat Group.
                                    <a href="#"></a> All Rights Reserved. <br>Made by <i class="icon-heart3"></i>  <a href="https://www.faceDr. Farzat Book 1st.com/Suliman.Farzat" target="_blank">Suliman Farzat</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
	

	</div>
	<!-- END fh5co-page -->

	</div>
	<!-- END fh5co-wrapper -->

	<!-- jQuery -->


	<script src="js/jquery.min.js"></script>
	<!-- jQuery Easing -->
	<script src="js/jquery.easing.1.3.js"></script>
	<!-- Bootstrap -->
	<script src="js/bootstrap.min.js"></script>
	<!-- Waypoints -->
	<script src="js/jquery.waypoints.min.js"></script>
	<!-- Stellar -->
	<script src="js/jquery.stellar.min.js"></script>
	<!-- Superfish -->
	<script src="js/hoverIntent.js"></script>
	<script src="js/superfish.js"></script>

	<!-- Google Map -->
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCefOgb1ZWqYtj7raVSmN4PL2WkTrc-KyA&sensor=false"></script>
	<script src="js/google_map.js"></script>

	<!-- Main JS -->
	<script src="js/main.js"></script>
    <!--<script type="text/javascript" src="js/scroll2.js"></script>-->

            <!--<script>
                $(window).on("scroll", function () {
                    if ($(this).scrollTop() > 150) {
                        $("header").addClass("w3-green");
                    }
                    else {
                        $("header").removeClass("w3-green");
                    }
                });
            </script>-->

        <script>
            var form = document.getElementsByTagName('form')[0];
            form.addEventListener('submit', contact, false);
            function contact(e) {
                // Prevent Default Form Submission
                e.preventDefault();

                var target = e.target || e.srcElement;
                var i = 0;
                var message = '';

                // Loop Through All Input Fields
                for (i = 0; i < target.length; ++i) {
                    // Check to make sure it's a value. Don't need to include Buttons
                    if (target[i].type != 'text' && target[i].type != 'textarea') {
                        // Skip to next input since this one doesn't match our rules
                        continue;
                    }

                    // Add Input Name and value followed by a line break
                    message += target[i].name + ': ' + target[i].value + "\r\n";
                }
                // Modify the hidden body input field that is required for the mailto: scheme
                target.elements["body"].value = message;

                // Submit the form since we previously stopped it. May cause recursive loop in some browsers? Should research this.
                this.submit();
            }
        </script>
	</body>
</html>

