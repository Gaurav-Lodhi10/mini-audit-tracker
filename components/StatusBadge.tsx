import React from 'react';

const statusStyles: Record<string, string> = {
    Open: 'bg-green-200 text-green-900',
    'In Progress': 'bg-yellow-200 text-yellow-900',
    Closed: 'bg-red-200 text-red-900',
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => (
    <span className={`px-2 py-1 rounded ${statusStyles[status]}`}>{status}</span>
);

export default StatusBadge;
