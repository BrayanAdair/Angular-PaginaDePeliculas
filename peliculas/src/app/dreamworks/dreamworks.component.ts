import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dreamworks',
  templateUrl: './dreamworks.component.html',
  styleUrls: ['./dreamworks.component.css']
})
export class DreamworksComponent implements OnInit{

  currentPage: number = 1;
  itemsPerPage: number = 4;

  public cards:Array<any>=[]
  
  art = {
    id: 0,
    title: '',
    descripcion: '',
  }
  
  
  hayRegistros() {
    return this.cards.length > 0;
  }
  
  borrar(id: number) {
    for (let x = 0; x < this.cards.length; x++)
      if (this.cards[x].id == id) {
        this.cards.splice(x, 1);
        return;
      }
  }
  
  agregar() {
    if (this.art.id == 0) {
      alert('Debe ingresar un numero de tarjeta distinto a cero');
      return
    }
    for (let x = 0; x < this.cards.length; x++)
      if (this.cards[x].id == this.art.id) {
        alert('Ya existe una tarjeta con dicho ID');
        return;
      }
    this.cards.push({
      id: this.art.id,
      title: this.art.title,
      descripcion: this.art.descripcion,
    });
    this.art.id = 0;
    this.art.title = '';
    this.art.descripcion = '';
  }
  
  seleccionar(art: { id: number; title: string; descripcion: string }) {
    this.art.id = art.id;
    this.art.title = art.title;
    this.art.descripcion = art.descripcion;
  }
  
  modificar() {
    for (let x = 0; x < this.cards.length; x++)
      if (this.cards[x].id == this.art.id) {
        this.cards[x].title = this.art.title;
        this.cards[x].descripcion = this.art.descripcion;
        return;
      }
    alert('No existe la tarjeta con el ID ingresado');
  }
  

  ngOnInit(): void {
    this.cards=[
      {
        title:"Antz",
        descripcion:"En una colonia de hormigas con millones de habitantes, Z-4195 es un trabajador que se siente insignificante dentro de un sistema conformista y decide cambiar la situación en la que vive.",
        trailer:"https://www.youtube.com/watch?v=iX_qRwVXWYQ&ab_channel=ParamountMovies",
        img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dd82baf735ca2a19d2b9bfd6e98248646df56239fa5789c1508564b7a2c7d3a9._RI_V_TTW_.jpg",
        id:1
      },
      {
        title:"El príncipe de Egipto",
        descripcion:"Con el objetivo de salvar a su pequeño de ser asesinado por el faraón, una madre desesperada arroja a su hijo recién nacido río abajo. El niño israelí es encontrado por los reyes de Egipto, quienes le dan al niño el nombre de Moisés y le crían como hermano del heredero al trono. Pero cuando, años más tarde, se descubre el origen hebreo de Moisés, los hermanos se alejan.",
        trailer:"https://www.youtube.com/watch?v=vQsba3lnjmA&ab_channel=Empeliculados.Co",
        img: "https://m.media-amazon.com/images/I/51DsolAeXOL._AC_UF894,1000_QL80_.jpg",
        id:2
      },
      {
        title:"El camino hacia El Dorado",
        descripcion:"Dos pícaros españoles se topan con un mapa del tesoro de El Dorado y se embarcan como polizones en uno de los barcos de Cortez. Cuando encuentra la ciudad, el principal sacerdote los proclama dioses dentro de un elaborado plan para hacer con el control de la ciudad. Allí conocerán también a una bella joven que les ayudará a mantener las apariencias.",
        trailer:"https://www.youtube.com/watch?v=S-ezM2sVsjg&ab_channel=MarvelComics-AnimaEstudios",
        img: "https://musicart.xboxlive.com/7/5fd81e00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        id:3
      },
      {
        title:"Chicken Run",
        descripcion:"es una historia que testimonia cómo los obstáculos no son impedimentos para cumplir metas. Ella invita a reflexionar, entre otras, en torno a cómo el trabajo en equipo, el esfuerzo y la perseverancia, son elementos centrales que nos permiten “saltar las alambradas” con que nos encontramos en la vida.",
        trailer:"https://www.youtube.com/watch?v=jIOv_8K0fkM&ab_channel=Tr%C3%A1ilersconDoblajeEspa%C3%B1olLatinobySoldierBoy",
        img: "https://m.media-amazon.com/images/I/816HWIpzapL._AC_SL1500_.jpg",
        id:4
      },
      {
        title:"Shrek",
        descripcion:"Hace mucho tiempo, en una lejana ciénaga, vivía un ogro llamado Shrek. Un día, su preciada soledad se ve interrumpida por un montón de personajes de cuento de hadas que invaden su casa. Todos fueron desterrados de su reino por el malvado Lord Farquaad. Decidido a devolverles su reino y recuperar la soledad de su ciénaga, Shrek llega a un acuerdo con Lord Farquaad y va a rescatar a la princesa Fiona, la futura esposa del rey. Sin embargo, la princesa esconde un oscuro secreto.",
        trailer:"https://www.youtube.com/watch?v=ba4TwyaNhSQ&ab_channel=DisneyStudiosLA",
        img: "https://m.media-amazon.com/images/I/81xM0en2bWL._AC_SY879_.jpg",
        id:5
      },
      {
        title:"Spirit: El corcel indomable",
        descripcion:"En el lejano Oeste, Spirit es un mustang salvaje que cabalga por las praderas. Pero todo cambia cuando los hombres se cruzan en su camino.",
        trailer:"https://www.youtube.com/watch?v=x_IWq20rDAw&ab_channel=decine21",
        img: "https://http2.mlstatic.com/D_NQ_NP_958993-MLM40829203212_022020-W.jpg",
        id:6
      },
      {
        title:"Simbad: La leyenda de los siete mares",
        descripcion:"Simbad, el aventurero más osado del mundo, es acusado de robar uno de los tesoros más valiosos del planeta tierra, el poderoso Libro de la Paz. Ahora, debe recuperarlo si no quiere que su amigo Proteus muera.",
        trailer:"https://www.youtube.com/watch?v=8ZMklX5BzTo&ab_channel=JoseGregorioAfonsoCurbelo",
        img: "https://m.media-amazon.com/images/I/51Jhuyt10yL._AC_SY445_.jpg",
        id:7
      },
      {
        title:"Shrek 2",
        descripcion:"Shrek, nuestro ogro favorito, debe enfrentarse al mayor de los problemas que se podía imaginar: conocer a sus suegros.",
        trailer:"https://www.youtube.com/watch?v=b5ZNJoS2RtI&ab_channel=Gertson0000",
        img: "https://m.media-amazon.com/images/I/81X1ozpid4L._AC_UF894,1000_QL80_.jpg",
        id:8
      },
      {
        title:"El espantatiburones",
        descripcion:"El hijo de un tiburón mafioso muere cuando le cae un ancla encima. Un pez con mucha labia y grandes sueños es encontrado en la escena del crimen y, para darse importancia, se atribuye la muerte. Pero sus sueños le meten en agua estancada cuando una gran mentira le convierte en un improbable héroe.",
        trailer:"https://www.youtube.com/watch?v=4rDD3SccHxQ&ab_channel=Gertson0000",
        img: "https://m.media-amazon.com/images/I/51BNMeA9HRL.jpg",
        id:9
      },
      {
        title:"Madagascar",
        descripcion:"Cuatro animales muy mimados del zoo de Nueva York naufragan en la isla de Madagascar y deben aprender a sobrevivir en un mundo salvaje.",
        trailer:"https://www.youtube.com/watch?v=qoZo9MiICo0&ab_channel=DisneyEspa%C3%B1a",
        img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/72b6b34a4153b139f729bc4b3b44cbca2a27e5a54bd4fba2ee1a59df2c4da9e2._RI_V_TTW_.jpg",
        id:10
      },
      {
        title:"Wallace & Gromit: The Curse of the Were-Rabbit",
        descripcion:"Wallace y su perro Gromit tienen un negocio de exterminación de plagas. Ambos deben evitar que un conejo enorme arruine todas las plantaciones de la ciudad.",
        trailer:"https://www.youtube.com/watch?v=xkPhZHt5TKM&ab_channel=dvdgoshop",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLrXhps2XQINqV1HhYb2al4qDdjtIQv3TCcA&usqp=CAU",
        id:11
      },
      {
        title:"Vecinos invasores",
        descripcion:"Cuando Verne y sus amigos del bosque se despiertan de su hibernación, se encuentran con que tienen nuevos vecinos: humanos. R.J., un travieso mapache, aprovechará la nueva situación para mostrar a los demás como beneficiarse el botín urbano que se acaba de poner a su alcance.",
        trailer:"https://www.youtube.com/watch?v=GsFnJc7NVZA&ab_channel=DisneyEspa%C3%B1a",
        img: "https://m.media-amazon.com/images/I/51jvYcE2LKL._SX366_BO1,204,203,200_.jpg",
        id:12
      },
      {
        title:"Lo que el agua se llevo",
        descripcion:"Roddy es una rata de la alta sociedad que vive como un rey en un piso de Kensington atendido por dos mayordomos, los hámsters Gilbert y Sullivan. Sin embargo, cuando una vulgar rata de alcantarilla llamada Sid aparece por la pila de la cocina y decide instalarse allí, Roddy debe hacer todo lo inimaginable para echarla.",
        trailer:"https://www.youtube.com/watch?v=0t4uTlcsJl4&ab_channel=DisneyStudiosLA",
        img: "https://m.media-amazon.com/images/I/81ZVcfVQ9GL._AC_SL1500_.jpg",
        id:13
      },
      {
        title:"Shrek tercero",
        descripcion:"Cuando el Rey Harold enferma, Shrek y la Princesa Fiona descubren que tendrán que dirigir la Tierra Muy Muy Lejana a menos que puedan encontrar al Príncipe Artie, el verdadero heredero, y llevarlo a casa. Desafortunadamente, no tiene interés en ser rey; no obstante, Shrek, Burro y el Gato con Botas planean recuperarlo. Mientras tanto, la Princesa Fiona le pide ayuda a sus compañeras heroínas para alejar del trono al Príncipe Encantador.",
        trailer:"https://www.youtube.com/watch?v=6-hRvF7suLM&ab_channel=DisneyStudiosLA",
        img: "https://m.media-amazon.com/images/I/81qjVVyxELL._AC_SL1500_.jpg",
        id:14
      },
      {
        title:"Bee Movie",
        descripcion:"Recién salida de la universidad, la abeja Barry no tiene la intención de trabajar en la producción de miel. Él huye de la colmena por primera vez y habla con un humano, lo que rompe una de las principales reglas de su especie. Barry descubre que los humanos han estado robando y comiendo miel durante siglos y decide demandar a la humanidad por ese robo.",
        trailer:"https://www.youtube.com/watch?v=ZOWV9F7LnIQ&ab_channel=DisneyEspa%C3%B1a",
        img: "https://m.media-amazon.com/images/I/51gLhqKDXkL._AC_UF894,1000_QL80_.jpg",
        id:15
      },
      {
        title:"Kung Fu Panda",
        descripcion:"El panda Po trabaja en la tienda de fideos de su familia y sueña en convertirse en un maestro del kung-fu. Su sueño se hace una realidad cuando es inesperadamente elegido para cumplir una antigua profecía y debe estudiar artes marciales con sus ídolos, los Cinco Furiosos. Po necesitará toda la sabiduría, fortaleza y habilidades para poder proteger a su gente de Tai Lung, un maldito leopardo de nieve.",
        trailer:"https://www.youtube.com/watch?v=OBHiaarTzF0&ab_channel=Pixar",
        img: "https://es.web.img3.acsta.net/pictures/16/03/04/13/44/418557.jpg",
        id:16
      },
      {
        title:"Madagascar 2: Escape de África",
        descripcion:"El león Alex, la cebra Marty, la jirafa Melman y la hipopótamo Gloria permanecen en Madagascar a la espera de regresar a su zoológico. En su empeño por volver a casa, consiguen arreglan un viejo aeroplano, que les hará llegar hasta las inmensas llanuras africanas.",
        trailer:"https://www.youtube.com/watch?v=rKaSCUHJnqc&ab_channel=TrailersyEstrenos",
        img: "https://m.media-amazon.com/images/I/81XKDjAF1xL._AC_SL1500_.jpg",
        id:17
      },
      {
        title:"Monstruos vs Aliens",
        descripcion:"Cuando un meteorito lleno de mugre espacial transforma a Susan Murphy en una gigante, el Gobierno le concede el nombre de Ginormica y la encierra en una instalación secreta con otros monstruos, como el Dr. Cucaracha, cabeza de insecto. Cuando un robot extraterrestre llega a la Tierra y empieza una masacre, el general W.R. Monger convence al presidente para que envíe a Ginormica y a los monstruos a enfrentarse a la máquina y salvar al planeta.",
        trailer:"https://www.youtube.com/watch?v=wtmW9rSRIzU&ab_channel=TrailersInSpanish",
        img: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5XLP/image?locale=es-mx&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg",
        id:18
      },
      {
        title:"Cómo entrenar a tu dragón",
        descripcion:"Hipo, un vikingo adolescente, comienza las clases de entrenamiento con dragones, y ve por fin una oportunidad para demostrar que es capaz de convertirse en guerrero, cuando hace amistad con un dragón herido.",
        trailer:"https://www.youtube.com/watch?v=awzWdtCezDo&ab_channel=DisneyStudiosLA",
        img: "https://soyfrikiyque.files.wordpress.com/2015/05/como_entrenar_a_tu_dragon-caratula.jpg",
        id:19
      },
      {
        title:"Shrek Forever After",
        descripcion:"Instalado en su vida matrimonial y totalmente domesticado, Shrek empieza a extrañar los días en los que él se sentía como un verdadero ogro. Engañado para firmar un contrato con el tortuoso Rumpelstiltskin, él se encuentra a sí mismo en una versión alterna de Muy Muy Lejano, donde los ogros son cazados, Rumpelstiltskin manda, y él y Fiona nunca se conocieron. Shrek debe hallar la forma de cancelar el contrato para restaurar su mundo y reclamar su amor verdadero.",
        trailer:"https://www.youtube.com/watch?v=ssXatmC1dv0&ab_channel=DisneyStudiosLA",
        img: "https://m.media-amazon.com/images/I/81nmtQ6sufL._AC_SL1500_.jpg",
        id:20
      },
      {
        title:"Megamente",
        descripcion:"Megamind es un supervillano. Durante años, ha intentado conquistar Metro City, pero un héroe llamado Metro Man se lo impedía. Tras muchos intentos, Megamind consigue matarlo. De repente, su vida carece de sentido. ¿Qué puede hacer un supervillano sin un superhéroe con el que enfrentarse? Crear a Titán, un nuevo héroe. Sin embargo Titán empieza a pensar que es mucho más divertido destruir el mundo en vez de salvarlo. ¿Podrá derrotar Megamind a su diabólica criatura?.",
        trailer:"https://www.youtube.com/watch?v=f33yJZ5uOpU&ab_channel=SensaCineTRAILERS",
        img: "https://m.media-amazon.com/images/I/81WG2I1PbAL._AC_SY445_.jpg",
        id:21
      },
      {
        title:"Kung Fu Panda 2",
        descripcion:"Ahora conocido como el Dragón Guerrero, Po protege el Valle de la Paz junto con sus amigos y compañeros maestros de kung fu, los Cinco Furiosos. Sin embargo, un peligroso villano amenaza la nueva e impresionante vida de Po con planes para usar un arma secreta para desaparecer el arte marcial y conquistar China. Con el fin de derrotar a su nuevo enemigo, Po tiene que recordar su pasado y desbloquear secretos de sus misteriosos orígenes.",
        trailer:"https://www.youtube.com/watch?v=qTpve0ZLBDw&ab_channel=DisneyEspa%C3%B1a",
        img: "https://www.cinevistablog.com/wp-content/uploads/2011/06/kung-fu-panda-2-2011_opt2_.jpg",
        id:22
      },
      {
        title:"El gato con botas",
        descripcion:"Mucho antes de conocer a Shrek, el Gato con botas, recién nombrado héroe por salvar a una mujer de la embestida de un toro, tiene que huir de la ciudad cuando comienzan a sospechar que ha robado un banco, aunque el verdadero villano es su amigo Humpty Dumpty. Tiempo después y a pesar de que todavía existe un enfrentamiento entre ellos, ambos se reúnen para robar el famoso ganso de los huevos de oro. En su aventura les ayudará la famosa ladrona felina, Kitty Zarpas Suaves.",
        trailer:"https://www.youtube.com/watch?v=3QIdlo4uIVg&ab_channel=SensaCineTRAILERS",
        img: "https://cinepremiere.com.mx/imgsHistorico/u18/GatoConBotasDVD.jpg",
        id:23
      },
      {
        title:"Madagascar 3: Europe's Most Wanted",
        descripcion:"Cuatro animales muy mimados del zoo de Nueva York naufragan en la isla de Madagascar y deben aprender a sobrevivir en un mundo salvaje.",
        trailer:"https://www.youtube.com/watch?v=8fyO-ZlIDi0&ab_channel=PARAMOUNTPICTURESM%C3%89XICO",
        img: "https://images.cdn1.buscalibre.com/fit-in/360x360/95/ca/95ca00ec6285521ea81e523d0c3fa3b8.jpg",
        id:24
      },
      {
        title:"El origen de los guardianes",
        descripcion:"Una oscura amenaza pretende robarles a los niños sus esperanzas y sus sueños: es el perverso Sombra, que quiere conquistar el mundo sembrando el miedo. Los guardianes, buscarán la ayuda del reticente Jack Escarcha para enfrentarse a Sombra.",
        trailer:"https://www.youtube.com/watch?v=e4bdD8owgDU",
        img: "https://m.media-amazon.com/images/I/51S5Gay8m3L._AC_.jpg",
        id:25
      },
      {
        title:"Los Croods",
        descripcion:"La familia prehistórica Croods vive en un momento particularmente peligroso de la historia. El patriarca Grug, su compañera, Ugga, su hija adolescente Eep, hijo Thunk y Gran buscan comida de día y se amontonan durante la noche. Cuando un cavernícola más evolucionado llamado Guy llega a la escena, Grug está desconfiado, pero pronto Guy tiene razón sobre la inminente destrucción de su mundo.",
        trailer:"https://www.youtube.com/watch?v=CIyBwD-wvL4&ab_channel=TrailersyEstrenos",
        img: "https://www.themoviedb.org/t/p/w500/3X3qtBTgKt5mCB30RJwbIjgjzdw.jpg",
        id:26
      },
    ]
  }


}
