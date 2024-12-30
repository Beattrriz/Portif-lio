
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home(){
  return(
    <> 
    <Header></Header>
    <main className="pt-20 p-8"> 
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </main>   
    </>
  );
}