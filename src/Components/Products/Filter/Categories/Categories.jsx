import React from 'react';
import './Categories.module.scss';

const Categories = ({ isOpen, onClose, children }) => {
    return (
        <div className={`categories-panel ${isOpen ? 'open' : ''}`}>
            <div className="panel-content">
                {children}
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default Categories;