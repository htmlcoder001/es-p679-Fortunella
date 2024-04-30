setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", (function () {
  $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
}));
const OFFER = "«Fortunella»";
let now = new Date, mm = now.getMonth() + 1, day = now.getDate(), year = now.getFullYear(),
  date = day + "." + mm + "." + year;
const massange = [
  {m: "Hola, mi nombre es Marta Velazquez. Soy médica nutricionista, dietista y endocrinóloga. Bienvenido a mi página web. "},
  {m: "Aquí ofrezco diagnósticos online gratuitos y consejos personalizados que han ayudado a miles de mis pacientes a deshacerse del exceso de peso."},
  {m: "Para obtener mis consejos para adelgazar, responde a algunas preguntas."},
  {m: '<p class="quest">¿Cuántos kilos quieres perder?</p>'},
  {m: '<p class="quest">¿Qué partes de tu cuerpo necesitas corregir?</p>'},
  {m: '<p class="quest">¿Cuál es tu estilo de vida?</p>'},
  {m: '<p class="quest">¿Sigues una buena dieta?</p>'},
  {m: '<p class="quest">¿Qué edad tienes?</p>'},
  {m: '<p class="quest">¿Cuál es tu peso actual?</p>'},
  {m: '<p class="quest">¿Cuánto mides?</p>'},
  {m: "Gracias. Por supuesto que tienes sobrepeso, pero eres muy capaz de alcanzar el objetivo de pérdida de peso que deseas. La razón principal de tu sobrepeso es un metabolismo lento. Esto es especialmente cierto para la grasa visceral, que se acumula alrededor de los flancos y el abdomen."},
  {m: "Recomendación para ti personalmente. Espinacas, alcachofas, canela, fortunella."},
  {m: "Espinacas: este probiótico natural no sólo favorece la salud intestinal, sino que también ayuda a controlar el apetito. Las espinacas aumentan la sensación de saciedad, lo que ayuda a reducir la ingesta de calorías y acelera el proceso de pérdida de peso."},
  {m: "Alcachofas: conocidas por sus propiedades antioxidantes, reducen el colesterol total y el colesterol \"malo\" y aceleran el metabolismo. El extracto de alcachofa ayuda a aumentar el gasto energético y la quema de grasas, por lo que es un componente importante para una pérdida de peso eficaz."},
  {m: "Canela: La canela no sólo aporta un sabor exótico, sino que también tiene fuertes propiedades antiinflamatorias. Ayuda a reducir la inflamación del organismo, que suele ser un obstáculo para la pérdida de peso."},
  {m: OFFER + ": La fortunella se utiliza desde hace mucho tiempo en los países asiáticos para mejorar la digestión y acelerar el metabolismo. Ayuda a mejorar la digestión y acelera el metabolismo, lo que contribuye a quemar calorías de forma más eficaz."},
  {m: "Los componentes enumerados pueden utilizarse por separado, pero es mucho más cómodo y eficaz utilizarlos como parte del complejo " + OFFER + ". Están presentes en forma de extractos intensivos con la máxima concentración de sustancias útiles. "},
  {m: "Para una pérdida de peso visible, basta con tomarlo dos veces al día: por la mañana antes de las comidas y por la noche. En sólo un mes podrás alcanzar tu objetivo."},
  {m: 'Este es el aspecto de Fortunella: <br><br> <img src="images/prod.png" class="product-img" style="width: 100%; max-width: 160px;"> '},
  {m: "Las gotas contienen extractos de máxima concentración de quemadores de grasa naturales, que activan el proceso de quema de grasa y lo apoyan."},
  {m: "Por lo tanto, Fortunella muy eficazmente descompone y elimina la grasa visceral que cubre las paredes de los órganos internos y les impide funcionar correctamente, desbloquea el metabolismo, limpia el cuerpo de toxinas y tóxicos."},
  {m: "Como resultado, tu cuerpo se deshace del exceso de grasa por sí mismo, utilizándola como fuente de energía. Empezarás a comer menos y no sentirás hambre, lo que potencia el efecto de pérdida de peso."},
  {m: 'Aquí están los resultados de mis clientes que han perdido peso con éxito utilizando mis recomendaciones: <br> <br><img src="images/comm-photo3-135-arb.jpg"> <br> <img src="images/comm2-92a-arb.jpg"> <br> <img src="images/comm6-abb-arb.jpg"> '},
  {m: "La duración óptima del curso, teniendo en cuenta tu edad, IMC actual y estilo de vida, será de unos 60 días de media."},
  {m: "Durante este tiempo se producirá una limpieza profunda del organismo y la normalización del metabolismo."},
  {m: "También tengo grandes noticias para ti. Has sido diagnosticado en línea y te has convertido en mi cliente número 2000."},
  {m: "Puedes conseguir Fortunella a un precio promocional introduciendo tu nombre y número de teléfono en el formulario de pedido que aparece más abajo. El número de paquetes promocionales es limitado, así que te sugiero que te des prisa en hacer el pedido."}
];
var mass_id = 0, length_mass = 0, lengt_num_mas = 0, text = "", speedtext = 35, process = !0;

function app() {
  var e = new Date, s = ("0" + e.getMinutes()).slice(-2), t = ("0" + e.getHours()).slice(-2) + ":" + s;
  if ($(".chat").height() + 100 > $(".content").height()) {
    $("#scroll_id").removeClass("hide");
    var n = $(".inp").val();
    $(".inp").val(++n)
  }
  const a = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="text" id="mass' + mass_id + '"></p><p class="message-time" id="time">' + t + "</p></div></div></div>";
  $(".chat-content-list").append(a), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
  var s = new Date, t = ("0" + s.getMinutes()).slice(-2);
  let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="text" class="users_mass">' + e + '</p><p class="message-time" id="time"><span>' + ("0" + s.getHours()).slice(-2) + ":" + t + '</span><span class="icon_ack" data-testid="msg-dblcheck" aria-label=" Прочитано " data-icon="msg-dblcheck" ><svg viewBox="0 0 16 15" width="16" height="15" ><path fill="currentColor" d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span></p></div></div></div>';
  $(".chat-content-list").append(n), $(".content").animate({scrollTop: $(".chat-content-list").height()}, 700), $("#scroll_id").addClass("hide")
}

function question1() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">Hasta 5 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">Entre 5 y 10 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">De 10 a 15 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">Más de 15 kg</span></div></div>')
}

function choise1() {
  $(".question1M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Hasta 5 kg"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Entre 5 y 10 kg"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("De 10 a 15 kg"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Más de 15 kg"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question2() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">Cintura y abdomen</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">Caderas y nalgas</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">Brazos o piernas</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">Quiero perder peso en todas partes</span></div></div>')
}

function choise2() {
  $(".question2M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Cintura y abdomen"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Caderas y nalgas"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Brazos o piernas"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Quiero perder peso en todas partes"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question3() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Hago ejercicio 3-5 veces por semana</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">Hago ejercicio 1-3 veces por semana</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">No hago ejercicio, pero intento pasear</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">Estilo de vida sedentario</span></div></div>')
}

function choise3() {
  $(".question3M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Hago ejercicio 3-5 veces por semana"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Hago ejercicio 1-3 veces por semana"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("No hago ejercicio, pero intento pasear"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Estilo de vida sedentario"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question4() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">Sí, cuento las calorías, nada de dulces ni bollería</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">Aproximadamente 50/50</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">Me gusta la comida rápida y los dulces</span></div><div class="chat-content-buttons-gender-block"><span class="question4T">Como mucha comida basura</span></div></div>')
}

function choise4() {
  $(".question4M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Sí, cuento las calorías, nada de dulces ni bollería"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Aproximadamente 50/50"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Me gusta la comida rápida y los dulces"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Como mucha comida basura"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question5() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">Menos de 20 años</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">20-30 años</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">31-40 años</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">41-50 años</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">Más de 50 años</span></div></div>')
}

function choise5() {
  $(".question5M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Menos de 20 años"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("20-30 años"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("31-40 años"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("41-50 años"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5G").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Más de 50 años"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question6() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">Hasta 60 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">De 60 a 70 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">De 71 a 80 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">De 81 a 90 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">Más de 90 kg</span></div></div>')
}

function choise6() {
  $(".question6M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Hasta 60 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("De 60 a 70 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("De 71 a 80 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("De 81 a 90 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6O").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Más de 90 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question7() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">Menos de 150 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">150-160 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">161-170 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">171-180 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">Más de 180 cm</span></div></div>')
}

function choise7() {
  $(".question7M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Menos de 150 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("150-160 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("161-170 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("171-180 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7G").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Más de 180 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

setTimeout((() => {
  var e = new Date, s = ("0" + e.getMinutes()).slice(-2);
  const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="text" id="mass' + mass_id + '"></p><p class="message-time" id="time">' + ("0" + e.getHours()).slice(-2) + ":" + s + "</p></div></div></div>";
  $(".chat-content-list").append(t), $("#scroll_id").click((function (e) {
    $(this).removeClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700)
  }));
  const n = setInterval((function () {
    1 == process && (lengt_num_mas != massange.length ? (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length && (lengt_num_mas++, mass_id++, length_mass = 0, text = "", app())) : (clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show"), start_timer()))
  }), speedtext)
}), 10), $(".content").scroll((function () {
  "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}));
var $marker = $("#down-box");
$(".content").scroll((function () {
  $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
}));
let intr, time = 600;

function start_timer() {
  intr = setInterval(tick, 1e3)
}

function tick() {
  time -= 1;
  var e = Math.floor(time / 60), s = time - 60 * e;
  0 == e && 0 == s && clearInterval(intr), s = s >= 10 ? s : "0" + s, $("#min").html("0" + e), $("#sec").html(s)
}