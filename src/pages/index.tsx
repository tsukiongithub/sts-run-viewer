import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { api } from "~/utils/api";
import { useState } from "react";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [activeTab, setActiveTab] = useState<"deck" | "map">("deck");

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-sts-bg flex min-h-screen flex-col text-lg text-white">
        <div
          className={`flex items-center bg-[url('/img/bar.png')] bg-cover bg-no-repeat px-4 py-2 shadow-lg`}
        >
          <div className="flex items-center gap-4">
            <div className="font-sts text-2xl">tsuki, The Watcher</div>
            {/* <div className="relative aspect-square w-10">
              <Image src={"/img/watcherButton.png"} alt="watcher icon" fill />
            </div> */}
          </div>
          <div className="ml-8 flex items-center gap-2">
            <div className="relative aspect-square w-10">
              <Image src={"/img/panelGoldBag.png"} alt="gold bag icon" fill />
            </div>
            <div className="font-sts text-amber-300">286</div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <button
              className={`transition hover:brightness-110 ${
                activeTab !== "deck" ? "grayscale" : ""
              }`}
              onClick={() => {
                setActiveTab("deck");
              }}
            >
              <Image
                src={"/img/deck.png"}
                alt="deck icon"
                width={48}
                height={48}
              />
            </button>
            <button
              className={`transition hover:brightness-110 ${
                activeTab !== "map" ? "grayscale" : ""
              }`}
              onClick={() => {
                setActiveTab("map");
              }}
            >
              <Image
                src={"/img/map.png"}
                alt="deck icon"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
        {activeTab === "deck" ? (
          <div className="mx-8">
            <div className="my-4 flex items-center gap-4">
              <div className="relative aspect-square w-14">
                <Image
                  src={
                    "https://static.wikia.nocookie.net/slay-the-spire/images/1/1a/BurningBlood.png"
                  }
                  alt="Burning Blood relic"
                  fill
                />
              </div>
              <div className="relative aspect-square w-14">
                <Image
                  src={
                    "https://static.wikia.nocookie.net/slay-the-spire/images/7/7a/HappyFlower.png"
                  }
                  alt="Happy Flower relic"
                  fill
                />
              </div>
              <div className="relative aspect-square w-14">
                <Image
                  src={
                    "https://static.wikia.nocookie.net/slay-the-spire/images/5/5c/Boot.png"
                  }
                  alt="Boot relic"
                  fill
                />
              </div>
              <div className="relative aspect-square w-14">
                <Image
                  src={
                    "https://static.wikia.nocookie.net/slay-the-spire/images/5/5b/WhiteBeastStatue.png"
                  }
                  alt="White Beast Statue relic"
                  fill
                />
              </div>
              <div className="relative aspect-square w-14">
                <Image
                  src={
                    "https://static.wikia.nocookie.net/slay-the-spire/images/9/99/PaperFrog.png"
                  }
                  alt="Paper Frog relic"
                  fill
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="relative aspect-[9/12] w-48">
                <Image
                  src={
                    "https://static.wikia.nocookie.net/slay-the-spire/images/0/06/Strike_R.png"
                  }
                  alt="ironclad strike"
                  fill
                />
              </div>
              <div className="relative aspect-[9/12] w-48">
                <Image
                  src={
                    "https://static.wikia.nocookie.net/slay-the-spire/images/4/4f/Strike_RPlus.png"
                  }
                  alt="ironclad strike"
                  fill
                />
              </div>
            </div>
          </div>
        ) : (
          <div>map</div>
        )}
      </main>
    </>
  );
}
