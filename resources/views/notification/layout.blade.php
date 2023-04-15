<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    @vite(['resources/css/app.css'])
    <style>
        .container{
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
            align-content: center;
            align-items: center;
            width: 100%;
        }
        .octonove{
            height:6rem;
            width:6rem;
            margin-bottom: 1rem;
        }
        h2{
            font-weight: 700;
        }
        .container-section{
            background: #ffffff;
            box-shadow:  #000000;
            border: 1px solid rgb(216, 216, 216);
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            height: 24rem;
            width: 24rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.75rem;
        }
        .button{
            display: inline-flex;
            position: relative;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.875rem;
            padding-right: 0.875rem;
            margin: 0.25rem;
            background-color: #8B5CF6;
            color: #ffffff;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            border-radius: 0.25rem;
            border-bottom-width: 4px;
            border-left-width: 2px;
            border-color: #6D28D9;
            cursor: pointer;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .text-small{
            font-size: 0.875rem;
            line-height: 1.25rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <img class="octonove" src="https://cdn-bjgin.nitrocdn.com/LxoCvaeHElFzlCBGqsfvssGnySbvIRYM/assets/images/optimized/rev-2f83237/wp-content/uploads/2022/01/cropped-octo-300x300.png" alt=""/>
        @yield('section')
    </div>
</body>
</html>
