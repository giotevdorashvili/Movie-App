import React from 'react';
import {StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {PaperTheme} from '../../theme/theme';
import SearchButton from '../../components/SearchButton';

const renderSearchIcon = () => {
  return <SearchButton />;
};

const SearchInput = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}) => {
  return (
    <Searchbar
      placeholder=""
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.searchInput}
      inputStyle={styles.inputStyle}
      right={renderSearchIcon}
      icon={() => null}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderRadius: 10,
    backgroundColor: PaperTheme.colors.greyOpacity,
    height: 45,
  },
  inputStyle: {
    paddingBottom: 10,
    marginLeft: -30,
    color: PaperTheme.colors.onSurface,
  },
});

export default SearchInput;
