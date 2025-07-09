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

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadAsyncRessources.fulfilled, (state, action) => {
      state.images = action.payload.images
      state.meme = action.payload.memes
    });
  },
});

export const REST_URL='http://localhost:5679';

export const loadAsyncRessources = createAsyncThunk('ressources/load', async () => {
  const prImages = fetch(`${REST_URL}/images`);
  const prMemes = fetch(`${REST_URL}/memes`);
  const prAll = await Promise.all([prImages, prMemes]);
  const images = await prAll[0].json();
  const memes = await prAll[1].json();

  return {images: images, memes: memes};
});

const ressourcesReducer = ressources.reducer;
export default ressourcesReducer;