declare module '~/amplify/data/resource' {
  export type Schema = {
    Todo: {
      type: {
        content: string;
      };
    };
  };
}

declare module '../amplify_outputs.json' {
  const value: any;
  export default value;
}
