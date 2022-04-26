import React from 'react';

interface SessionCardProps {
  id: number;
  title: string;
  body: string;
}

const SessionCard: React.FC<SessionCardProps> = (props) => {
  const { id, title, body } = props;
  return (
    <div
      key={id}
      className="block p-6 bg-amber-300 rounded-lg border border-gray-200 shadow-md"
    >
      <a href={`/sessions/${id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
      </a>
      <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4">
          <img alt={title} src="https://i.imgur.com/9sALwYe.jpeg" />
        </div>
      </div>
      <p className="mb-3 font-normal text-violet-600 overflow-hidden text-ellipsis whitespace-nowrap w-content">
        {body}
      </p>
      <a
        href={`/sessions/${id}`}
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to calendar
      </a>
    </div>
  );
};

export default SessionCard;
