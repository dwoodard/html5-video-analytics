<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

  <h2>HTML 5 Video Analytics</h2>
  <div class="videos">
    <video va id="video" controls preload="none" mediagroup="myVideoGroup">
      <source id="mp4" src="videos/sintel-trailer.mp4" type="video/mp4">
    </video>
{{--    <video va id="video" controls preload="none" mediagroup="myVideoGroup">--}}
{{--      <source id="mp4" src="videos/trailer.mp4" type="video/mp4">--}}
{{--      <source id="ogv" src="http://media.w3.org/2010/05/sintel/trailer.ogv" type="video/ogg">--}}
{{--    </video>--}}
  </div>
  
  <script src="js/va.js"></script>
 
  <script>
    // va('#video','video','.video')
    // va('#video,video,.video')
    va('video')
  </script>
</body>
</html>