import React from 'react';
import HeroSection from '@/components/sections/homepage/HeroSection';
import AchievementsSection from '@/components/sections/homepage/AchievementSection';
import AboutSection from '@/components/sections/homepage/AboutSection';
import ProjectsSection from '@/components/sections/homepage/ProjectsSection';
import EmailSection from '@/components/sections/homepage/EmailSection';

export default function Home() {
  return 
  <main className="flex min-h-screen flex-col bg-[#121212]">
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </div>
</main>
}