import { Container } from "@/components/Container";
import Image from "next/image";
import flashifyImg from "../../public/img/flashify.png";

export default function Home() {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h3 id="Product" className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              Flashcard for All
            </h3>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Unleash your creativity and sharpen your skills with Flashcard for All!
            </p>
            <p className="py-3 text-base leading-normal text-gray-500 lg:text-base xl:text-lg dark:text-gray-300">
              - Whether you're learning new topics, practicing for exams, or organizing fun game nights, Flashcard for All is your go-to flashcard app.
            </p>
            <p className="py-3 text-base leading-normal text-gray-500 lg:text-base xl:text-lg dark:text-gray-300">
              - Create, customize, and play with flashcards tailored to your needs — from math drills to trivia games, charades, and vocabulary builders.
            </p>
            <p className="py-3 text-base leading-normal text-gray-500 lg:text-base xl:text-lg dark:text-gray-300">
              - Perfect for students, teachers, families, and anyone looking to learn or entertain!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <Image
              src={flashifyImg}
              width="616"
              height="617"
              className="object-cover"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
