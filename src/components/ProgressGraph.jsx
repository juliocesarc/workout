import { View, Text, StyleSheet } from 'react-native';
import { LineGraph } from 'react-native-graph';

const idToDate = (id) => {
  const timestamp = parseInt(id.substr(0, 8), 16) * 1000;
  return new Date(timestamp);
};

// const idToDate = (id) => {
//   const timestamp = parseInt(id.substr(0, 8), 16) * 1000;
//   return timestamp;
// };

const ProgressGraph = ({ sets = [] }) => {
  // const points = sets.map((set) => ({
  //   date: idToDate(set._id),
  //   value: set.reps * set.weight,
  // }));

  const points = [
    {date: new Date('2024-01-01'), value: 960}, 
    {date: new Date('2024-01-02'), value: 1000}, 
    {date: new Date('2024-01-03'), value: 770}, 
    {date: new Date('2024-01-04'), value: 1200}, 
    {date: new Date('2024-01-05'), value: 96}
  ]

  return (
    <View style={styles.container}>
      <Text>Progress Graph</Text>

      <LineGraph
        points={points}
        animated={true}
        color="#4484B2"
        enablePanGesture={true}
        style={styles.graph}
        // range={{
        //   x: {
        //     min: minDate,
        //     max: maxDate
        //   },
        //   y: {
        //     min: 0,
        //     max: 1200
        //   }
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  graph: {
    width: '100%',
    height: 200,
  },
});

export default ProgressGraph;
