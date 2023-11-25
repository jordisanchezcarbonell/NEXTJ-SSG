type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Categoria = {
  data: {
    id: number;
    attributes: {
      categoria: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type Especificaciones = {
  type: string;
  caliber: string;
  weight: string;
  length: string;
  barrelLength: string;
  capacity: string;
  fireModes: string;
};

type Imagen = {
  id: number;
  attributes: {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
      small?: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
      };
      thumbnail?: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
};

type Arma = {
  id: number;
  attributes: {
    Titulo: string;
    especificaciones: Especificaciones;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    imagen: {
      data: Imagen[];
    };
    categoria: {
      data: {
        id: number;
        attributes: {
          categoria: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      };
    };
  };
};

type DatosArmas = {
  data: Arma[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type CategoriaData = {
  id: number;
  attributes: {
    categoria: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

type CategoriaResponse = {
  data: CategoriaData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type FormatoImagen = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

type ImagenData = {
  id: number;
  attributes: {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
      small?: FormatoImagen;
      thumbnail?: FormatoImagen;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
};

type CategoriaData = {
  id: number;
  attributes: {
    categoria: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

type FormatoImagen = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

type ImagenData = {
  id: number;
  attributes: {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
      thumbnail: FormatoImagen;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
};

type CategoriaData = {
  id: number;
  attributes: {
    categoria: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

type ArmaAttributes = {
  Titulo: string;
  especificaciones: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imagen: {
    data: ImagenData[];
  };
  categoria: {
    data: CategoriaData;
  };
};

type ArmaData = {
  id: number;
  attributes: ArmaAttributes;
};

type ArmaResponse = {
  data: ArmaData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
