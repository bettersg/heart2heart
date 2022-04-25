/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import SessionCard from '../Cards/SessionCard';

const meetings = [
  {
    id: 1,
    title: 'Topic 1',
    body: 'Join here to find out more',
  },
  {
    id: 2,
    title: 'Topic 2',
    body: 'Join here to find out more',
  },
  {
    id: 3,
    title: 'Topic 3',
    body: 'Join here to find out more',
  },
  {
    id: 4,
    title: 'Topic 4',
    body: 'Join here to find out more',
  },
  {
    id: 5,
    title: 'Topic 5',
    body: 'Join here to find out more',
  },
  {
    id: 6,
    title: 'Topic 6',
    body: 'Join here to find out more',
  },
  {
    id: 7,
    title: 'Topic 7',
    body: 'Join here to find out more',
  },
  {
    id: 8,
    title: 'Topic 8',
    body: 'Join here to find out more',
  },
];

const SessionsPage: React.FC = () => (
  <>
    <div className="focus:outline-none py-8 w-full">
      {meetings.map((meeting, idx) => {
        if (idx % 2 !== 0) return null;
        return (
          <div className="lg:flex items-center justify-center w-full">
            <div className="p-4 w-full">
              <SessionCard
                id={meeting.id}
                title={meeting.title}
                body={meeting.body}
              />
            </div>
            {meetings[idx + 1] ? (
              <div className="p-4 w-full">
                <SessionCard
                  id={meetings[idx + 1].id}
                  title={meetings[idx + 1].title}
                  body={meetings[idx + 1].body}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  </>
);

export default SessionsPage;
