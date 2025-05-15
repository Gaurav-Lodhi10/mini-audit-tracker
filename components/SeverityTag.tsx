import React from 'react';

const severityStyles: Record<string, string> = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800',
};

const SeverityTag: React.FC<{ severity: string }> = ({ severity }) => (
    <span className={`px-2 py-1 rounded ${severityStyles[severity]}`}>{severity}</span>
);

export default SeverityTag;
