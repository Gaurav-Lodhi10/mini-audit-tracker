'use client';
import React, { useState } from 'react';
// import { Observation } from '../types';
import { Observation } from '@/types';
interface Props {
    onAdd: (data: Omit<Observation, 'id'>) => void;
}

const ObservationForm: React.FC<Props> = ({ onAdd }) => {
    const [formData, setFormData] = useState<Omit<Observation, 'id'>>({
        title: '',
        description: '',
        severity: 'Low',
        status: 'Open',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(formData);
        setFormData({ title: '', description: '', severity: 'Low', status: 'Open' });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required className="w-full p-2 border" />
            <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required className="w-full p-2 border" />
            <select name="severity" value={formData.severity} onChange={handleChange} className="w-full p-2 border">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border">
                <option>Open</option>
                <option>In Progress</option>
                <option>Closed</option>
            </select>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white">Add Observation</button>
        </form>
    );
};

export default ObservationForm;