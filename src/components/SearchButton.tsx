import React from 'react';
import {IconButton} from 'react-native-paper';

interface SearchIcon {
  onPress?: () => void;
}

const SearchButton: React.FC<SearchIcon> = props => {
  return <IconButton icon="magnify" size={25} {...props} />;
};

export default SearchButton;
