import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Grid } from "@mui/material";
import { BOOKS } from "../../../utils/constants";
import BookCard from "../../molecules/BookCard";

type Book = (typeof BOOKS)[0];
type LibraryData = {
  reading: Book[];
  finished: Book[];
};

const STORAGE_KEY = "libraryData";

const LibraryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [books, setBooks] = useState<LibraryData>({
    reading: [...BOOKS],
    finished: [],
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedBooks = localStorage.getItem(STORAGE_KEY);
    if (savedBooks) {
      try {
        setBooks(JSON.parse(savedBooks));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    }
  }, [books, isReady]);

  const switchTab = (_: React.SyntheticEvent, newTab: number) => {
    setActiveTab(newTab);
  };

  const moveBook = (bookId: number) => {
    setBooks((prev) => {
      const from = activeTab === 0 ? "reading" : "finished";
      const to = activeTab === 0 ? "finished" : "reading";

      const bookToMove = prev[from].find((book) => book.id === bookId);
      if (!bookToMove) return prev;

      return {
        ...prev,
        [from]: prev[from].filter((book) => book.id !== bookId),
        [to]: [...prev[to], bookToMove],
      };
    });
  };

  if (!isReady) return <div>Loading your books...</div>;

  const showingBooks = activeTab === 0 ? books.reading : books.finished;

  return (
    <Box>
      <Tabs value={activeTab} onChange={switchTab}>
        <Tab label="Currently reading" />
        <Tab label="Finished" />
      </Tabs>
      <Grid container spacing={2}>
        {showingBooks.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <BookCard
              {...book}
              isFinished={activeTab === 1}
              onToggle={moveBook}
              clockIcon={
                <img src="/assets/icons/clock.svg" alt="Reading time" />
              }
              userIcon={
                <img src="/assets/icons/user.svg" alt="Readers count" />
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LibraryTabs;
