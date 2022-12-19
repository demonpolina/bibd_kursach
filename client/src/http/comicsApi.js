import { $authHost, $host } from '.';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', {
    name: type,
  });

  return data;
};

export const fetchType = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createGenre = async (genre) => {
  const { data } = await $authHost.post('api/branch', {
    name: genre,
  });

  return data;
};

export const fetchGenre = async () => {
  const { data } = await $host.get('api/branch');
  return data;
};

const config = {
  headers: { 'content-type': 'multipart/form-data' },
};

export const createComics = async (comics) => {
  const { data } = await $authHost.post('api/product', comics, config);

  return data;
};

export const fetchComics = async (typeId, page, limit = 5, name) => {
  const { data } = await $host.get('api/product', {
    params: {
      typeId,
      page,
      limit,
      name,
    },
  });
  return data;
};

export const fetchOneComics = async (id) => {
  const { data } = await $host.get('api/product/' + id);
  return data;
};

export const deleteComicsInShop = async (id) => {
  const { data } = await $authHost.delete('api/product', {
    params: {
      productId: id,
    },
  });
  console.log(data);
  return data;
};
