function getCountries() {

    $.ajaxSetup({
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    });

    const url = "https://devdash.universopsiquico.com/api/getAllCountries";
    $.ajax({
        url,
        method: "GET",
        dataType: "JSON",
        cache: false

    }).done(function (sRes) {
        if (sRes['res'] == "ok") {
            $('#ubicacion').html(sRes['msg']);

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: sRes['msg']
            });
        }

    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {
            console.log('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {
            console.log('Requested page not found [404]');

        } else if (jqXHR.status == 500) {
            console.log('Internal Server Error [500].');

        } else if (textStatus === 'parsererror') {
            console.log('Requested JSON parse failed.');

        } else if (textStatus === 'timeout') {
            console.log('Time out error.');

        } else if (textStatus === 'abort') {
            console.log('Ajax request aborted.');

        } else {
            console.log('Uncaught Error: ' + jqXHR.responseText);

        }

    });
}

function getUser() {

    $.ajaxSetup({
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    });

    const url = "https://devdash.universopsiquico.com/api/advicer/getAdvicer";
    $.ajax({
        url,
        method: "GET",
        dataType: "JSON",
        cache: false

    }).done(function (sRes) {
        // console.log(sRes);

        if (sRes['res'] == "ok") {
            $('#nickname').val(sRes['msg']['nickname']);
            $('#foto-perfil').attr("data-default-file", sRes['msg']['imgUsuario']);
            $('#descripcion').val(sRes['msg']['descripcion']);
            $('#identificacion').val(sRes['msg']['identificacion']);
            $('#primer-nombre').val(sRes['msg']['primerNombre']);
            $('#segundo-nombre').val(sRes['msg']['segundoNombre']);
            $('#primer-apellido').val(sRes['msg']['primerApellido']);
            $('#segundo-apellido').val(sRes['msg']['segundoApellido']);
            $('#correo-electronico').val(sRes['msg']['correoElectronico']);
            $('#telefono-fijo').val(sRes['msg']['telefonoFijo']);
            $('#telefono-movil').val(sRes['msg']['telefonoMovil']);
            $('#direccion').val(sRes['msg']['direccionResidencia']);
            $('#ubicacion').val(sRes['msg']['ubicacion']);
            $('#bank-account').val(sRes['msg']['bankAccount']);
            $('#paypal-account').val(sRes['msg']['paypalAccount']);

            $('.dropify').dropify({
                messages: {
                    'default': 'Arrastra y suelta una imagen aquí o haz click',
                    'replace': 'Arrastra y suelta o haz click para reemplazar la imagen',
                    'remove': 'Eliminar',
                    'error': 'Ooops, ha ocurrido un error.'
                },
                error: {
                    'fileSize': 'El tamaño del archivo es muy grande: ({{ value }} max).',
                    'minWidth': 'El ancho de la imagen es muy pequeño: ({{ value }}}px min).',
                    'maxWidth': 'El ancho de la imagen es muy grande: ({{ value }}}px max).',
                    'minHeight': 'El alto de la imagen es muy pequeño: ({{ value }}}px min).',
                    'maxHeight': 'El alto de la imagen es muy grande: ({{ value }}px max).',
                    'imageFormat': 'El formato de la imagen no está permitido: solo ({{ value }}).'
                }
            });

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: sRes['msg']
            });
        }

    }).fail(function (jqXHR, textStatus, errorThrown) {

        if (jqXHR.status === 0) {
            console.log('Not connect: Verify Network.');

        } else if (jqXHR.status == 404) {
            console.log('Requested page not found [404]');

        } else if (jqXHR.status == 500) {
            console.log('Internal Server Error [500].');

        } else if (textStatus === 'parsererror') {
            console.log('Requested JSON parse failed.');

        } else if (textStatus === 'timeout') {
            console.log('Time out error.');

        } else if (textStatus === 'abort') {
            console.log('Ajax request aborted.');

        } else {
            console.log('Uncaught Error: ' + jqXHR.responseText);

        }

    }).always(function () {
        customFormFunc();
    });
}

function updateProfile() {

    let nickname = $('#nickname').val();
    let descripcion = $('#descripcion').val();
    let identificacion = $('#identificacion').val();
    let primerNombre = $('#primer-nombre').val();
    let segundoNombre = $('#segundo-nombre').val();
    let primerApellido = $('#primer-apellido').val();
    let segundoApellido = $('#segundo-apellido').val();
    let correoElectronico = $('#correo-electronico').val();
    let telefonoFijo = $('#telefono-fijo').val();
    let telefonoMovil = $('#telefono-movil').val();
    let direccion = $('#direccion').val();
    let ubicacion = $('#ubicacion').val();
    let bankAccount = $('#bank-account').val();
    let paypalAccount = $('#paypal-account').val();

    if (nickname == "") {
        afbgdNotify($('#nickname'), "Escribe tu nombre de usuario");

    } else if (descripcion == "") {
        afbgdNotify($('#descripcion'), "Escribe una descripción tuya");

    } else if (identificacion == "") {
        afbgdNotify($('#identificacion'), "Escribe tu número de identificación");

    } else if (primerNombre == "") {
        afbgdNotify($('#primer-nombre'), "Escribe tu primer nombre");

    } else if (segundoNombre == "") {
        afbgdNotify($('#segundo-nombre'), "Escribe tu segundo nombre");

    } else if (primerApellido == "") {
        afbgdNotify($('#primer-apellido'), "Escribe tu primer apellido");

    } else if (segundoApellido == "") {
        afbgdNotify($('#segundo-apellido'), "Escribe tu segundo apellido");

    } else if (!validarEmail(correoElectronico)) {
        afbgdNotify($('#correo-electronico'), "Ingresa un correo electrónico válido");

    } else if (telefonoMovil == "") {
        afbgdNotify($('#telefono-movil'), "Escribe tu teléfono móvil");

    } else if (direccion == "") {
        afbgdNotify($('#direccion'), "Escribe tu dirección de residencia");

    } else if (ubicacion == "seleccionar") {
        afbgdNotify($('#ubicacion'), "Selecciona tu ubicación");

    } else {

        var dataSend = {
            req: "updateEspecialista",
            nickname,
            descripcion,
            identificacion,
            primerNombre,
            segundoNombre,
            primerApellido,
            segundoApellido,
            correoElectronico,
            telefonoFijo,
            telefonoMovil,
            direccion,
            ubicacion,
            bankAccount,
            paypalAccount
        };

        $.ajax({
            url: "/controller/dshb-perfil-especialista-controller.php",
            data: dataSend,
            method: "POST",
            dataType: "JSON",
            cache: false,
            beforeSend: function () {
                $('#fsbtn-primary').addClass("loading");
            }

        }).done(function (sRes) {
            // console.log(sRes);

            if (sRes['res'] == "ok") {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: sRes['msg'],
                    showConfirmButton: false,
                    timer: 1500
                });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: sRes['msg']
                });
            }

        }).fail(function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status === 0) {
                console.log('Not connect: Verify Network.');

            } else if (jqXHR.status == 404) {
                console.log('Requested page not found [404]');

            } else if (jqXHR.status == 500) {
                console.log('Internal Server Error [500].');

            } else if (textStatus === 'parsererror') {
                console.log('Requested JSON parse failed.');

            } else if (textStatus === 'timeout') {
                console.log('Time out error.');

            } else if (textStatus === 'abort') {
                console.log('Ajax request aborted.');

            } else {
                console.log('Uncaught Error: ' + jqXHR.responseText);

            }

        }).always(function () {
            $('#fsbtn-primary').removeClass("loading");
        });
    }
}

$('#btn-update').click(function (e) {
    e.preventDefault();

    updateProfile();
});

$('#btn-descartar').click(function (e) {
    e.preventDefault();
    getUser();
});

getCountries();
getUser();
