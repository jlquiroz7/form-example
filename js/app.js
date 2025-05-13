var app = angular.module('myApp', []);//'myApp.currency'
app.directive('autocomplete', function($timeout) {
    return {
      controller: 'autocompleteController',
      restrict: 'E',
      replace: true,
      scope: {
        choices: '=',
        enteredtext: '=',
        minlength: '=',
        selected: '='
      },
      templateUrl: 'index.html'
    }
  });
//Controllers
app.controller('main', function ($scope) {
    $scope.ruta_mail = {}
    $scope.correcto = false;
    $scope.url_base = 'http://201.159.177.110/Plosa/apis/';
    $scope.url_base_compartida = 'http://201.159.177.110/Plosa/apis/';
    $scope.saldos_por_vendedor = {};
    $scope.abonos_cliente = {};
    $scope.reporte_flujos = {};
    $scope.reporte_comisiones = {};
    $scope.reporte_canceladas = {};
    $scope.url_add_nota = 'http://201.159.177.110/Plosa/apis/AddNota.php?'
    $scope.facturas = {};
    $scope.consultando = false;
    $scope.correo_ventas = undefined
    $scope.password = '';
    $scope.remitente = 'Server Eco Web [server.web.eco@gmail.com]'
    $scope.remitente_mail = 'server.web.eco@gmail.com'
    $scope.proveedores = [];
    $scope.invoices = [];
    $scope.vendedores_cobros = [];
    $scope.vendedores_saldos = [];
    $scope.vendedores_catalogo = [];
    $scope.vendedores_flujos = [];
    $scope.vendedores_comisiones = [];
    $scope.articulos = [];
    $scope.clientes = [];
    $scope.vendedores_cobros_obj = {};
    $scope.vendedores_saldos_obj = {};
    $scope.vendedores_flujos_obj = {};
    $scope.vendedores_canceladas = {};
    $scope.vendedores_comisiones_obj = {};
    $scope.articulos_obj = {};
    $scope.articulo = {}; //WORKING
    $scope.clientes_obj = {};
    $scope.series_rv = {};
    $scope.tipo_cambio_cobro = 0;//NUEVA VARIABLE PARA ALMACENAR AMBOS TIPOS DE CAMBIO PARA LA NUEVA VALIDACION DE LA DIVISA
    $scope.tipo_cambio_venta = 0;//NUEVA VARIABLE PARA ALMACENAR AMBOS TIPOS DE CAMBIO PARA LA NUEVA VALIDACION DE LA DIVISA
    $scope.nota = {};
    $scope.note = {};//WORKING
    $scope.note.total_dolares = 0//WORKING
    $scope.note.total = 0//WORKING
    $scope.note.tipo_cambio = 21;//
    $scope.note.articulos = []
    $scope.nota.pesos = true;
    $scope.note.pesos = true;//WORKING
    $scope.note.currency = 'MXN' //WORKING
    $scope.nota.currency = 'MXN'
    $scope.note.pesos = true;//WORKING
    $scope.note.currency = 'MXN'//WORKING
    $scope.nota.accion = 'REIMPRIMIR'
    $scope.articulo_nota0 = {} //WORKING
    $scope.articulo_nota1 = {} //WORKING
    $scope.articulo_nota2 = {} //WORKING
    $scope.articulo_nota3 = {} //WORKING
    $scope.articulo_nota4 = {} //WORKING
    $scope.articulo_nota5 = {} //WORKING
    $scope.articulo_nota6 = {} //WORKING
    $scope.articulo_nota7 = {} //WORKING
    $scope.criterio = true;
    $scope.print_ticket = false
    $scope.showTable = false
    $scope.nombre_usuario_logeado = 'x'
    $scope.precio_input = 0;
    $scope.correos_global = [];
    $scope.articulo_index = 52
    $scope.hasClient = false
    $scope.mensaje = 'CONSTRUYENDO NOTA'
    $scope.mensaje_solicitud = ''
    $scope.articulo_was_added = {}
    $scope.autorizacion = false
    $scope.arrayIndex = []
    $scope.totalizar = true;
    $scope.autorizacion_venta_dedudor = false
    $scope.note.hasArticleMXN = false
    $scope.articulos_cambio_divisa = []
    $scope.catalogo_excel = {
        mail:'',
        vendedor : ''
    }
    $scope.sin_actividad = {
        vendedor : '',
        dias     : 45,
        mail     : ''
    }
    var codigos = new Map();
    codigos.set('object:53',1)
    codigos.set('object:54',2)
    codigos.set('object:55',3)
    codigos.set('object:56',4)
    codigos.set('object:57',5)
    codigos.set('object:58',6)
    codigos.set('object:59',7)
    codigos.set('object:60',8)
    codigos.set('object:61',9)
    codigos.set('object:62',10)
    codigos.set('object:63',11)
    codigos.set('object:64',12)
    codigos.set('object:65',13)
    codigos.set('object:66',14)
    codigos.set('object:67',15)
    codigos.set('object:68',16)
    codigos.set('object:69',17)
    codigos.set('object:70',18)
    codigos.set('object:71',19)
    codigos.set('object:72',20)
    codigos.set('object:73',21)
    codigos.set('object:74',22)
    codigos.set('object:75',23)
    codigos.set('object:76',24)
    codigos.set('object:77',25)
    codigos.set('object:78',26)
    codigos.set('object:79',27)
    codigos.set('object:80',28)
    codigos.set('object:81',29)
    codigos.set('object:82',30)
    codigos.set('object:83',31)
    codigos.set('object:84',32)


    codigos.set('object:85',33)
    codigos.set('object:86',34)
    codigos.set('object:87',35)
    codigos.set('object:88',36)
    codigos.set('object:89',37)
    codigos.set('object:90',38)
    codigos.set('object:91',39)
    codigos.set('object:92',40)
    codigos.set('object:93',41)
    codigos.set('object:94',42)
    codigos.set('object:95',43)
    codigos.set('object:96',44)
    codigos.set('object:97',45)
    codigos.set('object:98',46)
    codigos.set('object:99',47)
    codigos.set('object:100',48)
    codigos.set('object:101',49)
    codigos.set('object:102',50)
    codigos.set('object:103',51)
    codigos.set('object:104',52)
    codigos.set('object:105',53)
    codigos.set('object:106',54)
    codigos.set('object:107',55)
    codigos.set('object:108',56)
    codigos.set('object:109',57)//98
    codigos.set('object:110',58)
    codigos.set('object:111',59)
    codigos.set('object:112',60)
    codigos.set('object:113',61)
    codigos.set('object:114',62)
    codigos.set('object:115',63)
    codigos.set('object:116',64)
    codigos.set('object:117',65)
    codigos.set('object:118',66)
    codigos.set('object:119',67)
    codigos.set('object:120',68)
    codigos.set('object:121',69)
    codigos.set('object:122',70)
    codigos.set('object:123',71)
    codigos.set('object:124',72)
    codigos.set('object:125',73)

    codigos.set('object:126',74)
    codigos.set('object:127',75)
    codigos.set('object:128',76)
    codigos.set('object:129',77)
    codigos.set('object:130',78)
    codigos.set('object:131',79)
    codigos.set('object:132',80)
    codigos.set('object:133',81)
    codigos.set('object:134',82)
    codigos.set('object:135',83)

    codigos.set('object:136',84)
    codigos.set('object:137',85)
    codigos.set('object:138',86)
    codigos.set('object:139',87)
    codigos.set('object:140',88)
    codigos.set('object:141',89)
    codigos.set('object:142',90)
    codigos.set('object:143',91)
    codigos.set('object:144',92)
    codigos.set('object:145',93)
    codigos.set('object:146',94)
    codigos.set('object:147',95)
    codigos.set('object:148',96)
    codigos.set('object:149',97)
    codigos.set('object:150',98)

    $scope.verVentas = false
    $scope.bancos = [];
    $scope.numero_input = 0
    $scope.pay_contado = {}
    var formatter = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    })
    $scope.doble_session = false;
    $scope.mensaje_session = '';
    $scope.session_close = false;

    //********************************************************SECCION DE COBROS***************************************************************************** */
    $scope.cobros = false
    $scope.cobro = {}
    $scope.cobro.abono = 0
    $scope.cobro.importe = 0
    $scope.accion_cobros = 'COBRAR NOTA'
    $scope.cobro.pesos = true
    $scope.cobro.banco = ''
    $scope.cobro.tipo_detalle = 'E';
    $scope.cobro.posfechado = '';
    $scope.cobro.num = 0
    $scope.show_data_pay = false 

    $scope.initListenerWindow = () => {
        //console.log('Activando el lsitener de la ventana...');
        window.addEventListener("beforeunload", function (e) {
            if(!$scope.session_close){
                $scope.cerrarSession();
            }                           
          });

    }

    $scope.initListenerWindow();

    $scope.cerrarSession= () => {
        if ($scope.nombre_usuario_logeado!='X') {
            $.ajax({
                url: $scope.url_base+'GetUserLogin.php',
                type: 'GET',
                data: {'USER':$scope.usuario.toLowerCase(),'KEY':$scope.password,'SITIO':'PEDIDOS','LOG_OUT':'X'},
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                success: function (respuesta) {
                    console.log(JSON.stringify(respuesta));
                    window.open('index.html', '_self', '');
                    window.close();
                },
                error: function () {
                    console.log("Error Login ");
                }
            });
        }
    }

    $scope.validarLoginSitio = () => {
        var response = true;
        $.ajax({
            url: $scope.url_base+'GetUserLogin.php',
            type: 'GET',
            data: {'USER':$scope.usuario.toLowerCase(),'KEY':$scope.password,'SITIO':'VENTAS','LOG_IN':'X'},
            dataType: "json",
            contentType: "application/x-www-form-urlencoded",
            success: function (respuesta) {
                //console.log(JSON.stringify(respuesta));
                if (respuesta.STATUS==1) {
                    response = false;
                    $scope.show_message(respuesta.MESSAGE,355);
                    $scope.doble_session = true;
                    $scope.mensaje_session = respuesta.MESSAGE;
                    $scope.$digest();
                }else{
                    $("#modalLoginAvatar").modal('hide');
                    $scope.getVendedores();
                    $('#alertas').css('display', 'block');
                    $('#tablaVentas').css('display', 'block');
//----------------------------------------------CODIGO RUTAS-----------------------------------------------
                    $('#tablaRutas').css('display', 'block');
//----------------------------------------------CODIGO RUTAS-----------------------------------------------
                    $('#marcoGeneral').css('display', 'block');
                    $('#espacioNotas').css('display', 'block');
                    $scope.getArticulos();
                    $scope.acceso_correcto = true;
                    $scope.getDivisas()
                    $scope.getArticuloOriginal();
                    alert('Bienvenido a Notas Ventas')
                    $("#seller_modal").modal('show');
                }
            },
            error: function () {
                console.log("Error Login ");
            }
        });
        console.log('Continuar login' + response);
        return response;
    } 

    $scope.selectDeposito = () => {
        console.log('Tenemos deposito')
        $scope.cobro.posfechado = '';
        $scope.cobro.tipo_detalle = 'D';
    }

    $scope.selectCheque = () => {
        console.log('Tenemos cheque')
        $scope.cobro.tipo_detalle = 'C';
        $scope.cobro.posfechado = 'x';
    }

    $scope.selectEfectivo = () => {
        console.log('Tenemos efectivo')
        $scope.cobro.tipo_detalle = 'E';
        $scope.cobro.posfechado = '';
        $scope.cobro.num = 0
        $scope.cobro.banco = ''
    }

    $scope.setFormaPago = () =>{
        console.log($scope.cobro.tipo_detalle)
        switch ($scope.cobro.tipo_detalle) {
            case 'C':
                $scope.show_message('Su cobro se registrara con Cheque',2)
                //console.log($scope.cobro.banco.NOMBRE)
                $('#formas_pago_modal').modal('hide')
                break;
            case 'D':
                $scope.show_message('Su cobro se registrara con Deposito',2)
                //console.log($scope.cobro.banco.NOMBRE)
                $('#formas_pago_modal').modal('hide')
                break;
            default:
                $scope.show_message('Su cobro se regitrara como efectivo',2)
                $('#formas_pago_modal').modal('hide')
                break;
        }
        
        $('#load_modal').modal('show')
        if ($scope.cobro.divisa=='MXN' && !$scope.cobro.pesos) {
            $scope.cobro.abono = $scope.cobro.abono *$scope.note.tipo_cambio
        }
        if ($scope.cobro.divisa=='USD' && $scope.cobro.pesos) {
            $scope.cobro.abono = $scope.cobro.abono /$scope.note.tipo_cambio
        }
        if ($scope.cobro.abono!=undefined && $scope.cobro.abono!=0) {
            //var datos_consulta = { 'NAME': $scope.usuario.toLowerCase(), 'PASSWORD': $scope.password };
            var cobro_info = {
                'NUMERO':$scope.cobro.cliente_numero,
                'IMPORTE':$scope.cobro.abono,
                'FACTURA':$scope.nota.codigo,
                'FECHA_POSTFECHADO':$scope.cobro.tipo_detalle=='C'?'x':'',
                'TIPO_DETALLE':$scope.cobro.tipo_detalle==undefined?'E':$scope.cobro.tipo_detalle,
                'NUMERO_DETALLE':$scope.cobro.tipo_detalle!='E'?''+$scope.cobro.num:'',
                'BANCO':$scope.cobro.tipo_detalle!='E'?$scope.cobro.banco.NOMBRE:'',
                /*'FECHA_POSTFECHADO':'',
                'TIPO_DETALLE':'E',
                'NUMERO_DETALLE':'',
                'BANCO':'',*/
                'DIVISA':$scope.cobro.pesos?'MXN':'USD',
            }
            console.log(cobro_info)
            $.ajax({
                url: $scope.url_base +'PostCobroTemp.php',
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                data : cobro_info,
                success: function (respuesta) {
                    console.log(respuesta)
                    $scope.saveRutaDeCobro($scope.cobro.ruta,$scope.cobro.vendedor,$scope.nota.codigo);
                    $scope.cobro = {}
                    $scope.nota = {}
                    $('#load_modal').modal('hide')
                    $('#pay_note').modal('hide')
                    $scope.showCobro(respuesta.BEFORE_COBRO.RECIBO)
                },
                error: function () {
                    console.log("Error PAY_NOTAA ");
                    $('#load_modal').modal('hide')
                }
            });
        }else{
            //alert('El importe debe ser mayor a 0','Error')
            $scope.show_message('El importe debe ser mayor a 0',5)//1 info //2 success //any warning
            $('#load_modal').modal('hide')
        }
    }

    $scope.sendReportClientsExcel = (todos) => {
        var parameters = null;
        if (todos) {
          parameters = { DESTINATARIO: $scope.catalogo_excel.mail };
          console.log(`Vendedor ${JSON.stringify(parameters)}`);
        } else {
          parameters = {
            VENDEDOR: $scope.catalogo_excel.vendedor.ID,
            VENDEDOR_NOMBRE: $scope.catalogo_excel.vendedor.NOMBRE,
            DESTINATARIO: $scope.catalogo_excel.mail,
          };
          console.log(`Vendedor ${JSON.stringify(parameters)}`);
        }
        //console.log(JSON.stringify(parameters))
        $.ajax({
          url: $scope.url_base + "ClientesXLS.php?",
          type: "GET",
          dataType: "json",
          contentType: "text/html; charset=UTF-8",
          data: parameters,
          success: function (respuesta) {
            console.log();
            $scope.show_message("EXCEL DE CLIENTES ENVIADO", 2);
            $scope.catalogo_excel = { mail: "", vendedor: "" };
            $("#catalogo_excel_modal").modal("hide");
          },
          error: function (event) {
            let url = "http://201.159.177.110/Plosa/apis/NuevoCatalogoClientes.xls";
            window.open(url, "_blank");
            $("#catalogo_excel_modal").modal("hide");
          },
        });
        $scope.catalogo_excel.vendedor = undefined;
        $scope.show_message("CATALOGO ENVIADO", 2);
    }

    $scope.sendReportClients = () => {
        if($scope.sin_actividad.mail.length>6){
            var parameters = null
            if ($scope.sin_actividad.vendedor.NOMBRE=='GLOBAL') {
                parameters = {DIAS : $scope.sin_actividad.dias, MAIL :$scope.sin_actividad.mail}
            }else{
                parameters = {VENDEDOR : $scope.sin_actividad.vendedor.ID , DIAS : $scope.sin_actividad.dias, MAIL :$scope.sin_actividad.mail}
            }
            //console.log(JSON.stringify(parameters))
            $.ajax({
                url: $scope.url_base + 'CatalogoClientesSinActividadPDF.php?',
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8", 
                data : parameters,
                success: function (respuesta) {
                    console.log(respuesta)
                        $scope.show_message('CATALOGO ENVIADO',2)
                        $('#catalogo_modal').modal('hide');
                },
                error: function () {
                    $('#catalogo_modal').modal('hide');
                }
            });
            $scope.show_message('CATALOGO ENVIADO',2)
        }else{
            if ($scope.sin_actividad.vendedor.NOMBRE=='GLOBAL') {
                //console.log($scope.url_base + 'CatalogoClientesSinActividadPDF.php?DIAS='+$scope.sin_actividad.dias)
                window.open($scope.url_base + 'CatalogoClientesSinActividadPDF.php?DIAS='+$scope.sin_actividad.dias);
            }else{
                //console.log($scope.url_base + 'CatalogoClientesSinActividadPDF.php?VENDEDOR=' + $scope.sin_actividad.vendedor.ID+'&DIAS='+$scope.sin_actividad.dias)
                window.open($scope.url_base + 'CatalogoClientesSinActividadPDF.php?VENDEDOR=' + $scope.sin_actividad.vendedor.ID+'&DIAS='+$scope.sin_actividad.dias);
            }
            $('#catalogo_modal').modal('hide');
        }
    }  

    //mensajeria
    $scope.message_alert = '';
    $('#mensaje_construyendo').hide()
    $('#alertWarnig').hide()
    $('#alertInfo').hide()
    $('#alertDone').hide()
    $('#alertVendedor').hide()
    $('#alertPrecio').hide()
    $('#alertCancelar').hide()
    $scope.show_message  = (mensaje,tipo) =>{
        $scope.message_alert = mensaje
        switch (tipo) {
            case 1: //general info
                $('#alertInfo').fadeTo(2000,500).slideUp(500,function(){
                    $('#alertInfo').slideUp(1000)
                })
                break;
            case 2: //general success
                $('#alertDone').fadeTo(2000,500).slideUp(500,function(){
                    $('#alertDone').slideUp(500)
                })
                break;
            case 214: //seleccionar vendedor
                $('#alertVendedor').fadeTo(2000, 500).slideUp(500, function () {
                    $('#alertVendedor').slideUp(500)
                })
            case 135: //solicitar autorizacion de precio
                $('#alertPrecio').fadeTo(2000, 500).slideUp(500, function () {
                    $('#alertPrecio').slideUp(500)
                })
                break;
            case 99: //sin permiso para cancelar 
                $('#alertCancelar').fadeTo(2000, 500).slideUp(500, function () {
                    $('#alertCancelar').slideUp(500)
                })
                break;
            default://general warinig
                $('#alertWarnig').fadeTo(2000,500).slideUp(500,function(){
                    $('#alertWarnig').slideUp(500)
                })
                break;
        }
    }
    //mensajeria

    //********************************************************SECCION DE COBROS***************************************************************************** */
    
    $scope.cleanData = () => {
        var codigo = $scope.nota.codigo 
        $scope.nota = {}
        $scope.cobro = {}
        $scope.nota.codigo = codigo
    }

    $scope.getDivisas = () => {
        var fecha = new Date();
        var year =  fecha.getFullYear();
        var mes = (fecha.getMonth()+1)<=9?'0'+(fecha.getMonth()+1):fecha.getMonth()+1
        var dia = (fecha.getDate())<=9?'0'+(fecha.getDate()) :fecha.getDate()
        var url = $scope.url_base +'DivisasManagement.php?FROM='+year+mes+dia
        $.ajax({
            url: url,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            success: function (respuesta) {
                $scope.tipo_cambio_cobro = respuesta.DIVISAS.TC_COBRO;
                $scope.tipo_cambio_venta = respuesta.DIVISAS.TC_VENTA;
                $scope.note.tipo_cambio = respuesta.DIVISAS.TC_COBRO;
                $scope.$digest();
            },
            error: function () {
                console.log("Error ADD_NOTAA ");
                $('#load_modal').modal('hide')
            }
        });
    }
    //********************************************************SECCION DE COBROS***************************************************************************** */
    //$scope. = () => {}
    $scope.showCobros = () => {
        $('#pay_note').modal('show')
        
        //$('#formas_pago_modal').modal('show')
        $scope.nota.accion = 'COBRAR'
        
    }

    $scope.oneOnlyField = (event) => {
        if (event.keyCode==13) {
            //console.log($scope.nota.codigo)
            $scope.getFacturaForCobro($scope.nota.codigo);
        }
    }

    $scope.lookingCLient = (event,numero_cliente) => {
        if($scope.clientes_obj.NUMERO!=numero_cliente){
            $scope.enteredtext = ''
            if (event.keyCode==13) {
                $scope.buscarCliente(numero_cliente);
            }
        }
    }

    $scope.oneOnlyFieldNote = (tecla) => {
        if (tecla.keyCode==13) {
            $scope.getFactura($scope.nota.codigo);
        }
    }

    $scope.updateDivisa = (tipo) => {
        //console.log(tipo)
        
        if(tipo=='MXN'){
            $scope.cobro.pesos = true
        }
        if(tipo=='USD'){
            $scope.cobro.pesos = false
        }
        //console.log('Cobro se va a hacer en pesos' + $scope.cobro.pesos)
        $scope.recaulcularImporte()    
    } 

    $scope.recaulcularImporte= () =>{
        if ($scope.cobro.divisa=='USD' && $scope.cobro.pesos) {
            $scope.cobro.saldo_actual = $scope.cobro.saldo_actual*22
        }

        if ($scope.cobro.divisa=='MXN' && !$scope.cobro.pesos) {
            $scope.cobro.saldo_actual = $scope.cobro.saldo_actual/22
        }
    }

    $scope.getFloat= (number_mask) =>{
        var flotante = number_mask.substr(1,number_mask.length).replaceAll(",","")
        return parseFloat(flotante)
    }

    $scope.calcularImporte = () => {
        // $scope.cobro.pesos == true la nota viene en pesos 
        
        if ($scope.cobro.pesos) {
            //si esta en pesos revisamos si la divisa de pago esta en dolares para convertir
            if ($scope.cobro.divisa=='USD') {
                $scope.cobro.importe = parseFloat($scope.cobro.saldo_actual) - (parseFloat($scope.cobro.abono)*22)
            }else{
                $scope.cobro.importe = parseFloat($scope.cobro.saldo_actual) - parseFloat($scope.cobro.abono)
            }
        }else{
            if ($scope.cobro.divisa=='MXN') {
                $scope.cobro.importe =  parseFloat($scope.cobro.saldo_actual) - (parseFloat($scope.cobro.abono)/22)
            } else{
                $scope.cobro.importe =  parseFloat($scope.cobro.saldo_actual) - parseFloat($scope.cobro.abono)
            }
        }
        //console.log($scope.cobro.abono)
        
        //console.log(formatter.format($scope.cobro.abono))
    }

    $scope.showVentas = () => {
        $scope.verVentas = !$scope.verVentas
        if ($scope.hasClient) {
            $scope.hasClient = false
        }
        $scope.getFacturas()
    }

    $scope.openModal= () =>{
        $scope.note.vendedor = undefined
        $scope.clientes = []
        $scope.hasClient = false
        $('#seller_modal').modal('show')
    }

    $scope.pagarNota= () => {
        $('#pay_note').modal('hide')
        $scope.selectEfectivo()
        $('#formas_pago_modal').modal('show')
    }

    $scope.vendedorSeleccionado = () =>{
        $('#aceptar_vendedor').focus()
        $scope.vendedores_saldos = $scope.note.vendedor
        $scope.sin_actividad.vendedor = $scope.note.vendedor
        $scope.enteredtext = ''
        $scope.filteredChoices = []
        $scope.numero_input = 0
    }

    $scope.pagarNotaContado= (cliente_numero,abono,nota,divisa) => {
            var cobro_info = {
                'NUMERO':cliente_numero,
                'IMPORTE':abono,
                'FACTURA':nota,
                'FECHA_POSTFECHADO':'',
                'TIPO_DETALLE':'E',
                'NUMERO_DETALLE':'',
                'BANCO':'',
                'DIVISA':divisa,
            }
            //console.log(cobro_info)
            $.ajax({
                url: $scope.url_base +'PagoGet.php',
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                data : cobro_info,
                success: function (respuesta) {
                    //console.log(respuesta)   
                    $scope.cobro = {}
                    $scope.nota = {}      
                },
                error: function () {
                    console.log("Error PAY_NOTAA ");
                    $('#load_modal').modal('hide')
                }
            });
         
        //PostCobro.php
    }

    $scope.showCobro = (id) => {
        var url_consulta = $scope.url_base + 'PrintCobroNota.php?COBRO=' + id;
        window.open(url_consulta);
    }
    //********************************************************SECCION DE COBROS***************************************************************************** */
    //CANCELACION ATIVICACION

    $scope.cancelNote = () => {
        if ($scope.nombre_usuario_logeado == 'SUPERVISOR' || $scope.nombre_usuario_logeado == 'ALONDR' || $scope.nombre_usuario_logeado == 'ALVARO' ||
            $scope.nombre_usuario_logeado == 'KAREN' || $scope.nombre_usuario_logeado == 'MASTER' || $scope.nombre_usuario_logeado == 'JLQ') {
            $scope.nota.accion = 'CANCELAR'
            $('#cancel_note').modal('show')
        }else{
            $scope.show_message('Su usuario '+ $scope.nombre_usuario_logeado +' no tiene permiso para cancelar',98)
        }
    }

    $scope.oneOnlyFieldCancel = (tecla) => {
        if (tecla.keyCode==13) {
            $scope.getFacturaForCancel($scope.nota.codigo);
        }
    }

    $scope.cancelarNota = () => {
        //console.log($scope.nota.accion + ' nota')
        if ($scope.nota.accion=='ACTIVAR') {
            var parametros = {
                'FACTURA':$scope.nota.codigo,
                'USER':$scope.nombre_usuario_logeado,
                'ACTIVAR':''
            }
            //console.log(parametros)
            $scope.statusNota(parametros)
        }else{
            var parametros = {
                'FACTURA':$scope.nota.codigo,
                'USER':$scope.nombre_usuario_logeado,
                'MOTIVO':$scope.nota.motivo,
                'CANCELAR':''
            }
            if (parametros.MOTIVO!=undefined && parametros.MOTIVO.length>0) {
                //console.log('Enviando cancelacion ')
                $scope.statusNota(parametros)
                //console.log(parametros)
            }else{
                $scope.show_message('Debes capturar el motivo de cancelacion ',99)
                //console.log('faltan parametros')
            }
        }
    }

    $scope.statusNota=(data)=>{
        $.ajax({
            url: $scope.url_base + 'ChangeStatus.php',
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data : data,
            success: function (respuesta) {
                //console.log(respuesta)
                $('#cancel_note').modal('hide')
                $scope.note = {}
                if (respuesta.STATUS==0) {
                    $scope.show_message('EXITO',2)
                }
            },
            error: function () {
                console.log("Error ADD_NOTAA ");
                $('#cancel_note').modal('hide')
            }
        });
    }

    $scope.getFacturaForCancel = (nota) => {
        var url_consulta = $scope.url_base + 'GetFactura.php?FACTURA=' + nota;
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            success: function (respuesta) {
                if (respuesta.STATUS == 2) {
                    $scope.nota.estado = respuesta.MESSAGE
                    $scope.nota.accion = 'NO SE ENCONTRO LA NOTA'
                } else {
                    $scope.nota = respuesta.FACTURA
                    $scope.nota.codigo = respuesta.FACTURA.ID
                    if (respuesta.FACTURA.STATUS=='C') {
                        $scope.nota.accion = 'ACTIVAR'
                    }else{
                        $scope.nota.accion = 'CANCELAR'
                    }
                }
                $scope.$digest();
            },
            error: function () {
                console.log("Error getFactura ");
                $scope.consultando = false
                $scope.nota.accion = 'NO SE ENCONTRO LA NOTA'
            }
        });
    }

    //*********************************************cliente */
    $scope.buscarCliente = (numero_cliente) => {
        /*$scope.clientes_obj = {}
        var cliente = $scope.clientes.filter(cliente => cliente.NUMERO == numero_cliente)[0]
        if (cliente!=undefined) {
            //console.log(cliente)
            $scope.clientes_obj = cliente 
            $scope.enteredtext = cliente.CLIENTE
            $scope.revisarCliente($scope.clientes_obj)
        }else{
            //console.log(numero_cliente=='')
            if(numero_cliente!=''){
                $scope.show_message('No se encuentra el cliente ' + numero_cliente, 66)
            }
        }*/
        //si el objeto cliente es indefinido quiere decir que es la primera vez que se captura el cliente 
        if($scope.clientes_obj.NUMERO==undefined){//continuamos el proceso normal sin limpiar la nota
            var cliente = $scope.clientes.filter(cliente => cliente.NUMERO == numero_cliente)[0]
                if (cliente!=undefined) {//buscamos el cliente en la lista de clientes de vendedor seleccionado
                    $scope.clientes_obj = cliente 
                    $scope.enteredtext = cliente.CLIENTE
                    $scope.revisarCliente($scope.clientes_obj)
                }else{
                    if(numero_cliente!=''){
                        $scope.show_message('No se encuentra el cliente ' + numero_cliente, 66)
                    }
                }
        }else{//si no es indefinido es que cambio de cliente 
            //validamos si el cliente que tenia capturado no es el mismo que busca
            if($scope.clientes_obj.NUMERO!=numero_cliente){//si es diferente
                $scope.clientes_obj = {}// limpiamos el cliente anterior
                var cliente = $scope.clientes.filter(cliente => cliente.NUMERO == numero_cliente)[0]//buscamso el cleinte en la lista del vendedor seleccionado
                if (cliente!=undefined) {//si exite
                    
                    $scope.clientes_obj = cliente 
                    $scope.enteredtext = cliente.CLIENTE
                    $scope.revisarCliente($scope.clientes_obj)
                    //Como el cliente anterior era otro limpiamos la nota que se habia capturado
                    $scope.totalizar = true;
                    $scope.note.articulos = []
                    $scope.articulo_nota = null
                    $scope.note.total = 0
                    $scope.note.total_dolares = 0
                    $scope.articulo_was_added = null
                    $scope.articulo = null; //WORKING
                    for (let index = 0; index < 11; index++) {
                        $('#codigo' + index).val("");
                        $('#descripcion' + index).val("");
                        $('#unidad' + index).val("");
                        $('#um' + index).val("");
                        $('#cantidad' + index).val("");
                        $('#precio' + index).val("");
                        $('#importe' + index).val("");
                        $("#cantidad" + index).removeAttr('disabled');
                    }
                }else{
                    if(numero_cliente!=''){
                        $scope.show_message('El cliente ' + numero_cliente + ' no esta asignado al vendedor', 66)
                    }
                }

            }

        }
    }

    $scope.sendMailAumento = () =>{
        //console.log($scope.note.total)
        var diferencia = $scope.note.total-$scope.clientes_obj.limite;
        $scope.note.creditoAutorizacion = false
        $.ajax({
            url: $scope.url_base+'MailAlertCredit.php', 
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data : {'CLIENTE': $scope.clientes_obj.NUMERO,'SUMA':diferencia},
            success: function (respuesta) {
                console.log(respuesta)
                $('#do_nota_modal').modal('hide')
            },
            error: function () {
                console.log("Error mail aumento ");
                $scope.consultando = false
            }
        });
    }


    //********************************************************SECCION DE NOTAS VENTAS***************************************************************************** */

    $scope.fixNote = () => {
        //console.log('Destotalizando Nota ')
        $scope.note.total = 0;
        $scope.note.total_dolares = 0;
        $scope.totalizar = true
        $scope.note.articulos = []
    }

    $scope.updateCantidad = (index, articulo) => {
        //console.log(articulo)
        //cambio 040121
        var temporal = {
            CANTIDAD:articulo.CANTIDAD,
            CODIGO:articulo.CODIGO,
            DIVISA:articulo.DIVISA,
            IMPORTE:articulo.IMPORTE,
            NOMBRE:articulo.NOMBRE,
            PESO:articulo.PESO,
            PRECIO:articulo.PRECIO,
            UM:articulo.UM,
            UNIDAD:articulo.UNIDAD,
            RENGLON:index
        }
        articulo = temporal
        if ($('#um' + index).val() == undefined || $('#um' + index).val() == '' || $('#um' + index).val() == ' ' || $('#um' + index).val() == 0) {
            $("#cantidad" + index).removeAttr('disabled');
        } else {
            var cantidad_calculada = parseFloat(articulo.PESO * $('#um' + index).val()).toFixed(2)
            //console.log(cantidad_calculada)
            $('#cantidad' + index).val(cantidad_calculada)
            $('#cantidad' + index).attr('disabled', 'disabled');
            $scope.updateTotalByCantidad(index, articulo)
        }
    }

    $scope.acceso_correcto = false;
    //server.web.eco@gmail.com
    //SteelyWeb77

    $scope.totalizarNota = () => {
        for (let index = 0; index < $scope.articles.length; index++) {
            if ($('#codigo'+index+' option:selected').text()!=undefined&&$('#codigo'+index+' option:selected').text()!=''&&$('#codigo'+index+' option:selected').text()!=' ') {
                var articulo_ = $scope.articulos.filter(articulo => articulo.CODIGO==$('#codigo'+index+' option:selected').text())
                if (articulo_!=undefined) {
                    var arti = articulo_[0]
                    var temporal = {
                        CANTIDAD:arti.CANTIDAD,
                        CODIGO:arti.CODIGO,
                        DIVISA:arti.DIVISA,
                        IMPORTE:arti.IMPORTE,
                        NOMBRE:arti.NOMBRE,
                        PESO:arti.PESO,
                        PRECIO:arti.PRECIO,
                        UM:arti.UM,
                        UNIDAD:arti.UNIDAD,
                        RENGLON:index
                    }
                    arti = temporal
                    arti.CANTIDAD = $('#cantidad'+index).val()
                    arti.IMPORTE =  $scope.getFloat($('#importe'+index).val())
                    arti.PRECIO =   $scope.getFloat($('#precio'+index).val())
                    if (arti.IMPORTE>0) {
                        if (!$scope.note.pesos) {
                            $scope.note.total += arti.IMPORTE*$scope.note.tipo_cambio
                            $scope.note.articulos.push(arti)
                        }else{
                            $scope.note.total += arti.IMPORTE
                            $scope.note.articulos.push(arti)
                        }
                    }
                }
                $scope.note.total_dolares = $scope.note.total / $scope.note.tipo_cambio
            }
        }
        if ($scope.note.total>0) {
            $scope.totalizar = false
        }else{
            $scope.show_message('No se puede totalizar la nota con importes en 0',13)//1 info //2 success //any warning
        }
    }


    /**
     * Este metodo se usa para cuando se cambia de divisa y se tienen articulos en la nota recalcular los precios e importes
     */
    $scope.reTotalizarNota = () => {
        var articulos_tecleados = 0//variable auxiliar para saber cuantos articulos tenemos tecleados 
        //setTimeout(function(){
        for (let index = 0; index < $scope.articles.length; index++) {//recorremos los 6 campos que se tienen para hacer agregar articulos 
            //validamos que el renglos [index] tenga algun codigo seleccionado
            var codigo_seleccionado = $('#codigo'+index+' option:selected').text();
            //console.log(codigo_seleccionado)
            if (codigo_seleccionado!=undefined&&codigo_seleccionado!=''&&codigo_seleccionado!=' ') {
                //si tiene un articulo seleccionado lo buscamos dentro del catalogo de articulos 
                var articulo_ = $scope.articulos_cambio_divisa.filter(articulo => articulo.CODIGO==codigo_seleccionado)[0]
                //console.log(JSON.stringify(articulo_))
                    if (articulo_!=undefined) {//en caso de que el resultado de la busqueda sea diferente de undefined quiere decir que tenemos y se ocupa recalcular su precio e importe
                        //console.log('Lo encontre bro')
                        var arti = articulo_
                        //console.log('before : '+JSON.stringify(arti))
                        var temporal = {
                            CANTIDAD:arti.CANTIDAD,
                            CODIGO:arti.CODIGO,
                            DIVISA:arti.DIVISA,
                            IMPORTE:arti.IMPORTE,
                            NOMBRE:arti.NOMBRE,
                            PESO:arti.PESO,
                            PRECIO:arti.PRECIO,
                            UM:arti.UM,
                            UNIDAD:arti.UNIDAD,
                            RENGLON:index
                        }
                        arti = temporal
                        //console.log('after : '+JSON.stringify(arti))
                        
                        //VALIDACION DE PRECIO SEGUN DIVISA DE LA NOTA Y DIVISA DEL ARTICUO 
                        if ($scope.note.pesos) {//CASO Nota en pesos 
                            if (arti.DIVISA== 'MXN') {//CASO  Articulo esta en pesos 
                                $('#precio' + index).val(arti.PRECIO)        
                            } else {//CASO Articulo en dolaes
                                $('#precio' + index).val(arti.PRECIO*$scope.note.tipo_cambio)        
                            }
                        } else {//CASO Nota en dolares
                            if (arti.DIVISA== 'USD') {//CASO  Articulo en dolares
                                $('#precio' + index).val(arti.PRECIO)        
                            } else {//CASO Articulo en pesos
                                $('#precio' + index).val(arti.PRECIO/$scope.note.tipo_cambio)        
                            }
                        }
                        /*console.log($('#cantidad' + index).val())
                        console.log($('#precio' + index).val())*/
                        var importe = $scope.getFloat($('#precio' + index).val()) * parseFloat($('#cantidad' + index).val())
                        //console.log(importe)
                        $('#importe' + index).val(importe)
                        articulos_tecleados++
                    }else{
                        console.log('error')
                    }
                }
            }
        //},500)
        if(articulos_tecleados>0){
            $scope.note.total = 0
            $scope.note.total_dolares = 0
            $scope.totalizar = true
        }
    }
    

    //------------------------------------------WORKING VALIDAR PRECIO DE PRODUCTO
    $scope.validarPrecio = () => {
        var precio = 0
        if (!$scope.note.pesos) {
            if ($scope.articulo_nota.divisa == 'MXN') {
                precio = $scope.articulo_nota.PRECIO / $scope.note.tipo_cambio
            }
        }
        var precio = $scope.articulo_nota.PRECIO
        /*console.log($scope.precio_input.toString().indexOf("$"))
        console.log($scope.precio_input)
        console.log($scope.articulo_nota.PRECIO)*/
        if ($scope.precio_input.toString().indexOf("$")>=0) {
            $scope.precio_input = $scope.getFloat($scope.precio_input)
        }
        if ($scope.precio_input < precio) {
            $scope.show_message('Para asignar un precio menor, debe solicitar una autorizacion', 135)//1 info //2 success //any warning
        } else {
            if ($scope.articulo_nota.PRECIO == $scope.precio_input) {
                $scope.articulo_nota.PRECIO = $scope.precio_input
            } else {
                $scope.articulo_nota.PRECIO = $scope.precio_input
            }
            $scope.articulo_nota.IMPORTE = $scope.articulo_nota.PRECIO * $scope.articulo_nota.CANTIDAD
            $('#precio' + $scope.articulo_index).val($scope.articulo_nota.PRECIO)
            $('#importe' + $scope.articulo_index).val($scope.articulo_nota.IMPORTE)
            $('#price_modal').modal('hide')
            for (let x = 0; x < 7; x++) {
                $('#linea'+x).show()
                $('#codigo-col'+x).show()
                $('#descripcion-col'+x).show()
                $('#unidad-col'+x).show()
                $('#um-col'+x).show()
                $('#cantidad-col'+x).show()
                $('#precio-col'+x).show()
                $('#importe-col'+x).show()
            }
            $scope.articulo_nota = {}
        }
    }

    $scope.cancelPrecio = () => {
        $scope.articulo_nota = {}
        for (let x = 0; x < 7; x++) {
            $('#linea'+x).show()
            $('#codigo-col'+x).show()
            $('#descripcion-col'+x).show()
            $('#unidad-col'+x).show()
            $('#um-col'+x).show()
            $('#cantidad-col'+x).show()
            $('#precio-col'+x).show()
            $('#importe-col'+x).show()
        }
    }

    //------------------------------------------WORKING VALIDAMOS SI EL ARTICULO YA EXISTE Y LAS CANTIDADES CON LAS QUE EXISTE
    $scope.priceWasAdd = (codigo) => {
        let exist = $scope.note.articulos.find(articulo => articulo.CODIGO == codigo)
        if (exist == undefined) {
            return true
        } else {
            $scope.articulo_was_added = exist
            return false
        }
    }

    //------------------------------------------WORKING CAMBIAR TIPO DE DIVISA DE LA NOTA
    $scope.changeDivisa = (tipo) => {
        console.log(tipo);
        if($scope.totalizar){
            if (tipo == 'USD') {
                $scope.note.pesos = false;
                $scope.note.currency = 'USD';
                $scope.note.tipo_cambio = $scope.tipo_cambio_venta;
            }else{
                $scope.note.pesos = true;
                $scope.note.currency = 'MXN';
                $scope.note.tipo_cambio = $scope.tipo_cambio_cobro;
            }
            if($scope.hasClient){
                $scope.reTotalizarNota();
            }
            $('#aceptar_divisa').focus();
        }else{
            if (tipo == 'USD') {
                $scope.note.tipo_cambio = $scope.tipo_cambio_venta;
            } else {
                $scope.note.tipo_cambio = $scope.tipo_cambio_cobro;
            }
            $('#currency_modal').modal('hide');
        }
    }

    $scope.getTipoCambio = () => {
        return 22;
    }

    //------------------------------------------WORKING ABRIR MODAL DE  PRECIO POR ARTICULO
    $scope.modal_precio = (index, m) => {
        $('#precio_input').inputmask({
            alias: 'currency',
            digits: 4,
            rightAlign: 0,
            clearMaskOnLostFocus: true
        })
        //console.log($('#cantidad' + index).val())
        if ($('#cantidad' + index).val() == 0) {
            $scope.show_message('Favor de capturar la cantidad antes de asignar el precio',1)//1 info //2 success //any warning
            $('#price_modal').modal('hide')
            $('#cantidad' + index).focus()
        } else {
            var calculado = $scope.priceWasAdd($scope.articulo_nota.CODIGO)
            $scope.articulo_nota = m
            //console.log(m)
            $scope.articulo_index = index
            //SI LA NOTA ESTA EN PESOS
            /*if ($scope.note.pesos) {
                //PONEMOS LOS PRECIOS EN PESOS
                if ($scope.articulo_nota.DIVISA == 'USD') {
                    $scope.articulo_nota.PRECIO = $scope.articulo_nota.PRECIO * $scope.note.tipo_cambio
                }
            } else { //SI LA NOTA ESTA EN DOLARES PONEMOS LOS PRECIOS EN DOLARES
                if ($scope.articulo_nota.DIVISA == 'MXN') {
                    $scope.articulo_nota.PRECIO = $scope.articulo_nota.PRECIO / $scope.note.tipo_cambio
                }
            }*/
            //console.log($('#precio' + index).val())
            
            $scope.precio_input = $scope.getFloat($('#precio' + index).val())
            $scope.articulo_nota.PRECIO = $scope.precio_input;
            //console.log($scope.precio_input)
            if (calculado) {

                $scope.articulo_nota.CANTIDAD = $('#cantidad' + index).val();
                $scope.articulo_nota.IMPORTE = $scope.articulo_nota.CANTIDAD * $scope.articulo_nota.PRECIO
                $('#importe' + index).val(parseFloat($scope.articulo_nota.IMPORTE).toFixed(2))
                //console.log($scope.articulo_nota) 
            }
            $scope.autorizacion = false
            for (let x = 0; x < 7; x++) {
                if(x!=index){
                    $('#linea'+x).hide()
                    $('#codigo-col'+x).hide()
                    $('#descripcion-col'+x).hide()
                    $('#unidad-col'+x).hide()
                    $('#um-col'+x).hide()
                    $('#cantidad-col'+x).hide()
                    $('#precio-col'+x).hide()
                    $('#importe-col'+x).hide()
                    //console.log("Son diferentes")
                }
            }
            $scope.precio_input = $scope.hasAutorizedPrice($scope.articulo_nota,index);
            $scope.articulo_nota.PRECIO = $scope.precio_input;
            $('#price_modal').modal('show')
        }
    }

    $scope.hasAutorizedPrice=(articulo,posicion)=>{
        var index = posicion;
        var precio_autorizado = articulo.PRECIO
        console.log(articulo)
        var fecha = new Date()
        var mes = (fecha.getMonth()+1)<9?'0'+(fecha.getMonth()+1):fecha.getMonth()+1
        var dia = (fecha.getDate())<9? '0'+(fecha.getDate()) :fecha.getDate()
        var fecha_formato = fecha.getFullYear() + '-' + mes + '-' + dia
        var data = {
            DATE : fecha_formato,
            ARTICLE : articulo.CODIGO,
            CLIENT : $scope.clientes_obj.NUMERO
        }
        console.log(JSON.stringify(data))
        var url_consulta = $scope.url_base + 'CheckIfHasAuthorizaion.php';
        $.ajax({
                                url: url_consulta,
                                type: 'GET',
                                dataType: "json",
                                contentType: "text/html; charset=UTF-8",
                                data : data,
                                success: function (response) {
                                    console.log(response);
                                    if (response.STATUS==0) {
                                        if (response.IS_AUTHORIZED) {
                                              console.log('Tiene una autorizacion de ' + response.REQUEST.PRICE)
                                              $scope.show_message('El precio Autorizado se muestra en el campo precio',2)
                                            if ($scope.note.pesos ) {
                                                if (response.REQUEST.DIVISA_REQUEST=='MXN') {
                                                  articulo.PRECIO = response.REQUEST.PRICE
                                                  $('#precio' + index).val(articulo.PRECIO)
                                                  $scope.precio_input = articulo.PRECIO;
                                                }else{
                                                  articulo.PRECIO = response.REQUEST.PRICE*$scope.note.tipo_cambio
                                                  $('#precio' + index).val(articulo.PRECIO )
                                                  $scope.precio_input = articulo.PRECIO;
                                                }
                                            }else{
                                              if (response.REQUEST.DIVISA_REQUEST=='USD') {
                                                  articulo.PRECIO = response.REQUEST.PRICE
                                                  $('#precio' + index).val(articulo.PRECIO)
                                                  $scope.precio_input = articulo.PRECIO;
                                                }else{
                                                  articulo.PRECIO = response.REQUEST.PRICE/$scope.note.tipo_cambio
                                                  $('#precio' + index).val(articulo.PRECIO)
                                                  $scope.precio_input = articulo.PRECIO;
                                                }
                                            }
                                        }   
                                      }
                                      precio_autorizado =  $scope.precio_input;
                                      $scope.$digest()
                                },
                                error: function () {
                                    console.log("Error getAUTORIZACION ");
                                    $scope.consultando = false
                                }
                            });
        return precio_autorizado;
    }

    //------------------------------------------WORKING CUANDO SE CAMBIA LA CANTIDAD DE KILOS SE ACTUALIZAN LOS IMPORTES 
    $scope.updateTotalByCantidad = (index,nota) => { 
        //$scope.articulo_nota = nota; cambio 040121
        var temporal = {
            CANTIDAD:nota.CANTIDAD,
            CODIGO:nota.CODIGO,
            DIVISA:nota.DIVISA,
            IMPORTE:nota.IMPORTE,
            NOMBRE:nota.NOMBRE,
            PESO:nota.PESO,
            PRECIO:nota.PRECIO,
            UM:nota.UM,
            UNIDAD:nota.UNIDAD,
            RENGLON:index
        }
        nota = temporal
        //console.log(parseFloat($('#cantidad' + index).val())) 
        if (parseFloat($('#cantidad' + index).val())>0) {
            //$scope.articulo_nota.CANTIDAD = $('#cantidad' + index).val();cambio 040121
            nota.CANTIDAD = $('#cantidad' + index).val();
            var precio = $scope.getFloat($('#precio' + index).val())
            //$scope.articulo_nota.IMPORTE = $scope.articulo_nota.CANTIDAD * precio; cambio 040121
            nota.IMPORTE = nota.CANTIDAD * precio;
            //$('#importe' + index).val(parseFloat($scope.articulo_nota.IMPORTE).toFixed(2)) cambio 040121
            $('#importe' + index).val(parseFloat(nota.IMPORTE).toFixed(2))
        }else{
            //console.log('Es o una letra') 
            $('#cantidad' + index).val('')
            $('#importe' + index).val('')
        }
        if (!$scope.priceWasAdd(nota.CODIGO)) { //cabio 040121  reemplazamos la variable global $scope.articulo_nota por la variable local nota
            nota.CANTIDAD = $('#cantidad' + index).val(); //cabio 040121
            nota.IMPORTE = nota.CANTIDAD * nota.PRECIO //cabio 040121
            $('#importe' + index).val(nota.IMPORTE)
            $scope.note.total = 0
            $scope.note.total_dolares = 0
            for (let index = 0; index < $scope.note.articulos.length; index++) {
                if ($scope.note.pesos) {
                    $scope.note.total += $scope.note.articulos[index].IMPORTE
                    $scope.note.total_dolares = $scope.note.total / $scope.note.tipo_cambio
                } else {
                    $scope.note.total += $scope.note.articulos[index].IMPORTE * $scope.note.tipo_cambio
                    $scope.note.total_dolares += $scope.note.articulos[index].IMPORTE
                }
            }
            $scope.articulo_nota = {}
        }/*else{
            console.log('No se hace nada porque no se a totalizado...')
            $scope.articulo_nota = {}
        }*/
        //cambio 040121
        setTimeout(function(){
            $scope.codigoExistente(index,nota)
            $scope.$apply();
        })
    }

    $scope.codigoExistente = (renglon,articulo) => {
        var posicion = -1
        for (let x = 0; x < 11; x++) {
            if ($('#codigo'+x+' option:selected').text()==articulo.CODIGO && x != renglon) {
                console.log('Existe lo vamos a calcular su cantidad y unidad metrica')
                posicion=x
                /*var importe = $scope.getFloat($('#importe'+x).val())
                var precio = $scope.getFloat($('#precio'+x).val())
                var cantidad = importe/precio
                $('#cantidad'+x).val(cantidad.toFixed(2))
                $('#um'+x).val(0)*/
            } 
        }
        return posicion
    } 

    //------------------------------------------WORKING CREAR TEMPLATE DE LISTA DE ARTICULOS
    $scope.articles = []
    for (let index = 1; index < 11; index++) {
        $scope.articles.push({ codigo: '', descripcion: '', unidad: '', um: '', cantidad: '', precio: '', importe: '' })
    }

    $scope.showAutorizacion = () => {
        //console.log('Solicita autorizacion')
        if ($scope.precio_input.toString().indexOf("$") >= 0) {
            $scope.precio_input = $scope.getFloat($scope.precio_input)
        }

        var data = { 
            SELLER      : $scope.note.vendedor.ID, 
            CLIENT      : $scope.clientes_obj.CLIENTE, 
            ARTICLE     : $scope.articulo_nota.CODIGO, 
            PRICE       : $scope.precio_input,
            CURRENCY    : $scope.note.currency, 
            CANTIDAD    : $scope.articulo_nota.CANTIDAD, 
            TO_MAIL     : 'soporte.eco.3@gmail.com' 
        } 
        //console.log(JSON.stringify(data))
        if ($scope.precio_input>0) {
            $scope.autorizacion = true
        }else{
            $scope.show_message('El importe no puede ser 0',998)
        }
    }

    //------------------------------------------WORKING SELECCIONAR UN ARTICULO PARA AGREGAR A LA NOTA 
    $scope.chooseArticle = (articulo, index) => {
    console.log("🚀 ~ file: app.js ~ line 1341 ~ articulo", articulo)
        
        //VERIFICAMOS SI YA EXISTE EL ARTICULO AGREGADO 
        let repetido = $scope.codigoExistente(index,articulo)
        if (repetido>-1) {
            alert('Favor de capturar los datos en el renglon ' + (repetido+1))
            $scope.articulo = {}
            $scope.articulo_nota.cantidad =0
            $('#codigo' + index).val("");
            $('#descripcion' + index).val("");
            $('#unidad' + index).val("");
            $('#um' + index).val("");
            $('#cantidad' + index).val("");
            $('#precio' + index).val("");
            $('#importe' + index).val("");
            $("#cantidad" + index).removeAttr('disabled');
        }else{
            //$scope.articulo_nota = articulo cambio 040121
            //cambio 040121
            var temporal = {
                CANTIDAD:articulo.CANTIDAD,
                CODIGO:articulo.CODIGO,
                DIVISA:articulo.DIVISA,
                IMPORTE:articulo.IMPORTE,
                NOMBRE:articulo.NOMBRE,
                PESO:articulo.PESO,
                PRECIO:articulo.PRECIO,
                UM:articulo.UM,
                UNIDAD:articulo.UNIDAD,
                RENGLON:index
            }
            articulo = temporal 
            console.log("🚀 ~ file: app.js ~ line 1373 ~ articulo", articulo)
            if (articulo.CODIGO==1||articulo.CODIGO==2||articulo.CODIGO==17||articulo.CODIGO==30||articulo.CODIGO==54) {
                if (!$scope.note.pesos) {
                    $scope.show_message('Selecciono el código ' + articulo.CODIGO + ' la impresión de la nota será en pesos.',1);
                }
            }
            //cambio 040121
            //console.log($scope.articulo_nota)
            $('#descripcion' + index).val(articulo.NOMBRE)
            $('#unidad' + index).val(articulo.UNIDAD)
            //$('#um' + index).val(articulo.UM)cambio 040121
            $('#um' + index).val(articulo.UM)
            $('#cantidad' + index).val(0)
            $('#importe' + index).val(0)
            
            articulo.CANTIDAD = 0
            articulo.IMPORTE = 0
            console.log(articulo.UM);
            //SI LA NOTA ESTA EN PESOS
            hasAutorization(articulo.CODIGO,$scope.clientes_obj.NUMERO).then(data  =>{
                if (data.STATUS==2) {
                    //console.log('No tiene autorizaciones pendiendtes')
                    if ($scope.note.pesos) {
                        //PONEMOS LOS PRECIOS EN PESOS
                        if (articulo.DIVISA == 'MXN') {
                            $('#precio' + index).val(articulo.PRECIO)
                        } else {
                            $('#precio' + index).val(parseFloat(articulo.PRECIO * $scope.note.tipo_cambio).toFixed(4))
                        }
                    } else { //SI LA NOTA ESTA EN DOLARES PONEMOS LOS PRECIOS EN DOLARES
                        if (articulo.DIVISA == 'USD') {
                            $('#precio' + index).val(articulo.PRECIO)
                        } else {
                            $('#precio' + index).val(parseFloat(articulo.PRECIO / $scope.note.tipo_cambio).toFixed(4))
                        }
                    }
                }else if (data.STATUS==0) {
                  if (data.IS_AUTHORIZED) {
                        /*console.log(JSON.stringify(articulo))
                        console.log('Tiene una autorizacion de ' + data.REQUEST.PRICE)*/
                        $scope.show_message('El precio Autorizado se muestra en el campo precio',2)
                      if ($scope.note.pesos ) {
                          //console.log('Nota en pesos')
                          if (data.REQUEST.DIVISA_REQUEST=='MXN') {
                            //console.log('autorizacion en pesos')
                            articulo.PRECIO = data.REQUEST.PRICE
                            //console.log(JSON.stringify(articulo))
                            $('#precio' + index).val(articulo.PRECIO)
                          }else{
                            //console.log('autorizacion en doalres')
                            articulo.PRECIO = data.REQUEST.PRICE*$scope.note.tipo_cambio
                            $('#precio' + index).val(articulo.PRECIO )
                            //console.log(JSON.stringify(articulo))
                          }
                      }else{
                        //console.log('nota en dolares')
                        if (data.REQUEST.DIVISA_REQUEST=='USD') {
                            //console.log('autorizacion en dolares')
                            articulo.PRECIO = data.REQUEST.PRICE
                            $('#precio' + index).val(articulo.PRECIO)
                            //console.log(JSON.stringify(articulo))
                          }else{
                            //console.log('autorizacion en pesos')
                            articulo.PRECIO = data.REQUEST.PRICE/$scope.note.tipo_cambio
                            $('#precio' + index).val(articulo.PRECIO)
                            //console.log(JSON.stringify(articulo))
                          }
                      }
                  }else{
                    if ($scope.note.pesos) {
                        //PONEMOS LOS PRECIOS EN PESOS
                        if (articulo.DIVISA == 'MXN') {
                            $('#precio' + index).val(articulo.PRECIO)
                        } else {
                            $('#precio' + index).val(parseFloat(articulo.PRECIO * $scope.note.tipo_cambio).toFixed(4))
                        }
                    } else { //SI LA NOTA ESTA EN DOLARES PONEMOS LOS PRECIOS EN DOLARES
                        if (articulo.DIVISA == 'USD') {
                            $('#precio' + index).val(articulo.PRECIO)
                        } else {
                            $('#precio' + index).val(parseFloat(articulo.PRECIO / $scope.note.tipo_cambio).toFixed(4))
                        }
                    }
                  }  
                } 
            })
            //console.log(articulo.PRECIO)
            /*if ($scope.note.pesos) {
                //PONEMOS LOS PRECIOS EN PESOS
                if (articulo.DIVISA == 'MXN') {
                   
                } else {
                    $('#precio' + index).val(parseFloat(articulo.PRECIO * $scope.note.tipo_cambio).toFixed(2))
                }
            } else { //SI LA NOTA ESTA EN DOLARES PONEMOS LOS PRECIOS EN DOLARES
                if (articulo.DIVISA == 'USD') {
                    $('#precio' + index).val(articulo.PRECIO)
                } else {
                    $('#precio' + index).val(parseFloat(articulo.PRECIO / $scope.note.tipo_cambio).toFixed(2))
                }
            }*/
            $('#precio'+index).inputmask({
                alias: 'currency',
                digits: 4,
                rightAlign: 0,
                clearMaskOnLostFocus: true
            })
            $('#importe'+index).inputmask({
                alias: 'currency',
                digits: 2,
                rightAlign: 0,
                clearMaskOnLostFocus: true
            })
            $('#cantidad' + index).focus()
            // $('#um' + index).focus()
            $scope.articulo_nota = {}
        }
        //$scope.articulos = $scope.articulos.filter( art => art.CODIGO != articulo.CODIGO)
        //SI LA NOTA ESTA EN PESOS
        /*$scope.hasAutorization($scope.articulo_nota.CODIGO,$scope.clientes_obj.NUMERO)
        if ($scope.note.pesos) {
            //PONEMOS LOS PRECIOS EN PESOS
            if (articulo.DIVISA == 'MXN') {
                $('#precio' + index).val(articulo.PRECIO)
            } else {
                $('#precio' + index).val(parseFloat(articulo.PRECIO * $scope.note.tipo_cambio).toFixed(4))
            }
        } else { //SI LA NOTA ESTA EN DOLARES PONEMOS LOS PRECIOS EN DOLARES
            if (articulo.DIVISA == 'USD') {
                $('#precio' + index).val(articulo.PRECIO)
            } else {
                $('#precio' + index).val(parseFloat(articulo.PRECIO / $scope.note.tipo_cambio).toFixed(4))
            }
        }
        $('#precio'+index).inputmask({
            alias: 'currency',
            digits: 4,
            rightAlign: 0,
            clearMaskOnLostFocus: true
        })
        $('#importe'+index).inputmask({
            alias: 'currency',
            digits: 2,
            rightAlign: 0,
            clearMaskOnLostFocus: true
        })
        
        $scope.articulo_nota = {}*/
    }

    //------------------------------------------WORKING FORMAR URL PARA AGREGAR LA NOTA AL SISTEMA
    $scope.guardarNota = () => {
        $scope.url_add_nota = 'http://201.159.177.110/Plosa/apis/AddNota.php?'
        var fecha = new Date();
        var hora = fecha.getHours()<10?'0'+fecha.getHours():fecha.getHours()
        var minutos = fecha.getMinutes()<10?'0'+fecha.getMinutes():fecha.getMinutes()
        if ($scope.clientes_obj.CLIENTE != undefined) {
            var direccion_sin_gato = $scope.clientes_obj.DIRECCION.replace('#','no.');
            $scope.url_add_nota += 'CLIENTE=' + $scope.clientes_obj.CLIENTE.replaceAll(' ', '+') + '&' +
                'NUMERO_CLIENTE=' + $scope.clientes_obj.NUMERO + '&' +
                'DIRECCION=' + direccion_sin_gato.replaceAll(' ', '+') + '&' +
                'TELEFONO=' + $scope.clientes_obj.TELEFONO + '&' +
                'FECHA=' + fecha.getDate() + '-' + (fecha.getMonth()+1) + '-' + fecha.getFullYear() + '&' +
                'LLEGADA='+hora+':'+minutos+':43&' +
                'TOTAL=' + $scope.note.total + '&' +
                'VENDEDOR=' + $scope.note.vendedor.ID + '&' +
                'TOTAL_DLL=' + $scope.note.total_dolares + '&' +
                'SALIDA='+hora+':'+minutos+':46&' +
                'DIVISA=' + $scope.note.currency + '&'
            for (let index = 0; index < $scope.note.articulos.length; index++) {
                //console.log($scope.note.articulos[index])
                if($scope.note.articulos[index].CODIGO == 1 || $scope.note.articulos[index].CODIGO == 2 || $scope.note.articulos[index].CODIGO == 17 || $scope.note.articulos[index].CODIGO == 30 || $scope.note.articulos[index].CODIGO == 54){
                    $scope.note.hasArticleMXN = true
                    
                }
                if ($scope.note.articulos[index].CANTIDAD>0) {
                    var cantidad    = $scope.note.pesos?$scope.note.articulos[index].PRECIO:$scope.note.articulos[index].PRECIO*$scope.note.tipo_cambio
                    var precio      = $scope.note.pesos? $scope.note.articulos[index].IMPORTE:$scope.note.articulos[index].IMPORTE*$scope.note.tipo_cambio
                    $scope.url_add_nota += 'CANTIDAD[]=' + $scope.note.articulos[index].CANTIDAD + "&" +
                        'UNIDAD[]=' + $scope.note.articulos[index].UNIDAD + "&" +
                        'DESCRIPCION[]=' + $scope.note.articulos[index].NOMBRE.replaceAll(' ', '+') + "&" +
                        'PRECIO[]=' + cantidad + "&" +
                        'IMPORTE[]=' + precio + "&"
                }
            }

            if ($scope.note.hasArticleMXN) {
                if (!$scope.note.pesos) {
                    $scope.show_message('La impresión de la nota será en pesos ',1);
                }
            }
            $('#do_nota_modal').modal('show')
            $scope.note.isCredito = false; 
            $scope.clientes_obj.creditoDisponible = true
            $scope.note.creditoAutorizacion = true
            $scope.clientes_obj.listo_verificar = false
            $scope.clientes_obj.solicitudCredito = false
            
        } else {
            $scope.show_message('Es necesario seleccionar un cliente antes de guardar la nota',21)//1 info //2 success //any warning
        }
    }

    $scope.cerrar_autorizacion = (cliente)  =>{
        var data = {
            "CLIENTE":cliente,
		    "VENDEDOR":"CERRAR"
        }
        //console.log(JSON.stringify(data))
        $.ajax({
            url: $scope.url_base + 'ActualizarPasswordVenta.php',
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data :data,
            success: function (respuesta) {
                $scope.autorizacion_venta_dedudor = false
                //console.log(respuesta)
                $scope.$digest()
            },
            error: function () {
                //console.log("Error ADD_NOTAA ");
                $('#load_modal').modal('hide')
            }
        });
    }

    $scope.cerrar_autorizacion_credito = (cliente)  =>{
        var data = {
            "CLIENTE":cliente,
		    "VENDEDOR":"CERRAR"
        }
        //console.log(JSON.stringify(data))
        $.ajax({
            url: $scope.url_base + 'AutorizarAnularCredito.php',
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data :data,
            success: function (respuesta) {
                //console.log(respuesta)
            },
            error: function () {
                console.log("Error cerrar autorizacion credito ");
                $('#load_modal').modal('hide')
            }
        });
    }

    $scope.verificarCredito = () => {
        $scope.revisarCliente($scope.clientes_obj);
        $scope.clientes_obj.listo_verificar = true;
        $scope.validarCredito();
    } 

    $scope.verificarAumento = () => {
        $scope.revisarCliente($scope.clientes_obj);
    }

    $scope.validarCredito = () =>{
        //VALIDA SI EL CLIENTE TIENE ADEUDOS
        $scope.note.creditoAutorizacion = false
        if ($scope.clientes_obj.VENDER=='CONTINUAR') {
            //SIN ADEUDOS REVISAR EL MONTO DE VENTA ES MENOR A 2000 PESOS
            if ($scope.note.total<2000) {
                //si el monto es mayor a los 2000 se deja continuar 
                $scope.clientes_obj.creditoDisponible = true
                $scope.ventaCreditoAutorizada()
            }else{
                //si el monto es menor a 2000 pesos se le muestra la opcion para solicitar autorizacion 
                $scope.note.creditoAutorizacion = true
            } 
            $scope.note.isCredito = true;
        } else {
            //SI TIENE ADEUDOS VERIFICAMOS SI TIENE ALGUNA AUTORIZACION HECHA
            if ($scope.clientes_obj.AUTORIZACION=="S") {
                //Si tiene autorizacion se deja continuar pero antes se verifica el monto de venta
                $scope.note.isCredito = true;
                $scope.clientes_obj.creditoDisponible = true 
                if ($scope.note.total<2000) {
                    $scope.ventaCreditoAutorizada()
                }else{
                    //si el monto es menor a 2000 pesos se le muestra la opcion para solicitar autorizacion 
                    $scope.note.creditoAutorizacion = true
                } 
            } else {
                if ($scope.note.total<2000) {
                    $scope.ventaCreditoAutorizada()
                }else{
                    //si el monto es menor a 2000 pesos se le muestra la opcion para solicitar autorizacion 
                    $scope.note.creditoAutorizacion = true
                    $scope.note.isCredito = true;
                } 
                $scope.clientes_obj.creditoDisponible = false
            }
        }
    }

    $scope.solicitudVentaMenorCredito = () => {
        var info = {
            'NUMERO_CLIENTE':$scope.clientes_obj.NUMERO,'NOMBRE':$scope.clientes_obj.CLIENTE,'VENDEDOR':$scope.note.vendedor.ID,'MONTO' : $scope.note.total
        }
        //console.info(info)
        $.ajax({
            url: $scope.url_base+'VentaCredito.php',
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data : info,
            success: function (respuesta) {
                $scope.show_message('ESPERE A QUE APRUEBEN LA SOLICITUD PARA CONTINUAR CON LA VENTA',2)//1 info //2 success //any warning
                $scope.mensaje_solicitud = respuesta.EMAIL=='ENVIADO'?'Solicitud enviada':'Error al enviar la solicitud'
                $scope.clientes_obj.solicitudCredito = true
                $scope.$digest()
            },
            error: function () {
                $scope.mensaje_solicitud = 'Error al enviar la solicitud'
                $scope.consultando = false
            }
        });
    }

    $scope.ventaCreditoAutorizada = () =>{
        //console.log($scope.note.total)
        $scope.note.creditoAutorizacion = false
        $.ajax({
            url: $scope.url_base+'ValidarVentaCredito.php',
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data : {'CLIENTE': $scope.clientes_obj.NUMERO},
            success: function (respuesta) {
                if (respuesta.AUTORIZACION=='ABIERTO') {
                    $scope.note.creditoAutorizacion = true
                }else{
                    //console.info('No tiene autorizacion para ventas ')
                    $scope.note.creditoAutorizacion = false
                }
                $scope.$digest();
            },
            error: function () {
                console.log("Error getVendedores ");
                $scope.consultando = false
            }
        });
    }

    //------------------------------------------WORKING ENVIAR DATOS Y AGREGAR NOTA AL SISTEMA 
    /*$scope.terminarNota = () => {
        var contado = false
        
        $('#do_nota_modal').modal('hide') 
        $('#load_modal').modal('show')

        if ($scope.note.facturar) {
            $scope.url_add_nota += 'IS_FACTURA=1&'
        }else{
            $scope.url_add_nota +='NOMBRE_COMERCIAL=' + $('#nombre_comericial').val().replaceAll(' ', '+') + '&'
        }

        if ($scope.note.isCredito) {
            var fecha = new Date();
            fecha.setDate(fecha.getDate()+parseInt($scope.clientes_obj.LIMIT_DAYS))
            var mes = (fecha.getMonth()+1)<=9?'0'+(fecha.getMonth()+1):fecha.getMonth()+1
            var dia = (fecha.getDate())<=9?'0'+(fecha.getDate()) :fecha.getDate()
            $scope.url_add_nota += 'IS_CREDITO=&DUE_DATE='+fecha.getFullYear() + '-' + mes + '-' + dia
        }else{
            contado = true
            $scope.pay_contado = {
                'cliente':$scope.clientes_obj.NUMERO,
                'abono':$scope.note.total,
                'nota':'',
                'divisa':$scope.note.currency
            }
        }
        if ($scope.clientes_obj.MAIL.length>0) {
            updateMailCliente().then(response => {
                //console.log('Api response ' + response)
            })
        }

        saveNota($scope.url_add_nota).then(data  => {
            if (data.STATUS==5) {
                $('#load_modal').modal('hide')
                $scope.note.isCredito = false;   
                $('#checkCredito').prop('checked',false);
                $('#checkContado').prop('checked',true);   
                $scope.updateLimiteCredito($scope.clientes_obj); 
                $scope.show_message('Cliente sin credito suficiente. En caso de actualizar el límite de crédito del cliente intentelo de nuevo ',1);      
                //$('#load_modal').modal('hide')            
            }else{
                $scope.cerrar_autorizacion(data.FACTURA.CLIENTE.NUMERO);
                $scope.cerrar_autorizacion_credito(data.FACTURA.CLIENTE.NUMERO);
                if (contado) {
                    $scope.pagarNotaContado(data.FACTURA.CLIENTE.NUMERO,data.FACTURA.SALDO,data.FACTURA.ID,data.FACTURA.DIVISA)
                    $scope.showFacturaCreada(data.FACTURA.ID,data.FACTURA.DIVISA,$scope.clientes_obj.MAIL,data.FACTURA.CLIENTE.NUMERO)
                    $('#load_modal').modal('hide')
                    $scope.getNextnota()
                    $scope.limpiarObjetos()  
                    $scope.$digest()          
                }else{
                    $scope.showFacturaCreada(data.FACTURA.ID,data.FACTURA.DIVISA,$scope.clientes_obj.MAIL,data.FACTURA.CLIENTE.NUMERO)
                    $('#load_modal').modal('hide')
                    $scope.getNextnota()
                    $scope.limpiarObjetos()  
                    $scope.$digest() 
                }
            }
        });
    }*/

    $scope.terminarNota = (tipo) => {
        

        if(!$scope.note.isCredito && tipo!='X'){
            $('#confirmacion_modal').modal('show')
            $('#do_nota_modal').modal('hide') 
        }else{
            $('#confirmacion_modal').modal('hide')
            var contado = false
            $('#do_nota_modal').modal('hide') 
            $('#load_modal').modal('show')
            if ($scope.note.facturar) {
                $scope.url_add_nota += 'IS_FACTURA=1&'
            }else{
                $scope.url_add_nota +='NOMBRE_COMERCIAL=' + $('#nombre_comericial').val().replaceAll(' ', '+') + '&'
            }
            if ($scope.note.isCredito) {
                var fecha = new Date();
                fecha.setDate(fecha.getDate()+parseInt($scope.clientes_obj.LIMIT_DAYS))
                var mes = (fecha.getMonth()+1)<=9?'0'+(fecha.getMonth()+1):fecha.getMonth()+1
                var dia = (fecha.getDate())<=9?'0'+(fecha.getDate()) :fecha.getDate()
                $scope.url_add_nota += 'IS_CREDITO=&DUE_DATE='+fecha.getFullYear() + '-' + mes + '-' + dia
            }else{
                contado = true
                $scope.pay_contado = {
                    'cliente':$scope.clientes_obj.NUMERO,
                    'abono':$scope.note.total,
                    'nota':'',
                    'divisa':$scope.note.currency
                }
            }
            /*if ($scope.clientes_obj.MAIL.length>0) {
                updateMailCliente().then(response => {
                    //console.log('Api response ' + response)
                })
            }*/
            console.log($scope.url_add_nota)
            saveNota($scope.url_add_nota).then(data  => {
                if (data.STATUS==5) {  
                    $scope.note.isCredito = false   
                    $('#checkCredito').prop('checked',false)
                    $('#checkContado').prop('checked',true)  
                    $scope.updateLimiteCredito($scope.clientes_obj); 
                    $scope.show_message('Cliente sin credito suficiente. En caso de actualizar el límite de crédito del cliente intentelo de nuevo ',1);      
                    $('#load_modal').modal('hide') 
                }else{
                    $scope.cerrar_autorizacion(data.FACTURA.CLIENTE.NUMERO);
                    $scope.cerrar_autorizacion_credito(data.FACTURA.CLIENTE.NUMERO);
                    $scope.saveRuta($scope.note.ruta,data.FACTURA.ID)
                    $scope.saveAutorNota(data.FACTURA.ID);
                    if (contado) {
                        
                        $scope.pagarNotaContado(data.FACTURA.CLIENTE.NUMERO,data.FACTURA.SALDO,data.FACTURA.ID,data.FACTURA.DIVISA)
                        $scope.showFacturaCreada(data.FACTURA.ID,data.FACTURA.DIVISA,$scope.clientes_obj.MAIL,data.FACTURA.CLIENTE.NUMERO)
                        $('#load_modal').modal('hide')
                        $scope.getNextnota()
                        $scope.limpiarObjetos()  
                        $scope.$digest()          
                    }else{
                        $scope.showFacturaCreada(data.FACTURA.ID,data.FACTURA.DIVISA,$scope.clientes_obj.MAIL,data.FACTURA.CLIENTE.NUMERO)
                        $('#load_modal').modal('hide')
                        $scope.getNextnota()
                        $scope.limpiarObjetos()  
                        $scope.$digest() 
                    }
                }
            });
        }

    }

    $scope.saveRuta = (ruta,nota) => {
        if(ruta!="Sin Ruta"){
            var dataOfRuta = {
                'NO_RUTA' : 0,
                'VENDEDOR' : $scope.note.vendedor.ID,
                'NOTA' : nota
            }
            switch (ruta) {
                case 'Ruta 1':
                    dataOfRuta.NO_RUTA = 1;
                    break;
                case 'Ruta 2':
                    dataOfRuta.NO_RUTA = 2;
                    break;
                case 'Ruta 3':
                    dataOfRuta.NO_RUTA = 3;
                    break;
                case 'Ruta 4':
                    dataOfRuta.NO_RUTA = 4;
                    break;
                case 'Ruta 5':
                    dataOfRuta.NO_RUTA = 5;
                    break;
                case 'Ruta 6':
                    dataOfRuta.NO_RUTA = 6;
                    break;
                case 'Ruta Rosarito':
                    dataOfRuta.NO_RUTA = 7;
                    break;
                case 'Ruta Ensenada':
                    dataOfRuta.NO_RUTA = 8;
                    break;
                case 'Ruta San Quintin':
                    dataOfRuta.NO_RUTA = 9;
                    break;
                case 'Ruta Tecate':
                    dataOfRuta.NO_RUTA = 10;
                    break;
                case 'Ruta Mexicali':
                    dataOfRuta.NO_RUTA = 11;
                    break;
                case 'Ruta SLRC':
                    dataOfRuta.NO_RUTA = 12;
                    break;
                default:
                    break;
            }
            console.log(JSON.stringify(dataOfRuta))
            var url_consulta = $scope.url_base + 'Rutas.php';
            $.ajax({
                url: url_consulta,
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                data: dataOfRuta,
                success: function (respuesta) {
                    console.log(respuesta)
                },
                error: function () {
                    console.log("Error revisar cliente ");
                }
            });
        }
        
    }

    $scope.cancelarContado = () => {
        $('#load_modal').modal('hide') 
        $('#confirmacion_modal').modal('hide')
        $('#do_nota_modal').modal('show') 
    }

    $scope.updateLimiteCredito = (cliente) => {
        $scope.numero_input = cliente.NUMERO 
        var url_consulta = $scope.url_base + 'GetCliente.php';
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data: { NUMERO: cliente.NUMERO },
            success: function (respuesta) {
                $scope.clientes_obj.limite = respuesta.CLIENTE.LIMITE
                $scope.clientes_obj.limite_saldo = respuesta.CLIENTE_SALDO
                $scope.$digest()
            },
            error: function () {
                console.log("Error revisar cliente ");
            }
        });
    }

    async function saveNota(url)  {
        console.log(url)
        let resultado = $.ajax({
                                url: url,
                                type: 'GET',
                                dataType: "json",
                                contentType: "text/html; charset=UTF-8",
                                success: function (respuesta) {console.log(JSON.stringify(respuesta))},
                                error: function (error) {
                                    console.log("Error ADD_NOTAA "+ error);
                                    $('#load_modal').modal('hide')
                                }
                            });
        return resultado
    }

    $scope.sendMailRutas = () => {
        console.log('Enviando info rutas')
    }

    async function updateMailCliente(url)  {
        var data = {
            'MAIL':$scope.clientes_obj.MAIL,
            'NUMERO' : $scope.clientes_obj.NUMERO,
        }
        //console.log(data)
        let resultado = $.ajax({
                                url: $scope.url_base+'CorreoCliente.php',
                                type: 'GET',
                                dataType: "json",
                                contentType: "text/html; charset=UTF-8",
                                data : data ,
                                success: function (respuesta) {console.log(JSON.stringify(respuesta))},
                                error: function () {
                                    console.log("Error ADD_NOTAA ");
                                    $('#load_modal').modal('hide')
                                }
                            });
        return resultado
    }

    $scope.validarArticuloExiste=(codigo,index)=>{
        console.log(codigo.CODIGO)
        console.log(parseInt($('#codigo'+index+'option:selected').text()))
        let existe = -1;
        if(parseInt($('#codigo'+index+'option:selected').text())==codigo.CODIGO){
            existe = index
            console.log('Lo encontre en el renglon ' + index)
        }
        return existe;
    }



    $scope.limpiarObjetos=()=>{
        $scope.totalizar = true;
        $scope.note.articulos = []
        $scope.articulo_nota = null
        $scope.note.total = 0
        $scope.note.total_dolares = 0
        $scope.articulo_was_added = null
        $scope.articulo = null; //WORKING
        $scope.enteredtext = ''
        $scope.clientes_obj = {};
        $scope.numero_input = 0
        $scope.hasClient = false
        $scope.note.hasArticleMXN = false
        $scope.url_add_nota = 'http://201.159.177.110/Plosa/apis/AddNota.php?'
        for (let index = 0; index < 11; index++) {
            $('#codigo' + index).val("");
            $('#descripcion' + index).val("");
            $('#unidad' + index).val("");
            $('#um' + index).val("");
            $('#cantidad' + index).val("");
            $('#precio' + index).val("");
            $('#importe' + index).val("");
            $("#cantidad" + index).removeAttr('disabled');
        }
        $scope.getArticulos()
        $('#checkCredito').prop('checked',false)
        $('#checkContado').prop('checked',true)
    }

    //------------------------------------------WORKING MODAL DE LOGIN
    $("#modalLoginAvatar").modal('show');
    $(".toggle-password").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    //------------------------------------------WORKING VALIDACION DE CREDENCIALES PARA INGRESAR AL SISTEMA
    $scope.checkLogin = () => {
        if ($scope.password != '' && $scope.usuario != '') {
            var url_consulta = $scope.url_base + 'Login.php';
            var datos_consulta = { 'NAME': $scope.usuario.toLowerCase(), 'PASSWORD': $scope.password };
            $.ajax({
                url: url_consulta,
                type: 'POST',
                data: datos_consulta,
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                success: function (respuesta) {
                    if (respuesta.STATUS == '0') {
                        $scope.nombre_usuario_logeado = respuesta.USUARIO.NOMBRE
                        $scope.validarLoginSitio($scope.usuario.toLowerCase(),$scope.password,'PEDIDOS');
                        /*if (!respuesta.IS_VENDEDOR) {
                            $("#modalLoginAvatar").modal('hide');
                            $scope.getVendedores();
                            $('#alertas').css('display','block');
                            $('#tablaVentas').css('display','block');
                            $('#marcoGeneral').css('display','block');
                            $('#espacioNotas').css('display','block');
                            $scope.getArticulos();
                            $scope.acceso_correcto = true;
                            $scope.getDivisas()
                            $scope.getArticuloOriginal();
                            $("#seller_modal").modal('show');
                        } else {
                            $scope.correcto = true
                            $("#modalLoginAvatar").modal('hide');
                            $scope.nombre_usuario_logeado = respuesta.USUARIO.NOMBRE
                            $("#seller_modal").modal('show');
                            $scope.getNextnota()
                            $scope.getArticuloOriginal();
                            $('#alertas').css('display','block');
                            $('#tablaVentas').css('display','block');
                            $('#marcoGeneral').css('display','block');
                            $('#espacioNotas').css('display','block');
                            $("#currency_modal").modal('show');
                            $('#aceptar_divisa').focus()
                            $scope.getClientes();
                            $scope.getDivisas()
                        }*/
                    } else {
                        $scope.correcto = true
                    }
                    $scope.$digest();

                },
                error: function () {
                    console.log("Error Login ");
                    $scope.checkLogin()
                    $scope.consultando = false
                }
            });
        } else {
            $scope.correcto = true
        }
    }

    $scope.submitLogin = (tecla) => {
        if (tecla.keyCode==13){
            $scope.checkLogin()
        }
    }

    //------------------------------------------WORKING TRAER LISTA DE VENDEDORES DISPONIBLES
    $scope.getVendedores = () => {
        $scope.consultando = true
        $scope.initBancos()
        var url_consulta = $scope.url_base + 'GetVendedores.php';
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            success: function (respuesta) {
                //console.log(respuesta)
                for (var index = 0; index < respuesta.VENDEDORES.length; index++) {
                    $scope.vendedores_cobros.push(respuesta.VENDEDORES[index]);
                    $scope.vendedores_saldos.push(respuesta.VENDEDORES[index]);
                    $scope.vendedores_catalogo.push(respuesta.VENDEDORES[index]);
                    $scope.vendedores_flujos.push(respuesta.VENDEDORES[index]);
                    $scope.vendedores_comisiones.push(respuesta.VENDEDORES[index]);
                }
                var all = {
                    'EMPLEADO_ID' : 79,
                    'NOMBRE':'GLOBAL',
                    'APELLIDO':'',
                    'DIRECCION':'',
                    'TELEFONO':'',
                    'SUELDO':0,
                    'STATUS':'A', 
                    'SERIE':'ELE',
                    'ID':'GLOBAL',
                    'FECHA_NACIMIENTO':'19681201',
                }
                /*$scope.vendedores_comisiones.push(all)
                $scope.vendedores_catalogo.push(all)*/
                $scope.$digest();
            },
            error: function () {
                console.log("Error getVendedores ");
                $scope.consultando = false
            }
        });
    }

    $scope.initBancos = () => {
        $scope.bancos.push({NOMBRE :'BBVA BANCOMER'})
        $scope.bancos.push({NOMBRE :'HSCB'})
        $scope.bancos.push({NOMBRE :'BANAMEX'})
        $scope.bancos.push({NOMBRE :'SANTANDER'})
        $scope.bancos.push({NOMBRE :'SCOTIABANK'})
        $scope.bancos.push({NOMBRE :'BANJERCITO'})
        $scope.bancos.push({NOMBRE :'BANORTE'})
        $scope.bancos.push({NOMBRE :'BANCO DEL BANJIO'})
    }

    $scope.openModalPrecio = (tecla, indice, articulo,origen) => {
        //console.log(origen)
        if (origen==0) {//si el focus esta en um validamos si el um es 0 brincamos a la cantidad
            if ($('#um' + indice).val()==0) {
                $('#cantidad' + indice).focus()
            }else if ($('#um' + indice).val()>0) {
                if (tecla.keyCode==13){
                    $scope.modal_precio(indice,articulo)
                }
            }
        }else{
            if (tecla.keyCode==13){
                $scope.modal_precio(indice,articulo)
            }
        }
    }

    //------------------------------------------WORKING TRAER NUMERO DE NOTA DEL VENDEDOR SELECCIONADO 
    $scope.getNextnota = () => {
        var url_consulta = $scope.url_base + 'GetNextFactura.php';
        if ($scope.note.vendedor == undefined) {
            $scope.show_message('Debe seleccionar un vendedor',214)
        }else{
            $.ajax({
                url: url_consulta,
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                data: { 'VENDEDOR': $scope.note.vendedor.ID },
                success: function (respuesta) {
                    $scope.note.id = respuesta.FACTURA
                    $("#seller_modal").modal('hide');
                    $("#currency_modal").modal('show');
                    $('#aceptar_divisa').focus()
                    $scope.getClientes();
                    $scope.$digest();
                },
                error: function () {
                    console.log("Error getNextFactura ");
                    $scope.consultando = false
                }
            });
        }
    }

    $scope.choices = [ ];

    //------------------------------------------WORKING TRAER LISTE DE CLIENTES POR VENDEDOR
    $scope.getClientes = () => {
        $scope.choices = [];
        if ($scope.note.vendedor != undefined) {
            var url_consulta = $scope.url_base + 'GetClientesByVendedor.php';
            $.ajax({
                url: url_consulta,
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                data: { 'VENDEDOR': $scope.note.vendedor.ID },
                success: function (respuesta) {
                    if(respuesta.CLIENTES!=undefined){
                        for (var x = 0; x < respuesta.CLIENTES.length; x++) {
                            $scope.clientes.push(respuesta.CLIENTES[x]);
                            $scope.choices.push({
                                'index': x,
                                'id': respuesta.CLIENTES[x].NUMERO,
                                'label': respuesta.CLIENTES[x].CLIENTE==null?'Cliente numero'+respuesta.CLIENTES[x].NUMERO:respuesta.CLIENTES[x].CLIENTE,
                            });
                        }
                        $scope.$digest();
                    }
                },
                error: function () {
                    console.log("Error getClientes ");
                    $scope.consultando = false
                }
            });
        }
    }

    $scope.items = $scope.choices;
    $scope.text = '';
    $scope.minlength = 1;
    $scope.selected = {};

    $scope.filteredChoices = [];

    $scope.isVisible = {
      suggestions: false
    };
    
    $scope.filterItems = function () {
      if($scope.minlength <= $scope.enteredtext.length) {
        $scope.filteredChoices = querySearch($scope.enteredtext);
        $scope.isVisible.suggestions = $scope.filteredChoices.length > 0 ? true : false;
        $scope.numero_input = 0
        $scope.hasClient = false
      }else {
        $scope.isVisible.suggestions = false;
      }
    };
    
    
    /**
     * Takes one based index to save selected choice object
     */
    $scope.selectItem = function (id) {
        //console.log(id)
      $scope.selected = $scope.choices[id];
      $scope.enteredtext = $scope.selected.label;
      $scope.numero_input = $scope.selected.id;
      $scope.clientes_obj = $scope.clientes.filter(cliente => cliente.NUMERO == $scope.selected.id)[0]
      //console.log($scope.clientes_obj)
      if ($scope.clientes_obj!=undefined) {
        $scope.revisarCliente($scope.clientes_obj)
      }
      $scope.isVisible.suggestions = false;
      
    };
    
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      // returns list of filtered items
      return  query ? $scope.choices.filter( createFilterFor(query) ) : [];
    }
    
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
  
      return function filterFn(item) {
        // Check if the given item matches for the given query
        var label = angular.lowercase(item.label);
        return (label.indexOf(lowercaseQuery) != -1);
      };
    }

    $scope.saveAutorNota = (nota) => {
        
        var dataOfRuta = {
            'FACTURA' : nota,
            'USUARIO' : $scope.usuario.toUpperCase(),
            'SITIO' : 'NOTAS'
        }
        console.log(JSON.stringify(dataOfRuta))
        var url_consulta = $scope.url_base + 'SaveAutorNota.php';
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data: dataOfRuta,
            success: function (respuesta) {
                console.log(respuesta)
            },
            error: function () {
                console.log("Error revisar cliente ");
            }
        });        
    }

    //------------------------------------------WORKING SOLICITUD DE VENTA A CLIENTE CON FACTURAS VENCIDAS
    $scope.solicitudVentaConAdedudo = () => {
        var url_consulta = $scope.url_base + 'MailSolicitudAutorizacionVenta.php';
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data: { 'VENDEDOR': $scope.note.vendedor.ID, 'CLIENTE': $scope.clientes_obj.CLIENTE, 'NUMERO_CLIENTE': $scope.clientes_obj.NUMERO },
            success: function (respuesta) {
                $scope.show_message('ESPERE A QUE APRUEBEN LA SOLICITUD PARA CONTINUAR CON LA VENTA',2)//1 info //2 success //any warning
                $('#deudas_modal').modal('hide')
                $scope.clientes_obj.listo_verificar = true
                $scope.$digest()
            },
            error: function () {
                console.log("Error solicitud venta con adeudo ");
                $scope.consultando = false
            }
        });
    }

    //------------------------------------------WORKING MANDAR SOLICITUD DE ACTUALIZACION DE NOMBRE COMERCIAL
    $scope.terminarEnviar = () => {
        var url_consulta = $scope.url_base + 'MailSolicitudNoComercial.php';
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data: { 'VENDEDOR': $scope.note.vendedor.ID, 'NOMBRE_CLIENTE': $scope.clientes_obj.CLIENTE, 'NUMERO_CLIENTE': $scope.clientes_obj.NUMERO },
            success: function (respuesta) {
                $scope.show_message('POR FAVOR ESPERE A QUE ATIENDAN LA SOLICITUD',1)//1 info //2 success //any warning
                $scope.limpiarObjetos()
                $scope.$digest()
            },
            error: function () {
                console.log("Error solicitud nombre comercial ");
                $scope.consultando = false
            }
        });
    }

    $scope.getArticuloOriginal = () => {
        var url_consulta = $scope.url_base + 'GetArticulos.php';
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            success: function (respuesta) {
                $scope.articulos_cambio_divisa = respuesta.ARTICULOS;
                $scope.$digest()
            },
            error: function () {
                $scope.consultando = false
            }
        });
    }

    async function hasAutorization(articulo,cliente)  {
        var fecha = new Date()
        var mes = (fecha.getMonth()+1)<9?'0'+(fecha.getMonth()+1):fecha.getMonth()+1
        var dia = (fecha.getDate())<9? '0'+(fecha.getDate()) :fecha.getDate()
        var fecha_formato = fecha.getFullYear() + '-' + mes + '-' + dia
        var data = {
            DATE : fecha_formato,
            ARTICLE : articulo,
            CLIENT : cliente
        }
        var url_consulta = $scope.url_base + 'CheckIfHasAuthorizaion.php';
        console.log(url_consulta);
        console.log(JSON.stringify(data));
        let resultado = $.ajax({
                                url: url_consulta,
                                type: 'GET',
                                dataType: "json",
                                contentType: "text/html; charset=UTF-8",
                                data : data,
                                success: function (respuesta) {
                                    console.log(respuesta)
                                },
                                error: function () {
                                    console.log("Error getAUTORIZACION ");
                                    $scope.consultando = false
                                }
                            });
        
        return resultado
    }

    //------------------------------------------WORKING MANDAR SOLICITUD DE AUTORIZACION DE PRECIO MAS BAJO EN PRODCTO
    $scope.solictudPrecio = () => {
        var url_consulta = $scope.url_base + 'RequestPriceGet.php';
        if ($scope.precio_input.toString().indexOf("$") >= 0) {
            $scope.precio_input = $scope.getFloat($scope.precio_input)
        }
        console.log($scope.articulo_nota.CODIGO);
        var data = { 
            SELLER      : $scope.note.vendedor.ID, 
            CLIENT      : $scope.clientes_obj.NUMERO, 
            ARTICLE     : $scope.articulo_nota.CODIGO>100?$scope.articulo_nota.CODIGO+5:$scope.articulo_nota.CODIGO, 
            PRICE       : $scope.precio_input, 
            CURRENCY    : $scope.note.currency, 
            CANTIDAD    : $scope.articulo_nota.CANTIDAD, 
            TO_MAIL     : 'soporte.eco.3@eco-recycling.com' 
        } 
        console.log(JSON.stringify(data))
        if(data.CANTIDAD>0&&data.PRICE>0){
            $.ajax({
                url: url_consulta,
                type: 'GET',
                dataType: "json", 
                contentType: "text/html; charset=UTF-8",
                data: data,
                success: function (respuesta) {
                    $scope.show_message('DESPUES DE AUTORIZAR SOLO DEBE VOLVER A DAR CLICK AL PRECIO PARA ACTUALIZAR',1)//1 info //2 success //any warning
                    //$scope.limpiarObjetos()
                    $scope.autorizacion = false
                    for (let x = 0; x < 7; x++) {
                        $('#linea'+x).show()
                        $('#codigo-col'+x).show()
                        $('#descripcion-col'+x).show()
                        $('#unidad-col'+x).show()
                        $('#um-col'+x).show()
                        $('#cantidad-col'+x).show()
                        $('#precio-col'+x).show()
                        $('#importe-col'+x).show()
                    }
                    $scope.articulo_nota = {}
                    $scope.$digest()
                    $('#price_modal').modal('hide')
                },
                error: function (error) {
                    console.log("Error envio de solicitud" + JSON.stringify(error));
                    for (let x = 0; x < 7; x++) {
                        $('#linea'+x).show()
                        $('#codigo-col'+x).show()
                        $('#descripcion-col'+x).show()
                        $('#unidad-col'+x).show()
                        $('#um-col'+x).show()
                        $('#cantidad-col'+x).show()
                        $('#precio-col'+x).show()
                        $('#importe-col'+x).show()
                    }
                    $scope.autorizacion = false
                }
            });
        }
    }

    //------------------------------------------WORKING VALIDA QUE EL CLIENTE SELECCIONADO NO TENGA ADEUDOS Y TENGA NOMBRE COMERCIAL
    $scope.revisarCliente = (cliente) => {
        $scope.verVentas = false;
        $('#load_modal').modal('show') 
        $scope.numero_input = cliente.NUMERO 
        var url_consulta = $scope.url_base + 'GetCliente.php';
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data: { NUMERO: cliente.NUMERO },
            success: function (respuesta) {
                //console.log(respuesta)
                $scope.clientes_obj.limite = respuesta.CLIENTE.LIMITE
                $scope.clientes_obj.limite_saldo = respuesta.CLIENTE_SALDO
                $scope.hasClient = true
                $scope.clientes_obj.VENDER = respuesta.VENDER
                $scope.clientes_obj.AUTORIZACION = respuesta.AUTORIZACION
                $scope.clientes_obj.creditoDisponible = respuesta.AUTORIZACION=='S'
                $scope.clientes_obj.ADEUDOS = respuesta.FACTURAS
                if (respuesta.CLIENTE.NOMBRE_COMERCIAL == '') {
                    $('#nombre_comercial_modal').modal('show')
                }
                $('#load_modal').modal('hide')
                $scope.$digest()
            },
            error: function () {
                $('#load_modal').modal('hide')
                $scope.revisarCliente(cliente)
                console.log("Error revisar cliente ");
            }
        });
    }

    //------------------------------------------WORKING ABRE MODAL PARA REIMPRIMIR NOTAS
    $scope.printNote = () => {
        $scope.nota = {}
        $scope.getLastFactura(); 
        $('#print_note').modal('show')
    }

    //------------------------------------------WORKING MUESTRA EL PDF DE LA NOTA DESPUES DE CREARLA
    $scope.showFacturaCreada = (id,divisa,mail,num_cliente) => {
        var url_consulta = $scope.url_base + 'PrintNota.php?FACTURA=' + id ;
        if ($scope.note.hasArticleMXN) {
            window.open(url_consulta);    
        } else {
            if(divisa=='USD'){ 
                window.open(url_consulta+'&PRINT_DLL=');
            }else{
                window.open(url_consulta);    
            }
        }
        if ($scope.clientes_obj.MAIL.length>0) {
            $scope.sendCustomerEmail(id,mail,num_cliente)
        }else{
            $scope.sendCustomerEmail(id,"soporte.eco.3@gmail.com",num_cliente)
        }
    } 

    $scope.sendCustomerEmail = (factura,cliente_mail,num_cliente) => {
        var id = factura;
        var email = cliente_mail
        var num = num_cliente
        $.ajax({
            url: $scope.url_base + 'MailClientePDF.php' ,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data: { 'FACTURA': factura, 'CLIENTE_MAIL': cliente_mail, 'NUMERO_CLIENTE':num_cliente },
            success: function (respuesta) {
                //console.log(respuesta)
                if (respuesta.STATUS==4) {
                    $scope.sendCustomerEmail(id,email,num)
                }
            },
            error: function () {
                console.log("Error solicitud nombre comercial ");
                $scope.consultando = false
            }
        });
    } 

    $scope.sameDate =()=>{
        $scope.facturas.al = $scope.facturas.del
    }

    //********************************************************SECCION DE NOTAS VENTAS***************************************************************************** */

    





























    $scope.global = {
        dia: true,
        sistemasOnly: false,
        destinatarios: '',
        enviarDiario: 'Si'
    };

    $scope.setFecha = () => {
        var fecha = new Date();
        $scope.saldos_por_vendedor.hasta = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.reporte_comisiones.al = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.reporte_comisiones.del = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.reporte_flujos.del = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.reporte_flujos.hasta = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.abonos_cliente.hasta = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.abonos_cliente.del = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.series_rv.inicio = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.series_rv.fin = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.reporte_canceladas.del = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.reporte_canceladas.al = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.facturas.del = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.facturas.al = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.note.fecha = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.ruta_mail.DEL = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        $scope.ruta_mail.AL = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
    };

    $scope.mostrarVentas = () => {
        $scope.showTable = !$scope.showTable;
    }

    $scope.doCodigoNota = (codigo, folio,isCobro) => {
        let codigo_formato = codigo.toUpperCase();
        let temp = folio.toString()
        let nota = ''
        switch (temp.length) {
            case 0:
                nota = codigo_formato + '-00000'
                break;
            case 1:
                nota = codigo_formato + '-0000' + temp
                break;
            case 2:
                nota = codigo_formato + '-000' + temp
                break;
            case 3:
                nota = codigo_formato + '-00' + temp
                break;
            case 4:
                nota = codigo_formato + '-0' + temp
                break;
            case 5:
                nota = codigo_formato + '-' + temp
                break;
            default:
                break;
        }
        $scope.nota.fullNota = nota
        $scope.nota.accion = 'BUSCANDO...'
        if (isCobro==1) {
            $scope.getFacturaForCobro();
        }else{
            $scope.getFactura();
        }
    }

    $scope.printFactura = () => {
        console.log($scope.nota.pesos)
        console.log($scope.nota.DIVISA)
        if ($scope.nota.codigo!=undefined) {
            var url_consulta = $scope.url_base + 'PrintNota.php?FACTURA=' + $scope.nota.codigo;
            if ($scope.nota.hasArticleMXN) {
                window.open(url_consulta);
            } else { 
                $scope.nota.currency == 'MXN' ? url_consulta = url_consulta : url_consulta = url_consulta + "&PRINT_DLL="
                window.open(url_consulta);
            }
            $scope.nota = {}
            $scope.accion = 'BUSCAR'
            $('#print_note').modal('hide')
        }else{
            $scope.show_message('Escriba el ID de la factura que desea imprimir',1)//1 info //2 success //any warning
        }
    }

    $scope.getLastFactura = () => { 
        var fecha = new Date();
        var mes = (fecha.getMonth()+1)<=9?'0'+(fecha.getMonth()+1):fecha.getMonth()+1
        var dia = (fecha.getDate())<=9? '0'+(fecha.getDate()) :fecha.getDate() 
        var fecha_hoy = fecha.getFullYear()+'-'+mes+'-'+dia
        var url_consulta = $scope.url_base + 'GetLastInvoiceBySeller.php?SELLER=' + $scope.note.vendedor.ID+'&DATE='+fecha_hoy;
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            success: function (respuesta) {
                if (respuesta.STATUS == 2) {
                    $scope.nota.estado = respuesta.MESSAGE
                    $scope.nota.accion = 'NO SE ENCONTRO LA NOTA'
                    $scope.show_message('NO SE ENCONTRO LA NOTA',21) 
                } else {
                    $scope.nota = respuesta.FACTURA
                    $scope.nota.codigo = respuesta.FACTURA.ID
                    $scope.nota.hasArticleMXN = false
                    $scope.note.pesos = respuesta.FACTURA.DIVISA=='MXN'
                    for (let index = 0; index < respuesta.FACTURA.NOTAS.length; index++) {
                        var article = respuesta.FACTURA.NOTAS[index]
                        //console.log(JSON.stringify(article))
                        if(article.ARTICULO.CODIGO==1 || article.ARTICULO.CODIGO==2|| article.ARTICULO.CODIGO==17|| article.ARTICULO.CODIGO==30 || article.ARTICULO.CODIGO==54){
                            $scope.nota.hasArticleMXN = true
                            //console.log('Tenemos un codigo especial ')
                            break;
                        }
                    }
                    $scope.nota.accion = 'REIMPRIMIR'
                }
                $scope.show_message('NOTA ENCONTRADA',2) 
                $scope.$digest();
            },
            error: function () {
                console.log("Error getFactura ");
                $scope.consultando = false
                $scope.show_message('NO SE ENCONTRO LA NOTA',6) 
                $scope.nota.accion = 'NO SE ENCONTRO LA NOTA'
            }
        });
        
}

    $scope.getFacturaForCobro = (nota) => {
        var url_consulta = $scope.url_base + 'GetFactura.php?FACTURA=' + nota;
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            success: function (respuesta) {
                //console.log(respuesta)
                if (respuesta.STATUS == 2) {
                    $scope.nota.estado = respuesta.MESSAGE
                    $scope.nota.accion = 'NO SE ENCONTRO LA NOTA'
                } else {
                    if (respuesta.MESSAGE=='Factura is paid') {
                        $scope.nota.accion = 'FACTURA PAGADA'
                        $('#pay_modal').modal('hide')
                        $scope.cobro = {}
                        $scope.show_data_pay = false
                    }else{
                        $scope.cobro.vendedor = respuesta.FACTURA.VENDEDOR.ID
                        $scope.cobro.cliente_nombre = respuesta.FACTURA.CLIENTE.CLIENTE
                        $scope.cobro.cliente_numero = respuesta.FACTURA.CLIENTE.NUMERO
                        $scope.cobro.saldo_actual = respuesta.FACTURA.SDO_ACTUAL
                        $scope.cobro.por_cobrar = 0
                        $scope.cobro.divisa = respuesta.FACTURA.DIVISA
                        $scope.cobro.pesos = $scope.cobro.divisa=='MXN'
                        $scope.nota.accion = 'COBRAR'
                        $scope.show_data_pay = true
                    }
                }
                $scope.$digest();
            },
            error: function () {
                $scope.consultando = false
                $scope.nota.accion = 'NO SE ENCONTRO LA NOTA'
            }
        });
    }

    $scope.getFactura = () => {
        if ($scope.nota.codigo!=undefined) {
            var url_consulta = $scope.url_base + 'GetFactura.php?FACTURA=' + $scope.nota.codigo;
            $.ajax({
                url: url_consulta,
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                success: function (respuesta) {
                    if (respuesta.STATUS == 2) {
                        $scope.nota.estado = respuesta.MESSAGE
                        $scope.nota.accion = 'NO SE ENCONTRO LA NOTA'
                        $scope.show_message('NO SE ENCONTRO LA NOTA',21) 
                    } else {
                        $scope.nota = respuesta.FACTURA
                        $scope.nota.codigo = respuesta.FACTURA.ID
                        var hasCodigo = respuesta.FACTURA.NOTAS.filter(articulo => articulo.ARTICULO.CODIGO == 54 || articulo.ARTICULO.CODIGO == 17 || articulo.ARTICULO.CODIGO == 1 || articulo.ARTICULO.CODIGO == 2 || articulo.ARTICULO.CODIGO == 30);
                        $scope.nota.hasArticleMXN = hasCodigo.length>0
                        $scope.nota.accion = 'REIMPRIMIR'
                    }
                    $scope.show_message('NOTA ENCONTRADA',2) 
                    $scope.$digest();
                },
                error: function () {
                    $scope.consultando = false
                    $scope.show_message('NO SE ENCONTRO LA NOTA',6) 
                    $scope.nota.accion = 'NO SE ENCONTRO LA NOTA'
                }
            });
        }else{
           $scope.show_message('Escribe el ID de la factura',6) 
        }
    }

    $scope.getArticulos = () => {
        $scope.consultando = true
        $scope.articulos_back_up = []
        $scope.articulos = []
        var url_consulta = $scope.url_base + 'GetArticulos.php';
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            success: function (respuesta) {
                for (var index = 0; index < respuesta.ARTICULOS.length; index++) {
                    var articulo = respuesta.ARTICULOS[index]
                    articulo.UM = 0
                    $scope.articulos.push(articulo);
                    $scope.articulos_back_up.push(articulo);
                }
                $scope.$digest();
            },
            error: function () {
                $scope.consultando = false
            }
        });
    }

    

    $scope.sendMail = () => {
        $scope.show_input = true
        var url_consulta = $scope.url_base + 'MailVentas.php';
        if (!$scope.validateEmail($scope.correo_ventas)) {
            alert('Debe escribir el correo valido al que desea enviar el reporte');
        } else {
            url_consulta += "?MAIL=" + $scope.correo_ventas + "&FROM=" + $scope.getFormato($scope.facturas.del) + "&TO=" + $scope.getFormato($scope.facturas.al)
            if ($scope.vendedores_saldos.length == undefined) {
                url_consulta += "&VENDEDOR=" + $scope.vendedores_saldos.ID
            }
            $.ajax({
                url: url_consulta,
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                success: function (respuesta) {
                    alert("Correo " + respuesta.EMAIL);
                },
                error: function () {
                    $scope.consultando = false
                }
            });
        }
    }

    $scope.setFecha();

    $scope.getFacturas = () => {
        var url_consulta = ''
        $scope.vendedores_saldos.ID != 'GLOBAL' ? url_consulta = $scope.url_base + 'GetFacturas.php?FROM=' + $scope.getFormato($scope.facturas.del) + '&TO=' + $scope.getFormato($scope.facturas.al) + '&VENDEDOR=' + $scope.vendedores_saldos.ID : url_consulta = $scope.url_base + 'GetFacturas.php?FROM=' + $scope.getFormato($scope.facturas.del) + '&TO=' + $scope.getFormato($scope.facturas.al);
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            success: function (respuesta) {
                $scope.invoices = []
                var index = 1
                respuesta.FACTURAS.forEach(invoice => {
                    invoice.NUMERO = index
                    invoice.FECHA = $scope.doDateToView(invoice.FECHA) 
                    $scope.invoices.push(invoice)
                    index++
                });
                $scope.$digest();
            },
            error: function () {

            }
        });
    }

    $scope.doDateToView = (date)=>{
        var day = date.substr(6,2)
        var mouth = date.substr(4,2)
        var year = date.substr(0,4)
        return day + '/' + mouth + '/' + year
    }

    $scope.show_saldos_vendedor = () => {
        var seller = $scope.vendedores_saldos_obj.ID != undefined ? '&SELLER=' + $scope.vendedores_saldos_obj.ID : '';
        var clientee_ = $scope.clientes_obj.NUMERO != undefined ? '&CLIENT=' + $scope.clientes_obj.NUMERO : '';
        var url = $scope.url_base + 'PrintReporteDeSaldos.php?CLIENT=' + clientee_ + '&UNTIL=' + $scope.getFormato($scope.saldos_por_vendedor.hasta) + '' + seller + '&ORDER_BY_DATE=&PDFName=ReporteDetallesDeSaldos';
        window.open(url);
    }

    $scope.logout = () => {
        $scope.correcto = false;
        $scope.saldos_por_vendedor = {};
        $scope.abonos_cliente = {};
        $scope.reporte_flujos = {};
        $scope.reporte_comisiones = {};
        $scope.reporte_canceladas = {};
        $scope.consultando = false;
        $scope.password = '';
        $scope.remitente = 'Server Eco Web [server.web.eco@gmail.com]'
        $scope.remitente_mail = 'server.web.eco@gmail.com'
        $scope.proveedores = [];
        $scope.vendedores_cobros = [];
        $scope.vendedores_saldos = [];
        $scope.vendedores_flujos = [];
        $scope.vendedores_comisiones = [];
        
        $scope.articulos = [];
        $scope.clientes = [];
        $scope.vendedores_cobros_obj = {};
        $scope.vendedores_saldos_obj = {};
        $scope.vendedores_flujos_obj = {};
        $scope.vendedores_canceladas = {};
        $scope.vendedores_comisiones_obj = {};
        $scope.articulos_obj = {};
        $scope.clientes_obj = {};
        window.location.reload(true);
    }

    $scope.show_flujos = () => {
        var seller = $scope.vendedores_flujos_obj.ID != undefined ? '&VENDEDOR=' + $scope.vendedores_flujos_obj.ID : '';
        var articulo = $scope.articulos_obj.CODIGO != undefined ? '&ARTICULO=' + $scope.articulos_obj.CODIGO : '';

        var url = $scope.url_base + 'PrintReporteDeFlujos.php?FROM=' + $scope.getFormato($scope.reporte_flujos.del) + '&TO=' + $scope.getFormato($scope.reporte_flujos.hasta) + '' + seller + '' + articulo + '&ORDER_BY_DATE=&PDFName=ReporteDetallesDeSaldos';
        window.open(url);

    }

    $scope.getFormato = (fecha) => {
        //console.log(fecha)
        var meses = new Map();
        // setting the values
        meses.set("Jan", '01');
        meses.set("Feb", '02');
        meses.set("Mar", '03');
        meses.set("Apr", '04');
        meses.set("May", '05');
        meses.set("Jun", '06');
        meses.set("Jul", '07');
        meses.set("Aug", '08');
        meses.set("Sep", '09');
        meses.set("Oct", '10');
        meses.set("Nov", '11');
        meses.set("Dec", '12');
        var aux = fecha.toString().split(' ');
        //console.log(aux[1])
        return aux[3] + meses.get(aux[1]) + aux[2];

    }

    $scope.getFormatoAsunto = (fecha) => {
        var meses = new Map();
        meses.set("Jun", '01');
        meses.set("Feb", '02');
        meses.set("Mar", '03');
        meses.set("Apr", '04');
        meses.set("May", '05');
        meses.set("Jun", '06');
        meses.set("Jul", '07');
        meses.set("Aug", '08');
        meses.set("Sep", '09');
        meses.set("Oct", '10');
        meses.set("Nov", '11');
        meses.set("Dec", '12');
        var aux = fecha.toString().split(' ');
        return aux[2] + '/' + meses.get(aux[1]) + '/' + aux[3];

    }

    $scope.prendeCriterio = () => {
        $scope.criterio = true;
    }

    $scope.apagaCriterio = () => {
        $scope.criterio = false;
    }

    $scope.show_comisiones = () => {
        if ($scope.vendedores_comisiones_obj.ID != undefined) {
            var seller = '&VENDEDOR=' + $scope.vendedores_comisiones_obj.ID;
            var url = $scope.url_base + 'ReporteComisionesArticulos.php?FROM=' + $scope.getFormato($scope.reporte_comisiones.del) + '&TO=' + $scope.getFormato($scope.reporte_comisiones.al) + '' + seller + '&ORDER_BY_DATE=&PDFName=ReporteComisiones';
            window.open(url);
        } else {
            alert('Debe seleccionar un vendedor')
        }

    }

    $scope.show_reporteCanceladas = () => {
        var seller = $scope.vendedores_flujos_obj.ID != undefined ? '&VENDEDOR=' + $scope.vendedores_flujos_obj.ID : '';
        var criterio = $scope.criterio ? '' : '&CRITERIO=';
        var url = $scope.url_base + 'PrintReporteCanceladas.php?FROM=' + $scope.getFormato($scope.reporte_canceladas.del) + '&TO=' + $scope.getFormato($scope.reporte_canceladas.al) + seller + criterio;
        window.open(url);
    }

    $scope.show_desglose_por_kilos = () => {
        var seller = $scope.vendedores_flujos_obj.ID != undefined ? '&VENDEDOR=' + $scope.vendedores_flujos_obj.ID : '';
        var articulo = $scope.articulos_obj.CODIGO != undefined ? '&ARTICULO=' + $scope.articulos_obj.CODIGO : '';
        var url = $scope.url_base + 'ReporteDesglosado.php?FROM=' + $scope.getFormato($scope.reporte_flujos.del) + '&TO=' + $scope.getFormato($scope.reporte_flujos.hasta) + '' + seller + '' + articulo;
        window.open(url);
    }

    $scope.show_abonos_clientes = () => {
        var cliente = $scope.clientes_obj.NUMERO != undefined ? '&CLIENT=' + $scope.clientes_obj.NUMERO : '';
        var url = $scope.url_base + 'ReporteAbonosPorClientes.php?TO=' + $scope.getFormato($scope.abonos_cliente.hasta) + '&FROM=' + $scope.getFormato($scope.abonos_cliente.del) + '' + cliente + '&ORDER_BY_DATE=&PDFName=ReporteAbonosCliente';
        window.open(url);
    }

    $scope.show_cobros_vendedor = () => {
        if ($scope.vendedores_cobros_obj.ID.length <= 0) {
            alert('Debe seleccionar un vendedor')
        } else {
            var url_seriesrv = $scope.url_base + 'DesgloceDeCobros.php?FROM=' + $scope.getFormato($scope.series_rv.inicio) + '&TO=' + $scope.getFormato($scope.series_rv.fin) + '&VENDEDOR=' + $scope.vendedores_cobros_obj.ID + '&DIVISA=B&SORT=SERIE&TIPO=AMBAS&PDFName=DesgloceDeCobros';
            window.open(url_seriesrv);
        }
    }

    $scope.validateEmail = (mail) => {
        var patt = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        return patt.test(mail);
    }

    //----------------------------------------------CODIGO RUTAS-----------------------------------------------
    $scope.verVentas = false
    $scope.verRutas = false
    $scope.notas_con_ruta = false;
    $scope.mensaje_notas = 'Sin notas';
    $scope.rutasAsignadas = [];
    $scope.invoices_BACKUP = []
    $scope.invoices_sin_ruta = [];
    $scope.rutas = ["Sin Ruta", "Ruta 1", "Ruta 2","Ruta 3","Ruta 4","Ruta 5","Ruta 6", "Ruta Rosarito", "Ruta Ensenada","Ruta San Quintin","Ruta Tecate","Ruta Mexicali","Ruta SLRC","Ruta Ventas Oficina"];

    $scope.showVentas = () => {
        $scope.verVentas = !$scope.verVentas
        if ($scope.hasClient) {
            $scope.hasClient = false
        }
        $scope.verRutas = false
        $scope.getFacturas()
    }

    $scope.showRutass = () => {
        $scope.verVentas = false;
        $scope.verRutas = !$scope.verRutas
        $scope.getFacturasSinRuta();
    }

    $scope.showNotasConRuta = () => {
        $scope.notas_con_ruta = !$scope.notas_con_ruta;
        $scope.rutasAsignadas = []
        if($scope.notas_con_ruta){
            $scope.getFacturasConRuta();
        }else{
            $scope.getFacturasSinRuta();
        }
    }

    $scope.sendMailRutas = () => {
        $('#formulario_mail_rutas').hide()
        $('#mensaje_construyendo').show()
        var int_ruta = 0;
        //console.log(JSON.stringify($scope.ruta_mail))
        switch ($scope.ruta_mail.RUTA) {
            case 'Ruta 1':
                int_ruta = 1;
                break;
            case 'Ruta 2':
                int_ruta = 2;
                break;
            case 'Ruta 3':
                int_ruta = 3;
                break;
            case 'Ruta 4':
                int_ruta = 4;
                break;
            case 'Ruta 5':
                int_ruta = 5;
                break;
            case 'Ruta 6':
                int_ruta = 6;
                break;
            case 'Ruta Rosarito':
                int_ruta = 7;
                break;
            case 'Ruta Ensenada':
                int_ruta = 8;
                break;
            case 'Ruta San Quintin':
                int_ruta = 9;
                break;
            case 'Ruta Tecate':
                int_ruta = 10;
                break;
            case 'Ruta Mexicali':
                int_ruta = 11;
                break;
            case 'Ruta SLRC':
                int_ruta = 12;
                break;
            case 'Ruta Ventas Oficina':
                int_ruta = 13;
                break;
            default:
                break;
        }
        $scope.ruta_mail.RUTA_ENTERA = int_ruta;
        $scope.ruta_mail.DEL = $('#fecha_del').val()
        $scope.ruta_mail.AL = $('#fecha_al').val()
        //console.log(JSON.stringify($scope.ruta_mail))
        $.ajax({
            url: $scope.url_base + 'MailRutas.php',
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data: $scope.ruta_mail,
            success: function (respuesta) {
                //console.log(JSON.stringify(respuesta))
                $('#formulario_mail_rutas').show()
                $('#mensaje_construyendo').hide()
                $scope.show_message('CORREO ENVIADO',2) 
                $scope.ruta_mail.RUTA = ''
                $scope.ruta_mail.RUTA_ENTERA = 0
                $scope.ruta_mail.mail = ''
                $('#mail_rutas').modal('hide')
            },
            error: function (error) {
                $scope.show_message(error,32) 
                $('#formulario_mail_rutas').show()
                $('#mensaje_construyendo').hide()
                console.log("Error registrar ruta " +JSON.stringify(error));
            }
        });
        
    }

    $scope.saveRutas = () => {
        $scope.rutasAsignadas.forEach(ruta => {
            var dataOfRuta = {
                'NO_RUTA' : ruta.noRuta,
                'VENDEDOR' : ruta.vendedor,
                'NOTA' : ruta.nota
            }
            //console.log(JSON.stringify(dataOfRuta))
            $.ajax({
                url: $scope.url_base + 'Rutas.php',
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                data: dataOfRuta,
                success: function (respuesta) {
                    console.log(respuesta)
                },
                error: function (error) {
                    console.log("Error registrar ruta " +JSON.stringify(error));
                }
            });
        } )
        $scope.show_message('Rutas guardadas con exito',2)
        $.ajax({
            url: $scope.url_base + 'MailRutas.php',
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data:  { },
            success: function (respuesta) {
                console.log(respuesta)
            },
            error: function () {
                console.log("Error registrar ruta " . JSON.stringify(path_request));
            }
        });
        $scope.rutasAsignadas = [];
        $scope.getFacturasSinRuta();
        //$scope.showRutass();
    } 

    $scope.updateRutas = () => {
        $scope.rutasAsignadas.forEach(ruta => {
            var dataOfRuta = {
                'NO_RUTA' : ruta.noRuta,
                'UPDATE' : 'X',
                'NOTA' : ruta.nota
            }
            //console.log(JSON.stringify(dataOfRuta))
            $.ajax({
                url: $scope.url_base + 'Rutas.php',
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                data: dataOfRuta,
                success: function (respuesta) {
                    console.log(respuesta)

                },
                error: function (error) {
                    console.log("Error registrar ruta " +JSON.stringify(error));
                }
            });
        } )
        $scope.show_message('Rutas actualizadas con exito',2)
        $.ajax({
            url: $scope.url_base + 'MailRutas.php',
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            data:  { },
            success: function (respuesta) {
                console.log(respuesta)
            },
            error: function () {
                console.log("Error registrar ruta " . JSON.stringify(path_request));
            }
        });
        $scope.rutasAsignadas = [];
        $scope.getFacturasConRuta();
        //$scope.showRutass();
    } 

    $scope.addRuta = (nota,ruta) => {
        $scope.rutasAsignadas = $scope.rutasAsignadas.filter(cobro => cobro.nota != nota.ID );
        var nota_original = $scope.invoices_BACKUP.filter(nota_ => nota_.nota == nota.ID)
        var path = 0;
        switch (ruta) {
            case "Ruta 1":
                path = 1;
                break;
            case "Ruta 2":
                path = 2;
                break;
            case "Ruta 3":
                path = 3;
                break;
            case "Ruta 4":
                path = 4;
                break;
            case "Ruta 5":
                path = 5;
                break;
            case "Ruta 6":
                path = 6;
                break;
            case 'Ruta Rosarito':
                path = 7;
                break;
            case 'Ruta Ensenada':
                path = 8;
                break;
            case 'Ruta San Quintin':
                path = 9;
                break;
            case 'Ruta Tecate':
                path = 10;
                break;
            case 'Ruta Mexicali':
                path = 11;
                break;
            case 'Ruta SLRC': //Ventas Oficina
                path = 12;
                break;
            case 'Ruta Ventas Oficina':
                path = 13;
                break;
            case "Sin Ruta":
                path = 99;
                break;
            default:path = 99;
                break;
        }
        if (/*path!=99*/nota_original[0].ruta!=ruta) {
            $scope.rutasAsignadas.push({ noRuta : path,vendedor : nota.VENDEDOR.ID,nota : nota.ID })
        }
        //console.table($scope.rutasAsignadas);
    } 

    $scope.saveRuta = (ruta,nota) => {
        if(ruta!="Sin Ruta"){
            var dataOfRuta = {
                'NO_RUTA' : 0,
                'VENDEDOR' : $scope.note.vendedor.ID,
                'NOTA' : nota
            }
            switch (ruta) {
                case 'Ruta 1':
                    dataOfRuta.NO_RUTA = 1;
                    break;
                case 'Ruta 2':
                    dataOfRuta.NO_RUTA = 2;
                    break;
                case 'Ruta 3':
                    dataOfRuta.NO_RUTA = 3;
                    break;
                case 'Ruta 4':
                    dataOfRuta.NO_RUTA = 4;
                    break;
                case 'Ruta 5':
                    dataOfRuta.NO_RUTA = 5;
                    break;
                case 'Ruta 6':
                    dataOfRuta.NO_RUTA = 6;
                    break;
                case 'Ruta Rosarito':
                    dataOfRuta.NO_RUTA = 7;
                    break;
                case 'Ruta Ensenada':
                    dataOfRuta.NO_RUTA = 8;
                    break;
                case 'Ruta San Quintin':
                    dataOfRuta.NO_RUTA = 9;
                    break;
                case 'Ruta Tecate':
                    dataOfRuta.NO_RUTA = 10;
                    break;
                case 'Ruta Mexicali':
                    dataOfRuta.NO_RUTA = 11;
                    break;
                case 'Ruta SLRC':
                    dataOfRuta.NO_RUTA = 12;
                    break;
                case 'Ruta Ventas Oficina':
                    dataOfRuta.NO_RUTA = 13;
                    break;
                default:
                    break;
            }
            console.log(JSON.stringify(dataOfRuta))
            var url_consulta = $scope.url_base + 'Rutas.php';
            $.ajax({
                url: url_consulta,
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                data: dataOfRuta,
                success: function (respuesta) {
                    console.log(respuesta)
                },
                error: function () {
                    console.log("Error revisar cliente ");
                }
            });
        }
        
    }

    $scope.getFacturasSinRuta = () => {
        var url_consulta = $scope.url_base + 'GetFacturasSinRuta.php?FROM=' + $scope.getFormato($scope.facturas.del) + '&TO=' + $scope.getFormato($scope.facturas.al);
        //console.log(url_consulta)
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            success: function (respuesta) {
                $scope.invoices_sin_ruta = []
                var index = 1
                respuesta.FACTURAS.forEach(invoice => {
                    invoice.NUMERO = index
                    invoice.FECHA = $scope.doDateToView(invoice.FECHA) 
                    invoice.RUTA = "Sin Ruta";
                    //console.log(JSON.stringify(invoice))
                    $scope.invoices_sin_ruta.push(invoice)
                    index++
                });
                $scope.$digest();
            },
            error: function () {

            }
        });
    }

    $scope.getFacturasConRuta = () => {
        var url_consulta = $scope.url_base + 'GetFacturasSinRuta.php?FROM=' + $scope.getFormato($scope.facturas.del) + '&TO=' + $scope.getFormato($scope.facturas.al) + '&CON_RUTA=X';
        //console.log(url_consulta)
        $.ajax({
            url: url_consulta,
            type: 'GET',
            dataType: "json",
            contentType: "text/html; charset=UTF-8",
            success: function (respuesta) {
                $scope.invoices_sin_ruta = []
                $scope.invoices_BACKUP = []
                var index = 1
                respuesta.FACTURAS.forEach(invoice => {
                    invoice.NUMERO = index
                    invoice.FECHA = $scope.doDateToView(invoice.FECHA) 
                    switch (invoice.RUTA) {
                        case 7:
                            invoice.RUTA ='Ruta Rosarito'
                            break;
                        case 8:
                            invoice.RUTA ='Ruta Ensenada'
                            break;
                        case 9:
                            invoice.RUTA ='Ruta San Quintin'
                            break;
                        case 10:
                            invoice.RUTA ='Ruta Tecate'
                            break;
                        case 11:
                            invoice.RUTA ='Ruta Mexicali'
                            break;
                        case 12:
                            invoice.RUTA ='Ruta SLRC'
                            break;
                        case 13:
                            invoice.RUTA ='Ruta Ventas Oficina'
                            break;
                        default:
                            invoice.RUTA = 'Ruta ' + invoice.RUTA;
                            break;
                    }
                    //invoice.RUTA = 'Ruta ' + invoice.RUTA;
                    //console.log(JSON.stringify(invoice))
                    if (invoice.RUTA!='Ruta 0') {
                        $scope.invoices_sin_ruta.push(invoice)
                        $scope.invoices_BACKUP.push({"nota":invoice.ID,"ruta":invoice.RUTA})
                        index++
                    }
                });
                $scope.$digest();
            },
            error: function () {

            }
        });
    }

    $scope.saveRutaDeCobro = (ruta,vendedor,nota) =>{
        var save = false;
        var dataOfRuta = {
            'NO_RUTA' : ruta,
            'VENDEDOR' : vendedor,
            'NOTA' : nota
        }
        switch (ruta) {
            case "Ruta 1":
                    dataOfRuta.NO_RUTA = 1
                    save = true;
                    break;
                case "Ruta 2":
                    dataOfRuta.NO_RUTA = 2
                    save = true;
                    break;
                case "Ruta 3":
                    dataOfRuta.NO_RUTA = 3
                    save = true;
                    break;
                case "Ruta 4":
                    dataOfRuta.NO_RUTA = 4
                    save = true;
                    break;
                case "Ruta 5":
                    dataOfRuta.NO_RUTA = 5
                    save = true;
                    break;
                case "Ruta 6":
                    dataOfRuta.NO_RUTA = 6
                    save = true;
                    break;
                default:
                    save = false;
                    break;
        }
        
        if (save) {
            console.log(JSON.stringify(dataOfRuta))
            $.ajax({
                url: $scope.url_base + 'RutaCobrosRecolectados.php',
                type: 'GET',
                dataType: "json",
                contentType: "text/html; charset=UTF-8",
                data: dataOfRuta,
                success: function (respuesta) {
                    console.log(respuesta)
                    $scope.nota.cobro_asignado = 'Cobro asignado con exito';
                },
                error: function (error) {
                    console.log("Error registrar ruta " +JSON.stringify(error));
                }
            });
        }
    }

    $scope.limitDates= () =>{
        var dtToday = new Date();
        
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        
        var maxDate = year + '-' + month + '-' + day;
        /*$('#fromvtas').attr('min', maxDate);
        $('#tovtas').attr('min', maxDate);*/
        $('#fromvtas').attr('max', maxDate);
        $('#tovtas').attr('max', maxDate);
    };
//----------------------------------------------CODIGO RUTAS-----------------------------------------------

});
