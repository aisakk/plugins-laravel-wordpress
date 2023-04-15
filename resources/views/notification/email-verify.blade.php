
@extends('notification.layout')

@section('title', 'Verificacion de Email')
@section('section')
    <div class="container-section">
        <div>
            <h2>Verificacion Email</h2>
        </div>
        <div>
            <p>Haga clic en el enlace de abajo para verificar su correo electrónico:</p>
        </div>
        <div>
            <a href={{"$url"}} class="button">
                Verificar Correo Electronico
            </a>
        </div>
        <div>
            <p class="text-small">Si no solicitó la verificación de correo electrónico,  olvide este correo eletronico.</p>
        </div>
    </div>
@endsection
