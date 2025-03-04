
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
 
export default async function Page({params} : {params: Promise<{ locale: string }>}) {
    const {locale} = await params;
   
  return (
    <div className="min-h-screen">
    <Header />
    <Hero />
    <Services locale={locale} />
    <Projects locale={locale} />
    <Contact />
    <Footer />
  </div>
  );
}