import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex w-full justify-between items-center p-4 bg-zinc-900 mb-6">
      <img
        className="rounded"
        src="/logo.jpg"
        alt="aqui vai ter uma imagem"
        width={70}
      />
      <nav>
        <ul className="flex flex-row gap-4">
          <li>Inicio</li>
          <li>Meu Perfil</li>
          <li>Sobre</li>
        </ul>
      </nav>
      <Button>Login</Button>
    </div>
  );
}
