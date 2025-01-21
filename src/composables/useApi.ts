import { ref } from 'vue';

export function useApi() {
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const get = async (endpoint: string) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(`http://localhost:3000/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Erro na requisição GET: ${response.statusText}`);
      }
      return await response.json();
    } catch (err) {
      error.value = err as Error;
      console.error(error.value);
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const post = async (endpoint: string, body: Record<string, unknown>) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(`http://localhost:3000/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`Erro na requisição POST: ${response.statusText}`);
      }
      return await response.json();
    } catch (err) {
      error.value = err as Error;
      console.error(error.value);
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    get,
    post,
    isLoading,
    error,
  };
}
