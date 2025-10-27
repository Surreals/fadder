import React from 'react';
import { useTranslation } from 'react-i18next';
import { MainPageLayout } from '@layouts/LayoutDefault';
import HeroSection from './components/HeroSection';
import PopularMakesSection from './components/PopularMakesSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import HowItWorksSection from './components/HowItWorksSection';
import Container from "@components/Container/Container";
import HorizontalScrollAutoSection from "@pages/index/components/HorizontalScrollAutoSection";

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <MainPageLayout>
        <HeroSection />
      <Container>
        <HorizontalScrollAutoSection title={'New Arrivals'} />
        <PopularMakesSection />
        <ContactSection />
        <BlogSection />
        <HorizontalScrollAutoSection title={'Popular now'} />
        <HorizontalScrollAutoSection title={'Under $10,000'} />
      </Container>
      <HowItWorksSection />
    </MainPageLayout>
  );
}
