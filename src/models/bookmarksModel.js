const db = require('../config/firebaseConfig');

const BookmarksModel = {
  addBookmark: async (bookmarkData) => {
    const bookmarkRef = await db.collection('Bookmarks').add(bookmarkData);
    return bookmarkRef.id;
  },

  getBookmarksByUserId: async (userId) => {
    const snapshot = await db.collection('Bookmarks').where('UserId', '==', userId).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  deleteBookmark: async (id) => {
    await db.collection('Bookmarks').doc(id).delete();
  }
};

module.exports = BookmarksModel;
