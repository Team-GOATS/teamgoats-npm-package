import simpleToggle from '../simpleToggle'

export default {
    component: simpleToggle,
    tags: ['autodocs'],
    argTypes: {
        size: {
          control: { type: 'select' },
          options: ['small', 'medium', 'large'],
        },
      },
  };

  export const Primary = {
    args: {
      primary: true,

    },
  };