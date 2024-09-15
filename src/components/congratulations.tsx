import { Button } from "./ui/button";

export default function Congratulation(){
    return(
        <div className="max-w-7xl mx-auto h-80 p-8 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold text-center">
          Parabéns aventureiro, chegamos ao fim de mais uma jornada
        </h1>
        <p className="mb-4">Uma incrivel história foi escrita neste período</p>
        <Button>clique aqui</Button>
      </div>
    )
}