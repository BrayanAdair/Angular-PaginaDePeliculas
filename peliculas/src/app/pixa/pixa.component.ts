import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixa',
  templateUrl: './pixa.component.html',
  styleUrls: ['./pixa.component.css']
})
export class PixaComponent implements OnInit{

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
        title:"Toy Story",
        descripcion:"Los juguetes de Andy, un niño de seis años, temen que un nuevo regalo les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito, trata de tranquilizarlos hasta que aparece Buzz Lightyear. Lo peor es que el arrogante Buzz se cree que es una auténtico astronauta en plena misión para regresar a su planeta.",
        trailer:"https://www.youtube.com/watch?v=mTkzJWp9ZrY",
        img: "https://mx.web.img3.acsta.net/pictures/14/03/17/10/20/509771.jpg",
        id:1
      },
      {
        title:"Bichos: Una aventura en miniatura",
        descripcion:"Una hormiga realiza una misión peligrosa para proteger a su colonia de un ejército de saltamontes terroristas.",
        trailer:"https://www.youtube.com/watch?v=38wy8FR_8aM",
        img: "https://http2.mlstatic.com/D_NQ_NP_615437-MLM40825226542_022020-O.jpg",
        id:2
      },
      {
        title:"Toy Story 2",
        descripcion:"Cuando Andy se va de campamento dejando solos a los juguetes, Al McWhiggin, un compulsivo coleccionista de juguetes valiosos, secuestra a Woody. Buzz Lightyear y los demás juguetes tendrán que actuar con rapidez si quieren rescatarlo. Durante la operación de rescate no sólo tendrán que afrontar múltiples peligros, sino que también vivirán divertidas situaciones.",
        trailer:"https://www.youtube.com/watch?v=tWHWKJKv280&ab_channel=JoyasDeLaAnimaci%C3%B3n",
        img: "https://m.media-amazon.com/images/I/51oUX-Fot7L._AC_SY445_.jpg",
        id:3
      },
      {
        title:"Monsters, Inc.",
        descripcion:"Monsters, Incorporated es la fábrica de sustos más grande en el mundo de los monstruos y James P. Sullivan es uno de sus mejores asustadores. Sullivan es un monstruo grande e intimidante de piel azul con grandes manchas color púrpura y cuernos. Su asistente, mejor amigo y compañero de cuarto es Mike Wazowski, un pequeño y alegre monstruo verde con un solo ojo. Por una falla durante la jornada de trabajo, conocen a Boo, una niña pequeña que entra a un mundo donde los humanos no están permitidos.",
        trailer:"https://www.youtube.com/watch?v=jIOv_8K0fkM&ab_channel=Tr%C3%A1ilersconDoblajeEspa%C3%B1olLatinobySoldierBoy",
        img: "https://lumiere-a.akamaihd.net/v1/images/p_monstersinc_19751_55afa07a.jpeg",
        id:4
      },
      {
        title:"Buscando a Nemo",
        descripcion:"Nemo, un pequeño pececillo, muy querido y protegido por su padre, se pierde fuera de la gran barrera del arrecife australiano, después de ser capturado por este arrecife, Nemo terminará en una pecera en Sidney. Su padre, un pez payaso, parte en su búsqueda y se embarca en una peligrosa aventura con Dory, un pez con muy poca memoria. Al mismo tiempo, Nemo y sus nuevos amigos ya traman un plan para escapar de la pecera.",
        trailer:"https://www.youtube.com/watch?v=ba4TwyaNhSQ&ab_channel=DisneyStudiosLA",
        img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/93070eaf535856645544357f3ad17c626945ec8c0f8c1b707c8fa405728447a2._RI_V_TTW_.jpg",
        id:5
      },
      {
        title:"Los Increíbles",
        descripcion:"Un súper héroe retirado lucha contra el aburrimiento en un suburbio y junto con su familia tiene la oportunidad de salvar al mundo.",
        trailer:"https://www.youtube.com/watch?v=x_IWq20rDAw&ab_channel=decine21",
        img: "https://m.media-amazon.com/images/I/91dXM37W3ZL._AC_SL1500_.jpg",
        id:6
      },
      {
        title:"Cars",
        descripcion:"El aspirante a campeón de carreras Rayo McQueen parece que está a punto de conseguir el éxito. Su actitud arrogante se desvanece cuando llega a una pequeña comunidad olvidada que le enseña las cosas importantes de la vida que había olvidado.",
        trailer:"https://www.youtube.com/watch?v=8ZMklX5BzTo&ab_channel=JoseGregorioAfonsoCurbelo",
        img: "https://es.web.img2.acsta.net/pictures/14/05/28/11/24/435900.jpg",
        id:7
      },
      {
        title:"Ratatouille",
        descripcion:"Remy es una rata que aprecia la buena comida y tiene un paladar bastante sofisticado. Su sueño es convertirse algún día en un gran chef francés a pesar de la oposición de su familia. El destino lleva a Remy a las alcantarillas de París, donde su situación no puede ser mejor, ya que se encuentra justo debajo de uno de los restaurantes más finos de París. El roedor se sentirá en el lugar perfecto para convertir su sueño en una realidad.",
        trailer:"https://www.youtube.com/watch?v=b5ZNJoS2RtI&ab_channel=Gertson0000",
        img: "https://es.web.img3.acsta.net/medias/nmedia/18/67/30/37/18976643.jpg",
        id:8
      },
      {
        title:"WALL·E",
        descripcion:"Tras cientos de años haciendo aquello para lo que fue construido: limpiar el planeta de basura, el pequeño robot Wall-e tiene una nueva misión cuando conoce a Eva.",
        trailer:"https://www.youtube.com/watch?v=4rDD3SccHxQ&ab_channel=Gertson0000",
        img: "https://lumiere-a.akamaihd.net/v1/images/p_walle_19753_69f7ff00.jpeg",
        id:9
      },
      {
        title:"Up",
        descripcion:"Carl Fredricksen es un vendedor de globos de 78 años de edad dispuesto a cumplir su sueño: atar miles de globos a su casa y volar a Sudamérica. Sin embargo, descubre demasiado tarde a un joven e inesperado polizón. Lo que en principio será recelo, acabará por tornarse simpatía hacia el muchacho mientras juntos pasan fascinantes aventuras en exóticos lugares.",
        trailer:"https://www.youtube.com/watch?v=qoZo9MiICo0&ab_channel=DisneyEspa%C3%B1a",
        img: "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_FMjpg_UX1000_.jpg",
        id:10
      },
      {
        title:"Toy Story 3",
        descripcion:"Cuando su dueño Andy se prepara para ir a la universidad, el vaquero Woody, el astronauta Buzz y el resto de sus amigos juguetes comienzan a preocuparse por su incierto futuro. Todos acaban en una guardería donde comenzarán una serie de trepidantes y divertidas aventuras.",
        trailer:"https://www.youtube.com/watch?v=xkPhZHt5TKM&ab_channel=dvdgoshop",
        img: "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg",
        id:11
      },
      {
        title:"Cars 2",
        descripcion:"Rayo McQueen y la grúa Mate viajan al extranjero para participar en el primer Campeonato Mundial en el que se decidirá cuál es el coche más rápido de la tierra. Mate se convertirá en un espía secreto y McQueen competirá contra los mejores coches. El campeonato los llevará a Japón, París, Londres y por último, a Italia. Sin embargo, estarán muy ocupados para poder disfrutar de los placeres de cada lugar.",
        trailer:"https://www.youtube.com/watch?v=GsFnJc7NVZA&ab_channel=DisneyEspa%C3%B1a",
        img: "https://m.media-amazon.com/images/I/911pF4wxWCL._AC_SL1500_.jpg",
        id:12
      },
      {
        title:"Brave",
        descripcion:"Merida, la impetuosa y valiente hija de un rey escocés Fergus y de la reina Elinor, es una hábil arquera que desea surcar su propio camino en la vida. Su desafío a una vieja tradición molesta a los señores y provoca un caos en el reino. Merida busca ayuda con una bruja excéntrica, que le concede un deseo malogrado. Ahora, Merida debe descubrir el significado del coraje y deshacer una maldición bestial antes de que sea tarde.",
        trailer:"https://www.youtube.com/watch?v=0t4uTlcsJl4&ab_channel=DisneyStudiosLA",
        img: "https://lumiere-a.akamaihd.net/v1/images/p_brave_20488_9e833e2b.jpeg",
        id:13
      },
      {
        title:"Monsters University",
        descripcion:"Monsters University/Sinopsis de la película Mike y Sulley son dos jóvenes monstruos que acuden a la universidad para estudiar la carrera de asustadores. Ahora son amigos íntimos y se llevan muy bien, pero no fue siempre así. Durante sus años de universidad, debieron aprender a dejar sus diferencias de lado y a trabajar en equipo.",
        trailer:"https://www.youtube.com/watch?v=6-hRvF7suLM&ab_channel=DisneyStudiosLA",
        img: "https://upload.wikimedia.org/wikipedia/en/2/2a/Monsters_University_poster_3.jpg",
        id:14
      },
      {
        title:"Inside Out",
        descripcion:"Riley acaba de nacer y en el centro de control de su pequeña mente sólo hay sitio para Alegría. Poco después aparece Tristeza y, más tarde, Ira, Miedo y Asco. Las cinco emociones tendrán que ayudar a la niña cuando, ya con 11 años, su familia se mude desde su idílico pueblo del Medio Oeste estadounidense a la enorme e intimidante ciudad de San Francisco. Tras una serie de acontecimientos, Alegría y Tristeza tendrán que trabajar juntas para salvar a Riley.",
        trailer:"https://www.youtube.com/watch?v=ZOWV9F7LnIQ&ab_channel=DisneyEspa%C3%B1a",
        img: "https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg?region=0%2C0%2C540%2C810",
        id:15
      },
      {
        title:"The Good Dinosaur",
        descripcion:"A finales del periodo Cretácico, un asteroide se dirige a toda velocidad hacia la Tierra pero pasa de largo. Millones de años después, los dinosaurios han aprendido a hablar, construir y cultivar. Es entonces cuando nace el pequeño dinosaurio Arlo, un apatosaurio con un gran corazón. Arlo conocerá a un salvaje niño humano y juntos emprenderán un viaje lleno de peligros y emociones. El pequeño dinosaurio deberá enfrentarse a sus propios miedos y descubrirá de todo lo que es capaz.",
        trailer:"https://www.youtube.com/watch?v=OBHiaarTzF0&ab_channel=Pixar",
        img: "https://lumiere-a.akamaihd.net/v1/images/p_thegooddinosaur_19753_03c2af0a.jpeg",
        id:16
      },
      {
        title:"Buscando a Dory",
        descripcion:"Con la ayuda de Marlin y su hijo Nemo, Dory, que sufre pérdidas de memoria a corto plazo, decide emprender un largo viaje en busca de sus padres, a los que perdió hace años.",
        trailer:"https://www.youtube.com/watch?v=rKaSCUHJnqc&ab_channel=TrailersyEstrenos",
        img: "https://tupersonajefavorito.com/wp-content/uploads/2018/04/dory-marlin-4.jpg",
        id:17
      },
      {
        title:"Cars 3",
        descripcion:"Eclipsado por los autos jóvenes, el veterano Rayo McQueen ha sido expulsado del deporte que tanto ama. Sin embargo, no se rendirá tan fácilmente, con la ayuda de sus amigos, Rayo aprende trucos nuevos para vencer al arrogante Jackson Storm, el rival que lo humilló.",
        trailer:"https://www.youtube.com/watch?v=wtmW9rSRIzU&ab_channel=TrailersInSpanish",
        img: "https://es.web.img2.acsta.net/pictures/17/06/09/13/42/187933.jpg",
        id:18
      },
      {
        title:"Coco",
        descripcion:"Miguel es un niño que sueña con ser músico, pero su familia se lo prohíbe porque su tatarabuelo, músico, los abandonó, y quieren obligar a Miguel a ser zapatero, como todos los miembros de la familia. Por accidente, Miguel entra en la Tierra de los Muertos, de donde sólo podrá salir si un familiar difunto le concede su bendición, pero su tatarabuela se niega a dejarlo volver con los vivos si no promete que no será músico. Debido a eso, Miguel escapa de ella y empieza a buscar a su tatarabuelo.",
        trailer:"https://www.youtube.com/watch?v=awzWdtCezDo&ab_channel=DisneyStudiosLA",
        img: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
        id:19
      },
      {
        title:"Los Increíbles 2",
        descripcion:"Helen es reclutada para ayudar a que la acción vuelva a la vida de los Súper, mientras Bob se enfrenta a la rutina de su vida diaria normal en el hogar. En casa debe lidiar con un bebé que está a punto de descubrir sus superpoderes. Mientras tanto un nuevo villano trama un plan brillante y peligroso que lleva a pique toda la estabilidad conseguida y que solo Los Increíbles podrán afrontar juntos.",
        trailer:"https://www.youtube.com/watch?v=ssXatmC1dv0&ab_channel=DisneyStudiosLA",
        img: "https://m.media-amazon.com/images/I/91quOwq36CL.jpg",
        id:20
      },
      {
        title:"Toy Story 4	",
        descripcion:"Woody siempre ha tenido claro cuál es su labor en el mundo y cuál es su prioridad: cuidar a su dueño, ya sea Andy o Bonnie. Sin embargo, Woody descubrirá lo grande que puede ser el mundo para un juguete cuando Forky se convierta en su nuevo compañero de habitación. Los juguetes se embarcarán en una aventura de la que no se olvidarán jamás.",
        trailer:"https://www.youtube.com/watch?v=f33yJZ5uOpU&ab_channel=SensaCineTRAILERS",
        img: "https://lumiere-a.akamaihd.net/v1/images/image_bf8739ba.jpeg",
        id:21
      },
      {
        title:"Onward",
        descripcion:"Ambientado en un mundo de fantasía suburbana, dos hermanos elfos adolescentes, Ian y Barley Lightfood, se embarcan en una aventura en la que se proponen descubrir si existe aún algo de magia en el mundo que les permita pasar un último día con su padre, que falleció cuando ellos eran aún muy pequeños como para poder recordarlo.",
        trailer:"https://www.youtube.com/watch?v=qTpve0ZLBDw&ab_channel=DisneyEspa%C3%B1a",
        img: "https://m.media-amazon.com/images/I/91X-d7oq8jL.jpg",
        id:22
      },
      {
        title:"Soul",
        descripcion:"Un profesor de música que ha perdido la pasión se transporta fuera de su cuerpo al Gran Antes y debe encontrar el camino de regreso con la ayuda de un alma infantil que aprende sobre sí misma.",
        trailer:"https://www.youtube.com/watch?v=3QIdlo4uIVg&ab_channel=SensaCineTRAILERS",
        img: "https://lumiere-a.akamaihd.net/v1/images/postersoul_footer_8642e89f.png",
        id:23
      },
      {
        title:"Luca",
        descripcion:"Luca es un monstruo marino que vive debajo de un pueblo de la costa italiana. Cuando sale a la superficie, adquiere una apariencia humana, y conoce a un nuevo amigo, igual que él. Juntos emprenden una aventura entre humanos que odian a los monstruos.",
        trailer:"https://www.youtube.com/watch?v=-rk-ja04w8I&ab_channel=SensaCineTRAILERS",
        img: "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810",
        id:24
      },
      {
        title:"Red",
        descripcion:"Mei Lee, una niña de 13 años un poco rara pero segura de sí misma, que se debate entre seguir siendo la hija obediente que su madre quiere que sea y el caos de la adolescencia.",
        trailer:"https://www.youtube.com/watch?v=BNCJKmc4L5M&ab_channel=SensaCineTRAILERS",
        img: "https://www.planetadelibros.com.mx/usuaris/libros/fotos/343/m_libros/portada_red-la-novela_disney_202201280510.jpg",
        id:25
      },
      {
        title:"Lightyear",
        descripcion:"Buzz Lightyear se embarca en una aventura intergaláctica con un grupo de reclutas ambiciosos y su compañero robot. Los amigos tendrán que aprender a trabajar juntos para escapar del malvado Zurg y su ejército de robots.",
        trailer:"https://www.youtube.com/watch?v=lKLqrpYNfnA&ab_channel=FilmSelectEspa%C3%B1ol",
        img: "https://lumiere-a.akamaihd.net/v1/images/p_disney_lightyear_519_c4636841.jpeg",
        id:26
      },
    ]
  }


}