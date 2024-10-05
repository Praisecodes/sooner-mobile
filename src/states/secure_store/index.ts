import * as SecureStore from 'expo-secure-store';

const saveSecureData = async (key: string, data: string): Promise<boolean> => {
  try {
    await SecureStore.setItemAsync(key, data);
    return true;
  } catch (error) {
    return false
  }
}

const getSecureData = async (key: string): Promise<string | null> => {
  try {
    let result = await SecureStore.getItemAsync(key);
    return result;
  } catch (error) {
    return null;
  }
}

const removeSecureData = async (key: string): Promise<boolean> => {
  try {
    await SecureStore.deleteItemAsync(key);
    return true;
  } catch (error) {
    return false;
  }
}

export {
  saveSecureData,
  getSecureData,
  removeSecureData
}
