'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ObservationForm from '@/components/ObservationForm';

const NewObservationPage = () => {
    const router = useRouter();

    const handleAdd = () => {
        // Save to localStorage or API
        alert('Observation created');
        router.push('/');
    };

    return <ObservationForm onAdd={handleAdd} />;
};
export default NewObservationPage;
