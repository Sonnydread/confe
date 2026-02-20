import Sedes from "./sedes";
import MainNav from "../Confederation/Navbar";
import Footer from "../Confederation/footer";

import { SubscribeForm } from "@/components/ui/subs-form";


export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-fixed bg-cover bg-center">
        <MainNav />
        <Sedes />
        <SubscribeForm />
        <Footer />
      </div>
    </>
  );
}
