import { v4 as uuidv4 } from "uuid";

export default function chillHop() {
  return [
    {
      name: "Peaceful Dissociation",
      artist: "Guillaume Muschalle, Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/04/a32d2ec47ba20c985c2b2425fd24d277a8f36d3e-1024x1024.jpg",
      colors: ["#E4E4B6", "#2F1C19"],
      id: uuidv4(),
      active: true,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=55310",
    },
    {
      name: "Kaleidoscope",
      artist: "El Train",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
      colors: ["#688662", "#12181A"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49426",
    },
    {
      name: "Dreaming",
      artist: "Misha, Jussi Halme, El Train, goodie bags",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
      colors: ["#688662", "#12181A"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49425",
    },
    {
      name: "Snap back",
      artist: "El Train, Marc Mathias",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
      colors: ["#688662", "#12181A"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49429",
    },
    {
      name: "Canary Forest",
      artist: "Aso, Middle School, Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      colors: ["#FBBC6A", "#052C3F"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
    },
    {
      name: "Cap's Café",
      artist: "Aso, Middle School, Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      colors: ["#FBBC6A", "#052C3F"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10077",
    },
    {
      name: "Midnight",
      artist: "Ian Ewing, Braxton Cook",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/50758f405d2aba9cd6e8c4e6cfce44e4d9893714-1024x1024.jpg",
      colors: ["#DD645E", "#1A1E46"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8230",
    },
    {
      name: "Like I am",
      artist: "Ian Ewing",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/50758f405d2aba9cd6e8c4e6cfce44e4d9893714-1024x1024.jpg",
      colors: ["#DD645E", "#1A1E46"],
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7964",
    },
  ];
}
