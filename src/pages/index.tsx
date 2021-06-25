import React from 'react';

import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const [session] = useSession();

  return (
    <Main
      meta={(
        <Meta
          title="Map App"
          description="See what's happening to everyday people around the world."
        />
      )}
    >
      <div className="shadow-md px-4 py-4">
        {!session && (
          <>
            <p className="text-center text-xl">Create an account:</p>
            <div className="grid grid-cols-1 gap-2 px-24">
              <button
                type="button"
                className="button bg-transparent hover:bg-yellow-300 text-black font-semibold py-1 px-4 border border-black rounded"
              >
                Sign up with Google
              </button>
              <button
                type="button"
                className="button bg-transparent hover:bg-yellow-300 text-black font-semibold py-1 px-4 border border-black rounded"
              >
                Sign up with GitHub
              </button>
            </div>
            <p className="text-center text-xl">
              Already have an account?
              {' '}
              <span>
                {/* @ts-ignore */}
                <button type="button" onClick={signIn}>
                  Sign In
                </button>
              </span>
            </p>
          </>
        )}

        {session && (
          <>
            <p>
              Signed in as
              {session.user!.name}
            </p>
            {/* @ts-ignore */}
            <button type="button" onClick={signOut}>
              Sign Out
            </button>
          </>
        )}

        <p className="text-center text-sm">
          <Link href="/map">
            <a>DEV SKIP TO MAP</a>
          </Link>
        </p>
      </div>
    </Main>
  );
};

export default Index;
