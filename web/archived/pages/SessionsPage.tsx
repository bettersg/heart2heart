/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import SessionCard from '../components/Cards/SessionCard';

const sessions = [
  {
    id: 1,
    title: 'Topic 1',
    body: 'Join here to find out more',
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/1',
  },
  {
    id: 2,
    title: 'Topic 2',
    body: 'Join here to find out more',
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/2',
  },
  {
    id: 3,
    title: 'Topic 3',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec congue ipsum. Donec varius pellentesque justo imperdiet viverra. Nullam ultricies quam ut hendrerit finibus. Nulla facilisi. Etiam at lectus nisi. Sed in odio quis sapien auctor faucibus. Maecenas euismod hendrerit enim nec varius. Fusce porta blandit erat sed cursus. Vestibulum imperdiet nibh est, sit amet ullamcorper nibh vulputate ac. Donec ut turpis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet neque id orci interdum scelerisque eu et diam. Quisque non tortor eros. Aliquam erat volutpat. Donec at ipsum non nisl gravida imperdiet. Morbi vitae molestie orci, nec tincidunt urna.

    Pellentesque sit amet pulvinar lectus. Ut id imperdiet sem. Quisque auctor semper lectus. Donec sapien felis, ultricies quis pulvinar posuere, tristique a mi. Pellentesque facilisis eget ipsum ac congue. Morbi aliquam in ex eget tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
    Fusce viverra interdum orci eu iaculis. Integer sit amet bibendum dui, ac cursus urna. Nunc ornare congue gravida. Cras viverra lectus eget gravida semper. Phasellus tristique, velit et condimentum iaculis, tellus elit euismod est, vitae sollicitudin quam dui at dolor. Aenean scelerisque maximus lectus sit amet euismod. Nulla facilisi. Vivamus sodales orci ante, sit amet faucibus nisi porta eget. Phasellus tincidunt posuere sapien ut viverra. Morbi risus leo, sodales in felis non, efficitur porttitor sem. Suspendisse posuere risus elit. Suspendisse placerat, tellus eu accumsan sollicitudin, nibh ipsum euismod metus, quis laoreet ligula risus quis libero. Praesent convallis pharetra elit, vel ullamcorper arcu scelerisque in. Sed finibus lorem mi, ac auctor felis scelerisque vel. Fusce turpis mauris, semper non gravida a, sollicitudin vel enim.
    
    Integer nibh dolor, luctus sit amet dignissim in, pretium non odio. Praesent semper rhoncus turpis, eu porttitor orci tristique ac. Curabitur in quam sagittis, blandit enim vitae, lobortis sapien. Nullam aliquet metus vitae felis vehicula tincidunt. Mauris fringilla, augue vitae maximus dignissim, turpis elit placerat nunc, a dapibus nisi massa tincidunt nulla. Nullam sit amet lacus sem. Phasellus sodales velit nunc, quis dictum nisl semper eget. Nam lacinia scelerisque sem blandit posuere. Sed sed sem quis nunc convallis cursus eget sed justo. Ut lectus ante, ultrices et fringilla sed, venenatis eu massa. Mauris in nunc non lacus pellentesque gravida. Ut egestas malesuada ligula vitae condimentum. Duis nisl libero, vehicula vitae augue non, hendrerit posuere libero.
    
    Nunc maximus libero nec enim hendrerit tincidunt. Sed lobortis pulvinar semper. Donec quis molestie lectus. Maecenas eget euismod tortor, non varius quam. Vivamus sit amet condimentum lorem, nec porta orci. Curabitur sed mollis magna. Nam ac lorem ac nibh viverra vestibulum. Integer congue est eget risus interdum sodales. Quisque porta sem in eros viverra, at euismod ipsum hendrerit. Morbi pretium dolor erat. Aliquam erat volutpat. Sed varius ipsum luctus velit rhoncus, at sagittis nunc bibendum. Duis efficitur egestas velit et maximus. Pellentesque augue lectus, porta nec feugiat eu, accumsan at lorem. Mauris id sagittis sapien, eget maximus tortor. Quisque nec dignissim sem, quis consequat diam.`,
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/3',
  },
  {
    id: 4,
    title: 'Topic 4',
    body: 'Join here to find out more',
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/4',
  },
  {
    id: 5,
    title: 'Topic 5',
    body: 'Join here to find out more',
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/5',
  },
  {
    id: 6,
    title: 'Topic 6',
    body: 'Join here to find out more',
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/6',
  },
  {
    id: 7,
    title: 'Topic 7',
    body: 'Join here to find out more',
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/7',
  },
  {
    id: 8,
    title: 'Topic 8',
    body: 'Join here to find out more',
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/8',
  },
  {
    id: 9,
    title: 'Topic 9',
    body: 'Join here to find out more',
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/9',
  },
  {
    id: 10,
    title: 'Topic 10',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec congue ipsum. Donec varius pellentesque justo imperdiet viverra. Nullam ultricies quam ut hendrerit finibus. Nulla facilisi. Etiam at lectus nisi. Sed in odio quis sapien auctor faucibus. Maecenas euismod hendrerit enim nec varius. Fusce porta blandit erat sed cursus. Vestibulum imperdiet nibh est, sit amet ullamcorper nibh vulputate ac. Donec ut turpis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet neque id orci interdum scelerisque eu et diam. Quisque non tortor eros. Aliquam erat volutpat. Donec at ipsum non nisl gravida imperdiet. Morbi vitae molestie orci, nec tincidunt urna.

    Pellentesque sit amet pulvinar lectus. Ut id imperdiet sem. Quisque auctor semper lectus. Donec sapien felis, ultricies quis pulvinar posuere, tristique a mi. Pellentesque facilisis eget ipsum ac congue. Morbi aliquam in ex eget tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
    Fusce viverra interdum orci eu iaculis. Integer sit amet bibendum dui, ac cursus urna. Nunc ornare congue gravida. Cras viverra lectus eget gravida semper. Phasellus tristique, velit et condimentum iaculis, tellus elit euismod est, vitae sollicitudin quam dui at dolor. Aenean scelerisque maximus lectus sit amet euismod. Nulla facilisi. Vivamus sodales orci ante, sit amet faucibus nisi porta eget. Phasellus tincidunt posuere sapien ut viverra. Morbi risus leo, sodales in felis non, efficitur porttitor sem. Suspendisse posuere risus elit. Suspendisse placerat, tellus eu accumsan sollicitudin, nibh ipsum euismod metus, quis laoreet ligula risus quis libero. Praesent convallis pharetra elit, vel ullamcorper arcu scelerisque in. Sed finibus lorem mi, ac auctor felis scelerisque vel. Fusce turpis mauris, semper non gravida a, sollicitudin vel enim.
    
    Integer nibh dolor, luctus sit amet dignissim in, pretium non odio. Praesent semper rhoncus turpis, eu porttitor orci tristique ac. Curabitur in quam sagittis, blandit enim vitae, lobortis sapien. Nullam aliquet metus vitae felis vehicula tincidunt. Mauris fringilla, augue vitae maximus dignissim, turpis elit placerat nunc, a dapibus nisi massa tincidunt nulla. Nullam sit amet lacus sem. Phasellus sodales velit nunc, quis dictum nisl semper eget. Nam lacinia scelerisque sem blandit posuere. Sed sed sem quis nunc convallis cursus eget sed justo. Ut lectus ante, ultrices et fringilla sed, venenatis eu massa. Mauris in nunc non lacus pellentesque gravida. Ut egestas malesuada ligula vitae condimentum. Duis nisl libero, vehicula vitae augue non, hendrerit posuere libero.
    
    Nunc maximus libero nec enim hendrerit tincidunt. Sed lobortis pulvinar semper. Donec quis molestie lectus. Maecenas eget euismod tortor, non varius quam. Vivamus sit amet condimentum lorem, nec porta orci. Curabitur sed mollis magna. Nam ac lorem ac nibh viverra vestibulum. Integer congue est eget risus interdum sodales. Quisque porta sem in eros viverra, at euismod ipsum hendrerit. Morbi pretium dolor erat. Aliquam erat volutpat. Sed varius ipsum luctus velit rhoncus, at sagittis nunc bibendum. Duis efficitur egestas velit et maximus. Pellentesque augue lectus, porta nec feugiat eu, accumsan at lorem. Mauris id sagittis sapien, eget maximus tortor. Quisque nec dignissim sem, quis consequat diam.`,
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/10',
  },
  {
    id: 11,
    title: 'Topic 11',
    body: 'Join here to find out more',
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/11',
  },
  {
    id: 12,
    title: 'Topic 12',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec congue ipsum. Donec varius pellentesque justo imperdiet viverra. Nullam ultricies quam ut hendrerit finibus. Nulla facilisi. Etiam at lectus nisi. Sed in odio quis sapien auctor faucibus. Maecenas euismod hendrerit enim nec varius. Fusce porta blandit erat sed cursus. Vestibulum imperdiet nibh est, sit amet ullamcorper nibh vulputate ac. Donec ut turpis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sit amet neque id orci interdum scelerisque eu et diam. Quisque non tortor eros. Aliquam erat volutpat. Donec at ipsum non nisl gravida imperdiet. Morbi vitae molestie orci, nec tincidunt urna.

    Pellentesque sit amet pulvinar lectus. Ut id imperdiet sem. Quisque auctor semper lectus. Donec sapien felis, ultricies quis pulvinar posuere, tristique a mi. Pellentesque facilisis eget ipsum ac congue. Morbi aliquam in ex eget tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
    Fusce viverra interdum orci eu iaculis. Integer sit amet bibendum dui, ac cursus urna. Nunc ornare congue gravida. Cras viverra lectus eget gravida semper. Phasellus tristique, velit et condimentum iaculis, tellus elit euismod est, vitae sollicitudin quam dui at dolor. Aenean scelerisque maximus lectus sit amet euismod. Nulla facilisi. Vivamus sodales orci ante, sit amet faucibus nisi porta eget. Phasellus tincidunt posuere sapien ut viverra. Morbi risus leo, sodales in felis non, efficitur porttitor sem. Suspendisse posuere risus elit. Suspendisse placerat, tellus eu accumsan sollicitudin, nibh ipsum euismod metus, quis laoreet ligula risus quis libero. Praesent convallis pharetra elit, vel ullamcorper arcu scelerisque in. Sed finibus lorem mi, ac auctor felis scelerisque vel. Fusce turpis mauris, semper non gravida a, sollicitudin vel enim.
    
    Integer nibh dolor, luctus sit amet dignissim in, pretium non odio. Praesent semper rhoncus turpis, eu porttitor orci tristique ac. Curabitur in quam sagittis, blandit enim vitae, lobortis sapien. Nullam aliquet metus vitae felis vehicula tincidunt. Mauris fringilla, augue vitae maximus dignissim, turpis elit placerat nunc, a dapibus nisi massa tincidunt nulla. Nullam sit amet lacus sem. Phasellus sodales velit nunc, quis dictum nisl semper eget. Nam lacinia scelerisque sem blandit posuere. Sed sed sem quis nunc convallis cursus eget sed justo. Ut lectus ante, ultrices et fringilla sed, venenatis eu massa. Mauris in nunc non lacus pellentesque gravida. Ut egestas malesuada ligula vitae condimentum. Duis nisl libero, vehicula vitae augue non, hendrerit posuere libero.
    
    Nunc maximus libero nec enim hendrerit tincidunt. Sed lobortis pulvinar semper. Donec quis molestie lectus. Maecenas eget euismod tortor, non varius quam. Vivamus sit amet condimentum lorem, nec porta orci. Curabitur sed mollis magna. Nam ac lorem ac nibh viverra vestibulum. Integer congue est eget risus interdum sodales. Quisque porta sem in eros viverra, at euismod ipsum hendrerit. Morbi pretium dolor erat. Aliquam erat volutpat. Sed varius ipsum luctus velit rhoncus, at sagittis nunc bibendum. Duis efficitur egestas velit et maximus. Pellentesque augue lectus, porta nec feugiat eu, accumsan at lorem. Mauris id sagittis sapien, eget maximus tortor. Quisque nec dignissim sem, quis consequat diam.`,
    actionLabel: 'Add to calendar',
    actionUrl: '/sessions/12',
  },
];

const SessionsPage: React.FC = () => (
  <div className="py-8 h-full w-full">
    {sessions.map((session, idx) => {
      if (idx % 2 !== 0) return null;
      return (
        <div className="flex flex-wrap">
          <div className="p-4 w-1/2">
            <SessionCard
              id={session.id}
              title={session.title}
              body={session.body}
              actionLabel={session.actionLabel}
              actionUrl={session.actionUrl}
            />
          </div>
          {sessions[idx + 1] ? (
            <div className="p-4 w-1/2">
              <SessionCard
                id={sessions[idx + 1].id}
                title={sessions[idx + 1].title}
                body={sessions[idx + 1].body}
                actionLabel={session.actionLabel}
                actionUrl={session.actionUrl}
              />
            </div>
          ) : null}
        </div>
      );
    })}
  </div>
);

export default SessionsPage;
