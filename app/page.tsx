'use client';
import React, { useState } from 'react';
import ObservationForm from '@/components/ObservationForm';
import ObservationTable from '@/components/ObservationTable';
import Chart from '@/components/Chart';
import ObservationFilters from '@/components/ObservationFilters';
import { initialData } from '@/utils/data';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Observation } from '@/types';

export default function HomePage() {
    const [observations, setObservations] = useLocalStorage<Observation[]>('observations', initialData);
    const [statusFilter, setStatusFilter] = useState('');

    const handleAddObservation = (formData: Omit<Observation, 'id'>) => {
        const newObservation: Observation = { id: Date.now().toString(), ...formData };
        setObservations([...observations, newObservation]);
    };

    const filtered = statusFilter ? observations.filter(obs => obs.status === statusFilter) : observations;

    return (
        <div className="container mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-2">Mini Audit Tracker</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">Easily track and manage your audit observations</p>
            </header>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                        <ObservationForm onAdd={handleAddObservation} />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                        <ObservationFilters statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
                        <Chart data={filtered} />
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <ObservationTable observations={filtered} />
            </div>
        </div>
    );
}