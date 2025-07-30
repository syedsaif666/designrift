import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

interface FeatureCardProps {
    icon: ReactElement;
    title: string;
    description: string;
    details: string[];
    gradient: string
    onHover?: () => void;
    onLeave?: () => void;
    isActive?: boolean;
}

function FeatureCard({ icon, title, description, details, gradient, onHover, onLeave, isActive }: FeatureCardProps) {
    return (
        <motion.div
            className={`relative rounded-2xl border p-8 bg-canvas-bg-subtle transition-all duration-300 cursor-pointer ${isActive
                ? 'border-primary-solid bg-gradient-to-br from-primary-bg to-primary-bg-subtle text-primary-text-contrast'
                : 'border-canvas-line hover:border-primary-border hover:bg-primary-bg-subtle'
                }`}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(80,80,180,0.10)' }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <div className='flex items-center justify-start gap-4'>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${gradient} mb-6 ${isActive ? 'scale-110' : 'scale-100'} transition-[scale] duration-300`}>
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-4">
                    {title}
                </h3>
            </div>
            {/* Badge */}
            {/* <div className="mb-6">
                <span className={`inline-block bg-primary-bg ${isActive ? 'bg-canvas-bg' : 'bg-primary-bg'} 'text-primary-text-contrast' : 'text-canvas-text-contrast'} px-4 py-2 rounded-lg text-sm font-medium`}>
                    {title}
                </span>
            </div> */}
            {/* Description */}
            <p className="mb-6 leading-relaxed">
                {description}
            </p>
            {/* Details */}
            <ul className="space-y-2">
                {details.map((detail, index) => (
                    <li key={index} className="flex items-center text-sm text-primary-contrast">
                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 flex-shrink-0" />
                        {detail}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default FeatureCard;