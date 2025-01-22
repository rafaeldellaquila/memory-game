import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useApi } from '../useApi';

describe('useApi', () => {
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  beforeEach(() => {
    mockFetch.mockReset();
  });

  it('successfully makes GET request', async () => {
    const mockData = { scores: [] };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const { get, isLoading } = useApi();
    const result = await get('scores');


    expect(result).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith('http://localhost:3000/scores');
    expect(isLoading.value).toBe(false);
  });

  it('successfully makes POST request', async () => {
    const mockData = { name: 'Test', rounds: 10 };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const { post, isLoading } = useApi();
    const result = await post('scores', mockData);

    expect(result).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith('http://localhost:3000/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mockData),
    });
    expect(isLoading.value).toBe(false);
  });

  it('handles GET request error', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    const { get, error } = useApi();

    await expect(get('scores')).rejects.toThrow('Network error');
    expect(error.value).toBeInstanceOf(Error);
  });

  it('handles POST request error', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    const { post, error } = useApi();

    await expect(post('scores', {})).rejects.toThrow('Network error');
    expect(error.value).toBeInstanceOf(Error);
  });
});