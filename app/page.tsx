import Link from "next/link";
import Evento from "./components/evento";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-28 bg-black">

      </div>
      <div className="m-5 mx-13 p-10 border-1 rounded-xl">
        <p className="text-3xl">Programação</p>
        <Evento
          evento="Santa Missa"
          data="Domingo - 26/04"
          horario="07:30"
          local="IGREJA CATÓLICA NS SRA AUXILIADORA - RUA PROFESSORA AURORA REGO 579 - SANTA ETELVINA"
          linkLocal="https://maps.app.goo.gl/GLoWfDVreYb9kZRr8"
        />
        <Evento
          evento="Novena"
          data="Terça - 28/04"
          horario="19:30"
          local="IGREJA CATÓLICA NS SRA AUXILIADORA - RUA PROFESSORA AURORA REGO 579 - SANTA ETELVINA"
          linkLocal="https://maps.app.goo.gl/GLoWfDVreYb9kZRr8"
        />
      </div>
    </div>
  )
}