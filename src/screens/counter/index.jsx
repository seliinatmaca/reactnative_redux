import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/customButton';
import {
  incrementCount,
  decrementCount,
  resetCount,
} from '../../store/actions/counterActions';

const Counter = () => {
  //const count = useSelector(state.counter.count);
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#A888B5'}}>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 150,
              height: 150,
              borderRadius: 200,
              backgroundColor: '#F72C5B',
            }}>
            <Text style={{fontSize: 50, fontWeight: '600'}}>{count}</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', padding: 10}}>
          <CustomButton
            onPress={() => dispatch(incrementCount())}
            title="INCREMENT"
            color="#8174A0"
          />
          <CustomButton
            onPress={() => dispatch(decrementCount())}
            title="DECREMENT"
            color="#FF748B"
          />
          <CustomButton
            onPress={() => dispatch(resetCount(0))}
            title="RESET"
            color="#A7D477"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Counter;
