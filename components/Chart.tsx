'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { Observation } from '../types';
import { Observation } from '@/types';

const Chart: React.FC<{ data: Observation[] }> = ({ data }) => {
    const counts = ['Open', 'In Progress', 'Closed'].map(status => ({
        status,
        count: data.filter(item => item.status === status).length,
    }));

    return (
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={counts}>
                    <XAxis dataKey="status" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3182ce" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default Chart;
