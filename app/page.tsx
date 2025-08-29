import Banner from "@/src/components/banner";
import Header from "@/src/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <Banner />
    </div>
  );
}
