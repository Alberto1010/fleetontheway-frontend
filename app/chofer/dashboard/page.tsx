"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Trayecto {
  id: number;
  vehiculo: string;
  carga: string;
  origen: string;
  destino: string;
  estado: string;
}

export default function ChoferDashboard() {
  const [trayectos, setTrayectos] = useState<Trayecto[]>([]);

  useEffect(() => {
    // Aquí se cargarían los trayectos asignados al chofer desde el backend
    const trayectosAsignados: Trayecto[] = [
      { id: 1, vehiculo: 'ABC123', carga: 'Electrodomésticos', origen: 'Ciudad X', destino: 'Ciudad Y', estado: 'Pendiente' },
      { id: 2, vehiculo: 'XYZ789', carga: 'Alimentos', origen: 'Ciudad A', destino: 'Ciudad B', estado: 'En progreso' },
    ];
    setTrayectos(trayectosAsignados);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Panel de Chofer</h1>
      <Card>
        <CardHeader>
          <CardTitle>Trayectos Asignados</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vehículo</TableHead>
                <TableHead>Carga</TableHead>
                <TableHead>Origen</TableHead>
                <TableHead>Destino</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trayectos.map((trayecto) => (
                <TableRow key={trayecto.id}>
                  <TableCell>{trayecto.vehiculo}</TableCell>
                  <TableCell>{trayecto.carga}</TableCell>
                  <TableCell>{trayecto.origen}</TableCell>
                  <TableCell>{trayecto.destino}</TableCell>
                  <TableCell>{trayecto.estado}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}