"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ChoferesTab() {
  const [choferes, setChoferes] = useState([
    { id: 1, nombre: 'Juan Pérez', licencia: 'A12345', telefono: '555-1234' },
    { id: 2, nombre: 'María García', licencia: 'B67890', telefono: '555-5678' },
  ]);

  const [nuevoChofer, setNuevoChofer] = useState({ nombre: '', licencia: '', telefono: '' });

  const agregarChofer = () => {
    setChoferes([...choferes, { id: Date.now(), ...nuevoChofer }]);
    setNuevoChofer({ nombre: '', licencia: '', telefono: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestión de Chóferes</h2>
      <div className="mb-4 flex space-x-2">
        <Input
          placeholder="Nombre"
          value={nuevoChofer.nombre}
          onChange={(e) => setNuevoChofer({ ...nuevoChofer, nombre: e.target.value })}
        />
        <Input
          placeholder="Licencia"
          value={nuevoChofer.licencia}
          onChange={(e) => setNuevoChofer({ ...nuevoChofer, licencia: e.target.value })}
        />
        <Input
          placeholder="Teléfono"
          value={nuevoChofer.telefono}
          onChange={(e) => setNuevoChofer({ ...nuevoChofer, telefono: e.target.value })}
        />
        <Button onClick={agregarChofer}>Agregar Chofer</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Licencia</TableHead>
            <TableHead>Teléfono</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {choferes.map((chofer) => (
            <TableRow key={chofer.id}>
              <TableCell>{chofer.nombre}</TableCell>
              <TableCell>{chofer.licencia}</TableCell>
              <TableCell>{chofer.telefono}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}