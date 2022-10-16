<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="Praktyczny Angielski - Ucz się angielskiego jakiego potrzebujesz!"/>
        <meta name="author" content="Szymon Radosz" />
        <link rel="icon" type="images/png" href="/images/favicon.png"/>
        <title>Praktyczny Angielski - Ucz się angielskiego jakiego potrzebujesz!</title>
        <!-- <link rel="icon" type="image/png" href="images/favicon.png" /> -->
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
        <link rel="stylesheet" type="text/css" href="{{mix('css/app.css')}}?v=<?php echo date('Y-m-d H:i:s') ?>">

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-169897248-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-169897248-1');
        </script>

    </head>
    <body>
        <div id="app"></div>

        @if (env('APP_ENV') === 'production')
            <script>
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
            </script>
        @endif

        <link href="https://fonts.googleapis.com/css?family=Notable&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap" rel="stylesheet">
        
        <script src="{{mix('js/app.js')}}?v=<?php echo date('Y-m-d H:i:s') ?>" ></script>
    </body>
</html>
