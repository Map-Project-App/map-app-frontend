import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main
    meta={(
      <Meta
        title="Map App"
        description="See what's happening to everyday people around the world."
      />
    )}
  >
    <div className="shadow-md px-4 py-4">
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
          <a>Sign in</a>
        </span>
      </p>
    </div>
  </Main>
);

export default Index;
