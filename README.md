# of JSON

Convert JSON to a [`yup`](https://github.com/jquense/yup) schema

- [Try it now!](https://yup-of-json.weslenng.dev/)

## Usage

```typescript
import parse from "yup-of-json";

const result = parse(jsonSchema);
```

## Example

- JSON Schema

```json
{
  "name": "Killua Zoldyck",
  "age": 14,
  "address": {
    "raw": "Kukuroo Mountain"
  },
  "tags": ["cute"]
}
```

- Result

```typescript
yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
    address: yup
      .object()
      .shape({ raw: yup.string().required() })
      .noUnknown()
      .required(),
    tags: yup.array().of(yup.string().required()),
  })
  .noUnknown()
  .required();
```

## License

This project is distributed under the [MIT license](LICENSE)
