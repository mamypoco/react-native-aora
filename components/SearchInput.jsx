import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { icons } from '../constants';
import { usePathname, router } from 'expo-router';

const SearchInput = ({ initialQeuery }) =>
  //    {
  //   title,
  //   value,
  //   placeholder,
  //   handleChangeText,
  //   otherStyles,
  //   ...props}
  {
    //   const [showPassword, setShowPassword] = useState(false);

    const pathname = usePathname();
    const [query, setQuery] = useState(initialQeuery || '');

    return (
      <View className="border-2 bg-black-100 border-black-500  focus:border-secondary rounded-2xl w-full h-16 px-4 items-center flex-row space-x-4">
        <TextInput
          className="flex-1 text-base mt-0.5 text-white font-pregular"
          value={query}
          placeholder="Search for a video topic"
          placeholderTextColor="#CDCDE0"
          onChangeText={(e) => setQuery(e)}
          //   secureTextEntry={title === 'Password' && !showPassword}
        />

        <TouchableOpacity
          onPress={() => {
            if (!query) {
              return Alert.alert(
                'Missing query',
                'Please input something to search results across database'
              );
            }
            if (pathname.startsWith('/search')) {
              router.setParams({ query });
            } else router.push(`/search/${query}`);
          }}
        >
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

export default SearchInput;
