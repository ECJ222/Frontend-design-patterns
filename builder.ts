// Create complex objects with different variations.
// The flexibility to modify the object representation without affecting Self.

class DataTable {
  data: Array<Record<string, any>>;

  constructor(data: Array<Record<string, any>>) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
}

// Dummy API class.
class Api {
  getFood(network: boolean): Promise<Record<string, any>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!network) return reject('no network');

        return resolve({
          data: [
            {
              foodItem: 'Rice',
              foodType: 'Carbohydrate',
              TimeOfEntry: '2 months in',
            },
            {
              foodItem: 'Beans',
              foodType: 'Protein',
              TimeOfEntry: '1 year in',
            },
          ],
        });
      });
    });
  }
}

async function getResponse() {
  const response = new Api();
  let headers;
  let data = [] as Array<Record<string, any>>;
  const food = await response.getFood(true);

  headers = Object.keys(food.data[0]);
  food.data.forEach((foodData: Record<string, any>) => {
    data.push(Object.values(foodData));
  });

  return { headers, data };
}

function BuilderPattern(this: any) {
  this.addHeader = function (headers: Array<any>) {
    this.headers = headers || [];
    return this;
  };

  this.addData = function (data: Array<any>) {
    this.data = data || [];
    return this;
  };

  this.generateFormattedData = function (
    headers: Array<any>,
    data: Array<any>
  ) {
    const result = [] as Array<Record<string, any>>;

    data.forEach((innerType: Array<any>) => {
      const variations = {} as Record<string, any>;

      innerType.forEach(
        (name: string, index: number) => (variations[headers[index]] = name)
      );

      result.push(variations);
    });

    return result;
  };

  this.build = function () {
    return new DataTable(this.generateFormattedData(this.headers, this.data));
  };
}

// Example response
getResponse().then((response) => {
  const { headers, data } = response;
  const builder = new (BuilderPattern as any)().addHeader(headers).addData(data).build();

  console.log(builder.getData());
});

export const Builder = new (BuilderPattern as any)();
