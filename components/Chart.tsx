'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { Observation } from '@/types';

const Chart: React.FC<{ data: Observation[] }> = ({ data }) => {
    const counts = ['Open', 'In Progress', 'Closed'].map(status => ({
        status,
        count: data.filter(item => item.status === status).length,
    }));

    return (
        <div className="h-80 bg-gray-900 rounded-2xl p-4 shadow-lg">
            <h2 className="text-gray-100 text-xl font-semibold mb-4">Observation Status Overview</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={counts} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="status" stroke="#bbb" />
                    <YAxis allowDecimals={false} stroke="#bbb" />
                    <Tooltip contentStyle={{ backgroundColor: '#222', borderColor: '#555', color: '#fff' }} cursor={{ fill: '#333' }} />
                    <Legend wrapperStyle={{ color: '#ccc' }} />
                    <Bar dataKey="count" fill="#4c9aff" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
