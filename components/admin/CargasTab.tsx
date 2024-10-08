"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function CargasTab() {
  const [cargas, setCargas] = useState([
    { id: 1, descripcion: 'Electrodomésticos', peso: '2 toneladas', destino: 'Ciudad A' },
    { id: 2, descripcion: 'Alimentos', peso: '1.5 toneladas', destino: 'Ciudad B' },
  ]);

  const [nuevaCarga, setNuevaCarga] = useState({ descripcion: '', peso: '', destino: '' });

  const agregarCarga = () => {
    setCargas([...cargas, { id: Date.now(), ...nuevaCarga }]);
    setNuevaCarga({ descripcion: '', peso: '', destino: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestión de Cargas</h2>
      <div className="mb-4 flex space-x-2">
        <Input
          placeholder="Descripción"
          value={nuevaCarga.descripcion}
          onChange={(e) => setNuevaCarga({ ...nuevaCarga, descripcion: e.target.value })}
        />
        <Input
          placeholder="Peso"
          value={nuevaCarga.peso}
          onChange={(e) => setNuevaCarga({ ...nuevaCarga, peso: e.target.value })}
        />
        <Input
          placeholder="Destino"
          value={nuevaCarga.destino}
          onChange={(e) => setNuevaCarga({ ...nuevaCarga, destino: e.target.value })}
        />
        <Button onClick={agregarCarga}>Agregar Carga</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Descripción</TableHead>
            <TableHead>Peso</TableHead>
            <TableHead>Destino</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cargas.map((carga) => (
            <TableRow key={carga.id}>
              <TableCell>{carga.descripcion}</TableCell>
              <TableCell>{carga.peso}</TableCell>
              <TableCell>{carga.destino}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}