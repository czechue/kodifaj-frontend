import { StylesConfig } from 'react-select';

export const formStyles: StylesConfig = {
  container: (styles) => {
    return {
      ...styles,
    };
  },

  control: (styles) => {
    return {
      ...styles,
      borderRadius: '0.125rem',
      minHeight: '2.5rem',
      border: '1px solid #e2e8f0',
      backgroundColor: '#EDF2F7',
    };
  },

  menu: (styles) => {
    return {
      ...styles,
      // backgroundColor: 'black',
      // color: 'white',
      border: '1px solid white',
      zIndex: 2,
    };
  },

  option: (styles) => {
    return {
      ...styles,
      // backgroundColor: 'black',
      // color: 'white',
      ':hover': {
        color: 'white',
        backgroundColor: 'black',
      },
    };
  },

  multiValue: (styles) => {
    return {
      ...styles,
      color: 'black',
      backgroundColor: '#FED7D7',
      // border: '1px solid white',
    };
  },

  multiValueLabel: (styles) => ({
    ...styles,
  }),

  multiValueRemove: (styles) => ({
    ...styles,
    ':hover': {
      color: 'white',
      cursor: 'pointer',
    },
  }),

  singleValue: (styles) => ({
    ...styles,
    color: 'white',
    ':hover': {
      color: 'white',
    },
  }),

  placeholder: (styles) => ({
    ...styles,
    fontSize: '0.75rem',
    color: '#4A5568',
    ':hover': {
      color: 'gray',
    },
  }),
  input: (styles) => ({
    ...styles,
    color: 'white',
    ':hover': {
      color: 'white',
    },
  }),
};
