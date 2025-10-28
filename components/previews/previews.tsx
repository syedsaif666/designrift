import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExamplesPreviewContainer } from '@/components/theme-generator';
import Dashboard from './dashboard';
import Pricing from './pricing';
import Cards from './cards';
import Buttons from './buttons';
import Colors from './colors';

export interface PreviewProps { }

export default function Preview(_props: PreviewProps) {
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
            <Dashboard />
          </TabsContent>
          <TabsContent value='pricing' className='space-y-8 max-h-[calc(100vh-9.5rem)] overflow-y-auto'>
            <Pricing />
          </TabsContent>
          <TabsContent value="cards">
            <ExamplesPreviewContainer className="m-0 space-y-8 max-h-[calc(100vh-9.5rem)] overflow-y-auto">
              <Cards />
            </ExamplesPreviewContainer>
          </TabsContent>
          <TabsContent value='buttons' className='space-y-8 max-h-[calc(100vh-9.5rem)] overflow-y-auto'>
            <Buttons />
          </TabsContent>
          <TabsContent value='colors' className='space-y-6 max-h-[calc(100vh-9.5rem)] overflow-y-auto'>
            <Colors />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}