/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

const FormAction = ({
  handleSubmit,
  type = 'Button',
  text,
}) => (
  <>
    {
      type === 'Button'
        ? (
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10"
            onSubmit={handleSubmit}
          >
            {text}
          </button>
        )
        : <></>
    }
  </>
);

export default FormAction;
