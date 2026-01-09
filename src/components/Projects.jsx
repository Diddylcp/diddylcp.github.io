import { useAnimateOnScroll } from "./Animator";
import Card from "./Card";

function Projects(props) {
  const projects = useAnimateOnScroll("animate__zoomIn");
  return (
    <section id="projects" className="bg-dark">
      <h2>Projects</h2>
      <div
        ref={projects.ref}
        className={` animate__animated ${
          projects.visible ? projects.animation + " is-visible" : "is-hidden"
        }`}
      >
        <div className="container bg-tertiary pb-5">
          <h2 className="text-center text-white">Proyectos</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pt-4">
            <Card
              title="Metal Slug"
              description="Recreación del 1º nivel de Metal Slug utilizando la libreria de Phaser para hacer minijuegos de navegador."
              downloadUrl="https://diddylcp.github.io/MetalSlugPhaser/"
              images={[
                "/img/MetalSlug1.webp",
                "/img/MetalSlug2.webp",
                "/img/MetalSlug3.webp",
              ]}
            />
            <Card
              title="Space Alien"
              description="Endless runner para móvil donde eres un alíen que intenta escapar de una base subterránea. Para ello tendrás que ir esquivando los obstáculos mientras intentas ser más rápido que tus compañeros y rivales."
              downloadUrl="https://surrealboost.itch.io/secret-aliens"
              images={["/img/SpaceAlien.jpg", "/img/SpaceAlien2.gif"]}
            />
            <Card
              title="My Darkest Friend"
              description="Prototipo de juego de Terror donde tienes que guiarte a traves de una pistola que lanza pequeñas particulas de luz."
              downloadUrl="https://mega.nz/file/gJZDkAgL#9ZwXbnxD823beH7JADyjjJKcj6TAyzTfnZXpUocgWDE"
              images={[
                "/img/MyDarkestFriend.gif",
                "/img/MyDarkestFriend2.png",
                "/img/MyDarkestFriend3.png",
              ]}
            />
            <Card
              title="Cooking My Way"
              description="Prototipo de un juego de simulación de tener tu propio restaurante al puro estilo PC Building Simulator"
              downloadUrl="https://mega.nz/file/4Z5kCDYY#XZyOU0y90gQ_b8b_61xDLdTOaxvOX1YL1kxHL_41_xI"
              images={["/img/CookingMyWay.png"]}
            />
            <Card
              title="Space Roar"
              description="Prototipo de juego en el espacio estilo EVERSPACE"
              downloadUrl="https://mega.nz/file/FUYB2CjZ#FAZs_byE4HKPxJMJU_HjJ2isD7rq8ttoIGkPyjzvy8k"
              images={["/img/SpaceRoar.png", "/img/SpaceRoar2.png"]}
            />
            <Card
              title="One Thousand and One Fights"
              description="One Thousand and One Fights es un RTS parecido a Clash Royale donde tienes que conquistar las torres que pertenezcan al enemigo.
              Gana el primero en tener todas las torres."
              downloadUrl="https://caketowers.itch.io/one-thousand-and-one-fights"
              images={["/img/OTOF.jpg", "/img/OTOFLogo.png"]}
            />
            <Card
              title="BlackHouse Crisis"
              description="Prototipo hecho en 1º de carrera
              Es un shooter en vista cenital basado en la velocidad y reacción del jugador."
              downloadUrl="https://mega.nz/file/VMoUABrR#tszOWok02VBUfXrwwkH9FH4T5sUo2YgLIlQLhMP106k"
              images={[
                "/img/BlackHouseCrisis.png",
                "/img/LogoBlackHouseCrisis.png",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
