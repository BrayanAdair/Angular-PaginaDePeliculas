import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blumhouse',
  templateUrl: './blumhouse.component.html',
  styleUrls: ['./blumhouse.component.css']
})
export class BlumhouseComponent implements OnInit{

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
        title:"Feliz día de tu muerte",
        descripcion:"Una estudiante de universidad debe revivir su propio asesinato día tras día hasta que descubra la identidad de su asesino.",
        trailer:"https://www.youtube.com/watch?v=JOrEBDDw6jU",
        img: "https://es.web.img2.acsta.net/pictures/17/10/23/10/01/0213264.jpg",
        id:1
      },
      {
        title:"Oculus: El espejo del mal",
        descripcion:"Una mujer trata de exonerar a su hermano, condenado por asesinato, demostrando que el crimen lo cometió un ser sobrenatural.",
        trailer:"https://www.youtube.com/watch?v=zvJLIf4lm_U&ab_channel=acontrafilms",
        img: "https://m.media-amazon.com/images/I/71IJTOK6spL._AC_SY879_.jpg",
        id:2
      },
      {
        title:"The Bay",
        descripcion:"El caos estalla en una pequeña ciudad de Maryland después de un desastre ecológico.",
        trailer:"https://www.youtube.com/watch?v=V3FQScwCJkw&ab_channel=enFilmin",
        img: "https://m.media-amazon.com/images/I/91ovaDjtw8L._AC_SY445_.jpg",
        id:3
      },
      {
        title:"Múltiple",
        descripcion:"Tres chicas son secuestradas por un hombre con 23 personalidades distintas diagnosticadas. Deben intentar escapar antes de la aparente aparición de una nueva y espantosa personalidad 24.",
        trailer:"https://www.youtube.com/watch?v=GTnNVq99qdE",
        img: "https://www.elespectadorimaginario.com/wp-content/webpc-passthru.php?src=http://www.elespectadorimaginario.com/wp-content/uploads/split_ver2.jpg&nocache=1",
        id:4
      },
      {
        title:"La noche de Halloween",
        descripcion:"Laurie Strode se enfrenta finalmente a Michael Myers, la figura enmascarada que la ha atormentado desde que logró escapar de su matanza la noche de Halloween hace cuatro décadas.",
        trailer:"https://www.youtube.com/watch?v=pNz0HfoMk-I&ab_channel=TrailersyEstrenos",
        img: "https://static.cinepolis.com/resources/mx/movies/posters/414x603/40292-117196-20221012042220.jpg",
        id:5
      },
      {
        title:"Paranormal Activity",
        descripcion:"Después de mudarse a un típico barrio residencial, una joven pareja comienza a sentir ruidos extraños. Deciden dejar una cámara filmando por la noche, para captar esa extraña presencia. Pero lo que inició como algo anecdótico, se convierte en su peor pesadilla.",
        trailer:"https://www.youtube.com/watch?v=5od3NGHrXrI&ab_channel=Blumhouse",
        img: "https://assets.cinepolisklic.com/images/58edcb48f5884b279d6d59ce7d6eff65_250X375.jpg",
        id:6
      },
      {
        title:"Ouija: El origen del mal",
        descripcion:"En 1967, en Los Ángeles, una viuda y sus hijas invitan a una siniestra presencia a entrar en su hogar sin darse cuenta de lo peligrosa que es.",
        trailer:"https://www.youtube.com/watch?v=WpKa1CVcAng&ab_channel=TrailersInSpanish",
        img: "https://assets.cinepolisklic.com/images/42f00d89ecbf4136be1b3bfb52cd66e4_250X375.jpg",
        id:7
      },
      {
        title:"Este cuerpo me sienta de muerte",
        descripcion:"Después de intercambiar cuerpos con un asesino en serie trastornado, una joven en la escuela secundaria descubre que tiene menos de 24 horas antes de que el cambio se vuelva permanente.",
        trailer:"https://www.youtube.com/watch?v=X7tNGwzeAhI&ab_channel=UniversalSpain",
        img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2020/11/cuerpo-me-sienta-muerte-2150487.jpg?itok=XH9EWFgl",
        id:8
      },
      {
        title:"Upgrade (Ilimitado)",
        descripcion:"En un futuro no muy lejano, la tecnología controla casi todos los aspectos de la vida. Pero cuando Grey, quien se identifica como tecnófobo, encuentra su mundo patas arriba, su única esperanza de venganza depende de un implante computarizado experimental llamado Stem.",
        trailer:"https://www.youtube.com/watch?v=r4h0rsUnFz4&ab_channel=TopSeriesyPel%C3%ADculas",
        img: "https://www.themoviedb.org/t/p/original/sjR6S9pP9OcLaQTqgFLdaFd672R.jpg",
        id:9
      },
      {
        title:"El regalo",
        descripcion:"La vida de una joven pareja de casados se ve envuelta en una espeluznante caída en picado cuando un conocido del pasado del marido trae misteriosos regalos y un horrendo secreto a la luz después de más de veinte años.",
        trailer:"https://www.youtube.com/watch?v=k14wOfbc-9I&ab_channel=SupraCinema",
        img: "https://es.web.img3.acsta.net/pictures/16/01/25/14/36/511650.jpg",
        id:10
      },
      {
        title:"El hombre invisible",
        descripcion:"El ex de Cecilia, que la maltrataba, se suicida dejándole su fortuna. O eso le cuentan. Pronto Cecilia sabe que la acecha alguien a quien no puede ver.",
        trailer:"https://www.youtube.com/watch?v=Um0cOySrKm8&ab_channel=UniversalPicturesM%C3%A9xico",
        img: "https://miencuentroconlaliteratura.files.wordpress.com/2014/06/el_hombre_invisible_de_h-_g-_wells.jpg",
        id:11
      },
      {
        title:"Nosotros",
        descripcion:"Una familia va a pasar unos dias a su casa de la playa, pero la tranquilidad se vuelve tensión cuando reciven a unos visitantes que no son bienvenidos.",
        trailer:"https://www.youtube.com/watch?v=qJh9_0xH3mY&ab_channel=FilmSelectEspa%C3%B1ol",
        img: "https://play-lh.googleusercontent.com/NBj7mC_6puK5qv38kv2qaV-Cfh3hoU6Qc7FZ85JtZDio3mivdpAlYehLOuSRBH1X4SiUOw",
        id:12
      },
      {
        title:"Hush (Silencio)",
        descripcion:"Una escritora sorda que se mudó a los bosques para llevar una vida solitaria tendrá que luchar por su vida en silencio cuando un asesino enmascarado aparece en su ventana.",
        trailer:"https://www.youtube.com/watch?v=Q_P8WCbhC6s&ab_channel=RottenTomatoesIndie",
        img: "data:image/jpeg;base64,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",
        id:13
      },
      {
        title:"Déjame salir",
        descripcion:" Un joven afroamericano visita a los padres de su novia blanca durante el fin de semana, donde su inicial inquietud frente a su recibimiento finalmente alcanza un punto de ebullición.",
        trailer:"https://www.youtube.com/watch?v=X-tg05cAVwE&ab_channel=TrailersInSpanish",
        img: "https://es.web.img3.acsta.net/pictures/17/04/21/13/12/288308.jpg",
        id:14
      },
      {
        title:"Creep 2",
        descripcion:"Una creadora de contenido en video que busca trabajo conduce hasta una remota casa en el bosque para encontrarse con un hombre que afirma ser un asesino en serie, un error mortal.",
        trailer:"https://www.youtube.com/watch?v=838PE2pbzM4&ab_channel=RottenTomatoesIndie",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xTPlkUpRN5pQ7XiPFMSem-bdwPSlUN58qw&usqp=CAU",
        id:15
      },
    ]
  }


}
