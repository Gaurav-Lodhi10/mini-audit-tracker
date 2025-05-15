import React from 'react';
import { Observation } from '../types';
import StatusBadge from './StatusBadge';
import SeverityTag from './SeverityTag';
import { Observation } from '@/types';
import StatusBadge from './StatusBadge'
import SeverityTag from './SeverityTag';


const ObservationTable: React.FC<{ observations: Observation[] }> = ({ observations }) => (
    <table className="w-full mt-6 border">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Severity</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {observations.map(obs => (
                <tr key={obs.id} className="border-t">
                    <td>{obs.id}</td>
                    <td>{obs.title}</td>
                    <td>{obs.description}</td>
                    <td><SeverityTag severity={obs.severity} /></td>
                    <td><StatusBadge status={obs.status} /></td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default ObservationTable;