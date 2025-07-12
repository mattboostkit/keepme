import { createQueryStore } from '@sanity/react-loader';
import { client } from './sanity';

const { useLiveMode, useQuery } = createQueryStore({ client, ssr: false });

export { useLiveMode, useQuery }; 