import React from 'react';

const SortBar = ({ onSort }) => {
  const handleSort = (criteria) => {
    // Call the onSort function with the selected sorting criteria
    onSort(criteria);
  };
