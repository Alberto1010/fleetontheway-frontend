"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VehiculosTab from '@/components/admin/VehiculosTab';
import ChoferesTab from '@/components/admin/ChoferesTab';
import CargasTab from '@/components/admin/CargasTab';
import TrayectosTab from '@/components/admin/TrayectosTab';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('vehiculos');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="vehiculos">Vehículos</TabsTrigger>
          <TabsTrigger value="choferes">Chóferes</TabsTrigger>
          <TabsTrigger value="cargas">Cargas</TabsTrigger>
          <TabsTrigger value="trayectos">Trayectos</TabsTrigger>
        </TabsList>
        <TabsContent value="vehiculos">
          <VehiculosTab />
        </TabsContent>
        <TabsContent value="choferes">
          <ChoferesTab />
        </TabsContent>
        <TabsContent value="cargas">
          <CargasTab />
        </TabsContent>
        <TabsContent value="trayectos">
          <TrayectosTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}