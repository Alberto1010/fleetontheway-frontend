"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function VehiculosTab() {
  const [vehiculos, setVehiculos] = useState([
    { id: 1, placa: 'ABC123', modelo: 'Camión', capacidad: '5 toneladas' },
    { id: 2, placa: 'XYZ789', modelo: 'Furgoneta', capacidad: '2 toneladas' },
  ]);

  const [nuevoVehiculo, setNuevoVehiculo] = useState({ placa: '', modelo: '', capacidad: '' });

  const agregarVehiculo = () => {
    setVehiculos([...vehiculos, { id: Date.now(), ...nuevoVehiculo }]);
    setNuevoVehiculo({ placa: '', modelo: '', capacidad: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestión de Vehículos</h2>
      <div className="mb-4 flex space-x-2">
        <Input
          placeholder="Placa"
          value={nuevoVehiculo.placa}
          onChange={(e) => setNuevoVehiculo({ ...nuevoVehiculo, placa: e.target.value })}
        />
        <Input
          placeholder="Modelo"
          value={nuevoVehiculo.modelo}
          onChange={(e) => setNuevoVehiculo({ ...nuevoVehiculo, modelo: e.target.value })}
        />
        <Input
          placeholder="Capacidad"
          value={nuevoVehiculo.capacidad}
          onChange={(e) => setNuevoVehiculo({ ...nuevoVehiculo, capacidad: e.target.value })}
        />
        <Button onClick={agregarVehiculo}>Agregar Vehículo</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Placa</TableHead>
            <TableHead>Modelo</TableHead>
            <TableHead>Capacidad</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehiculos.map((vehiculo) => (
            <TableRow key={vehiculo.id}>
              <TableCell>{vehiculo.placa}</TableCell>
              <TableCell>{vehiculo.modelo}</TableCell>
              <TableCell>{vehiculo.capacidad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}