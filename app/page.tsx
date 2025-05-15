// === /app/page.tsx ===
'use client';
import React, { useState } from 'react';
import ObservationForm from '../components/ObservationForm';
import ObservationTable from '../components/ObservationTable';
import Chart from '../components/Chart';
import ObservationFilters from '../components/ObservationFilters';
import { initialData } from '../utils/data';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Observation } from '../types';

const Page: React.FC = () => {
    const [observations, setObservations] = useLocalStorage<Observation[]>('observations', initialData);
    const [statusFilter, setStatusFilter] = useState('');

    const handleAddObservation = (formData: Omit<Observation, 'id'>) => {
        const newObservation: Observation = { id: Date.now().toString(), ...formData };
        setObservations([...observations, newObservation]);
    };

    const filtered = statusFilter ? observations.filter(obs => obs.status === statusFilter) : observations;

    return (
        <div>
            <ObservationForm onAdd={handleAddObservation} />
            <ObservationFilters statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            <Chart data={filtered} />
            <ObservationTable observations={filtered} />
        </div>
    );
};

export default Page;