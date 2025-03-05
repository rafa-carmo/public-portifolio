
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from 'next'
import metadata, { Languages } from "@/constants/metadata";

 
type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
    // read route params
    const { locale } = await params
    const meta = metadata[locale as Languages]
    
    return {
      title: meta.title,
      description: meta.description,
      openGraph: {
        images: ['https://www.rafaelcarmo.dev/hero.svg'],
      },
    }
  }

export default async function Page({params} : Props) {
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