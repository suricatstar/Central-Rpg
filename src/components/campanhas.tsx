import Card from "./Card";

export default function Campanhas(){
    return(
        <section className="max-w-7xl mx-auto h-80 p-8 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold text-center">Nossas Campanhas</h1>
        <div className="flex gap-4">
          <Card titulo="Cyberpunk" description="viva como um nomade em 2077" />
          <Card
            titulo="Hora de Aventura"
            description="Vivas aventuras na terra de Ooo"
          />
        </div>
      </section>
    )
}