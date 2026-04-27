import Link from "next/link";

interface cardProps {
    evento: string;
    data: string;
    horario: string;
    local: string;
    linkLocal: string;
  }

export default function Evento({evento,data,horario,local,linkLocal}:cardProps) {
    return(
        <div className="mt-3 p-5 border-1 rounded-xl hover:bg-blue-50 hover:shadow-2xl">
        <p className="text-xl">{evento}</p>
        <ul className="mx-5">
            <li>Data: {data}</li>
            <li>Horário: {horario}</li>
            <li>Local: <Link href={linkLocal} target="_blank" rel="noopener noreferrer">{local}</Link></li>
        </ul>
    </div>
    )
}