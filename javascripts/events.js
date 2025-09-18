$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////


  $(".arte3").click(function() {
      $("#parte1").show();
      $('html, body').animate({
         scrollTop: $("#parte1").offset().top
     }, 500);
      $(window).on('resize scroll', function () {
    var tercoDaTela = $(window).scrollTop() + $(window).height() / 1.5;
    $(".highlight").each(function () {
      var elementTop = $(this).offset().top;
      if (elementTop < tercoDaTela) {
        $(this).addClass("highlight--highlighted")
      }
    })
  })
    });

  $(".arte8").click(function() {
      $("#parte2").show();
      $('html, body').animate({
         scrollTop: $("#parte2").offset().top
     }, 500);
      $(window).on('resize scroll', function () {
    var tercoDaTela = $(window).scrollTop() + $(window).height() / 1.5;
    $(".highlight2").each(function () {
      var elementTop = $(this).offset().top;
      if (elementTop < tercoDaTela) {
        $(this).addClass("highlight--highlighted")
      }
    })
  })
    });
  $(".arte13").click(function() {
      $("#parte3").show();
      $('html, body').animate({
         scrollTop: $("#parte3").offset().top
     }, 500);
    });
/*********************************************************************************/
$('.toggle').click(function(e) {
    e.preventDefault();
  
    let $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

/****************************************************************************************/
  
   $(".botao_educacao_um").click(function() {

    if($('.botao_entretenimento_um').hasClass("clicked")){
      $('.desarma_entretenimento2').removeClass("clicked");
      $('.destaque0').show();
      $('.destaque1').hide();
    }
    if($('.botao_esporte_um').hasClass("clicked")){
      $('.desarma_esporte2').removeClass("clicked");
      $('.destaque0').show();
      $('.destaque1').hide();
    }
    if($('.botao_educacao_dois').hasClass("clicked")){
      $('.destaque2').hide();
      $('.destaque00').show();
    }
    if($('.botao_educacao_tres').hasClass("clicked")){
      $('.destaque3').hide();
      $('.destaque000').show();
    }

    $('.desarma_educacao2').removeClass("clicked");
    $('.educacao').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_entretenimento_um').hasClass("clicked")){
      $('.botao_entretenimento_um').removeClass("clicked");
    }
    if($('.botao_esporte_um').hasClass("clicked")){
      $('.botao_esporte_um').removeClass("clicked");
    }
    $('.educacao2').removeClass("clicked");
   });

   /*************************************/

   $(".botao_educacao_dois").click(function() {

    if($('.botao_entretenimento_dois').hasClass("clicked")){
      $('.desarma_entretenimento2').removeClass("clicked");
      $('.destaque00').show();
      $('.destaque2').hide();
    }
    if($('.botao_esporte_dois').hasClass("clicked")){
      $('.desarma_esporte2').removeClass("clicked");
      $('.destaque00').show();
      $('.destaque2').hide();
    }
    if($('.botao_educacao_um').hasClass("clicked")){
      $('.destaque1').hide();
      $('.destaque0').show();
    }
    if($('.botao_educacao_tres').hasClass("clicked")){
      $('.destaque3').hide();
      $('.destaque000').show();
    }


    $('.desarma_educacao2').removeClass("clicked");
    $('.educacao').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_entretenimento_dois').hasClass("clicked")){
      $('.botao_entretenimento_dois').removeClass("clicked");
    }
    if($('.botao_esporte_dois').hasClass("clicked")){
      $('.botao_esporte_dois').removeClass("clicked");
    }
     $('.educacao2').removeClass("clicked");
   });

   /**********************************/

   $(".botao_educacao_tres").click(function() {

    if($('.botao_entretenimento_tres').hasClass("clicked")){
      $('.desarma_entretenimento2').removeClass("clicked");
      $('.destaque000').show();
      $('.destaque3').hide();
    }
    if($('.botao_esporte_tres').hasClass("clicked")){
      $('.desarma_esporte2').removeClass("clicked");
      $('.destaque000').show();
      $('.destaque3').hide();
    }
    if($('.botao_educacao_dois').hasClass("clicked")){
      $('.destaque2').hide();
      $('.destaque00').show();
    }
    if($('.botao_educacao_um').hasClass("clicked")){
      $('.destaque1').hide();
      $('.destaque0').show();
    }

    $('.desarma_educacao2').removeClass("clicked");
    $('.educacao').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_entretenimento_tres').hasClass("clicked")){
      $('.botao_entretenimento_tres').removeClass("clicked");
    }
    if($('.botao_esporte_tres').hasClass("clicked")){
      $('.botao_esporte_tres').removeClass("clicked");
    }
    $('.educacao2').removeClass("clicked");
    });

/***********************************************/

   $(".botao_entretenimento_um").click(function() {

    if($('.botao_educacao_um').hasClass("clicked")){
      $('.desarma_educacao2').removeClass("clicked");
      $('.destaque0').show();
      $('.destaque1').hide();
    }
    if($('.botao_esporte_um').hasClass("clicked")){
      $('.desarma_esporte2').removeClass("clicked");
      $('.destaque0').show();
      $('.destaque1').hide();
    }
    if($('.botao_entretenimento_dois').hasClass("clicked")){
      $('.destaque2').hide();
      $('.destaque00').show();
    }
    if($('.botao_entretenimento_tres').hasClass("clicked")){
      $('.destaque3').hide();
      $('.destaque000').show();
    }

    $('.desarma_entretenimento2').removeClass("clicked");
    $('.entretenimento').removeClass("clicked");
     $(this).addClass("clicked");
    if($('.botao_educacao_um').hasClass("clicked")){
      $('.botao_educacao_um').removeClass("clicked");
    }
    if($('.botao_esporte_um').hasClass("clicked")){
      $('.botao_esporte_um').removeClass("clicked");
    }

   });

/**************************************************************/

   $(".botao_entretenimento_dois").click(function() {

    if($('.botao_entretenimento_um').hasClass("clicked")){
      $('.destaque0').show();
      $('.destaque1').hide();
    }
    if($('.botao_entretenimento_tres').hasClass("clicked")){
      $('.destaque000').show();
      $('.destaque3').hide();
    }
    if($('.botao_educacao_dois').hasClass("clicked")){
      $('.desarma_educacao2').removeClass("clicked");
      $('.destaque2').hide();
      $('.destaque00').show();
    }
    if($('.botao_esporte_dois').hasClass("clicked")){
      $('.desarma_esporte2').removeClass("clicked");
      $('.destaque2').hide();
      $('.destaque00').show();
    }


    $('.desarma_entretenimento2').removeClass("clicked");
    $('.entretenimento').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_dois').hasClass("clicked")){
      $('.botao_educacao_dois').removeClass("clicked");
    }
    if($('.botao_esporte_dois').hasClass("clicked")){
      $('.botao_esporte_dois').removeClass("clicked");
    }
   });

   /**********************************************/

   $(".botao_entretenimento_tres").click(function() {

    if($('.botao_entretenimento_dois').hasClass("clicked")){
      $('.destaque00').show();
      $('.destaque2').hide();
    }
    if($('.botao_entretenimento_um').hasClass("clicked")){
      $('.destaque0').show();
      $('.destaque1').hide();
    }
    if($('.botao_educacao_tres').hasClass("clicked")){
      $('.desarma_educacao2').removeClass("clicked");
      $('.destaque3').hide();
      $('.destaque000').show();
    }
    if($('.botao_esporte_tres').hasClass("clicked")){
      $('.desarma_esporte2').removeClass("clicked");
      $('.destaque3').hide();
      $('.destaque000').show();
    }

    $('.desarma_entretenimento2').removeClass("clicked");
    $('.entretenimento').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_tres').hasClass("clicked")){
      $('.botao_educacao_tres').removeClass("clicked");
    }
    if($('.botao_esporte_tres').hasClass("clicked")){
      $('.botao_esporte_tres').removeClass("clicked");
    }
    });

/***********************************************/

   $(".botao_esporte_um").click(function() {

    if($('.botao_entretenimento_um').hasClass("clicked")){
      $('.desarma_entretenimento2').removeClass("clicked");
      $('.destaque0').show();
      $('.destaque1').hide();
    }
    if($('.botao_educacao_um').hasClass("clicked")){
      $('.desarma_educacao2').removeClass("clicked");
      $('.destaque0').show();
      $('.destaque1').hide();
    }
    if($('.botao_esporte_dois').hasClass("clicked")){
      $('.destaque2').hide();
      $('.destaque00').show();
    }
    if($('.botao_esporte_tres').hasClass("clicked")){
      $('.destaque3').hide();
      $('.destaque000').show();
    }

    $('.desarma_esporte2').removeClass("clicked");
    $('.esporte').removeClass("clicked");
     $(this).addClass("clicked");
    if($('.botao_entretenimento_um').hasClass("clicked")){
      $('.botao_entretenimento_um').removeClass("clicked");
    }
    if($('.botao_educacao_um').hasClass("clicked")){
      $('.botao_educacao_um').removeClass("clicked");
    }
   });

   /*********************************************************/

   $(".botao_esporte_dois").click(function() {

    if($('.botao_esporte_um').hasClass("clicked")){
      $('.destaque0').show();
      $('.destaque1').hide();
    }
    if($('.botao_esporte_tres').hasClass("clicked")){
      $('.destaque000').show();
      $('.destaque3').hide();
    }
    if($('.botao_entretenimento_dois').hasClass("clicked")){
      $('.desarma_entretenimento2').removeClass("clicked");
      $('.destaque2').hide();
      $('.destaque00').show();
    }
    if($('.botao_educacao_dois').hasClass("clicked")){
      $('.desarma_educacao2').removeClass("clicked");
      $('.destaque2').hide();
      $('.destaque00').show();
    }

    $('.desarma_esporte2').removeClass("clicked");
    $('.esporte').removeClass("clicked");
     $(this).addClass("clicked");
    if($('.botao_entretenimento_dois').hasClass("clicked")){
      $('.botao_entretenimento_dois').removeClass("clicked");
    }
    if($('.botao_educacao_dois').hasClass("clicked")){
      $('.botao_educacao_dois').removeClass("clicked");
    }
   });

   /*****************************************/

   $(".botao_esporte_tres").click(function() {

    if($('.botao_educacao_tres').hasClass("clicked")){
      $('.desarma_educacao2').removeClass("clicked");
      $('.destaque000').show();
      $('.destaque3').hide();
    }
    if($('.botao_entretenimento_tres').hasClass("clicked")){
      $('.desarma_entretenimento2').removeClass("clicked");
      $('.destaque000').show();
      $('.destaque3').hide();
    }
    if($('.botao_esporte_um').hasClass("clicked")){
      $('.destaque1').hide();
      $('.destaque0').show();
    }
    if($('.botao_esporte_dois').hasClass("clicked")){
      $('.destaque2').hide();
      $('.destaque00').show();
    }


    $('.desarma_esporte2').removeClass("clicked");
    $('.esporte').removeClass("clicked");
     $(this).addClass("clicked");
    if($('.botao_entretenimento_tres').hasClass("clicked")){
      $('.botao_entretenimento_tres').removeClass("clicked");
    }
    if($('.botao_educacao_tres').hasClass("clicked")){
      $('.botao_educacao_tres').removeClass("clicked");
    }
    });

//**********************************//
$(".modelo0").click(function() {
    $('.modelo1').removeClass("clicked");
    $('.modelo2').removeClass("clicked");
    $('.modelo3').removeClass("clicked");
    $('.template1').hide();
    $('.template2').hide();
    $('.template3').hide();
    $('.template0').show();

    $(this).addClass("clicked");
})

$(".modelo1").click(function() {
    $('.modelo0').removeClass("clicked");
    $('.modelo2').removeClass("clicked");
    $('.modelo3').removeClass("clicked");
    $('.template1').show();
    $('.template2').hide();
    $('.template3').hide();
    $('.template0').hide();

    $(this).addClass("clicked");
})

$(".modelo2").click(function() {
    $('.modelo0').removeClass("clicked");
    $('.modelo1').removeClass("clicked");
    $('.modelo3').removeClass("clicked");
    $('.template2').show();
    $('.template1').hide();
    $('.template3').hide();
    $('.template0').hide();
    $(this).addClass("clicked");
})

$(".modelo3").click(function() {
    $('.modelo0').removeClass("clicked");
    $('.modelo2').removeClass("clicked");
    $('.modelo1').removeClass("clicked");
    $('.template3').show();
    $('.template2').hide();
    $('.template1').hide();
    $('.template0').hide();
    $(this).addClass("clicked");
})

/*****************************************************/
var controle = 0;
var controle2 = 0;
 $('.toggle1').click(function() {
  $('html, body').animate({
         scrollTop: $(".partida").offset().top
     }, 500);
    $('.toggle2').addClass('rotated');
    $('.toggle4').removeClass('rotated');
    controle++;
    if (controle==2) {
      $('.toggle2').removeClass('rotated');
      controle=0;
    }
    controle2=0;
});
  $('.toggle3').click(function() {
    $('html, body').animate({
         scrollTop: $(".partida").offset().top
     }, 500);
    $('.toggle4').addClass('rotated');
    $('.toggle2').removeClass('rotated');
    controle2++;
    if (controle2==2) {
      $('.toggle4').removeClass('rotated');
      controle2=0;
    }
    controle=0;
});


/***********************************************/

   $(".botao_educacao_um").click(function() {
    $('.imagem_educacao_um').show();
    $('.imagem_entretenimento_um').hide();
    $('.imagem_esporte_um').hide();
   });

   $(".botao_entretenimento_um").click(function() {
    $('.imagem_educacao_um').hide();
    $('.imagem_entretenimento_um').show();
    $('.imagem_esporte_um').hide();
   });



   $(".botao_esporte_um").click(function() {
    $('.imagem_educacao_um').hide();
    $('.imagem_entretenimento_um').hide();
    $('.imagem_esporte_um').show();
   });


/***********************************************/

   $(".botao_educacao_dois").click(function() {
    $('.imagem_educacao_dois').show();
    $('.imagem_entretenimento_dois').hide();
    $('.imagem_esporte_dois').hide();
   });



   $(".botao_entretenimento_dois").click(function() {
    $('.imagem_educacao_dois').hide();
    $('.imagem_entretenimento_dois').show();
    $('.imagem_esporte_dois').hide();
   });



   $(".botao_esporte_dois").click(function() {
    $('.imagem_educacao_dois').hide();
    $('.imagem_entretenimento_dois').hide();
    $('.imagem_esporte_dois').show();
   });



/***********************************************/


   $(".botao_educacao_tres").click(function() {
    $('.imagem_educacao_tres').show();
    $('.imagem_entretenimento_tres').hide();
    $('.imagem_esporte_tres').hide();
   });


   $(".botao_entretenimento_tres").click(function() {
    $('.imagem_educacao_tres').hide();
    $('.imagem_entretenimento_tres').show();
    $('.imagem_esporte_tres').hide();
   });


   $(".botao_esporte_tres").click(function() {
    $('.imagem_educacao_tres').hide();
    $('.imagem_entretenimento_tres').hide();
    $('.imagem_esporte_tres').show();
   });



/**********aqui 28/07*************************************/

$(".botao_educacao_um").click(function() {
    $('.destaque0').hide();
    $('.destaque1').hide();
    $('.educacao_a').show();
    $('.educacao_a2').show();
    $('.entretenimento_a2').hide();
    $('.esporte_a2').hide();
    $('.entretenimento_a').hide();
    $('.esporte_a').hide();
   });

$(".botao_educacao_dois").click(function() {
    $('.destaque00').hide();
    $('.destaque2').hide();
    $('.educacao_b').show();
    $('.entretenimento_b').hide();
    $('.esporte_b').hide();
    $('.educacao_b2').show();
    $('.entretenimento_b2').hide();
    $('.esporte_b2').hide();
   });

$(".botao_educacao_tres").click(function() {
  $('.destaque000').hide();
    $('.destaque3').hide();
    $('.educacao_c').show();
    $('.entretenimento_c').hide();
    $('.esporte_c').hide();
    $('.educacao_c2').show();
    $('.entretenimento_c2').hide();
    $('.esporte_c2').hide();
   });

/***********************************************/

$(".botao_entretenimento_um").click(function() {
    $('.destaque0').hide();
    $('.destaque1').hide();
    $('.educacao_a').hide();
    $('.entretenimento_a').show();
    $('.esporte_a').hide();
    $('.educacao_a2').hide();
    $('.entretenimento_a2').show();
    $('.esporte_a2').hide();
   });

$(".botao_entretenimento_dois").click(function() {
    $('.destaque00').hide();
    $('.destaque2').hide();
    $('.educacao_b').hide();
    $('.entretenimento_b').show();
    $('.esporte_b').hide();
    $('.educacao_b2').hide();
    $('.entretenimento_b2').show();
    $('.esporte_b2').hide();
   });

$(".botao_entretenimento_tres").click(function() {
    $('.destaque000').hide();
    $('.destaque2').hide();
    $('.educacao_c').hide();
    $('.entretenimento_c').show();
    $('.esporte_c').hide();
    $('.educacao_c2').hide();
    $('.entretenimento_c2').show();
    $('.esporte_c2').hide();
   });


/***********************************************/

$(".botao_esporte_um").click(function() {
    $('.destaque0').hide();
    $('.destaque1').hide();
    $('.educacao_a').hide();
    $('.entretenimento_a').hide();
    $('.esporte_a').show();
    $('.educacao_a2').hide();
    $('.entretenimento_a2').hide();
    $('.esporte_a2').show();
   });

$(".botao_esporte_dois").click(function() {
    $('.destaque00').hide();
    $('.destaque2').hide();
    $('.educacao_b').hide();
    $('.entretenimento_b').hide();
    $('.esporte_b').show();
    $('.educacao_b2').hide();
    $('.entretenimento_b2').hide();
    $('.esporte_b2').show();
   });

$(".botao_esporte_tres").click(function() {
    $('.destaque000').hide();
    $('.destaque3').hide();
    $('.educacao_c').hide();
    $('.entretenimento_c').hide();
    $('.esporte_c').show();
    $('.educacao_c2').hide();
    $('.entretenimento_c2').hide();
    $('.esporte_c2').show();
   });
/***************************************************/


$(".botao_escolha").click(function() {
  verifica();
});
function verifica(){
  var itemclass = $('.one.clicked').length;
console.log(itemclass);
if (itemclass==0) {
  $('.fundo1').show();
}
if (itemclass==1) {
  $('.fundo1').hide();
}

  var itemclass2 = $('.two.clicked').length;
console.log(itemclass2);
if (itemclass2==0) {
  $('.fundo2').show();
}
if (itemclass2==1) {
  $('.fundo2').hide();
}

  var itemclass3 = $('.three.clicked').length;
console.log(itemclass3);
if (itemclass3==0) {
  $('.fundo3').show();
}
if (itemclass3==1) {
  $('.fundo3').hide();
}
}
/*****************************************************/



/******************fazer aqui 27/07/**somente 1********************/
  
   $(".2botao_educacao_um").click(function() {
    $('.desarma_educacao2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_um').hasClass("clicked")){
      $('.destaque0').hide();
      $('.destaque1').hide();
    $('.1educacao_indiferente').show();
    $('.1educacao_negativo').hide();
    $('.1educacao_positivo').hide();
    $('.1educacao_indiferente2').show();
    $('.1educacao_negativo2').hide();
    $('.1educacao_positivo2').hide();
    }
   });

   $(".2botao_educacao_dois").click(function() {
    $('.desarma_educacao2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_um').hasClass("clicked")){
    $('.destaque0').hide();
    $('.destaque1').hide();
    $('.1educacao_indiferente').hide();
    $('.1educacao_negativo').show();
    $('.1educacao_positivo').hide();
    $('.1educacao_indiferente2').hide();
    $('.1educacao_negativo2').show();
    $('.1educacao_positivo2').hide();
  }
   });

   $(".2botao_educacao_tres").click(function() {
    $('.desarma_educacao2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_um').hasClass("clicked")){
    $('.destaque0').hide();
    $('.destaque1').hide();
    $('.1educacao_indiferente').hide();
    $('.1educacao_negativo').hide();
    $('.1educacao_positivo').show();
    $('.1educacao_indiferente2').hide();
    $('.1educacao_negativo2').hide();
    $('.1educacao_positivo2').show();
  }
    });

/***********************************************/

   $(".2botao_entretenimento_um").click(function() {
    $('.desarma_entretenimento2').removeClass("clicked");
     $(this).addClass("clicked");
     if($('.botao_entretenimento_um').hasClass("clicked")){
      $('.destaque0').hide();
      $('.destaque1').hide();
    $('.1entretenimento_indiferente').show();
    $('.1entretenimento_negativo').hide();
    $('.1entretenimento_positivo').hide();
    $('.1entretenimento_indiferente2').show();
    $('.1entretenimento_negativo2').hide();
    $('.1entretenimento_positivo2').hide();
    }
   });

   $(".2botao_entretenimento_dois").click(function() {
    $('.desarma_entretenimento2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_entretenimento_um').hasClass("clicked")){
      $('.destaque0').hide();
      $('.destaque1').hide();
    $('.1entretenimento_indiferente').hide();
    $('.1entretenimento_negativo').show();
    $('.1entretenimento_positivo').hide();
    $('.1entretenimento_indiferente2').hide();
    $('.1entretenimento_negativo2').show();
    $('.1entretenimento_positivo2').hide();
    }
   });

   $(".2botao_entretenimento_tres").click(function() {
    $('.desarma_entretenimento2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_entretenimento_um').hasClass("clicked")){
      $('.destaque0').hide();
      $('.destaque1').hide();
    $('.1entretenimento_indiferente').hide();
    $('.1entretenimento_negativo').hide();
    $('.1entretenimento_positivo').show();
    $('.1entretenimento_indiferente2').hide();
    $('.1entretenimento_negativo2').hide();
    $('.1entretenimento_positivo2').show();
    }
    });

/***********************************************/

   $(".2botao_esporte_um").click(function() {
    $('.desarma_esporte2').removeClass("clicked");
     $(this).addClass("clicked");
     if($('.botao_esporte_um').hasClass("clicked")){
      $('.destaque0').hide();
      $('.destaque1').hide();
    $('.1esporte_indiferente').show();
    $('.1esporte_negativo').hide();
    $('.1esporte_positivo').hide();
    $('.1esporte_indiferente2').show();
    $('.1esporte_negativo2').hide();
    $('.1esporte_positivo2').hide();
    }
   });

   $(".2botao_esporte_dois").click(function() {
    $('.desarma_esporte2').removeClass("clicked");
     $(this).addClass("clicked");
      if($('.botao_esporte_um').hasClass("clicked")){
      $('.destaque0').hide();
      $('.destaque1').hide();
    $('.1esporte_indiferente').hide();
    $('.1esporte_negativo').show();
    $('.1esporte_positivo').hide();
    $('.1esporte_indiferente2').hide();
    $('.1esporte_negativo2').show();
    $('.1esporte_positivo2').hide();
    }
   });

   $(".2botao_esporte_tres").click(function() {
    $('.desarma_esporte2').removeClass("clicked");
     $(this).addClass("clicked");
      if($('.botao_esporte_um').hasClass("clicked")){
      $('.destaque0').hide();
      $('.destaque1').hide();
    $('.1esporte_indiferente').hide();
    $('.1esporte_negativo').hide();
    $('.1esporte_positivo').show();
    $('.1esporte_indiferente2').hide();
    $('.1esporte_negativo2').hide();
    $('.1esporte_positivo2').show();
    }
    });
   
/*********************************************/

/******************fazer aqui 27/07/**somente 1********************/
  
   $(".2botao_educacao_um").click(function() {
    $('.desarma_educacao2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_dois').hasClass("clicked")){
      $('.destaque00').hide();
      $('.destaque2').hide();
    $('.2educacao_indiferente').show();
    $('.2educacao_negativo').hide();
    $('.2educacao_positivo').hide();
    $('.2educacao_indiferente2').show();
    $('.2educacao_negativo2').hide();
    $('.2educacao_positivo2').hide();
    }
   });

   $(".2botao_educacao_dois").click(function() {
    $('.desarma_educacao2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_dois').hasClass("clicked")){
    $('.destaque00').hide();
    $('.destaque2').hide();
    $('.2educacao_indiferente').hide();
    $('.2educacao_negativo').show();
    $('.2educacao_positivo').hide();
    $('.2educacao_indiferente2').hide();
    $('.2educacao_negativo2').show();
    $('.2educacao_positivo2').hide();
  }
   });

   $(".2botao_educacao_tres").click(function() {
    $('.desarma_educacao2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_dois').hasClass("clicked")){
    $('.destaque00').hide();
    $('.destaque2').hide();
    $('.2educacao_indiferente').hide();
    $('.2educacao_negativo').hide();
    $('.2educacao_positivo').show();
    $('.2educacao_indiferente2').hide();
    $('.2educacao_negativo2').hide();
    $('.2educacao_positivo2').show();
  }
    });

/***********************************************/

   $(".2botao_entretenimento_um").click(function() {
    $('.desarma_entretenimento2').removeClass("clicked");
     $(this).addClass("clicked");
     if($('.botao_entretenimento_dois').hasClass("clicked")){
      $('.destaque00').hide();
      $('.destaque2').hide();
    $('.2entretenimento_indiferente').show();
    $('.2entretenimento_negativo').hide();
    $('.2entretenimento_positivo').hide();
    $('.2entretenimento_indiferente2').show();
    $('.2entretenimento_negativo2').hide();
    $('.2entretenimento_positivo2').hide();
    }
   });

   $(".2botao_entretenimento_dois").click(function() {
    $('.desarma_entretenimento2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_entretenimento_dois').hasClass("clicked")){
      $('.destaque00').hide();
      $('.destaque2').hide();
    $('.2entretenimento_indiferente').hide();
    $('.2entretenimento_negativo').show();
    $('.2entretenimento_positivo').hide();
    $('.2entretenimento_indiferente2').hide();
    $('.2entretenimento_negativo2').show();
    $('.2entretenimento_positivo2').hide();
    }
   });

   $(".2botao_entretenimento_tres").click(function() {
    $('.desarma_entretenimento2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_entretenimento_dois').hasClass("clicked")){
      $('.destaque00').hide();
      $('.destaque2').hide();
    $('.2entretenimento_indiferente').hide();
    $('.2entretenimento_negativo').hide();
    $('.2entretenimento_positivo').show();
    $('.2entretenimento_indiferente2').hide();
    $('.2entretenimento_negativo2').hide();
    $('.2entretenimento_positivo2').show();
    }
    });

/***********************************************/

   $(".2botao_esporte_um").click(function() {
    $('.desarma_esporte2').removeClass("clicked");
     $(this).addClass("clicked");
     if($('.botao_esporte_dois').hasClass("clicked")){
      $('.destaque00').hide();
      $('.destaque2').hide();
    $('.2esporte_indiferente').show();
    $('.2esporte_negativo').hide();
    $('.2esporte_positivo').hide();
    $('.2esporte_indiferente2').show();
    $('.2esporte_negativo2').hide();
    $('.2esporte_positivo2').hide();
    }
   });

   $(".2botao_esporte_dois").click(function() {
    $('.desarma_esporte2').removeClass("clicked");
     $(this).addClass("clicked");
      if($('.botao_esporte_dois').hasClass("clicked")){
      $('.destaque00').hide();
      $('.destaque2').hide();
    $('.2esporte_indiferente').hide();
    $('.2esporte_negativo').show();
    $('.2esporte_positivo').hide();
    $('.2esporte_indiferente2').hide();
    $('.2esporte_negativo2').show();
    $('.2esporte_positivo2').hide();
    }
   });

   $(".2botao_esporte_tres").click(function() {
    $('.desarma_esporte2').removeClass("clicked");
     $(this).addClass("clicked");
      if($('.botao_esporte_dois').hasClass("clicked")){
      $('.destaque00').hide();
      $('.destaque2').hide();
    $('.2esporte_indiferente').hide();
    $('.2esporte_negativo').hide();
    $('.2esporte_positivo').show();
    $('.2esporte_indiferente2').hide();
    $('.2esporte_negativo2').hide();
    $('.2esporte_positivo2').show();
    }
    });
   
/*********************************************/

/******************fazer aqui 27/07/**somente 1********************/
  
   $(".2botao_educacao_um").click(function() {
    $('.desarma_educacao2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_tres').hasClass("clicked")){
      $('.destaque000').hide();
      $('.destaque3').hide();
    $('.3educacao_indiferente').show();
    $('.3educacao_negativo').hide();
    $('.3educacao_positivo').hide();
    $('.3educacao_indiferente2').show();
    $('.3educacao_negativo2').hide();
    $('.3educacao_positivo2').hide();
    }
   });

   $(".2botao_educacao_dois").click(function() {
    $('.desarma_educacao2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_tres').hasClass("clicked")){
    $('.destaque000').hide();
    $('.destaque3').hide();
    $('.3educacao_indiferente').hide();
    $('.3educacao_negativo').show();
    $('.3educacao_positivo').hide();
    $('.3educacao_indiferente2').hide();
    $('.3educacao_negativo2').show();
    $('.3educacao_positivo2').hide();
  }
   });

   $(".2botao_educacao_tres").click(function() {
    $('.desarma_educacao2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_educacao_tres').hasClass("clicked")){
    $('.destaque000').hide();
    $('.destaque3').hide();
    $('.3educacao_indiferente').hide();
    $('.3educacao_negativo').hide();
    $('.3educacao_positivo').show();
    $('.3educacao_indiferente2').hide();
    $('.3educacao_negativo2').hide();
    $('.3educacao_positivo2').show();
  }
    });

/***********************************************/

   $(".2botao_entretenimento_um").click(function() {
    $('.desarma_entretenimento2').removeClass("clicked");
     $(this).addClass("clicked");
     if($('.botao_entretenimento_tres').hasClass("clicked")){
      $('.destaque000').hide();
      $('.destaque3').hide();
    $('.3entretenimento_indiferente').show();
    $('.3entretenimento_negativo').hide();
    $('.3entretenimento_positivo').hide();
    $('.3entretenimento_indiferente2').show();
    $('.3entretenimento_negativo2').hide();
    $('.3entretenimento_positivo2').hide();
    }
   });

   $(".2botao_entretenimento_dois").click(function() {
    $('.desarma_entretenimento2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_entretenimento_tres').hasClass("clicked")){
      $('.destaque000').hide();
      $('.destaque3').hide();
    $('.3entretenimento_indiferente').hide();
    $('.3entretenimento_negativo').show();
    $('.3entretenimento_positivo').hide();
    $('.3entretenimento_indiferente2').hide();
    $('.3entretenimento_negativo2').show();
    $('.3entretenimento_positivo2').hide();
    }
   });

   $(".2botao_entretenimento_tres").click(function() {
    $('.desarma_entretenimento2').removeClass("clicked");
    $(this).addClass("clicked");
    if($('.botao_entretenimento_tres').hasClass("clicked")){
      $('.destaque000').hide();
      $('.destaque3').hide();
    $('.3entretenimento_indiferente').hide();
    $('.3entretenimento_negativo').hide();
    $('.3entretenimento_positivo').show();
    $('.3entretenimento_indiferente2').hide();
    $('.3entretenimento_negativo2').hide();
    $('.3entretenimento_positivo2').show();
    }
    });

/***********************************************/

   $(".2botao_esporte_um").click(function() {
    $('.desarma_esporte2').removeClass("clicked");
     $(this).addClass("clicked");
     if($('.botao_esporte_tres').hasClass("clicked")){
      $('.destaque000').hide();
      $('.destaque3').hide();
    $('.3esporte_indiferente').show();
    $('.3esporte_negativo').hide();
    $('.3esporte_positivo').hide();
    $('.3esporte_indiferente2').show();
    $('.3esporte_negativo2').hide();
    $('.3esporte_positivo2').hide();
    }
   });

   $(".2botao_esporte_dois").click(function() {
    $('.desarma_esporte2').removeClass("clicked");
     $(this).addClass("clicked");
      if($('.botao_esporte_tres').hasClass("clicked")){
      $('.destaque000').hide();
      $('.destaque3').hide();
    $('.3esporte_indiferente').hide();
    $('.3esporte_negativo').show();
    $('.3esporte_positivo').hide();
    $('.3esporte_indiferente2').hide();
    $('.3esporte_negativo2').show();
    $('.3esporte_positivo2').hide();
    }
   });

   $(".2botao_esporte_tres").click(function() {
    $('.desarma_esporte2').removeClass("clicked");
     $(this).addClass("clicked");
      if($('.botao_esporte_tres').hasClass("clicked")){
      $('.destaque000').hide();
      $('.destaque3').hide();
    $('.3esporte_indiferente').hide();
    $('.3esporte_negativo').hide();
    $('.3esporte_positivo').show();
    $('.3esporte_indiferente2').hide();
    $('.3esporte_negativo2').hide();
    $('.3esporte_positivo2').show();
    }
    });
   
/*********************************************/


function myFunction3(m) {
  if (m.matches) {
    $(".versao_mob").show();
    $(".versao_desk").hide();
  } else {
    $(".versao_mob").hide();
    $(".versao_desk").show();
  }
}

var m = window.matchMedia("(max-width: 480px)")
myFunction3(m)
m.addListener(myFunction3)


})
