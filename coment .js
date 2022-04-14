entonces juan, imagina que en esa tabla (user_info) estan los valores:
mercadopagomx_accessToken
redsys_key
redsys_url
redsys_terminal
redsys_merchantcode
paycomet_jetid
paycomet_apikey
paycomet_terminal
paycomet_sepaid
paycomet_code

{"redsys":{"key":"rDqoqP8oxdRnlxNCr4k0\/5DwZBaGxGxI","url":"https:\/\/sis.redsys.es\/sis\/realizarPago","terminal":1,"merchant_code":"353617178","identifier":"9218b4b846d39f3da749facc374411230aeedbf0","expire":"2501"}

y que se puedan configurar desde la pestaña whitebrand como un nuevo apartado que ponga pasarelas

o mejor, que la pestaña marca blanca se llame "Personalización" y que la primera tabla sea marca blanca y la segunda que se llame pasarelas y ahí que selecciones la que quieras añadir info y te salgan los campos correspondientes

{"redsys":{"key":"rDqoqP8oxdRnlxNCr4k0\/5DwZBaGxGxI","url":"https:\/\/sis.redsys.es\/sis\/realizarPago","terminal":1,"merchant_code":"353617178","identifier":"9218b4b846d39f3da749facc374411230aeedbf0","expire":"2501"},"history":[11710,11353,11352,11582,11534,11351,11354,10045,11278,10043,10068,10388,10044,10042,9263],"paycomet":{"dnia_f":"docs\/paycomet\/202108111628714449-dni-cara-vig-001.jpg","greater5k":"n","type":"e","dnia_b":"docs\/paycomet\/202108111628714462-dni-enves-vig-001.jpg","constitution":"docs\/paycomet\/202108111628714499-02-escrituras-lasvig.pdf","cif":"docs\/paycomet\/202108111628714515-05-nif-definitivo-lasvig.pdf","check":true,"ownership":"docs\/paycomet\/202108231629741197-certificado-de-cuenta.pdf"}}


{"history":[11719,11718,11717,8714,10746,9694,10065,8713,8716,9496,8715,8827,8635,8616,2],"mercadopagomx":{"accessToken":"APP_USR-6659250140096624-060120-8b537b3c46637fe79de9435097b0995d-702577892"}}


resources/views/gateways
Ahi esta lo de las pasarelas
cada una tiene un config.blae.php

pero solo se muestra en el whitbrand de mexico
Entonces lo que hay que hacer es que le muestre esas configuraciones dependiendo d elos gateways seleccionados  

Sabes la parte de subir los documentos?

Eso es del Gateway paycomet

Para otros gateways hay otros requerimientos

Por ejemplo

Mercado pago usa unos tokens

Dependiendo de las gateways que estén seleccionadas deberían salir ciertos formularios

rDqoqP8oxdRnlxNCr4k0/5DwZBaGxGxI

https://sis.redsys.es/sis/realizarPago