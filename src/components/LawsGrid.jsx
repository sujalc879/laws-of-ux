import React from 'react'
import LawCard from './LawCard';

export default function LawsGrid({ onDemo }) {
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{laws.map(l => (
<LawCard key={l.id} law={l} onDemo={onDemo} />
))}
</div>
);
}