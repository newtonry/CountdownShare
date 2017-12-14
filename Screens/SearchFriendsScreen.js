import _ from 'lodash';
import React, { PureComponent } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ScreenNames,
  resetNavigationToScreen,
} from '../Navigation';
import CommonStyles from '../CommonStyles';
import Metrics from '../Metrics';
import Colors from '../Colors';
import Button from '../Components/Button';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHTEST_GREY,
  },
  friendRow: {
    padding: Metrics.padding,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHTER_GREY,
    height: 75,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  friendRowSelected: {
    borderBottomWidth: 1,
    height: 75,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  friendRowText: {
    color: Colors.DARKEST_GREY,
    fontSize: 18,
    fontWeight: '500',
  },
  friendRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileThumbnail: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colors.LIGHTER_GREY,
    marginRight: Metrics.margin,
  },
});

const MOCK_FRIEND_DATA = [
  { name: 'Durack Kong', id: 1, image: '' },
  { name: 'Carrie Wirer', id: 2, image: '' },
  { name: 'Timo Otskater', id: 3, image: '' },
  { name: 'Blunte Chow', id: 4, image: '' },
];

class SearchFriendsScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedFriends: new Set([]),
    };
  }

    onPressCreate = () => {
      const { navigation } = this.props;
      resetNavigationToScreen(ScreenNames.CountdownTimerScreen, navigation);
    };

    selectOrUnselectUser = (user) => {
      const { selectedFriends } = this.state;
      const newSelectedFriends = _.clone(selectedFriends);

      if (selectedFriends.has(user.id)) {
        newSelectedFriends.delete(user.id);
      } else {
        newSelectedFriends.add(user.id);
      }

      this.setState({ selectedFriends: newSelectedFriends });
    };

    renderFriendRow = (user) => {
      // TODO this is dumb.
      const friendRowStyle = [styles.friendRow, { backgroundColor: user.isSelected ? Colors.MUSTARD_YELLOW : Colors.LIGHTEST_GREY }];

      return (
        <TouchableOpacity
          style={friendRowStyle}
          onPress={() => this.selectOrUnselectUser(user)}
        >
          <View style={styles.friendRowLeft}>
            <Image
              source={require('../Images/profile-image.png')}
              style={styles.profileThumbnail}
            />
            <Text style={styles.friendRowText}>{user.name}</Text>
          </View>
          <Text>{user.isSelected ? '\u2622' : null}</Text>
        </TouchableOpacity>
      );
    };

    getUsers = () => {
      // TODO should this go somewhere else?
      const { searchText, selectedFriends } = this.state;
      return _.compact(_.map(MOCK_FRIEND_DATA, (user) => {
        if (!user.name.includes(searchText)) return;
        return {
          ...user,
          isSelected: selectedFriends.has(user.id),
        };
      }));
    };


    render() {
      const users = this.getUsers();
      return (
        <View style={styles.container}>
          <TextInput
            onChangeText={searchText => this.setState({ searchText })}
            placeholder="Search for user"
            style={CommonStyles.inputStyle}
          />
          <FlatList
            data={users}
            keyExtractor={item => `user-row-${item.id}`}
            renderItem={rowData => this.renderFriendRow(rowData.item)}
          />
          <Button
            title="Send"
            onPress={this.onPressCreate}
          />
        </View>
      );
    }
}

export default SearchFriendsScreen;
