import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ExamplesPreviewContainer from '@/components/theme-generator/examples-preview-container';
import ButtonsTab from './buttons/buttons';
import ColorsTab from './colors/colors';
import PricingTab from './pricing/pricing';
import Cards from './cards/cards-content';
import Dashboard from './dashboard/dashboard-content';

export interface PreviewProps { }

export default function Preview({ }: PreviewProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className='from-canvas-bg-subtle to-canvas-bg-subtle relative min-h-screen overflow-hidden bg-gradient-to-br p-6'>
      <div className='relative'>
        <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
          <TabsList className='sticky top-0 z-10 backdrop-blur-sm mb-3'>
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

          <TabsContent value='dashboard' className='space-y-6 max-h-[calc(100vh-9.5rem)] overflow-y-auto'>
            {/* <DashboardTab /> */}
            <Dashboard />
          </TabsContent>
          <TabsContent value='pricing' className='space-y-8 max-h-[calc(100vh-9.5rem)] overflow-y-auto'>
            <PricingTab />
          </TabsContent>
          <TabsContent value="cards">
            <ExamplesPreviewContainer className="m-0 space-y-8 max-h-[calc(100vh-9.5rem)] overflow-y-auto">
              <Cards />
            </ExamplesPreviewContainer>
          </TabsContent>
          <TabsContent value='buttons' className='space-y-8 max-h-[calc(100vh-9.5rem)] overflow-y-auto'>
            <ButtonsTab />
          </TabsContent>
          <TabsContent value='colors' className='space-y-6 max-h-[calc(100vh-9.5rem)] overflow-y-auto'>
            <ColorsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}