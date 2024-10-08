"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TrayectosTab() {
  const [trayectos, setTrayectos] = useState([
    { id: 1, chofer: 'Juan Pérez', vehiculo: 'ABC123', carga: 'Electrodomésticos', origen: 'Ciudad X', destino: 'Ciudad Y' },
    { id: 2, chofer: 'María García', vehiculo: 'XYZ789', carga: 'Alimentos', origen: 'Ciudad A', destino: 'Ciudad B' },
  ]);

  const [nuevoTrayecto, setNuevoTrayecto] = useState({ chofer: '', vehiculo: '', carga: '', origen: '', destino: '' });

  const agregarTrayecto = () => {
    setTrayectos([...trayectos, { id: Date.now(), ...nuevoTrayecto }]);
    setNuevoTrayecto({ chofer: '', vehiculo: '', carga: '', origen: '', destino: '' });
  };

  // Estos arrays deberían venir de los datos reales de choferes, vehículos y cargas
  const choferes = ['Juan Pérez', 'María García'];
  const vehiculos = ['ABC123', 'XYZ789'];
  const cargas = ['Electrodomésticos', 'Alimentos'];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestión de Trayectos</h2>
      <div className="mb-4 grid grid-cols-5 gap-2">
        <Select onValueChange={(value) => setNuevoTrayecto({ ...nuevoTrayecto, chofer: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Chofer" />
          </SelectTrigger>
          <SelectContent>
            {choferes.map((chofer) => (
              <SelectItem key={chofer} value={chofer}>{chofer}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setNuevoTrayecto({ ...nuevoTrayecto, vehiculo: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Vehículo" />
          </SelectTrigger>
          <SelectContent>
            {vehiculos.map((vehiculo) => (
              <SelectItem key={vehiculo} value={vehiculo}>{vehiculo}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setNuevoTrayecto({ ...nuevoTrayecto, carga: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Carga" />
          </SelectTrigger>
          <SelectContent>
            {cargas.map((carga) => (
              <SelectItem key={carga} value={carga}>{carga}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Origen"
          value={nuevoTrayecto.origen}
          onChange={(e) => setNuevoTrayecto({ ...nuevoTrayecto, origen: e.target.value })}
        />
        <Input
          placeholder="Destino"
          value={nuevoTrayecto.destino}
          onChange={(e) => setNuevoTrayecto({ ...nuevoTrayecto, destino: e.target.value })}
        />
      </div>
      <Button onClick={agregarTrayecto} className="mb-4">Agregar Trayecto</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Chofer</TableHead>
            <TableHead>Vehículo</TableHead>
            <TableHead>Carga</TableHead>
            <TableHead>Origen</TableHead>
            <TableHead>Destino</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trayectos.map((trayecto) => (
            <TableRow key={trayecto.id}>
              <TableCell>{trayecto.chofer}</TableCell>
              <TableCell>{trayecto.vehiculo}</TableCell>
              <TableCell>{trayecto.carga}</TableCell>
              <TableCell>{trayecto.origen}</TableCell>
              <TableCell>{trayecto.destino}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}