// TaskCard.js
import React from 'react';

function TaskCard({ task }) {
  return (
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5 p-2">
      <div className="dark:bg-gray-600 dark:text-white border rounded-xl p-4 h-56">

        <h1 className="text-xl font-bold mb-2 truncate">{task.title}</h1>
        
        <p className="text-sm overflow-auto max-h-24">{task.description}</p>
        <p className=''>{new Date(task.date).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default TaskCard;
