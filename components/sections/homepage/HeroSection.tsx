/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
        <div className="grid grid-cols1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Pier-Olivier</h1>
                <p className="text-[#ADB7BE] text-lg mb-6 lf:text-xl">
                    Software Engineer
                </p>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Download CV</button>
                <button className="px-6 py-3 rounded-full bg-white hover:bg-slate-200 text-black">Hire me</button>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-256 h-256 lg:w-512 lg:h-512">
                    <Image
                        src="/images/portrait.png"
                        alt="portrait"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={512}
                        height={512}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection