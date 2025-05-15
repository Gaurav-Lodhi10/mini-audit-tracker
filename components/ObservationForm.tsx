'use client';
import React, { useState } from 'react';
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
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 text-gray-100 shadow-lg rounded-2xl p-6 w-full max-w-md mx-auto">
            <input 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                placeholder="Title" 
                required 
                className="w-full p-3 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500" 
            />
            <input 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Description" 
                required 
                className="w-full p-3 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500" 
            />
            <select 
                name="severity" 
                value={formData.severity} 
                onChange={handleChange} 
                className="w-full p-3 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <select 
                name="status" 
                value={formData.status} 
                onChange={handleChange} 
                className="w-full p-3 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Open</option>
                <option>In Progress</option>
                <option>Closed</option>
            </select>
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">Add Observation</button>
        </form>
    );
};

export default ObservationForm;