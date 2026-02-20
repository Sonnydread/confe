"use client";
import MainNav from "../Confederation/Navbar";
import Footer from "../Confederation/footer";
import OrgChart from "./org-chart";
import { SubscribeForm } from "@/components/ui/subs-form";

export default function Page() {
  return (
    <>
      <MainNav />
      <OrgChart />
      <div className="pt-[20px]">
        <SubscribeForm />
        <Footer />
      </div>
    </>
  );
}
