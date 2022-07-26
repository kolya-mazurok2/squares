import { getAll } from '.';

describe('Fetches the board config', () => {
  const DUMMY_DATA = [
    {
      name: 'Easy',
      field: 5,
    },
  ];

  test('Successfully loads configs', async () => {
    global.fetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve(DUMMY_DATA),
        ok: true,
      });
    };

    const response = await getAll();

    expect(response.data).toEqual(DUMMY_DATA);
    expect(response.success).toBe(true);
  });

  test('Failure to load configs', async () => {
    global.fetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve([]),
        ok: false,
      });
    };

    const response = await getAll();

    expect(response.data).toEqual([]);
    expect(response.success).toBe(false);
  });
});
