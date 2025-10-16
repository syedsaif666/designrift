import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ButtonsTab from './buttons';
import CardsTab from './cards';
import ColorsTab from './colors';
import DashboardTab from './dashboard';
import PricingTab from './pricing';

export interface PreviewProps {}

export default function Preview({}: PreviewProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className='from-canvas-bg-subtle to-canvas-bg-subtle relative min-h-screen overflow-hidden bg-gradient-to-br p-6'>
      <div className='relative mx-auto max-w-7xl'>
        <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
          <TabsList className='sticky top-0 z-10 backdrop-blur-sm'>
            <TabsTrigger value='dashboard' className='whitespace-nowrap'>
              Dashboard
            </TabsTrigger>
            <TabsTrigger value='pricing' className='whitespace-nowrap'>
              Pricing
            </TabsTrigger>
            <TabsTrigger value='cards' className='whitespace-nowrap'>
              Cards
            </TabsTrigger>
            <TabsTrigger value='buttons' className='whitespace-nowrap'>
              Buttons
            </TabsTrigger>
            <TabsTrigger value='colors' className='whitespace-nowrap'>
              Color Palette
            </TabsTrigger>
          </TabsList>

          <TabsContent value='dashboard' className='space-y-6 max-h-[calc(100vh-150px)] overflow-y-auto'>
            <DashboardTab />
          </TabsContent>
          <TabsContent value='pricing' className='space-y-6 max-h-[calc(100vh-150px)] overflow-y-auto'>
            <PricingTab />
          </TabsContent>
          <TabsContent value='cards' className='space-y-6 max-h-[calc(100vh-150px)] overflow-y-auto'>
            <CardsTab />
          </TabsContent>
          <TabsContent value='buttons' className='space-y-8 max-h-[calc(100vh-150px)] overflow-y-auto'>
            <ButtonsTab />
          </TabsContent>
          <TabsContent value='colors' className='space-y-6 max-h-[calc(100vh-150px)] overflow-y-auto'>
            <ColorsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}