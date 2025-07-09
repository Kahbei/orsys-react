import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme'

interface IRessourcesState {
  meme: Array<MemeInterface>;
  images: Array<ImageInterface>
}

const initialState: IRessourcesState = {
  meme: [], 
  images: []
};

const ressources= createSlice({
  name: 'ressources',
  initialState,
  reducers: {},
});

export const REST_URL='http://localhost:5679';

export const loadAsyncRessources = createAsyncThunk('ressources/load', async () => {
  const primages = await fetch(`${REST_URL}/images`);
  const result = primages.json();

  return result;
});

export default ressources.reducer;