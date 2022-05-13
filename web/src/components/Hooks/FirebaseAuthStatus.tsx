import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuthStatus = (): { loggedIn: Boolean } => {
  // Assume user is logged out
  const [loggedIn, setLoggedIn] = useState<Boolean>(false);

  useEffect(() => {
    // Auth listener to keep track of user signing in and out
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
    });
  }, []);

  return { loggedIn };
};
