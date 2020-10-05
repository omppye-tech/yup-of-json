const useProperty = (baseSchema: string[], property?: string) =>
  property ? [property + ":", ...baseSchema] : baseSchema;

export const getArraySchema = (property?: string) => {
  const baseSchema = useProperty(["yup.array().of("], property);
  const operations = {
    push: (schema: string) => baseSchema.push(schema),
    stringify: () => baseSchema.join("") + "),",
  };

  return operations;
};

export const getBooleanSchema = (property?: string) => {
  const baseSchema = useProperty(["yup.boolean().nullable(),"], property);
  const operations = {
    push: (schema: string) => schema,
    stringify: () => baseSchema.join(""),
  };

  return operations;
};

export const getNullSchema = (property?: string) => {
  const baseSchema = useProperty(["yup.mixed().nullable(),"], property);
  const operations = {
    push: (schema: string) => schema,
    stringify: () => baseSchema.join(""),
  };

  return operations;
};

export const getNumberSchema = (property?: string) => {
  const baseSchema = useProperty(["yup.number().required(),"], property);
  const operations = {
    push: (schema: string) => schema,
    stringify: () => baseSchema.join(""),
  };

  return operations;
};

export const getObjectSchema = (property?: string) => {
  const baseSchema = useProperty(["yup.object().shape({"], property);
  const operations = {
    push: (schema: string) => baseSchema.push(schema),
    stringify: () => baseSchema.join("") + "}).noUnknown().required(),",
  };

  return operations;
};

export const getStringSchema = (value: unknown, property?: string) => {
  const baseSchema = useProperty(["yup.string()"], property);
  if (value) {
    baseSchema.push(".required()");
  }

  const operations = {
    push: (schema: string) => schema,
    stringify: () => baseSchema.join("") + ",",
  };

  return operations;
};
