<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>TODO list</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{ url('css/style.css')}}">


    </head>
    <body class="body">
    <div id="left-top"></div>
    <div id="right-top"></div>
    <div id="left-bottom"></div>
    <div id="right-bottom"></div>
       <div id="app">
           <app></app>
       </div>
    </body>
<script src="{{ mix('js/app.js') }}"></script>
<script src="{{url('js/script.js')  }}"></script>
</html>
