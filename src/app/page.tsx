"use client"

import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AppButtons from "@/components/AppButtons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image'
import { FolderCode } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-grow max-w-3xl px-4 sm:px-6 md:px-8 pt-16 pb-24 mx-auto">
        <div className="mt-8 flex flex-col gap-16">
          <div className="mx-auto items-center justify-center flex rounded-lg bg-[#0501700] p-4 backdrop-blur-sm border border-card-border-light dark:border-card-border-dark shadow-sm">
            <p className="text-text-primary-light dark:text-text-secondary-dark"><span className="font-bold dark:text-lime-500 text-red-500">Hello,</span> I&apos;m an <span className="font-semibold dark:text-lime-500 text-red-500">Full-stack Developer</span> based in <span className="font-semibold dark:text-lime-500 text-red-500">Katowice, Poland</span>.</p>
          </div>

          <section className="flex flex-col-reverse sm:flex-row items-center gap-4 sm:gap-12 p-4">
            <div className="flex-1 text-center sm:text-left px-6">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 font-mplus text-red-500 dark:text-lime-500">
                Avni Güzen
              </h1>
              <p className="gap-2 text-base sm:text-lg text-text-secondary-light/90 dark:text-text-secondary-dark font-mplus leading-tight">
              • Full-stack Developer <br />
              • TEFL Certified ESL Teacher <br />
              • Translator-Interpreter <br />
              • International Trade Specialist
              </p>
            </div>
            <div className="relative hover:scale-105 hover:transition-all cursor-pointer hover:duration-300 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] ring-4 dark:ring-lime-500 ring-red-500 rounded-full">
              <div className="absolute inset-0 rounded-full cursor-pointer bg-card-bg-light dark:bg-card-bg-dark" />
              <Image
                src="/cover.jpg"
                alt="Avni Guzen"
                className="absolute inset-0 w-full h-full rounded-full object-cover"
                width={180}
                height={180}
                onClick={() => window.location.href = '/resume'}
              />
            </div>
          </section>

          {/* Work Section */}
          <section className="items-center px-10 p-6">
            <div>
              <h2 className="text-2xl font-bold mb-6 font-mplus text-red-500 underline dark:text-lime-500">
                About me
              </h2>
              <div className="text-text-secondary-light/90 dark:text-text-secondary-dark">
                I&apos;m a freelance full-stack developer living in Katowice, Poland with a passion for building digital services, products and solutions. I have a knack for creating user-friendly, efficient and scalable web and mobile applications. When I&apos;m not coding, you can find me producing music, photographing and learning new languages. Currently, I&apos;m working on a project that aims to help car rental companies to manage their fleet and customers. Previously, when I was working as an English Teacher, I was creating a mobile application called&nbsp;
                <Dialog>
                  <DialogTrigger className="font-bold text-red-500 dark:text-lime-500 underline">
                    Tokatiz
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Download it from Apple and Google Platforms</DialogTitle>
                    </DialogHeader>
                    <DialogDescription asChild>
                      <div>
                        <AppButtons className="grid grid-cols-2 gap-4" />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
                &nbsp;for my school.
                <div className="mt-8 flex justify-center">
                  <Button>
                    <Link href="/Projects">
                      <div className="flex items-center gap-2">
                        <FolderCode />
                        <span>My Portfolio</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Bio Section */}
          <section className="items-center px-10 p-4">
            <div>
              <h2 className="text-2xl font-bold mb-6 font-mplus text-red-500 underline dark:text-lime-500">
                Bio
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-8">
                  <span className="font-bold text-text-primary-light dark:text-text-primary-dark min-w-[100px]">1990</span>
                  <span className="text-text-secondary-light/90 dark:text-text-secondary-dark">Born in Izmir, Turkey</span>
                </div>
                <div className="flex items-start gap-8">
                  <span className="font-bold text-text-primary-light dark:text-text-primary-dark min-w-[100px]">2005</span>
                  <span className="text-text-secondary-light/90 dark:text-text-secondary-dark">Met with computer</span>
                </div>
                <div className="flex items-start gap-8">
                  <span className="font-bold text-text-primary-light dark:text-text-primary-dark min-w-[100px]">2007</span>
                  <span className="text-text-secondary-light/90 dark:text-text-secondary-dark">Working on some basic old javascript functions</span>
                </div>
                <div className="flex items-start gap-8">
                  <span className="font-bold text-text-primary-light dark:text-text-primary-dark min-w-[100px]">2014-2020</span>
                  <span className="text-text-secondary-light/90 dark:text-text-secondary-dark">Studied English Language Teaching, BA Program at Pamukkale University Denizli, Turkey</span>
                </div>
                <div className="flex items-start gap-8">
                  <span className="font-bold text-text-primary-light dark:text-text-primary-dark min-w-[100px]">2022</span>
                  <span className="text-text-secondary-light/90 dark:text-text-secondary-dark">Moved to Poland for Erasmus+ Program</span>
                </div>
                <div className="flex items-start gap-8">
                  <span className="font-bold text-text-primary-light dark:text-text-primary-dark min-w-[100px]">2023</span>
                  <span className="text-text-secondary-light/90 dark:text-text-secondary-dark">Started working as an ESL Teacher and started developing Tokatiz App</span>
                </div>
                <div className="flex items-start gap-8">
                  <span className="font-bold text-text-primary-light dark:text-text-primary-dark min-w-[100px]">2024</span>
                  <span className="text-text-secondary-light/90 dark:text-text-secondary-dark">Changed career path and started working as an International Trade Specialist</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
