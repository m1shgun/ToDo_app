import React from 'react';

function Sort({filter, mobile, onFilterChange, onAllDelete}) {

    const setLinkActive = (type) => {
        return `sort__link ${filter === type ? 'active' : ''}`
    };

    const handleFilterChange = (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            let filter = 'all';

            if (e.target.textContent !== 'Все') {
                filter = e.target.textContent === 'Сделать'
                    ? 'todo'
                    : 'done'
            }
            onFilterChange(filter);
        }
    };

    const handleAllDelete = () => {
        if (confirm('Вы уверены?')) {
            onAllDelete();
        }
    };

    return (
        <div className="sort">
            <div className="sort__links" onClick={handleFilterChange}>
                <a href="#" className={setLinkActive('all')}>Все</a>
                <a href="#" className={setLinkActive('todo')}>Сделать</a>
                <a href="#" className={setLinkActive('done')}>Выполнено</a>
            </div>
            <div className={`sort__delete-button ${mobile ? 'mobile' : ''}`} onClick={handleAllDelete}></div>
        </div>
    );
}

export default Sort;