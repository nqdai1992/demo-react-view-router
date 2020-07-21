import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from '../containers/Articles/articleSlice'

export default configureStore({
	reducer: {
		articles: articlesReducer
	}
})