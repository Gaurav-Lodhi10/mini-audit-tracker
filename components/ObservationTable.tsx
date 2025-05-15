// import React from 'react';
// import { Observation } from '@/types';
// import StatusBadge from './StatusBadge';
// import SeverityTag from './SeverityTag';

// const ObservationTable: React.FC<{ observations: Observation[] }> = ({ observations }) => (
//     <div className="overflow-x-auto mt-6">
//         <table className="w-full text-left border-collapse shadow-lg rounded-2xl overflow-hidden">
//             <thead>
//                 <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
//                     <th className="px-6 py-4">ID</th>
//                     <th className="px-6 py-4">Title</th>
//                     <th className="px-6 py-4">Description</th>
//                     <th className="px-6 py-4">Severity</th>
//                     <th className="px-6 py-4">Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {observations.map((obs, index) => (
//                     <tr key={obs.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b transition duration-300 ease-in-out hover:bg-gray-100`}>  
//                         <td className="px-6 py-4 text-gray-900">{obs.id}</td>
//                         <td className="px-6 py-4 text-gray-900">{obs.title}</td>
//                         <td className="px-6 py-4 text-gray-700">{obs.description}</td>
//                         <td className="px-6 py-4"><SeverityTag severity={obs.severity} /></td>
//                         <td className="px-6 py-4"><StatusBadge status={obs.status} /></td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// );

// export default ObservationTable;
import React from 'react';
import { Observation } from '@/types';
import StatusBadge from './StatusBadge';
import SeverityTag from './SeverityTag';

const ObservationTable: React.FC<{ observations: Observation[] }> = ({ observations }) => (
    <div className="overflow-x-auto mt-6">
        <table className="w-full text-left border-collapse shadow-lg rounded-2xl overflow-hidden bg-gray-900 text-gray-200">
            <thead>
                <tr className="bg-gray-800 text-gray-300 uppercase text-sm">
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Severity</th>
                    <th className="px-6 py-4">Status</th>
                </tr>
            </thead>
            <tbody>
                {observations.map((obs, index) => (
                    <tr 
                        key={obs.id} 
                        className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'} border-b border-gray-600 transition duration-300 ease-in-out hover:bg-gray-600`}
                    >  
                        <td className="px-6 py-4 text-gray-100">{obs.id}</td>
                        <td className="px-6 py-4 text-gray-100 font-semibold">{obs.title}</td>
                        <td className="px-6 py-4 text-gray-400">{obs.description}</td>
                        <td className="px-6 py-4"><SeverityTag severity={obs.severity} /></td>
                        <td className="px-6 py-4"><StatusBadge status={obs.status} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default ObservationTable;
