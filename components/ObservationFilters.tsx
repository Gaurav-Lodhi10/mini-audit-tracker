
import React from 'react';

interface Props {
    statusFilter: string;
    setStatusFilter: (val: string) => void;
}

const ObservationFilters: React.FC<Props> = ({ statusFilter, setStatusFilter }) => (
    <div className="my-4">
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="p-2 border">
            <option value="">All</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
        </select>
    </div>
);

export default ObservationFilters;