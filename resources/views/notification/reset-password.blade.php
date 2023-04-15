
@extends('notification.layout')
@section('title', 'Cambiar Contraseña')
@section('section')
    <div class="container-section">
        <div>
            <h2>Cambiar Contraseña</h2>
        </div>
        <div>
            <p>Haga clic en el enlace de abajo para resetear su contraseña:</p>
        </div>
        <div>
            <a href={{"$url"}} class="button">
                Resetear Contraseña
            </a>
        </div>
        <div>
            <p class="text-small">Si no solicitó resetear la contraseña, olvide este correo eletronico.</p>
        </div>
    </div>
@endsection
