import Campanhas from "@/components/campanhas";
import Congratulation from "@/components/congratulations";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Congratulation/>

      <Campanhas/>
    </>
  );
}
